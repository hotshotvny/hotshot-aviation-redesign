import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
// Using uploaded logo directly

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: isHomePage ? '#home' : '/#home', label: 'Home' },
    { href: isHomePage ? '#about' : '/#about', label: 'About' },
    { href: isHomePage ? '#fleet' : '/#fleet', label: 'Fleet' },
    { href: isHomePage ? '#training-programs' : '/#training-programs', label: 'Training' },
    { href: isHomePage ? '#contact' : '/#contact', label: 'Contact' },
  ];

  const pageLinks = [
    { to: '/flight-school-guide', label: 'Flight School Guide' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
        <div className="flex items-center">
            <Link to="/">
              <img src="/lovable-uploads/7177dca4-2307-404a-87fe-ba0d3c05090e.png" alt="Hot Shot Aviation" className="h-8 sm:h-10 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
              {pageLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                variant="hero" 
                size="sm"
                className="mobile-touch-target"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Go Fly!
              </Button>
            </div>
          </div>

          {/* Tablet/Mobile Navigation */}
          <div className="hidden md:flex lg:hidden items-baseline space-x-4 text-sm">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/flight-school-guide"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Guide
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="mobile-touch-target"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 sm:h-6 w-5 sm:w-6" /> : <Menu className="h-5 sm:h-6 w-5 sm:w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-background/95 backdrop-blur-sm border-b border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary hover:bg-secondary/10 block px-4 py-3 rounded-md transition-colors duration-300 mobile-touch-target text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary hover:bg-secondary/10 block px-4 py-3 rounded-md transition-colors duration-300 mobile-touch-target text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full mobile-touch-target"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                Go Fly!
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;