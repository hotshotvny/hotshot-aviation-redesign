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
      
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2 font-semibold">Hot Shot Aviation</p>
          <p className="text-sm opacity-80">
            Premium Flight Training & Aircraft Rental | Operated by Part 121 Airline Captains
          </p>
          <p className="text-xs opacity-60 mt-4">
            © {new Date().getFullYear()} Hot Shot Aviation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
