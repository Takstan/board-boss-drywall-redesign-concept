import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Layers, Maximize2, ShieldCheck, HelpCircle, X } from 'lucide-react';
import { SERVICES } from '../data/landingData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [finishComparisonOpen, setFinishComparisonOpen] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#ff6b00]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#ff6b00]" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-[#ff6b00]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-[#ff6b00]" />;
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#0e1217]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Level 4 vs 5 Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest uppercase text-[#ff6b00] mb-2 font-mono">
              COMPREHENSIVE CONTRACTING CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              The Right Expertise for Every Stage.
            </h2>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              From structural framing and insulation to high-production drywall hanging and architectural Level 5 finishing. Coordinated to keep your overall critical path on schedule.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setFinishComparisonOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#18202a] border border-[#2b3746] hover:border-[#ff6b00] text-xs font-semibold text-slate-200 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-[#ff6b00]" />
              <span>Level 4 vs Level 5 Guide</span>
            </button>
          </div>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-2xl bg-[#161c24] border border-[#283340] hover:border-[#ff6b00] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#ff6b00]/5 hover:-translate-y-1"
            >
              <div>
                {/* Header row: Number, badge, and hover arrow */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-[#ff6b00]">
                      {service.number}.
                    </span>
                    <span className="text-xs font-medium text-slate-400 bg-[#1e2733] px-2.5 py-1 rounded-md border border-[#2b3746]">
                      {service.badge}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#1e2733] flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-[#ff6b00] transition-all duration-250">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Service Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#1e2733] border border-[#2b3746]">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Scope Checklist */}
                <div className="space-y-2 mb-6 border-t border-[#232c37] pt-4">
                  {service.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Ideal For & Action link */}
              <div className="pt-4 border-t border-[#232c37] flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  Ideal for: <span className="text-slate-200">{service.idealFor}</span>
                </span>
                <span className="text-[#ff6b00] font-semibold group-hover:underline">
                  View Specs
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#161c24] border border-[#2b3746] rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#1f2733] text-slate-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] mb-2">
              <span>SERVICE SPECIFICATION</span>
              <span>·</span>
              <span>{selectedService.number}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
              {selectedService.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Included Scope & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.scope.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1e2733] border border-[#2b3746] text-xs text-slate-200">
                    <Check className="w-4 h-4 text-[#ff6b00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#12171e] border border-[#283340] mb-6">
              <div className="text-xs font-semibold text-slate-400 mb-1">Target Application</div>
              <div className="text-sm text-slate-200 font-medium">{selectedService.idealFor}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#232c37]">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#1f2733] hover:bg-[#283340] text-xs font-semibold text-slate-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenQuote();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#ff6b00] hover:bg-[#e05e00] text-xs font-semibold text-white transition-colors"
              >
                Request Scope Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Level 4 vs Level 5 Guide Modal */}
      {finishComparisonOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl bg-[#161c24] border border-[#2b3746] rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setFinishComparisonOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#1f2733] text-slate-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-[#ff6b00] font-bold mb-2">
              BUILDER FINISH SPECIFICATION GUIDE
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
              Level 4 vs. Level 5 Gypsum Board Finish
            </h3>
            <p className="text-slate-300 text-sm mb-6">
              Understanding GA-214 / ASTM C840 finish standards helps general contractors specify the right surface preparation and avoid painter callbacks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Level 4 */}
              <div className="p-5 rounded-xl bg-[#12171e] border border-[#2b3746]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-heading font-bold text-white">Level 4 Finish</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#1f2733] text-slate-300">Production Standard</span>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Three coats of joint compound over taped seams and fasteners. Edges feathered smooth. Suitable for flat latex paints and light-textured wallpapers.
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>Best for bedrooms, basements, hallways</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>Non-critical diffuse lighting environments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>Flat and matte paint sheens</span>
                  </div>
                </div>
              </div>

              {/* Level 5 */}
              <div className="p-5 rounded-xl bg-[#18212d] border border-[#ff6b00]/40">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-heading font-bold text-white">Level 5 Finish</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#ff6b00]/20 text-[#ff6b00] font-bold">Architectural Grade</span>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  All Level 4 steps plus a complete monolithic thin skim coat applied over the entire surface, equalizing absorption between paper and joint compound.
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>Required for severe natural raking light</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>Essential for eggshell, satin, or gloss paints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>Mandatory for luxury custom homes & high ceilings</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setFinishComparisonOpen(false)}
                className="px-6 py-2.5 rounded-lg bg-[#ff6b00] hover:bg-[#e05e00] text-xs font-semibold text-white transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
