import React from 'react';
import { REVIEWS, BUSINESS_INFO } from '../data';
import ReviewCard from './ReviewCard';
import { Star, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Rating Overview Header Block */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/60 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <span className="text-orange-600 font-mono font-bold text-xs uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full inline-block mb-3">
              GOOGLE RATING
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Loved by Our Local Community
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-md">
              Priding ourselves on transparent rates, extreme print quality, and reliable school notebook availability in Sasane Nagar & Handewadi.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-orange-50/50 rounded-2xl border border-blue-100 flex-shrink-0 w-full md:w-auto">
            <span className="font-display font-black text-5xl text-blue-600 leading-none">5.0</span>
            <div className="flex items-center space-x-1 text-amber-400 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400" />
              ))}
            </div>
            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="text-xs text-slate-600 font-semibold underline hover:text-blue-600 transition-colors"
            >
              Based on {BUSINESS_INFO.reviewsCount} Google Reviews
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review, idx) => (
            <ReviewCard key={review.id} review={review} index={idx} />
          ))}
        </div>

        {/* Feedback CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-xl mx-auto p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
        >
          <div className="flex items-center justify-center gap-2 text-slate-900 mb-2 font-display font-bold text-base">
            <MessageCircle size={18} className="text-blue-600" />
            <span>Have you visited our shop?</span>
          </div>
          <p className="text-slate-500 text-xs mb-4">
            Your support fuels us! Share your experience on Google Maps to help students and locals find reliable stationery services.
          </p>
          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="inline-block bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm"
          >
            Leave a Review on Google
          </a>
        </motion.div>

      </div>
    </section>
  );
}
