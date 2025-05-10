
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
              <span className="text-teal">Tax</span>
              <span>Savvy</span>
            </Link>
            <p className="text-gray-300 max-w-xs">
              Professional tax solutions designed to maximize your savings and secure your financial future.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="hover:text-teal transform transition-transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-teal transform transition-transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-teal transform transition-transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-teal transform transition-transform hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b border-teal/50 pb-2 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/personal-tax" className="text-gray-300 hover:text-teal flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Personal Tax Planning
                </Link>
              </li>
              <li>
                <Link to="/services/business-tax" className="text-gray-300 hover:text-teal flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Business Tax Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/estate-planning" className="text-gray-300 hover:text-teal flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link to="/services/investment-tax" className="text-gray-300 hover:text-teal flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Investment Tax Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b border-teal/50 pb-2 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-teal">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-teal">Services</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-teal">FAQ</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-teal">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-teal">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-teal">Client Portal</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b border-teal/50 pb-2 mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe for tax tips and updates</p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-navy-light text-white border-teal/30 focus-visible:ring-teal"
              />
              <Button className="bg-teal text-navy hover:bg-teal-light transition">
                Subscribe
              </Button>
            </div>
            <div className="pt-4 space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2 text-teal" />
                <span>support@taxsavvy.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2 text-teal" />
                <span>(800) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} TaxSavvy Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-teal">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-teal">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-teal">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
