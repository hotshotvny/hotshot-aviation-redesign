import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Fleet from '@/components/Fleet';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Contact />
      </main>
      
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Partners Section */}
          <div className="mb-8">
            <h3 className="text-center text-lg font-semibold mb-6 text-muted-foreground">
              Trusted Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="flex items-center justify-center h-16 w-32 opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  src="/lovable-uploads/b7b32ebe-2a2e-4da1-8f11-e4fd3ebd1009.png" 
                  alt="AOPA - Aircraft Owners and Pilots Association" 
                  className="max-h-12 max-w-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-32 opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  src="/lovable-uploads/5a08b5c9-da80-44bf-8a7d-245e96bc7cc2.png" 
                  alt="Cessna and Beechcraft by Textron Aviation" 
                  className="max-h-12 max-w-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-32 opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  src="/lovable-uploads/f234933b-72fc-436f-be65-43034c81823e.png" 
                  alt="Flight Schedule Pro" 
                  className="max-h-12 max-w-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-32 opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  src="/lovable-uploads/ad7b7081-3a84-4166-8e50-dbcf3422033f.png" 
                  alt="Swift Fuels" 
                  className="max-h-12 max-w-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-32 opacity-70 hover:opacity-100 transition-opacity col-span-2 md:col-span-1">
                <img 
                  src="/lovable-uploads/37610d0a-1dda-44ca-9deb-2c02fe8a314b.png" 
                  alt="Piper Aircraft" 
                  className="max-h-12 max-w-full object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          </div>
          
          {/* Separator */}
          <div className="border-t border-muted/20 my-12"></div>
          
          {/* Main Footer Content */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Hot Shot Aviation
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              Elite flight training and aircraft rental services operated by experienced Part 121 airline captains. 
              Your gateway to professional aviation excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>FAA Part 61 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Professional Airline Captain Instructors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Modern Fleet & Advanced Training</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-muted/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} Hot Shot Aviation. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground/80 mt-1">
                  Elevating pilots to new heights since inception
                </p>
              </div>
              <div className="flex space-x-6 text-xs text-muted-foreground">
                <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
                <span className="hover:text-primary transition-colors cursor-pointer">Safety Standards</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
