import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Products', href: '#products' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center space-x-2 group focus:outline-none"
            aria-label="Shivkrupa Stationery & Xerox Centre Home"
          >
            <div className="bg-blue-600 group-hover:bg-orange-500 text-white p-2 rounded-xl transition-colors duration-300 shadow-sm flex items-center justify-center">
              <ShoppingBag size={22} className="stroke-[2.2]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                SHIVKRUPA
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-semibold text-orange-500 uppercase tracking-widest">
                Stationery & Xerox
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Desktop Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Call to Action CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow shadow-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Call Shivkrupa Team now"
            >
              <Phone size={15} className="fill-white" />
              <span>+91 86054 31919</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-slate-600 hover:text-blue-600 hover:bg-slate-50 p-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Slide-down Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-[64px] left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-slate-200 shadow-xl transition-all duration-300 transform ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600 pl-3'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 pl-4'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-blue-700 transition-colors"
            >
              <Phone size={18} />
              <span>Call +91 86054 31919</span>
            </a>
            <a
              href={BUSINESS_INFO.directionUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 rounded-xl font-semibold text-center hover:bg-slate-200 transition-colors"
            >
              <MapPin size={18} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
