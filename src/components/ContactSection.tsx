import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Check, X } from 'lucide-react';
import { ContactFormInput } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    phone: '',
    serviceRequired: 'Black & White Xerox',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call to process submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form on success
      setFormData({
        name: '',
        phone: '',
        serviceRequired: 'Black & White Xerox',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[30%] right-0 w-64 h-64 bg-orange-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-mono font-bold text-xs uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded-full inline-block mb-4">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Visit Our Store or Send an Inquiry
          </h2>
          <p className="text-slate-600">
            Have questions about document specifications, prices, or need to send file attachments for quick prints? Drop us a line below or contact us on WhatsApp!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Coordinates and Location (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-200/50 flex-grow">
              <h3 className="font-display font-black text-2xl text-slate-900 mb-6">
                Shivkrupa Store Details
              </h3>

              <div className="space-y-6">
                {/* Physical Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800 uppercase tracking-wider mb-1">
                      Our Location
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Mobile Phone Call link */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800 uppercase tracking-wider mb-1">
                      Phone Number
                    </h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-blue-600 font-bold hover:text-orange-500 transition-colors text-sm"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <span className="text-slate-400 text-xs block">Click to place instant call</span>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800 uppercase tracking-wider mb-1">
                      Email Placeholder
                    </h4>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Opening / Working Hours */}
                <div className="flex gap-4 items-start pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div className="w-full">
                    <h4 className="font-display font-bold text-sm text-slate-800 uppercase tracking-wider mb-2">
                      Store Hours
                    </h4>
                    <div className="space-y-1.5 w-full">
                      {BUSINESS_INFO.workingHours.map((wh, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs text-slate-600">
                          <span className="font-semibold">{wh.days}</span>
                          <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-800 font-mono">
                            {wh.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 min-w-[140px] text-center bg-blue-600 hover:bg-blue-700 active:scale-97 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <Phone size={14} />
                  <span>Call Store</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] text-center bg-emerald-500 hover:bg-emerald-600 active:scale-97 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Micro Rating Indicator */}
            <div className="bg-white/75 p-4 rounded-2xl border border-slate-200/50 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Google Local Shop Verification</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                Active
              </span>
            </div>
          </div>

          {/* Right Column: Google map and Form combined (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Contact Form panel */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-200/50 relative">
              <h3 className="font-display font-black text-xl text-slate-900 mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 px-4 py-3 border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 px-4 py-3 border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Service Required select dropdown */}
                <div>
                  <label htmlFor="serviceRequired" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Required
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 text-slate-900 px-4 py-3 border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Bulk Stationery Purchase">Bulk Stationery Purchase</option>
                    <option value="Other Requirements">Other Requirements / Multiple Services</option>
                  </select>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Specifications
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe print counts, black & white or colour, binders requested, or specific custom dimensions..."
                    className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 px-4 py-3 border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-blue-600 hover:bg-orange-500 disabled:bg-blue-400 text-white font-extrabold py-3.5 rounded-xl transition-all duration-300 shadow shadow-blue-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Status Notifications */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-white/98 rounded-3xl p-8 flex flex-col items-center justify-center text-center z-20"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                      <Check size={32} strokeWidth={2.5} />
                    </div>
                    <h4 className="font-display font-black text-2xl text-slate-900 mb-2">
                      Inquiry Sent Successfully!
                    </h4>
                    <p className="text-slate-500 text-sm max-w-sm mb-6">
                      Thank you for contacting Shivkrupa. We have received your inquiry. You can also send immediate file attachments on WhatsApp for immediate print services!
                    </p>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      type="button"
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 bg-red-50 text-red-700 border border-red-100 rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <X size={16} />
                      <span>Please complete required Name & Phone fields.</span>
                    </div>
                    <button onClick={() => setSubmitStatus(null)} type="button" className="text-red-500">
                      <X size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Google Map iframe container */}
            <div className="bg-white p-4 rounded-3xl shadow-md border border-slate-200/50 overflow-hidden aspect-16/10 sm:aspect-21/9 lg:aspect-16/9 relative group">
              <iframe
                title="Shivkrupa Stationery & Xerox Centre location map"
                src="https://maps.google.com/maps?q=Shivkrupa%20Stationery%20and%20xerox%20centre,%20Sasane%20Nagar,%20Hadapsar,%20Pune&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 rounded-2xl"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Maps directional assist floating badge */}
              <a
                href={BUSINESS_INFO.directionUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-slate-900/90 hover:bg-blue-600 backdrop-blur text-white text-[11px] font-bold px-4 py-2 rounded-xl shadow-lg border border-slate-800 flex items-center gap-1.5 transition-colors duration-300"
              >
                <MapPin size={12} className="text-orange-400" />
                <span>Navigate in Google Maps</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
