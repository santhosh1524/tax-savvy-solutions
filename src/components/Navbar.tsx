
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold flex items-center space-x-2 text-primary"
        >
          <span className="text-accent">Tax</span>
          <span>Savvy</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.title} 
                to={item.path} 
                className="nav-link text-foreground hover:text-accent transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <Button asChild variant="ghost" className="hover:bg-accent/10 hover:text-accent">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="cta-button">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-40 md:hidden transition-all duration-300 transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.title} 
              to={item.path} 
              className="text-foreground hover:text-accent py-2 px-4 rounded hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
            <Button asChild variant="outline" className="w-full">
              <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
            </Button>
            <Button asChild className="cta-button w-full">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
