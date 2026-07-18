import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  const highlights = [
    {
      title: "Quality Service",
      desc: "Priding ourselves on crisp print outputs, neat binding, and durable premium lamination.",
      icon: Award,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Fast Turnarounds",
      desc: "High-speed photocopying machines designed to finish bulk documents in seconds.",
      icon: Zap,
      color: "text-orange-600 bg-orange-50"
    },
    {
      title: "Affordable Prices",
      desc: "Pocket-friendly rates designed to fit student and small business budgets.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Friendly Staff",
      desc: "Empathetic customer service assisting you in form-filling, sizing, and binding choice.",
      icon: HeartHandshake,
      color: "text-indigo-600 bg-indigo-50"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-orange-100/30 rounded-full blur-2xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
         

          {/* Right Column: Copy & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          > </motion.div>
            <span className="text-blue-600 font-mono font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-4">
              ABOUT SHIVKRUPA
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
              Your Premier Destination for Stationery and Copy Services
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Located in the heart of Hadapsar, Pune, <strong className="text-slate-900 font-semibold">Shivkrupa Stationery & Xerox Centre</strong> has been a trusted cornerstone of the local community. We support students, schools, remote workers, and businesses with reliable document xerox, multi-size printing, quick form filling, and complete office supplies. We combine high-speed printing technology with a customer-centric heart to ensure you get what you need, right on time, at prices that respect your wallet.
            </p>

            {/* Highlight Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${item.color}`}>
                      <Icon size={20} className="stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </section>
  );
}
