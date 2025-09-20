import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CheckCircle, Award, Plane, Users, Shield, Leaf, DollarSign, Heart } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import commercialPilotImg from '@/assets/commercial-pilot.jpg';

const About = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>('Private Pilot');
  const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { elementRef: differentRef, isVisible: differentVisible } = useScrollAnimation();
  const { elementRef: programsRef, isVisible: programsVisible } = useScrollAnimation();
  const { elementRef: whoWeAreRef, isVisible: whoWeAreVisible } = useScrollAnimation();

  const certifications = [
    'Private Pilot', 'Instrument Rating', 'Commercial Pilot', 'CFI', 'CFII',
    'Multi-Engine', 'MEI', 'Time Building', 'High Performance', 'Complex', 'ATP'
  ];

  const trainingPrograms = {
    'Private Pilot': {
      image: '/lovable-uploads/03d8c6c4-9d38-4f65-a43c-e479b5015bdd.png',
      description: 'Your first step into aviation. Learn the fundamentals of flight, navigation, and aircraft systems. This foundational rating allows you to fly single-engine aircraft for personal and recreational purposes.'
    },
    'Instrument Rating': {
      image: '/lovable-uploads/0b0c32cc-0f2a-4667-b41e-20d05c43920f.png',
      description: 'Advance your skills to fly in clouds and low visibility conditions. Master instrument procedures, approaches, and navigation systems for safer and more versatile flying.'
    },
    'Commercial Pilot': {
      image: '/lovable-uploads/2bbeca1e-1e23-4059-9541-55bf90adaee9.png',
      description: 'Take your flying to a professional level. This rating allows you to fly for compensation and is the foundation for most aviation careers.'
    },
    'CFI': {
      image: '/lovable-uploads/20befa13-c6d7-4a7a-9f2f-6ebcabc6f926.png',
      description: 'Become a flight instructor and share your passion for aviation. Teach others to fly while building valuable experience and flight time.'
    },
    'CFII': {
      image: '/lovable-uploads/a83fae6c-2e94-4516-8673-0dce32798dda.png',
      description: 'Certified Flight Instructor Instrument - teach instrument flying to students, combining instruction skills with advanced instrument knowledge.'
    },
    'Multi-Engine': {
      image: '/lovable-uploads/6af4607a-7410-42f6-a8bf-3358515e8f47.png',
      description: 'We offer initial multi engine training as well as an accelerated multi engine time building course. Airlines will require at least 25 hours of total multi time, some companies require up to 50 hours.'
    },
    'MEI': {
      image: '/lovable-uploads/5435620b-c54c-42d5-a97f-a44190f0aeb1.png',
      description: 'Multi-Engine Instructor rating allows you to teach others to fly twin-engine aircraft, expanding your instructional capabilities.'
    },
    'Time Building': {
      image: '/lovable-uploads/b2911243-2f4c-40ed-8137-77426b4615e4.png',
      description: 'Our Cessna 152 is among the least expensive aircraft in the area. It is fully IFR certified and capable. It is the ideal plane for time building. We also have a pilot group that fly together to time build so pilots can split the bill.'
    },
    'High Performance': {
      image: '/lovable-uploads/high-performance-plane.jpg',
      description: 'This Cherokee Six is a perfect training platform for a High Performance Endorsement. Once trained and checked out it can be rented. It is the only six seater aircraft for rent in the area.'
    },
    'Complex': {
      image: '/lovable-uploads/43ddfc86-a875-4597-8cda-afce20462542.png',
      description: 'Gain proficiency in aircraft with retractable landing gear, constant speed propellers, and flaps. Essential for advanced flying.'
    },
    'ATP': {
      image: commercialPilotImg,
      description: 'Airline Transport Pilot - the highest level of pilot certification. Required to captain commercial airline flights and the pinnacle of pilot training.'
    }
  };

  return (
    <section id="about" className="py-24" style={{ background: 'var(--gradient-about)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Us Section */}
        <div 
          ref={aboutRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            aboutVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-aviation-gold mr-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">ABOUT US</h2>
          </div>
          <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 animate-scale-in"></div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Hot Shot Aviation was started by two flight instructors turned airline pilots looking to do things differently. Josh and Jonathan wanted to share access to top-quality airplanes without the typical headaches or woes of flight schools. Our goal is simple - provide access to the cleanest, most reliable, best kept aircraft so you can love aviation the way we do.
          </p>
        </div>

        {/* Why We're Different Section */}
        <div 
          ref={differentRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            differentVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-aviation-gold mr-3" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">WHY ARE WE DIFFERENT?</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Hot Shot is different because we've taken a simplified approach to deliver the 
              purest aviation experience. Our goal is simple - give renter and student pilots 
              access to the best airplanes possible with no gimmicks and no complications.
            </p>
          </div>

          <Tabs defaultValue="simple-affordable" className="max-w-4xl mx-auto">
            <TabsList className="flex flex-wrap w-full justify-center gap-2 mb-6 sm:mb-8 h-auto mobile-px p-2">
              <TabsTrigger value="simple-affordable" className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 mobile-touch-target flex-shrink-0">
                <DollarSign className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="hidden sm:inline">Simple & Affordable</span>
                <span className="sm:hidden">Simple</span>
              </TabsTrigger>
              <TabsTrigger value="quality-aircraft" className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 mobile-touch-target flex-shrink-0">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="hidden sm:inline">Quality Aircraft</span>
                <span className="sm:hidden">Quality</span>
              </TabsTrigger>
              <TabsTrigger value="quality-over-quantity" className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 mobile-touch-target flex-shrink-0">
                <Heart className="w-5 sm:w-7 h-5 sm:h-7" />
                <span className="hidden sm:inline">Quality Over Quantity</span>
                <span className="sm:hidden">Focus</span>
              </TabsTrigger>
              <TabsTrigger value="environmental" className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 mobile-touch-target flex-shrink-0">
                <Leaf className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="hidden sm:inline">Environmental Care</span>
                <span className="sm:hidden">Eco</span>
              </TabsTrigger>
              <TabsTrigger value="instructors" className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 mobile-touch-target flex-shrink-0">
                <Users className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="hidden sm:inline">Instructors Work For You</span>
                <span className="sm:hidden">Instructors</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="simple-affordable">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <DollarSign className="w-8 h-8 text-aviation-gold mr-4" />
                    <h4 className="text-2xl font-semibold text-foreground">Simple & Affordable</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We keep our operation simple. Flying is expensive, so why pay for extras and gimmicks? 
                    We focus investments in our planes to give you the best experience at the lowest price. 
                    No physical office, no package deals - just our best rate upfront.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="quality-aircraft">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-aviation-gold mr-4" />
                    <h4 className="text-2xl font-semibold text-foreground">Quality Aircraft</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    These aren't just rental planes. We take pride in our aircraft and only rent to pilots 
                    who will treat them like their own. No shoddy, run down rentals here - only top-quality 
                    aircraft maintained to the highest standards.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="quality-over-quantity">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Heart className="w-8 h-8 text-aviation-gold mr-4" />
                    <h4 className="text-2xl font-semibold text-foreground">Quality Over Quantity</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We worry about quality, not quantity. We only rent airplanes in top shape to renters 
                    who help us take care of them. Every step of the way, our goal is to give you the 
                    best possible experience.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="environmental">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Leaf className="w-8 h-8 text-aviation-gold mr-4" />
                    <h4 className="text-2xl font-semibold text-foreground">Environmental Care</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We were the first flight school at Van Nuys Airport approached to use Swift Unleaded 
                    Fuel UL94. This fuel has less environmental impact compared to traditional fuels and 
                    provides better reliability too.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="instructors">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Users className="w-8 h-8 text-aviation-gold mr-4" />
                    <h4 className="text-2xl font-semibold text-foreground">Instructors Work For You</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Most flight schools charge for both the plane and instructors, creating instructor 
                    loyalty to the school first. At Hot Shot Aviation, we checkout instructors in advance, 
                    so you pay them directly and they work for you - not us.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Who We Are Section */}
        <div 
          ref={whoWeAreRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            whoWeAreVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 mobile-px">
              WHO ARE WE?
            </h3>
            <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 animate-scale-in"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mobile-px max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-up stagger-1">
                Hot Shot is a group of aviation enthusiasts. We are here to give SoCal aviators 
                access to the cleanest, best kept aircraft in the area. We want you to love these 
                planes and love your flights as much as we do.
              </p>
              <div className="space-y-4">
                <div className="flex items-center animate-fade-in-left stagger-2 hover-scale cursor-pointer">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 animate-bounce-in" />
                  <span className="text-foreground">Operated by two Part 121 Airline Captains</span>
                </div>
                <div className="flex items-center animate-fade-in-left stagger-3 hover-scale cursor-pointer">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 animate-bounce-in" />
                  <span className="text-foreground">In-house Designated Pilot Examiner (DPE)</span>
                </div>
                <div className="flex items-center animate-fade-in-left stagger-4 hover-scale cursor-pointer">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 animate-bounce-in" />
                  <span className="text-foreground">Premium aircraft maintenance standards</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="shadow-elegant overflow-hidden aviation-card animate-fade-in-right stagger-2">
                <AspectRatio ratio={4/5}>
                  <img 
                    src="/lovable-uploads/b68178ab-f3dd-4ffb-a59b-9744e2a1408c.png" 
                    alt="Josh - Co-founder and Flight Instructor at Hot Shot Aviation" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center mb-2">
                    <Plane className="w-4 sm:w-5 h-4 sm:h-5 text-aviation-gold mr-2" />
                    <h4 className="text-base sm:text-lg font-bold text-foreground">Josh</h4>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Co-founder & Flight Instructor
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant overflow-hidden aviation-card animate-fade-in-right stagger-3">
                <AspectRatio ratio={4/5}>
                  <img 
                    src="/lovable-uploads/a0a483b9-e9c7-4e17-bf79-ae92032e6da5.png" 
                    alt="Jonathan - Co-founder and Flight Instructor at Hot Shot Aviation" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center mb-2">
                    <Plane className="w-4 sm:w-5 h-4 sm:h-5 text-aviation-gold mr-2" />
                    <h4 className="text-base sm:text-lg font-bold text-foreground">Jonathan</h4>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Co-founder & Flight Instructor
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div 
          ref={programsRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-8 transition-all duration-700 ${
            programsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up stagger-1">TRAINING PROGRAMS</h3>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up stagger-2">
            We offer comprehensive training programs from your first lesson to airline transport pilot
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8 max-w-5xl mx-auto place-items-center">
            {certifications.map((cert, index) => (
              <Badge 
                key={cert} 
                variant={selectedProgram === cert ? "default" : "outline"}
                className={`text-sm px-3 py-2 cursor-pointer transition-all duration-300 hover:scale-105 interactive-button animate-fade-in-up text-center justify-center flex items-center w-full ${
                  selectedProgram === cert 
                    ? 'bg-primary text-primary-foreground shadow-glow' 
                    : 'hover:bg-primary/10 hover-glow'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProgram(selectedProgram === cert ? null : cert)}
              >
                {cert}
              </Badge>
            ))}
          </div>

          {/* Selected Program Display */}
          {selectedProgram && trainingPrograms[selectedProgram as keyof typeof trainingPrograms] && (
            <Card className="shadow-elegant max-w-6xl mx-auto animate-fade-in">
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