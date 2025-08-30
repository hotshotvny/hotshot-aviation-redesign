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
                  src="/lovable-uploads/5bf8e888-a868-4018-b41a-951474847c1f.png" 
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
                  src="/lovable-uploads/bbc95750-e052-456c-a0ea-6625a08a010a.png" 
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
          <div className="border-t border-muted/20 mb-8"></div>
          
          {/* Company Info */}
          <div className="text-center">
            <p className="mb-2 font-semibold text-xl">Hot Shot Aviation</p>
            <p className="text-sm opacity-80 mb-4">
              Premium Flight Training & Aircraft Rental | Operated by Part 121 Airline Captains
            </p>
            <p className="text-xs opacity-60">
              © {new Date().getFullYear()} Hot Shot Aviation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
