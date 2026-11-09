import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { TRUST_STATS, CREDENTIALS } from '../data/landingData';

export const TrustStats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Smooth count-up animation
    const targets = TRUST_STATS.map((s) => s.value);
    const duration = 1400; // ms
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(targets.map((target) => Math.round(target * ease)));

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  const statIcons = [
    <CheckCircle key="check" className="w-5 h-5 text-[#ff6b00]" />,
    <Award key="award" className="w-5 h-5 text-[#ff6b00]" />,
    <Clock key="clock" className="w-5 h-5 text-[#ff6b00]" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-[#ff6b00]" />
  ];

  return (
    <section ref={sectionRef} className="relative bg-[#12171e] border-y border-[#283340] py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-[#ff6b00] mb-2 font-mono">
            VERIFIED INDUSTRY CREDIBILITY
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            A Reputation Built on Quality.
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Builders and developers in Ontario need trades that deliver on both schedule and finish quality. Here is the track record behind Board Boss Drywall.
          </p>
        </div>

        {/* Count-Up Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-14">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#171e27] border border-[#2b3746] hover:border-[#ff6b00]/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#202936] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {statIcons[idx]}
                </div>
                <span className="text-[11px] font-mono font-medium text-slate-400 uppercase">
                  {stat.prefix ? 'Audited' : 'Verified'}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight tabular-nums mb-1">
                {stat.prefix}
                {hasAnimated ? counts[idx].toLocaleString() : 0}
                {stat.suffix}
              </div>

              <div className="text-sm font-semibold text-slate-200 mt-2 font-heading">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Credential & Accreditation Strip */}
        <div className="border-t border-[#283340]/80 pt-8">
          <div className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
            Accreditations & Compliance Standards
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.label}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#171e27]/80 border border-[#283340] text-xs text-slate-300 font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                <span className="font-semibold text-white">{cred.label}</span>
                <span className="text-slate-400 text-[11px]">({cred.year})</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
