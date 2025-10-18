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
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - Hot Shot Aviation</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; background-color: #FAFAFA;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FAFAFA;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header with Logo and Yellow Gradient -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #F5C542 0%, #E6B833 100%); padding: 40px 30px; text-align: center;">
                      <img src="https://hotshotaviation.com/lovable-uploads/logo.png" alt="Hot Shot Aviation" style="max-width: 180px; height: auto; display: block; margin: 0 auto 20px;">
                      <div style="height: 2px; width: 60px; background-color: #EC4C3F; margin: 0 auto;"></div>
                    </td>
                  </tr>
                  
                  <!-- Hero Section -->
                  <tr>
                    <td style="padding: 40px 30px 30px; text-align: center;">
                      <h1 style="margin: 0 0 16px; color: #1F1F1F; font-size: 28px; font-weight: 700; line-height: 1.3;">
                        Thank You, ${submission.name}! ✈️
                      </h1>
                      <p style="margin: 0; color: #4A5568; font-size: 16px; line-height: 1.6;">
                        We've received your message and will get back to you within <strong style="color: #EC4C3F;">24 hours</strong>.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Message Recap Card -->
                  <tr>
                    <td style="padding: 0 30px 30px;">
                      <div style="background: linear-gradient(to bottom, #FAFAFA, #F5F5F5); border-left: 4px solid #EC4C3F; border-radius: 8px; padding: 24px; margin: 0;">
                        <h2 style="margin: 0 0 16px; color: #1F1F1F; font-size: 18px; font-weight: 600;">
                          Your Message:
                        </h2>
                        <p style="margin: 0; color: #4A5568; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${submission.message}</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Call to Action -->
                  <tr>
                    <td style="padding: 0 30px 40px; text-align: center;">
                      <p style="margin: 0 0 20px; color: #4A5568; font-size: 15px;">
                        While you wait, explore our flight training programs and aircraft fleet:
                      </p>
                      <a href="https://hotshotaviation.com" style="display: inline-block; background: linear-gradient(135deg, #EC4C3F 0%, #C53E33 100%); color: #FFFFFF; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(236, 76, 63, 0.3);">
                        Visit Our Website
                      </a>
                    </td>
                  </tr>
                  
                  <!-- Aviation Divider -->
                  <tr>
                    <td style="padding: 0 30px;">
                      <div style="height: 1px; background: linear-gradient(to right, transparent, #EC4C3F, #F5C542, #EC4C3F, transparent);"></div>
                    </td>
                  </tr>
                  
                  <!-- Contact Information -->
                  <tr>
                    <td style="padding: 30px; background-color: #FAFAFA;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: center; padding-bottom: 20px;">
                            <h3 style="margin: 0 0 16px; color: #1F1F1F; font-size: 18px; font-weight: 600;">
                              Hot Shot Aviation
                            </h3>
                            <p style="margin: 0 0 4px; color: #4A5568; font-size: 14px;">
                              Van Nuys Airport (KVNY)
                            </p>
                            <p style="margin: 0 0 20px; color: #4A5568; font-size: 14px;">
                              16425 Hart Street, Van Nuys, CA 91411
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="text-align: center; padding: 8px;">
                                  <p style="margin: 0; color: #4A5568; font-size: 14px;">
                                    📞 <a href="tel:+14244071869" style="color: #EC4C3F; text-decoration: none; font-weight: 600;">424-407-1869</a>
                                  </p>
                                  <p style="margin: 4px 0 0; color: #718096; font-size: 12px;">
                                    Text or Call
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align: center; padding: 8px;">
                                  <p style="margin: 0; color: #4A5568; font-size: 14px;">
                                    ✉️ <a href="mailto:info@hotshotaviation.com" style="color: #EC4C3F; text-decoration: none; font-weight: 600;">info@hotshotaviation.com</a>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align: center; padding: 8px;">
                                  <p style="margin: 0; color: #4A5568; font-size: 14px;">
                                    🕐 <strong style="color: #1F1F1F;">Mon-Sun:</strong> 7:00 AM - 8:00 PM
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 30px; text-align: center; background-color: #1F1F1F;">
                      <p style="margin: 0 0 8px; color: #F5C542; font-size: 13px; font-weight: 600;">
                        Where Passion Meets Precision
                      </p>
                      <p style="margin: 0; color: #A0AEC0; font-size: 12px; line-height: 1.5;">
                        This is an automated confirmation. Please do not reply to this email.<br>
                        For questions, contact us at info@hotshotaviation.com
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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