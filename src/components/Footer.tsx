import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '@/assets/otc-logo.png';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Oxnard Trading & Contracting"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              High-performance passive fire protection and acoustic seals designed for the most demanding applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-brand-cyan transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <div className="space-y-2">
              {[
                'Custom Joinery Seal Solutions',
                'Industrial Fire Safety',
                'Advanced Fire Protection',
                'Fire Stopping Products'
              ].map((service) => (
                <p key={service} className="text-sm text-muted-foreground">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Barwa Tower, C-ring road, Alsaad, Doha, Qatar
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-cyan" />
                <p className="text-sm text-muted-foreground">+974 7010 9662</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-cyan" />
                <p className="text-sm text-muted-foreground">sales@oxnardtc.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Oxnard Trading & Contracting L.L.C. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Fire Protection • Acoustic Solutions • Qatar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;