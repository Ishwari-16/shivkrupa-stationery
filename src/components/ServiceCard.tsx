import React from 'react';
import * as LucideIcons from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'motion/react';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // Dynamically resolve the icon from LucideIcons safely
  const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.FileText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-100 hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full"
    >
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-orange-50/30 rounded-bl-full z-0 pointer-events-none group-hover:scale-110 transition-transform duration-500" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Service Icon with background sphere */}
          <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center mb-5 shadow-sm bg-blue-50">
            {service.image ? (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                <IconComponent size={26} className="stroke-[1.8] group-hover:rotate-6 transition-transform duration-300" />
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        {/* Arrow prompt with blue line hover */}
        <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-orange-500 transition-colors duration-300 mt-auto">
          <span className="mr-1.5">Inquire now</span>
          <LucideIcons.ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}
