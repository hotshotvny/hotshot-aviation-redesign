import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Plane, DollarSign, Users, BookOpen, Thermometer } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import heroImage from '@/assets/hero-sunset.jpg';

const PickingFlightSchool = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/');
    // Small delay to ensure the page loads before scrolling
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  const sections = [
    {
      icon: Shield,
      title: "Is The School Safe?",
      points: [
        "The simplest way to check the school out before ever going is to google them and search for news articles.",
        "Asking a pilot in the area where they would recommend.",
        "Google search the instructors, See if they have good reviews or history."
      ]
    },
    {
      icon: Plane,
      title: "Check The Planes!",
      points: [
        "Ask to walk out and see the planes.",
        "Airplanes should always be clean for better performance and safety inspections.",
        "If the belly of the plane is black with oil, that means there is a bad leak from the engine, and that's how fires start.",
        "Ask to see aircraft logbooks to verify maintenance history and compliance."
      ]
    },
    {
      icon: DollarSign,
      title: "Are Packages a Good Thing?",
      points: [
        "In short, packages are not designed to help the client.",
        "For the flight school, best case is you buy a package and you don't use it all, or you have some left and choose to add a more to use that last of it. And most will not return the left overs.",
        "If you finish ahead of schedule, you're essentially paying for someone else's training."
      ]
    },
    {
      icon: Users,
      title: "Guaranteed CFI Jobs?",
      points: [
        "You might have seen schools who say they guarantee they will hire anyone who trains in house, but is that a good thing?",
        "Any flight school would hire someone they train if they are great, but some companies need the bodies more than the skills so they lower the bar.",
        "Just because someone has the certificate doesn't mean they should automatically get the job."
      ]
    },
    {
      icon: BookOpen,
      title: "Part 61 vs 141",
      points: [
        "Part 141 schools have a syllabus that has been authorized by the FAA, but the schools can't stray form that authorized training.",
        "Part 61 allows for the instructor to be able to tailor make the lessons to what needs the students need."
      ]
    },
    {
      icon: Thermometer,
      title: "Planes & Pilots Hate The Heat",
      points: [
        "There is a danger to summer flying, THE HEAT!",
        "Planes and pilot can both over heat, and that is why most planes have a max operating temperature of 40C/104F.",
        "Some flight schools will fly beyond this to keep bringing in the money, but after 40C/104F the dangers start building rapidly."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-24 mt-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Picking the Right Flight School
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto animate-fade-in">
            At Van Nuys Airport there are multiple places to get your training done, but everyone has the same questions. 
            How do you know where to go? Is this school safe? Do I want a package? Here is a quick and simple guide to help pick the correct place.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="shadow-elegant hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-elegant">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Aviation Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                At Hot Shot Aviation, we believe in transparency, safety, and personalized training. 
                Our airline captain instructors provide the expertise you need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  onClick={handleContactClick}
                >
                  Contact Us Today
                </Button>
                <Link to="/">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PickingFlightSchool;