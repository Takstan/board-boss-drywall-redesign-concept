import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGE } from '../data/landingData';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreProjects }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0">
      {/* Background with initial scale down effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Board Boss Drywall commercial jobsite installation"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-[1800ms] ease-out ${
            isLoaded ? 'scale-100' : 'scale-105'
          }`}
        />
        {/* Measured dark gradient overlay for optimal legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1217] via-[#0e1217]/85 to-[#0e1217]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1217] via-transparent to-black/30 z-10" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="max-w-3xl">
          
          {/* Subtle Region & Accreditation Kicker */}
          <div
            className={`flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#ff6b00] mb-4 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <span>Niagara & Ontario Drywall Contractor</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Commercial & Multi-Unit Residential</span>
          </div>

          {/* Large Heading with Line-by-Line Reveal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-6">
            <span
              className={`block transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              The Drywall Partner
            </span>
            <span
              className={`block text-slate-100 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              General Contractors
            </span>
            <span
              className={`block text-[#ff6b00] transition-all duration-700 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Rely On.
            </span>
          </h1>

          {/* Subtext Value Proposition */}
          <p
            className={`text-base sm:text-lg lg:text-xl text-slate-300 font-sans leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Delivering high-production boarding, precision steel framing, and true Level 5 finishes. We eliminate scheduling bottlenecks and painter callbacks with foreman-led execution on every jobsite.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14 transition-all duration-700 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={onOpenQuote}
              className="group relative inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white bg-[#ff6b00] hover:bg-[#e05e00] rounded-xl shadow-xl shadow-[#ff6b00]/25 transition-all duration-200 active:scale-98 whitespace-nowrap"
            >
              <span>Request Project Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-250 ease-out group-hover:translate-x-1.5" />
            </button>

            <button
              onClick={onExploreProjects}
              className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-slate-200 hover:text-white bg-[#161c24]/80 hover:bg-[#1c242f] border border-[#2b3746] rounded-xl backdrop-blur-sm transition-all duration-200 whitespace-nowrap"
            >
              <span>Explore Portfolio</span>
            </button>
          </div>

          {/* Three Trust Indicators along the bottom */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-700/60 max-w-2xl transition-all duration-700 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1c242f] border border-[#2b3746] flex items-center justify-center text-[#ff6b00] shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-heading">Since 2017</div>
                <div className="text-xs text-slate-400">Established Track Record</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1c242f] border border-[#2b3746] flex items-center justify-center text-[#ff6b00] shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-heading tabular-nums">1,000+ Projects</div>
                <div className="text-xs text-slate-400">Completed on Schedule</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1c242f] border border-[#2b3746] flex items-center justify-center text-[#ff6b00] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-heading">Award-Winning Work</div>
                <div className="text-xs text-slate-400">3x Platinum 2023–2025</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 text-slate-400 text-xs font-medium tracking-widest uppercase">
        <span className="opacity-75">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-[#ff6b00] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
