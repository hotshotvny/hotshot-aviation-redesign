import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_interest: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name, email, and message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Attempting to submit form with data:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        service_interest: formData.service_interest || null,
        message: formData.message
      });

      // First, store the submission in the database
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            service_interest: formData.service_interest || null,
            message: formData.message
          }
        ])
        .select('id')
        .single();

      console.log('Database insert result:', { data, error });

      if (error) {
        console.error('Database insert error details:', error);
        throw error;
      }

      // Then, trigger the email notification
      try {
        const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
          body: { submissionId: data.id }
        });

        if (emailError) {
          console.error('Email notification error:', emailError);
          // Don't fail the entire submission if email fails
        }
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Continue with success message even if email fails
      }

      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_interest: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or call us directly at 424-407-1869.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-center">Send Us a Message</CardTitle>
        <p className="text-muted-foreground text-center">
          Ready to start your aviation journey? Fill out the form below and we'll get back to you soon.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service Interest</Label>
              <Select
                value={formData.service_interest}
                onValueChange={(value) => setFormData(prev => ({ ...prev, service_interest: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private-pilot">Private Pilot License</SelectItem>
                  <SelectItem value="instrument-rating">Instrument Rating</SelectItem>
                  <SelectItem value="commercial-pilot">Commercial Pilot License</SelectItem>
                  <SelectItem value="cfi">Certified Flight Instructor</SelectItem>
                  <SelectItem value="multi-engine">Multi-Engine Rating</SelectItem>
                  <SelectItem value="discovery-flight">Discovery Flight</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Tell us about your aviation goals, questions, or how we can help you..."
              rows={4}
              required
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
            variant="hero"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;