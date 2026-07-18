import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FloatingStationery from './components/FloatingStationery';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ProductSection from './components/ProductSection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import mainImage from "./components/main.png";
import { BUSINESS_INFO } from './data';
import { Phone, MessageSquare, MapPin, ChevronDown, Award, ShieldCheck, Printer } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer hook to automatically track active section while scrolling
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'why-us', 'products', 'reviews', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for sticky nav
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeroScroll = () => {
    const element = document.getElementById('about');
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
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col relative">
      {/* Sticky Top Header Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Container */}
      <main className="flex-grow pt-[64px] sm:pt-[80px]">
        
        {/* 1. Large Hero Section */}
        <section
          id="home"
          className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/20 to-orange-50/20 py-16 overflow-hidden border-b border-slate-100"
        >
          {/* Floating Stationery animated background */}
          <FloatingStationery />

          {/* Background circles */}
          <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-100/30 blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-orange-100/25 blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Left Content Column (7 Cols) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
                {/* Google 5.0 Star Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4.5 py-1.5 rounded-full shadow-sm border border-slate-200/80 mx-auto lg:mx-0"
                >
                  <span className="flex text-amber-400">
                    {'★'.repeat(5)}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700">
                    5.0 Google Rating
                  </span>
                </motion.div>

                {/* Main Titles */}
                <div className="space-y-3">
                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-[1.1] tracking-tight"
                  >
                    Shivkrupa Stationery <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500">
                      & Xerox Centre
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-slate-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  >
                    Your One Stop Solution for Xerox, Printing & Stationery Needs in Hadapsar, Pune.
                  </motion.p>
                </div>

                {/* Direct Action CTA Buttons Group */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
                >
                  {/* Call Now */}
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:scale-97 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-blue-100 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Phone size={18} className="fill-white" />
                    <span>Call Now</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 active:scale-97 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-100 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={18} />
                    <span>WhatsApp</span>
                  </a>

                  {/* Directions */}
                  <a
                    href={BUSINESS_INFO.directionUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 active:scale-97 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all text-center flex items-center justify-center gap-2"
                  >
                    <MapPin size={18} />
                    <span>Get Directions</span>
                  </a>
                </motion.div>

                {/* Core trust tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-4 border-t border-slate-200/50"
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Printer size={14} className="text-blue-600" />
                    <span>High-Speed Xerox</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Award size={14} className="text-orange-500" />
                    <span>Premium Stationery</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span>Affordable & Fast</span>
                  </div>
                </motion.div>
              </div>

              {/* Hero Right Visual Column (5 Cols) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5 relative"
              >
                {/* Decorative border circle */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-orange-500/10 rounded-3xl blur-xl" />
                
                {/* High quality visual display frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[5/4] sm:aspect-[4/3] lg:aspect-square group bg-white">
                  <img
  src={mainImage}
  alt="Shivkrupa Stationery & Xerox Centre"
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
/>
                  
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                  {/* Corner tag */}
                  <div className="absolute top-4 right-4 bg-orange-500 text-white font-mono font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                    Hadapsar's Choice
                  </div>
                </div>

                {/* Floating mini stats sticker */}
                <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <span className="block font-display font-black text-slate-900 text-lg leading-none">⭐ 5.0</span>
                    <span className="text-[10px] text-slate-500 font-semibold font-mono uppercase">Google Rating</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Scroll down indicator arrow */}
            <div className="mt-16 flex justify-center">
              <button
                onClick={handleHeroScroll}
                type="button"
                className="animate-bounce p-2 bg-white text-slate-500 hover:text-blue-600 rounded-full shadow border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Scroll down to About Section"
              >
                <ChevronDown size={22} className="stroke-[2.5]" />
              </button>
            </div>

          </div>
        </section>

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Services Catalog Section */}
        <ServicesSection />

        {/* 4. Why Choose Us Highlight Grid Section */}
        <WhyChooseUsSection />

        {/* 5. Products Catalog Grid Section */}
        <ProductSection />

        {/* 6. Customer Reviews Section */}
        <ReviewsSection />

        {/* 7. Image Gallery & Lightbox Section */}
        <GallerySection />

        {/* 8. Contact Form, map and working hours section */}
        <ContactSection />

      </main>

      {/* Footer copyright, coordinate address & quick links */}
      <Footer />

      {/* Sticky Bottom Floating Shortcuts */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
