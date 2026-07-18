import React from 'react';
import { BUSINESS_INFO, SERVICES } from '../data';
import { ShoppingBag, Phone, MapPin, Mail, ChevronRight, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Products Stock', href: '#products' },
    { label: 'Gallery Tour', href: '#gallery' },
    { label: 'Inquiry & Contact', href: '#contact' },
  ];

  const popularServices = SERVICES.slice(0, 5);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: Brand & Desc (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-2 focus:outline-none"
              aria-label="Shivkrupa home navigation"
            >
              <div className="bg-blue-600 text-white p-2 rounded-xl shadow">
                <ShoppingBag size={20} className="stroke-[2.2]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-black text-lg text-white tracking-tight">
                  SHIVKRUPA
                </span>
                <span className="text-[10px] font-mono font-semibold text-orange-500 uppercase tracking-widest">
                  Stationery & Xerox
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 text-sm leading-relaxed pt-2">
              The premier stationery store and photocopy xerox center in Hadapsar, Pune. Delivering high-quality printouts, laminated records, custom binding folders, and a complete catalog of academic and corporate supplies.
            </p>

            {/* Social media placeholders */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Shivkrupa Facebook Profile"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-orange-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Shivkrupa Instagram Profile"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-400 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Shivkrupa Twitter Profile"
              >
                <Twitter size={16} />
              </a>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Shivkrupa Google Maps Profile"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 Cols) */}
          <div className="lg:col-span-2.5">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors duration-200 flex items-center gap-1 group text-slate-400"
                  >
                    <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Services (2.5 Cols) */}
          <div className="lg:col-span-2.5">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {popularServices.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    className="hover:text-white transition-colors duration-200 flex items-center gap-1 group text-slate-400"
                  >
                    <ChevronRight size={14} className="text-orange-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800">
              Store Contact
            </h3>
            
            <div className="space-y-3.5 text-sm">
              {/* Address Link */}
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="flex gap-3 items-start group hover:text-white transition-colors text-slate-400"
              >
                <MapPin size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs">
                  {BUSINESS_INFO.address}
                </span>
              </a>

              {/* Call link */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex gap-3 items-center group hover:text-white transition-colors text-slate-400"
              >
                <Phone size={16} className="text-blue-500 flex-shrink-0" />
                <span className="font-semibold">{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              {/* Mail link */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex gap-3 items-center group hover:text-white transition-colors text-slate-400"
              >
                <Mail size={16} className="text-blue-500 flex-shrink-0" />
                <span className="text-xs">{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright alignment */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Shivkrupa Stationery & Xerox Centre. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href={BUSINESS_INFO.mapsUrl} target="_blank" referrerPolicy="no-referrer" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <span>Google Maps</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
