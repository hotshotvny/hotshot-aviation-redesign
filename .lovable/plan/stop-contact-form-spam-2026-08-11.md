# Stop Contact Form Spam

Layered protection that stays invisible to real visitors, plus a simple math check.

## What visitors will see

- One extra small field: "Quick check: what is 3 + 4?" (numbers randomized per page load).
- Everything else looks the same. Legitimate submissions go through as they do today.

## Protections added

1. **Honeypot field** — a hidden input (e.g. "company website") that humans never see. If it's filled in, the submission is silently dropped with a fake success message so bots don't learn they were blocked.
2. **Submit-time trap** — record when the form loaded. Submissions sent in under ~3 seconds are treated as bot traffic and rejected.
3. **Math question** — randomized single-digit addition, validated on the server, not just in the browser.
4. **Rate limiting** — max 3 submissions per IP per hour, tracked server-side.
5. **Basic content heuristics** — reject messages with excessive links (4+ URLs) or obvious spam patterns.

## Technical approach

Today the browser inserts straight into `contact_submissions` (RLS allows any public insert), then calls the notification function. That means bots can hit the database directly, bypassing anything added in the UI. The fix moves the write server-side:

- New public edge function `submit-contact` performs: honeypot check, timing check, math answer check, link/heuristic check, IP rate limit check, then the insert with the service role, then the existing email notification logic.
- Update RLS on `contact_submissions`: drop the public INSERT policy so only the edge function (service role) can write. Reads stay restricted as they are.
- New `contact_rate_limits` table (hashed IP + timestamp) with proper GRANTs, service-role only, used for the hourly limit. Old rows pruned on each call.
- `ContactForm.tsx` calls `supabase.functions.invoke('submit-contact')` instead of inserting directly; adds the honeypot input, the load-timestamp, and the math question with client-side hinting for a friendly error message.
- `supabase/config.toml` gets `[functions.submit-contact] verify_jwt = false`.
- The success overlay behavior is unchanged (still manually dismissed).

## Note

Existing spam already in the table isn't touched. If you want, the old entries can be cleared out afterward.
