import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { SCHOOL_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-montessori-dark text-white pt-20 pb-10 mt-12">
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 transform -translate-y-[99%]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#3D405B"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
               <div className="w-12 h-12 bg-montessori-accent rounded-2xl rotate-6 flex items-center justify-center text-montessori-dark font-bold text-2xl font-hand">AN</div>
               <span className="font-bold text-2xl font-hand">Ample's Nest</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Where little minds grow with purpose. A nurturing environment tailored for discovery and exploration.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href={SCHOOL_INFO.social.facebook} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-montessori-secondary hover:text-white transition hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href={SCHOOL_INFO.social.instagram} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-montessori-secondary hover:text-white transition hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-hand mb-6 text-montessori-accent">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 5).map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-montessori-accent transition flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-montessori-secondary"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="text-xl font-bold font-hand mb-6 text-montessori-accent">Contact Us</h3>
             <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="shrink-0 text-montessori-secondary" size={18} />
                  <span>{SCHOOL_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="shrink-0 text-montessori-secondary" size={18} />
                  <span>{SCHOOL_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="shrink-0 text-montessori-secondary" size={18} />
                  <span>{SCHOOL_INFO.email}</span>
                </li>
             </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold font-hand mb-6 text-montessori-accent">School Hours</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="shrink-0 text-montessori-secondary" size={18} />
                <span>Mon - Fri: {SCHOOL_INFO.hours}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="shrink-0 text-gray-500" size={18} />
                <span className="text-gray-500">Sat - Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ample’s Nest Montessori. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;