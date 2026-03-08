

## Update Keep-Alive Cron Job to Run Twice Daily

The cron job currently runs every 6 days (`0 12 */6 * *`). To run it twice per day, we need to update the schedule.

### What needs to happen

**You need to run this SQL** in the Supabase SQL Editor since I cannot execute arbitrary SQL directly:

```sql
-- Update the existing cron job to run twice daily (at 8am and 8pm UTC)
SELECT cron.unschedule('keep-database-alive');

SELECT cron.schedule(
  'keep-database-alive',
  '0 8,20 * * *',
  $$
  SELECT net.http_post(
      url:='https://osfwukuxpangejponypj.supabase.co/functions/v1/keep-alive',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZnd1a3V4cGFuZ2VqcG9ueXBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNjI2NDAsImV4cCI6MjA3NjYzODY0MH0._Zlo7oTZzEZju4kn66K4ueCg5hF9e2sxvR1291B-o3A"}'::jsonb,
      body:=concat('{"time": "', now(), '"}')::jsonb
  ) as request_id;
  $$
);
```

This will also clean up the duplicate job issue. After running, verify with `SELECT * FROM cron.job;` -- you should see exactly one job running at `0 8,20 * * *`.

No code changes needed -- this is purely a database configuration update.

