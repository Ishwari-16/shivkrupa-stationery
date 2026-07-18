import React, { useState } from 'react';
import { SERVICES } from '../data';
import ServiceCard from './ServiceCard';
import { LayoutGrid, Printer, BookOpen, Laptop } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'printing' | 'stationery' | 'other'>('all');

  const filterTabs = [
    { value: 'all', label: 'All Services', icon: LayoutGrid },
    { value: 'printing', label: 'Xerox & Printing', icon: Printer },
    { value: 'stationery', label: 'School & Office Stationery', icon: BookOpen },
    { value: 'other', label: 'Online & Digital Help', icon: Laptop }
  ] as const;

  const filteredServices = SERVICES.filter(service => {
    if (activeTab === 'all') return true;
    return service.category === activeTab;
  });

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle decorative background prints */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-mono font-bold text-xs uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded-full inline-block mb-4">
            WHAT WE OFFER
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Professional Document & Stationery Solutions
          </h2>
          <p className="text-slate-600">
            From single-page photocopies to school long books and online form filling, we handle all your document, binding, and scholastic requirements with utmost precision.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const TabIcon = tab.icon;
            const isSelected = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                type="button"
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 scale-102'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/60'
                }`}
                aria-label={`Filter services by ${tab.label}`}
              >
                <TabIcon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Container */}
        <motion.div 
          layout 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ServiceCard service={service} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact CTA banner inside services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="font-display font-extrabold text-2xl mb-2">Need bulk print copies or custom binding?</h3>
            <p className="text-blue-100 text-sm max-w-xl">
              We offer special discounts for volume commercial photocopying, school question papers, and official bound files. Let us know your page count!
            </p>
          </div>
          <a
            href="https://wa.me/918605431919?text=Hello%2C%20I%20have%20a%20bulk%20photocopying%20or%20printing%20requirement."
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-100 text-blue-600 font-extrabold px-6 py-3.5 rounded-2xl transition-all shadow shadow-blue-800/10 hover:shadow-lg hover:scale-103 inline-flex items-center gap-2"
          >
            Get Bulk Quote
          </a>
        </motion.div>

      </div>
    </section>
  );
}
