import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your aviation journey? Contact us today to schedule a discovery flight 
            or discuss your training needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Contact Info */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Phone className="w-5 h-5 text-primary mr-3" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Text or Call (Email or text preferred)</p>
              <p className="font-semibold text-foreground mt-2">424-407-1869</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Mail className="w-5 h-5 text-primary mr-3" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Send us a message anytime</p>
              <p className="font-semibold text-foreground mt-2">info@hotshotaviation.com</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Van Nuys (KVNY)</p>
              <div className="font-semibold text-foreground mt-2">
                <p>16425 Hart Street</p>
                <p>Van Nuys, CA 91411</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Clock className="w-5 h-5 text-primary mr-3" />
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Flying 7 days a week</p>
              <div className="mt-2 space-y-1">
                <p className="font-semibold text-foreground">Mon-Sun: 7:00 AM - 8:00 PM</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;