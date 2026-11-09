import React, { useState } from 'react';
import { CheckCircle2, Clock, FileText, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/landingData';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#12171e] border-t border-[#283340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-[#ff6b00] mb-2 font-mono">
            HOW WE ENGAGE WITH BUILDERS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Our Process. Built for Zero Surprises.
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            From initial PDF drawing takeoffs to our pre-paint raking light sign-off, every stage is mapped to eliminate delays and keep your superintendents informed.
          </p>
        </div>

        {/* Process Flow Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Timeline Steps */}
          <div className="lg:col-span-5 relative pl-6 sm:pl-8 space-y-6">
            {/* Continuous Vertical Connecting Line */}
            <div className="absolute left-[23px] sm:left-[31px] top-6 bottom-6 w-0.5 bg-[#283340]" />

            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative flex items-start gap-4 p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#18212d] border-[#ff6b00] shadow-lg'
                      : 'bg-[#151b22] border-[#252f3c] hover:border-slate-600'
                  }`}
                >
                  {/* Step Bubble intersecting vertical line */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 z-10 transition-colors ${
                      isActive
                        ? 'bg-[#ff6b00] text-white shadow-md shadow-[#ff6b00]/30'
                        : 'bg-[#212a36] text-slate-400 border border-[#2b3746]'
                    }`}
                  >
                    {step.step}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-medium text-[#ff6b00]">
                        {step.duration}
                      </span>
                    </div>
                    <h3
                      className={`text-base font-heading font-bold mt-1 transition-colors ${
                        isActive ? 'text-white' : 'text-slate-200'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Stage Deep-Dive Card */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#161c24] border border-[#283340] shadow-xl">
            <div className="flex items-center justify-between border-b border-[#283340] pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] mb-1">
                  <span>STAGE {PROCESS_STEPS[activeStep].step} OF 04</span>
                  <span>·</span>
                  <span>{PROCESS_STEPS[activeStep].duration}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#1f2733] border border-[#2b3746] flex items-center justify-center text-[#ff6b00]">
                <Clock className="w-6 h-6" />
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed mb-8">
              {PROCESS_STEPS[activeStep].description}
            </p>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                Guaranteed Stage Deliverables
              </h4>
              <div className="space-y-3">
                {PROCESS_STEPS[activeStep].deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#12171e] border border-[#252f3c] text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#283340] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Ready to review your upcoming schedule?
              </span>
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#ff6b00] hover:bg-[#e05e00] text-xs font-semibold text-white transition-colors"
              >
                <span>Request Plan Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
