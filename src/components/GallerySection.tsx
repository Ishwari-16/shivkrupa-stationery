import React, { useState } from 'react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, Image } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleOpenLightbox = (id: string) => {
    const index = filteredItems.findIndex(item => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradient sphere */}
      <div className="absolute top-[10%] left-0 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-mono font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-4">
            GALLERY
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Take a Virtual Tour of Shivkrupa
          </h2>
          <p className="text-slate-600">
            Click on any photo to launch the high-resolution interactive lightbox. Explore our machinery, printing workstations, and stationery shelves.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setLightboxIndex(null); // Reset lightbox when filter changes
              }}
              type="button"
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                activeCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 scale-102'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200/50'
              }`}
              aria-label={`Filter gallery by ${cat.label}`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(item.id)}
                className="group relative rounded-3xl overflow-hidden aspect-4/3 cursor-pointer shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-300"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />

                {/* Always visible minimal title overlay on bottom of cards */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4 z-10 sm:hidden">
                  <h4 className="font-display font-bold text-white text-sm">{item.title}</h4>
                </div>

                {/* Visual hover contents on desktop */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white pointer-events-none">
                  {/* Category Pill */}
                  <span className="self-start bg-orange-500/90 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {item.category.replace('_', ' ')}
                  </span>

                  {/* Descriptions */}
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-orange-400 font-bold text-xs mb-1">
                      <Eye size={14} />
                      <span>Click to Zoom</span>
                    </div>
                    <h3 className="font-display font-extrabold text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Lightbox Popup Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
            >
              {/* Close backdrop trigger */}
              <div className="absolute inset-0 z-0" onClick={() => setLightboxIndex(null)} />

              {/* Lightbox content container */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="relative z-10 max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 flex flex-col md:flex-row shadow-2xl"
              >
                {/* Photo frame */}
                <div className="relative aspect-4/3 md:w-3/5 bg-slate-950 flex items-center justify-center">
                  <img
                    src={filteredItems[lightboxIndex].image}
                    alt={filteredItems[lightboxIndex].title}
                    className="w-full h-full object-cover max-h-[70vh]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Left Navigation control */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    type="button"
                    className="absolute left-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-800 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Right Navigation control */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    type="button"
                    className="absolute right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-800 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Photo metadata description card */}
                <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between text-white bg-slate-900">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-orange-500/20 text-orange-400 border border-orange-500/20 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                        {filteredItems[lightboxIndex].category.replace('_', ' ')}
                      </span>
                      <button
                        onClick={() => setLightboxIndex(null)}
                        type="button"
                        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-all focus:outline-none"
                        aria-label="Close Lightbox"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <h3 className="font-display font-black text-xl text-white mb-2">
                      {filteredItems[lightboxIndex].title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {filteredItems[lightboxIndex].description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-slate-500 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-blue-400 font-mono">
                      <Image size={13} />
                      <span>Photo {lightboxIndex + 1} of {filteredItems.length}</span>
                    </span>
                    <span>© Shivkrupa Store</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
