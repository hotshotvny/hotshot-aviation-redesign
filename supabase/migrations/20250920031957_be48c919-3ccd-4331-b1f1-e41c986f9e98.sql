-- Fix RLS policy to allow anonymous contact form submissions
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;

-- Create a new policy that allows anonymous users to insert contact forms
CREATE POLICY "Allow anonymous contact form submissions" 
ON public.contact_submissions 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);