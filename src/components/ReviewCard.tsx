import React from 'react';
import { Star } from 'lucide-react';
import { ReviewItem } from '../types';
import { motion } from 'motion/react';

interface ReviewCardProps {
  key?: string;
  review: ReviewItem;
  index: number;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  // Generate random avatar background colors based on name length for visual diversity
  const colors = [
    'bg-blue-500 text-white',
    'bg-orange-500 text-white',
    'bg-emerald-500 text-white',
    'bg-indigo-500 text-white',
    'bg-teal-500 text-white'
  ];
  const colorIndex = review.name.length % colors.length;
  const avatarColor = colors[colorIndex];
  const initial = review.name.charAt(0).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between relative overflow-hidden"
    >
      <div>
        {/* Google verification indicator top right */}
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-slate-100 text-slate-500 text-[10px] px-2 py-1 rounded-full font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Verified Local</span>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center space-x-1 text-amber-400 mb-4" aria-label={`Rating: ${review.rating} out of 5 stars`}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-amber-400" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
          "{review.text}"
        </p>
      </div>

      {/* User Information */}
      <div className="flex items-center space-x-3 pt-4 border-t border-slate-50">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold ${avatarColor}`}>
          {initial}
        </div>
        <div>
          <h4 className="font-display font-bold text-sm text-slate-900 leading-none mb-1">
            {review.name}
          </h4>
          <span className="text-xs text-slate-400 font-medium">
            {review.date}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
