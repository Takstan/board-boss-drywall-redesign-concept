import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#12171e] border-t border-[#283340] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-[#ff6b00] mb-2 font-mono">
            BUILDER & DEVELOPER VERIFICATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Trusted by the People Who Build.
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            What project managers, custom builders, and development directors say about partnering with Board Boss Drywall on active sites.
          </p>
        </div>

        {/* Testimonial Showcase Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#161c24] border border-[#2b3746] shadow-2xl transition-all duration-300">
            
            {/* Top Row: Quote Icon & Rating Stars */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#212a36] border border-[#2b3746] flex items-center justify-center text-[#ff6b00]">
                <Quote className="w-6 h-6" />
              </div>

              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ff6b00] text-[#ff6b00]" />
                ))}
              </div>
            </div>

            {/* Testimonial Text with subtle transition */}
            <div className="min-h-[140px] flex items-center">
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-slate-100 font-sans font-medium leading-relaxed italic">
                "{current.quote}"
              </blockquote>
            </div>

            {/* Author Attribution & Project Tag */}
            <div className="mt-8 pt-6 border-t border-[#283340] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-base sm:text-lg font-heading font-bold text-white">
                  {current.author}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {current.title} · <span className="text-slate-200 font-semibold">{current.company}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1c242f] border border-[#2b3746] text-xs font-mono text-[#ff6b00] w-fit">
                <Building2 className="w-3.5 h-3.5" />
                <span>{current.projectType}</span>
              </div>
            </div>

            {/* Manual Navigation Controls */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#232c37]">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-[#ff6b00]' : 'w-2 bg-slate-600'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl bg-[#212a36] hover:bg-[#283340] border border-[#2b3746] text-white flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl bg-[#212a36] hover:bg-[#283340] border border-[#2b3746] text-white flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
