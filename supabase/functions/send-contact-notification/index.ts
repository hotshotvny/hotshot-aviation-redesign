import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service_interest: string | null;
  message: string;
  created_at: string;
}

interface ContactNotificationRequest {
  submissionId: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Contact notification function triggered');

    // Initialize Resend
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get submission ID from request body
    let submissionId: string;
    
    if (req.method === 'POST') {
      const body: ContactNotificationRequest = await req.json();
      submissionId = body.submissionId;
    } else {
      // Fallback to get latest submission
      const { data: latestSubmissions, error: latestError } = await supabase
        .from('contact_submissions')
        .select('id')
        .order('created_at', { ascending: false })
        .limit(1);

      if (latestError || !latestSubmissions || latestSubmissions.length === 0) {
        throw new Error('No submissions found');
      }
      
      submissionId = latestSubmissions[0].id;
    }

    // Get the specific contact submission
    const { data: submissions, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .eq('id', submissionId)
      .single();

    if (error) {
      console.error('Error fetching contact submission:', error);
      throw error;
    }

    const submission: ContactSubmission = submissions;
    console.log('Processing contact submission:', {
      id: submission.id,
      name: submission.name,
      email: submission.email,
      service_interest: submission.service_interest || 'Not specified',
    });

    // Format the submission date
    const submissionDate = new Date(submission.created_at).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    // Send notification email to Hot Shot Aviation
    const emailResponse = await resend.emails.send({
      from: 'Hot Shot Aviation <notifications@hotshotaviation.com>',
      to: ['info@hotshotaviation.com'],
      subject: `New Contact Form Submission - ${submission.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e3a8a; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <p><strong>Name:</strong> ${submission.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a></p>
            <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
            <p><strong>Service Interest:</strong> ${submission.service_interest || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${submission.message}</p>
          </div>
          
          <div style="font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 15px;">
            <p><strong>Submission Time:</strong> ${submissionDate}</p>
            <p><strong>Submission ID:</strong> ${submission.id}</p>
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error('Error sending email:', emailResponse.error);
      throw new Error(`Failed to send email: ${emailResponse.error.message}`);
    }

    console.log('Email sent successfully:', emailResponse.data?.id);

    // Send confirmation email to the person who submitted the form
    const confirmationResponse = await resend.emails.send({
      from: 'Hot Shot Aviation <info@hotshotaviation.com>',
      to: [submission.email],
      subject: 'Thank you for contacting Hot Shot Aviation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e3a8a; margin-bottom: 20px;">Thank you for contacting us!</h2>
          
          <p>Dear ${submission.name},</p>
          
          <p>Thank you for reaching out to Hot Shot Aviation. We have received your inquiry and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Your Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${submission.message}</p>
          </div>
          
          <p>In the meantime, feel free to explore our flight training programs and aircraft fleet on our website.</p>
          
          <p>Best regards,<br>
          <strong>The Hot Shot Aviation Team</strong><br>
          Phone: <a href="tel:+1234567890">(123) 456-7890</a><br>
          Email: <a href="mailto:info@hotshotaviation.com">info@hotshotaviation.com</a></p>
          
          <div style="font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 30px;">
            <p>This is an automated confirmation. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    });

    if (confirmationResponse.error) {
      console.warn('Warning: Failed to send confirmation email to user:', confirmationResponse.error);
      // Don't fail the entire request if confirmation email fails
    } else {
      console.log('Confirmation email sent successfully:', confirmationResponse.data?.id);
    }

    return new Response(JSON.stringify({ 
      message: 'Contact notification sent successfully',
      submission_id: submission.id,
      notification_email_id: emailResponse.data?.id,
      confirmation_email_id: confirmationResponse.data?.id
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error('Error in contact notification function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Internal server error' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  }
};

serve(handler);