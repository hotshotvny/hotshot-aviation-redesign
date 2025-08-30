import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CheckCircle, Star, Award } from 'lucide-react';
import airlineCaptains from '@/assets/airline-captains.jpg';
import flightTraining from '@/assets/flight-training.jpg';
import dpeExamination from '@/assets/dpe-examination.jpg';
import hangarFacility from '@/assets/hangar-facility.jpg';

const About = () => {
  const certifications = [
    'Private Pilot', 'Instrument Rating', 'Commercial Pilot', 'CFI', 'CFII',
    'Multi-Engine', 'MEI', 'High Performance', 'Complex', 'ATP'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            WHO ARE WE?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hot Shot is a group of aviation enthusiasts. We are here to give SoCal aviators 
              access to the cleanest, best kept aircraft in the area. We want you to love these 
              planes and love your flights as much as we do.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">Operated by two Part 121 Airline Captains</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">In-house Designated Pilot Examiner (DPE)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">Premium aircraft maintenance standards</span>
              </div>
            </div>
          </div>
          
          <Card className="shadow-elegant overflow-hidden">
            <AspectRatio ratio={16/9}>
              <img 
                src={airlineCaptains} 
                alt="Hot Shot Aviation airline captains" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-aviation-gold mr-3" />
                <h3 className="text-xl font-bold text-foreground">About Us</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hot Shot Aviation was started by two flight instructors turned airline pilots looking to do things differently. Josh and Jonathan wanted to share access to top-quality airplanes without the typical headaches or woes of flight schools. Our goal is simple - provide access to the cleanest, most reliable, best kept aircraft so you can love aviation the way we do.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Professional Training Environment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-elegant overflow-hidden">
            <AspectRatio ratio={4/3}>
              <img 
                src={flightTraining} 
                alt="Flight training classroom environment" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-2">Ground School</h4>
              <p className="text-sm text-muted-foreground">
                Modern classroom with latest aviation technology and teaching methods.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant overflow-hidden">
            <AspectRatio ratio={3/4}>
              <img 
                src={dpeExamination} 
                alt="DPE checkride examination" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-2">In-House DPE</h4>
              <p className="text-sm text-muted-foreground">
                Convenient checkrides with our designated pilot examiner.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant overflow-hidden">
            <AspectRatio ratio={16/9}>
              <img 
                src={hangarFacility} 
                alt="Clean aircraft hangar facility" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-2">Premium Facility</h4>
              <p className="text-sm text-muted-foreground">
                Immaculate hangar with the cleanest, best-maintained aircraft.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why We're Different Card */}
        <Card className="shadow-elegant mb-16">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-aviation-gold mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Why Are We Different?</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Hot Shot is different because we've taken a simplified approach to deliver the 
              purest aviation experience. Our goal is simple - give renter and student pilots 
              access to the best airplanes possible with no gimmicks and no complications.
            </p>
          </CardContent>
        </Card>

        {/* Training Programs */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-6">Training Programs</h3>
          <p className="text-lg text-muted-foreground mb-8">
            We offer comprehensive training programs from your first lesson to airline transport pilot
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <Badge key={cert} variant="default" className="text-sm px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;