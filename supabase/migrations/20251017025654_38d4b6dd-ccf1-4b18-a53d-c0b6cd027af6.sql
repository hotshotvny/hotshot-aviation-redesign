-- Enable required extensions for cron jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a cron job to call the keep-alive function every 6 days
-- This keeps the Supabase project active and prevents auto-pausing
SELECT cron.schedule(
  'keep-alive-job',
  '0 0 */6 * *', -- Run at midnight every 6 days
  $$
  SELECT
    net.http_post(
      url:='https://rhpethvsqihowmozczij.supabase.co/functions/v1/keep-alive',
      headers:='{"Content-Type": "application/json"}'::jsonb,
      body:=concat('{"triggered_at": "', now(), '"}')::jsonb
    ) as request_id;
  $$
);