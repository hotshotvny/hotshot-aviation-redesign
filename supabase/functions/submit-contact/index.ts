import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });

async function hash(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const SPAM_PATTERNS = [
  /\bseo\s+services\b/i,
  /\bcrypto(currency)?\s+(invest|trad)/i,
  /\bviagra\b/i,
  /\bcasino\b/i,
  /\bbacklinks?\b/i,
  /\bguest\s+post\b/i,
  /\bloan\s+offer\b/i,
  /\b(bitcoin|btc)\s+(wallet|profit)/i,
];

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return json({ error: "Invalid request" }, 400);
    }

    const {
      name,
      email,
      phone,
      service_interest,
      message,
      website, // honeypot
      elapsedMs,
      mathA,
      mathB,
      mathAnswer,
    } = body as Record<string, unknown>;

    // 1. Honeypot — pretend success so bots don't learn
    if (typeof website === "string" && website.trim() !== "") {
      console.log("Blocked: honeypot filled");
      return json({ success: true });
    }

    // 2. Timing trap
    const elapsed = Number(elapsedMs);
    if (!Number.isFinite(elapsed) || elapsed < 3000) {
      console.log("Blocked: submitted too fast", elapsed);
      return json({ error: "Submission was too fast. Please try again." }, 400);
    }

    // 3. Math question
    const a = Number(mathA);
    const b = Number(mathB);
    const answer = Number(mathAnswer);
    if (
      !Number.isFinite(a) || !Number.isFinite(b) || a < 0 || a > 20 ||
      b < 0 || b > 20 || !Number.isFinite(answer) || a + b !== answer
    ) {
      return json({ error: "The verification answer is incorrect." }, 400);
    }

    // 4. Field validation
    const nameStr = String(name ?? "").trim();
    const emailStr = String(email ?? "").trim();
    const messageStr = String(message ?? "").trim();
    const phoneStr = String(phone ?? "").trim();
    const serviceStr = String(service_interest ?? "").trim();

    if (
      !nameStr || nameStr.length > 100 ||
      !emailStr || emailStr.length > 255 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr) ||
      !messageStr || messageStr.length > 5000 ||
      phoneStr.length > 40 || serviceStr.length > 60
    ) {
      return json({ error: "Please check your details and try again." }, 400);
    }

    // 5. Content heuristics
    const linkCount = (messageStr.match(/https?:\/\/|www\./gi) || []).length;
    const combined = `${nameStr} ${messageStr}`;
    if (linkCount >= 4 || SPAM_PATTERNS.some((p) => p.test(combined))) {
      console.log("Blocked: spam heuristics", { linkCount });
      return json({ success: true });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // 6. Rate limit — 3 per IP per hour
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
      "unknown";
    const ipHash = await hash(ip);
    const hourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

    await supabase
      .from("contact_rate_limits")
      .delete()
      .lt("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());

    const { count } = await supabase
      .from("contact_rate_limits")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", hourAgo);

    if ((count ?? 0) >= 3) {
      console.log("Blocked: rate limit");
      return json(
        { error: "Too many submissions. Please try again later or call us." },
        429,
      );
    }

    await supabase.from("contact_rate_limits").insert({ ip_hash: ipHash });

    // 7. Insert submission
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([{
        name: nameStr,
        email: emailStr,
        phone: phoneStr || null,
        service_interest: serviceStr || null,
        message: messageStr,
      }])
      .select("id")
      .single();

    if (error) throw error;

    // 8. Trigger notification emails (non-fatal)
    try {
      const { error: fnError } = await supabase.functions.invoke(
        "send-contact-notification",
        { body: { submissionId: data.id } },
      );
      if (fnError) console.error("Email notification error:", fnError);
    } catch (e) {
      console.error("Failed to invoke notification function:", e);
    }

    return json({ success: true, id: data.id });
  } catch (error: any) {
    console.error("submit-contact error:", error);
    return json({ error: "Internal server error" }, 500);
  }
};

serve(handler);
