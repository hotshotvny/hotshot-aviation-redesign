-- Fix RLS policy for contact submissions
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON public.contact_submissions;

-- Create a more explicit policy that allows anyone to insert contact forms
CREATE POLICY "Enable insert for anonymous users" 
ON public.contact_submissions 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Also create a select policy in case we need to read back the inserted data
CREATE POLICY "Enable select for service role" 
ON public.contact_submissions 
FOR SELECT 
TO service_role;