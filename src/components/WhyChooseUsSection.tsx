import React from 'react';
import { WHY_CHOOSE_US } from '../data';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative side panels */}
      <div className="absolute top-[10%] left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-64 h-64 bg-orange-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-mono font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-4">
            OUR PRINCIPLES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Why Hadapsar Chooses Shivkrupa
          </h2>
          <p className="text-slate-600">
            We hold ourselves to extreme benchmarks of clarity, speed, and community friendliness, building long-term relationships with schools, coaching institutes, and offices.
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            // Resolve Lucide icons dynamically
            const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Check;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
                className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/60 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Icon header */}
                  <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 group-hover:text-orange-500 shadow-sm border border-slate-100 flex items-center justify-center transition-all duration-300 mb-5">
                    <IconComponent size={22} className="stroke-[2] group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Highlight title */}
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Highlight details */}
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[10px] font-mono font-bold text-orange-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Guaranteed</span>
                  <LucideIcons.CheckCircle2 size={11} className="text-orange-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Micro statistics or Trust banner */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/50 flex flex-wrap justify-around items-center gap-6 text-center">
          <div>
            <span className="block font-display font-black text-3xl sm:text-4xl text-slate-900">⭐ 5.0</span>
            <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Google Rating</span>
          </div>
          <div className="hidden sm:block h-10 w-[1px] bg-slate-200" />
          <div>
            <span className="block font-display font-black text-3xl sm:text-4xl text-slate-900">100%</span>
            <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Pune Owned</span>
          </div>
          <div className="hidden sm:block h-10 w-[1px] bg-slate-200" />
          <div>
            <span className="block font-display font-black text-3xl sm:text-4xl text-slate-900">15+</span>
            <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Full Services</span>
          </div>
        </div>

      </div>
    </section>
  );
}
