import React, { useState } from 'react';
import { Eye, Shield, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_IMAGE, WHY_CHOOSE_POINTS } from '../data/landingData';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-5 h-5 text-[#ff6b00]" />;
      case 1:
        return <Eye className="w-5 h-5 text-[#ff6b00]" />;
      case 2:
      default:
        return <Shield className="w-5 h-5 text-[#ff6b00]" />;
    }
  };

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-[#0e1217] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-[#ff6b00] mb-2 font-mono">
            THE GENERAL CONTRACTOR ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            More Than Drywall. A Partner You Can Build With.
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            General contractors and developers cannot afford trade friction, unaccountable crews, or surprise deficiencies. We structure every job around jobsite coordination, communication, and craftsmanship.
          </p>
        </div>

        {/* 2-Column Split: Image on Left, Stacked Benefit Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Foreman Photo & Key Statistic Overlay */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#283340] bg-[#161c24] flex flex-col justify-between shadow-xl">
            <div className="relative h-80 sm:h-96 lg:h-full w-full">
              <img
                src={WHY_CHOOSE_IMAGE}
                alt="Board Boss drywall craftsmen installing gypsum partitions with precision laser alignment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1217] via-[#0e1217]/20 to-transparent" />
            </div>

            {/* Float Card at bottom of photo */}
            <div className="p-6 bg-[#161c24] border-t border-[#283340] relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#212a36] border border-[#2b3746] flex items-center justify-center text-[#ff6b00] shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Zero-Deficiency Handover Standard
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Pre-paint raking light sign-off protocol with your super
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Benefit Cards with Progress Line */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {WHY_CHOOSE_POINTS.map((point, idx) => {
              const isActive = activeCard === idx;
              return (
                <div
                  key={point.id}
                  onClick={() => setActiveCard(idx)}
                  className={`relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-[#18212d] border-[#ff6b00] shadow-xl shadow-[#ff6b00]/5 -translate-y-0.5'
                      : 'bg-[#141a22] border-[#252f3c] hover:border-slate-600 hover:bg-[#182029]'
                  }`}
                >
                  {/* Subtle top progress bar if active */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
                      isActive ? 'bg-[#ff6b00]' : 'bg-transparent'
                    }`}
                  />

                  <div className="flex items-start gap-4">
                    {/* Number & Icon Indicator */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-250 ${
                        isActive
                          ? 'bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/40'
                          : 'bg-[#1c242f] text-slate-400 border border-[#2b3746]'
                      }`}
                    >
                      {getIcon(idx)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3
                          className={`text-lg sm:text-xl font-heading font-bold transition-colors ${
                            isActive ? 'text-white' : 'text-slate-200'
                          }`}
                        >
                          {point.title}
                        </h3>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          0{idx + 1}
                        </span>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed mb-3">
                        {point.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs font-medium text-[#ff6b00] bg-[#0e1217]/50 px-3 py-1.5 rounded-lg border border-[#283340]/60 w-fit">
                        <span className="font-mono font-semibold">Standard:</span>
                        <span className="text-slate-200">{point.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Consultation Link */}
            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Need a subtrade that respects your project critical path?
              </span>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#ff6b00] hover:text-[#e05e00] transition-colors"
              >
                <span>Speak with Our Estimating Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
