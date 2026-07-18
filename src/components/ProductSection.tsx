import React, { useState } from 'react';
import { PRODUCTS, BUSINESS_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Star, Search, CheckCircle2 } from 'lucide-react';

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[20%] right-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-mono font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-4">
            STATIONERY PRODUCTS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Explore Our Stationery & Accessories Inventory
          </h2>
          <p className="text-slate-600">
            We carry premium, durable supplies from top school & office brands. Browse through categories or search for specific notebooks, files, and pens.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12 bg-slate-50 p-6 rounded-2xl border border-slate-200/50 shadow-sm">
          {/* Categories Tab Bar */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                }}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Real-time search query box */}
          <div className="relative w-full lg:max-w-xs flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-slate-900 placeholder:text-slate-400 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 hover:bg-white rounded-2xl overflow-hidden border border-slate-200/50 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  {/* Product Image Panel */}
                  <div className="relative bg-slate-200 overflow-hidden aspect-square flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Popular Badge */}
                    {product.isPopular && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                        <Star size={10} className="fill-white" />
                        <span>POPULAR Choice</span>
                      </div>
                    )}

                    {/* Stock status watermark */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-slate-800 text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-slate-100 flex items-center gap-1 shadow-sm">
                      <CheckCircle2 size={10} className="text-emerald-500" />
                      <span>In Stock</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-orange-500 font-mono text-[11px] font-bold uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h3 className="font-display font-extrabold text-base text-slate-900 mt-1 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Check Availability CTA */}
                    <a
                      href={`https://wa.me/918605431919?text=Hello%20Shivkrupa%20Team!%20I%20am%20interested%20in%20checking%20availability%20and%20pricing%20for%3A%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noopener noreferrer"
                      className="w-full mt-2 py-2.5 bg-blue-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={13} />
                      <span>Check on WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300/80">
            <p className="text-slate-500 font-medium">No products match your active search filter.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchTerm('');
              }}
              type="button"
              className="mt-4 text-blue-600 hover:text-orange-500 text-sm font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Interactive Disclaimer */}
        <div className="mt-12 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
          <p className="text-slate-500 text-xs leading-relaxed max-w-2xl mx-auto">
            * Note: Since product stock rotates weekly, we invite customers to ping our store directly via WhatsApp to verify current inventory counts or request bulk packs for schools/exams.
          </p>
        </div>

      </div>
    </section>
  );
}
