-- Re-enable RLS and create a working policy
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.contact_submissions;
DROP POLICY IF EXISTS "Enable select for service role" ON public.contact_submissions;

-- Create a simple policy that allows everyone to insert
CREATE POLICY "Allow public contact submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Allow service role to read submissions (for edge function)
CREATE POLICY "Service role can read submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (true);