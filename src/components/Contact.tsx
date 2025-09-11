import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your aviation journey? Contact us today to schedule a discovery flight 
            or discuss your training needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
          {/* Contact Info */}
          <Card className="shadow-elegant">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-base sm:text-lg">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-primary mr-2 sm:mr-3" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">Text or Call (Email or text preferred)</p>
              <p className="font-semibold text-foreground mt-2 text-sm sm:text-base">424-407-1869</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-base sm:text-lg">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary mr-2 sm:mr-3" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">Send us a message anytime</p>
              <p className="font-semibold text-foreground mt-2 text-sm sm:text-base break-all">info@hotshotaviation.com</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-base sm:text-lg">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary mr-2 sm:mr-3" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">Van Nuys (KVNY)</p>
              <div className="font-semibold text-foreground mt-2 text-sm sm:text-base">
                <p>16425 Hart Street</p>
                <p>Van Nuys, CA 91411</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-base sm:text-lg">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-primary mr-2 sm:mr-3" />
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">Flying 7 days a week</p>
              <div className="mt-2 space-y-1">
                <p className="font-semibold text-foreground text-sm sm:text-base">Mon-Sun: 7:00 AM - 8:00 PM</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;