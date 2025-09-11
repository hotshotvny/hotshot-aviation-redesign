import { Button } from '@/components/ui/button';
import { Plane, Award, Users } from 'lucide-react';
import heroImage from '@/assets/aviation-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up stagger-1">
            FLY WITH LA'S BEST
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up stagger-2">
            Premium flight training and aircraft rental operated by two Part 121 Airline Captains
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up stagger-3">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 interactive-button hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Training
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white text-primary hover:bg-white hover:text-primary interactive-button transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Rent Aircraft
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in-up stagger-4 hover-lift">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover-glow animate-float">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">In-House DPE</h3>
              <p className="text-white/80">Designated Pilot Examiner on staff for convenient checkrides</p>
            </div>
            
            <div className="text-center animate-fade-in-up stagger-5 hover-lift">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover-glow animate-float" style={{animationDelay: '1s'}}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Airline Captains</h3>
              <p className="text-white/80">Operated by two experienced Part 121 Airline Captains</p>
            </div>
            
            <div className="text-center animate-fade-in-up stagger-6 hover-lift">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover-glow animate-float" style={{animationDelay: '2s'}}>
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Modern Fleet</h3>
              <p className="text-white/80">Well-maintained aircraft from single to multi-engine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;