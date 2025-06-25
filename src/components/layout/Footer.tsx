import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-alt pt-12 pb-6 px-2 sm:px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/Full-AheadLogo.jpg" 
                alt="Full Ahead Logo" 
                className="h-10 mr-3" 
              />
              <span className="text-xl font-semibold">
                <span className="text-primary">Full</span> Ahead
              </span>
            </div>
            <p className="text-secondary-light mb-4">
              Excellence in ship management, safety, and operational performance since 2019.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-light hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-light hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-secondary-light hover:text-primary transition-colors">
                  Our Managed Fleet
                </Link>
              </li>
              <li>
                <Link to="/licences" className="text-secondary-light hover:text-primary transition-colors">
                  Licences
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-secondary-light hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-secondary-light hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-light hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-secondary-light">
                  Office No 306, Town Centre II, Village Sahar Cargo, Andheri-Kurla Rd, Andheri (E), Mumbai 400059, India
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:dah@fullahead.in" className="text-secondary-light hover:text-primary transition-colors">
                  dah@fullahead.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-2 flex-shrink-0" />
                <a href="tel:+919819440445" className="text-secondary-light hover:text-primary transition-colors">
                  +91 98194 40445
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-light text-sm">
              &copy; {new Date().getFullYear()} Full Ahead Marine & Offshore PVT. LTD. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-secondary-light hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-light hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;