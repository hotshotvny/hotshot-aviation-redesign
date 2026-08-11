import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Send, Loader2 } from 'lucide-react';
import SuccessOverlay from '@/components/ui/SuccessOverlay';

const randomDigit = () => Math.floor(Math.random() * 8) + 2;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [math, setMath] = useState(() => ({ a: randomDigit(), b: randomDigit() }));
  const [mathAnswer, setMathAnswer] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const loadedAt = useRef(Date.now());
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

    if (Number(mathAnswer) !== math.a + math.b) {
      toast({
        title: "Verification failed",
        description: `Please answer the quick check: what is ${math.a} + ${math.b}?`,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: {
          ...formData,
          website: honeypot,
          elapsedMs: Date.now() - loadedAt.current,
          mathA: math.a,
          mathB: math.b,
          mathAnswer: Number(mathAnswer)
        }
      });

      if (error || (data && data.error)) {
        throw new Error((data && data.error) || 'Submission failed');
      }

      setShowSuccessOverlay(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        service_interest: '',
        message: ''
      });
      setMathAnswer('');
      setMath({ a: randomDigit(), b: randomDigit() });
      loadedAt.current = Date.now();
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
    <Card className="shadow-elegant relative">
      <SuccessOverlay 
        isVisible={showSuccessOverlay}
        onDismiss={() => setShowSuccessOverlay(false)}
      />
      
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

          {/* Honeypot — hidden from real users */}
          <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="space-y-2 max-w-xs">
            <Label htmlFor="math-check">Quick check: what is {math.a} + {math.b}? *</Label>
            <Input
              id="math-check"
              type="text"
              inputMode="numeric"
              value={mathAnswer}
              onChange={(e) => setMathAnswer(e.target.value)}
              placeholder="Your answer"
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