import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/enhanced-button';
import { MessageCircle, Menu, X, Truck } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="gradient-primary rounded-lg p-2">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Super Quick Movers
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-smooth hover:text-primary ${
                    isActive(item.path)
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => window.open('https://wa.me/+971559615397', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-smooth"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border shadow-elegant">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 px-3 rounded-lg transition-smooth ${
                    isActive(item.path)
                      ? 'text-primary bg-accent font-medium'
                      : 'text-muted-foreground hover:text-primary hover:bg-accent'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full mt-2"
                onClick={() => {
                  window.open('https://wa.me/+971559615397', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="floating"
          size="lg"
          onClick={() => window.open('https://wa.me/+971559615397', '_blank')}
          className="rounded-full shadow-lg"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Contact Us
        </Button>
      </div>
    </>
  );
};

export default Navigation;