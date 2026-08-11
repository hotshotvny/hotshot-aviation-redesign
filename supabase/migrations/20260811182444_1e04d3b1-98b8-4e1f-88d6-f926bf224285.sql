DROP POLICY IF EXISTS "Allow public inserts" ON public.contact_submissions;

CREATE TABLE IF NOT EXISTS public.contact_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_hash text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_rate_limits TO service_role;

ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS contact_rate_limits_ip_created_idx
  ON public.contact_rate_limits (ip_hash, created_at DESC);