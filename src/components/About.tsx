import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CheckCircle, Star, Award, Plane, Users, Trophy, Shield, Leaf, DollarSign, Heart } from 'lucide-react';
import { useState } from 'react';
import joshPortrait from '@/assets/josh-portrait.jpg';
import jonathanPortrait from '@/assets/jonathan-portrait.jpg';
import privatePilotImg from '@/assets/private-pilot.jpg';
import instrumentRatingImg from '@/assets/instrument-rating.jpg';
import commercialPilotImg from '@/assets/commercial-pilot.jpg';
import cfiTrainingImg from '@/assets/cfi-training.jpg';
import multiEngineImg from '@/assets/multi-engine.jpg';
import timeBuildingImg from '@/assets/time-building.jpg';

const About = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>('Private Pilot');

  const certifications = [
    'Private Pilot', 'Instrument Rating', 'Commercial Pilot', 'CFI', 'CFII',
    'Multi-Engine', 'MEI', 'Time Building', 'High Performance', 'Complex', 'ATP'
  ];

  const trainingPrograms = {
    'Private Pilot': {
      image: privatePilotImg,
      description: 'Your first step into aviation. Learn the fundamentals of flight, navigation, and aircraft systems. This foundational rating allows you to fly single-engine aircraft for personal and recreational purposes.'
    },
    'Instrument Rating': {
      image: instrumentRatingImg,
      description: 'Advance your skills to fly in clouds and low visibility conditions. Master instrument procedures, approaches, and navigation systems for safer and more versatile flying.'
    },
    'Commercial Pilot': {
      image: commercialPilotImg,
      description: 'Take your flying to a professional level. This rating allows you to fly for compensation and is the foundation for most aviation careers.'
    },
    'CFI': {
      image: cfiTrainingImg,
      description: 'Become a flight instructor and share your passion for aviation. Teach others to fly while building valuable experience and flight time.'
    },
    'CFII': {
      image: instrumentRatingImg,
      description: 'Certified Flight Instructor Instrument - teach instrument flying to students, combining instruction skills with advanced instrument knowledge.'
    },
    'Multi-Engine': {
      image: multiEngineImg,
      description: 'We offer initial multi engine training as well as an accelerated multi engine time building course. Airlines will require at least 25 hours of total multi time, some companies require up to 50 hours.'
    },
    'MEI': {
      image: multiEngineImg,
      description: 'Multi-Engine Instructor rating allows you to teach others to fly twin-engine aircraft, expanding your instructional capabilities.'
    },
    'Time Building': {
      image: timeBuildingImg,
      description: 'Our Cessna 152 is among the least expensive aircraft in the area. It is fully IFR certified and capable. It is the ideal plane for time building. We also have a pilot group that fly together to time build so pilots can split the bill.'
    },
    'High Performance': {
      image: commercialPilotImg,
      description: 'This Cherokee Six is a perfect training platform for a High Performance Endorsement. Once trained and checked out it can be rented. It is the only six seater aircraft for rent in the area.'
    },
    'Complex': {
      image: commercialPilotImg,
      description: 'Gain proficiency in aircraft with retractable landing gear, constant speed propellers, and flaps. Essential for advanced flying.'
    },
    'ATP': {
      image: commercialPilotImg,
      description: 'Airline Transport Pilot - the highest level of pilot certification. Required to captain commercial airline flights and the pinnacle of pilot training.'
    }
  };

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-elegant overflow-hidden">
              <AspectRatio ratio={4/5}>
                <img 
                  src={joshPortrait} 
                  alt="Josh - Co-founder and Flight Instructor at Hot Shot Aviation" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Plane className="w-5 h-5 text-aviation-gold mr-2" />
                  <h4 className="text-lg font-bold text-foreground">Josh</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Co-founder & Flight Instructor
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant overflow-hidden">
              <AspectRatio ratio={4/5}>
                <img 
                  src={jonathanPortrait} 
                  alt="Jonathan - Co-founder and Flight Instructor at Hot Shot Aviation" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Trophy className="w-5 h-5 text-aviation-gold mr-2" />
                  <h4 className="text-lg font-bold text-foreground">Jonathan</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Co-founder & Flight Instructor
                </p>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* About Us Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-aviation-gold mr-3" />
            <h3 className="text-3xl font-bold text-foreground">About Us</h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-none">
            Hot Shot Aviation was started by two flight instructors turned airline pilots looking to do things differently. Josh and Jonathan wanted to share access to top-quality airplanes without the typical headaches or woes of flight schools. Our goal is simple - provide access to the cleanest, most reliable, best kept aircraft so you can love aviation the way we do.
          </p>
        </div>

        {/* Why We're Different Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-aviation-gold mr-3" />
              <h3 className="text-3xl font-bold text-foreground">Why Are We Different?</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Hot Shot is different because we've taken a simplified approach to deliver the 
              purest aviation experience. Our goal is simple - give renter and student pilots 
              access to the best airplanes possible with no gimmicks and no complications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-6 h-6 text-aviation-gold mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Simple & Affordable</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We keep our operation simple. Flying is expensive, so why pay for extras and gimmicks? 
                  We focus investments in our planes to give you the best experience at the lowest price. 
                  No physical office, no package deals - just our best rate upfront.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-aviation-gold mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Quality Aircraft</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  These aren't just rental planes. We take pride in our aircraft and only rent to pilots 
                  who will treat them like their own. No shoddy, run down rentals here - only top-quality 
                  aircraft maintained to the highest standards.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-aviation-gold mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Quality Over Quantity</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We worry about quality, not quantity. We only rent airplanes in top shape to renters 
                  who help us take care of them. Every step of the way, our goal is to give you the 
                  best possible experience.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Leaf className="w-6 h-6 text-aviation-gold mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Environmental Care</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We were the first flight school at Van Nuys Airport approached to use Swift Unleaded 
                  Fuel UL94. This fuel has less environmental impact compared to traditional fuels and 
                  provides better reliability too.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-aviation-gold mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Instructors Work For You</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Most flight schools charge for both the plane and instructors, creating instructor 
                  loyalty to the school first. At Hot Shot Aviation, we checkout instructors in advance, 
                  so you pay them directly and they work for you - not us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Training Programs */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-6">Training Programs</h3>
          <p className="text-lg text-muted-foreground mb-8">
            We offer comprehensive training programs from your first lesson to airline transport pilot
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {certifications.map((cert) => (
              <Badge 
                key={cert} 
                variant={selectedProgram === cert ? "default" : "outline"}
                className={`text-sm px-4 py-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                  selectedProgram === cert 
                    ? 'bg-primary text-primary-foreground shadow-glow' 
                    : 'hover:bg-primary/10'
                }`}
                onClick={() => setSelectedProgram(selectedProgram === cert ? null : cert)}
              >
                {cert}
              </Badge>
            ))}
          </div>

          {/* Selected Program Display */}
          {selectedProgram && trainingPrograms[selectedProgram as keyof typeof trainingPrograms] && (
            <Card className="shadow-elegant max-w-4xl mx-auto animate-fade-in">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src={trainingPrograms[selectedProgram as keyof typeof trainingPrograms].image}
                      alt={`${selectedProgram} training program`}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-6 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold text-foreground mb-4">{selectedProgram}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {trainingPrograms[selectedProgram as keyof typeof trainingPrograms].description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;