import React, { useState } from 'react';
import { Send, Upload, CheckCircle2, Phone, Mail, Clock, Calculator, FileCheck, ArrowRight } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quote' | 'calculator'>('quote');
  
  // Quote Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Multi-Unit Residential',
    location: '',
    sqft: '',
    finishLevel: 'Level 4 (Standard Production)',
    timeline: 'Within 30 Days',
    scopeItems: ['drywall-boarding', 'taping'],
    details: '',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Estimator State
  const [calcSqft, setCalcSqft] = useState<number>(4500);
  const [calcTier, setCalcTier] = useState<'custom' | 'multi' | 'commercial'>('multi');
  const [calcFinish, setCalcFinish] = useState<'level4' | 'level5'>('level4');
  const [calcAcoustic, setCalcAcoustic] = useState(true);
  const [calcFraming, setCalcFraming] = useState(false);

  // Dynamic calculations
  const boardsEstimated = Math.ceil(calcSqft / 48); // 4x12 sheets = 48 sq ft
  const estimatedDays = Math.max(3, Math.ceil(calcSqft / (calcFinish === 'level5' ? 900 : 1500)));
  const crewRecommended = calcSqft > 10000 ? '6–10 Tradespeople' : '3–5 Tradespeople';
  
  const baseRate = calcTier === 'custom' ? 2.85 : calcTier === 'multi' ? 2.15 : 2.45;
  const finishMultiplier = calcFinish === 'level5' ? 1.35 : 1.0;
  const addOnCost = (calcAcoustic ? 0.35 : 0) + (calcFraming ? 1.10 : 0);
  const totalRateEstimate = (baseRate * finishMultiplier) + addOnCost;
  const minBudget = Math.round(calcSqft * totalRateEstimate * 0.95);
  const maxBudget = Math.round(calcSqft * totalRateEstimate * 1.08);

  const handleScopeToggle = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      scopeItems: prev.scopeItems.includes(item)
        ? prev.scopeItems.filter((i) => i !== item)
        : [...prev.scopeItems, item],
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = 'BBD-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(generatedCode);
    }, 800);
  };

  const transferCalcToQuote = () => {
    setFormData((prev) => ({
      ...prev,
      sqft: calcSqft.toString(),
      projectType:
        calcTier === 'multi'
          ? 'Multi-Unit Residential'
          : calcTier === 'custom'
          ? 'Custom Luxury Home'
          : 'Commercial & Retail',
      finishLevel: calcFinish === 'level5' ? 'Level 5 (Architectural Skim)' : 'Level 4 (Standard Production)',
      details: `Generated via Online Estimator: ${calcSqft} sqft estimated. Boards: ~${boardsEstimated}. Turnaround target: ${estimatedDays} days. Acoustic isolation: ${calcAcoustic ? 'Yes' : 'No'}. Steel framing: ${calcFraming ? 'Yes' : 'No'}.`,
    }));
    setActiveTab('quote');
  };

  return (
    <section id="quote-section" className="py-20 lg:py-28 bg-[#0e1217] relative overflow-hidden">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ff6b00]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-[#ff6b00] mb-2 font-mono">
            GET A FORMAL BID OR ESTIMATE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Turn Interest into Inquiries.
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Send us your architectural plan sets for a fast 48-hour bid, or run our contractor scope calculator for an instant preliminary estimate.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 bg-[#171e27] rounded-xl border border-[#2b3746] mt-8">
            <button
              onClick={() => setActiveTab('quote')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === 'quote'
                  ? 'bg-[#ff6b00] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Request Project Consultation
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === 'calculator'
                  ? 'bg-[#ff6b00] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Instant Drywall Estimator</span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto">
          
          {submittedRef ? (
            /* Success Feedback State */
            <div className="p-8 sm:p-12 rounded-3xl bg-[#161c24] border border-[#ff6b00]/40 text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-[#ff6b00]/20 text-[#ff6b00] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="text-xs font-mono font-bold text-[#ff6b00] mb-2">
                INQUIRY REFERENCE: {submittedRef}
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
                Project Details Received
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
                Thank you, {formData.name || 'Partner'}. Steve Frechette or Kelly Frechette will review your plan set and respond within <span className="text-white font-semibold">24 to 48 business hours</span> with our itemized proposal.
              </p>

              <div className="p-4 rounded-xl bg-[#12171e] border border-[#283340] max-w-md mx-auto mb-8 text-xs text-left text-slate-300 space-y-1">
                <div><span className="text-slate-400">Company:</span> {formData.company || 'Direct Client'}</div>
                <div><span className="text-slate-400">Project Type:</span> {formData.projectType}</div>
                <div><span className="text-slate-400">Target Location:</span> {formData.location || 'Ontario'}</div>
                {fileName && <div><span className="text-slate-400">Uploaded Plans:</span> {fileName}</div>}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setSubmittedRef(null);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      projectType: 'Multi-Unit Residential',
                      location: '',
                      sqft: '',
                      finishLevel: 'Level 4 (Standard Production)',
                      timeline: 'Within 30 Days',
                      scopeItems: ['drywall-boarding', 'taping'],
                      details: '',
                    });
                    setFileName(null);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#1f2733] hover:bg-[#283340] text-xs font-semibold text-slate-200 transition-colors"
                >
                  Submit Another Project
                </button>
                <a
                  href="tel:9053212677"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#ff6b00] hover:bg-[#e05e00] text-xs font-semibold text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Direct: (905) 321-BOSS</span>
                </a>
              </div>
            </div>
          ) : activeTab === 'quote' ? (
            /* Main RFQ Lead Form */
            <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#151b22] border border-[#283340] shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2-Column: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#10141a] border border-[#283340] text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b00] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                      Company / General Contractor *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Miller Construction Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#10141a] border border-[#283340] text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b00] text-sm"
                    />
                  </div>
                </div>

                {/* 2-Column: Work Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@contractor.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#10141a] border border-[#283340] text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b00] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(905) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#10141a] border border-[#283340] text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b00] text-sm tabular-nums"
                    />
                  </div>
                </div>

                {/* 3-Column: Project Type, City Location, Approx Sq Ft */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#10141a] border border-[#283340] text-white focus:outline-none focus:border-[#ff6b00] text-sm"
                    >
                      <option value="Multi-Unit Residential">Multi-Unit Residential</option>
                      <option value="Subdivision Development">Subdivision Development</option>
                      <option value="Custom Luxury Home">Custom Luxury Home</option>
                      <option value="Commercial & Retail">Commercial & Retail</option>
                      <option value="Condominium Building">Condominium Building</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. St. Catharines / Niagara"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#10141a] border border-[#283340] text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b00] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                      Approx. Square Footage
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 12,000 sq ft"
                      value={formData.sqft}
                      onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#10141a] border border-[#283340] text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b00] text-sm tabular-nums"
                    />
                  </div>
                </div>

                {/* Scope Selection Checkboxes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                    Required Scopes (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: 'drywall-boarding', label: 'Drywall Boarding' },
                      { id: 'taping', label: 'Taping & Mudding' },
                      { id: 'level5', label: 'Level 5 Skim Coat' },
                      { id: 'steel-framing', label: 'Steel Stud Framing' },
                      { id: 'insulation', label: 'Insulation & Poly' },
                      { id: 'soundproofing', label: 'Resilient Sound Channel' },
                      { id: 'acoustic-ceiling', label: 'T-Bar Drop Ceilings' },
                      { id: 'demising-walls', label: 'Fire-Rated Partitions' },
                    ].map((scope) => {
                      const isChecked = formData.scopeItems.includes(scope.id);
                      return (
                        <button
                          type="button"
                          key={scope.id}
                          onClick={() => handleScopeToggle(scope.id)}
                          className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs text-left transition-colors ${
                            isChecked
                              ? 'bg-[#ff6b00]/15 border-[#ff6b00] text-white font-medium'
                              : 'bg-[#10141a] border-[#283340] text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 text-white ${
                              isChecked ? 'bg-[#ff6b00]' : 'border border-slate-600'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3 h-3" />}
                          </div>
                          <span className="truncate">{scope.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Plan / Document Upload */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                    Architectural Plans / CAD / PDF (Optional)
                  </label>
                  <div className="relative border-2 border-dashed border-[#283340] hover:border-[#ff6b00] rounded-xl p-4 text-center transition-colors bg-[#10141a]">
                    <input
                      type="file"
                      id="plan-file-upload"
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      onChange={handleFileUpload}
                      accept=".pdf,.dwg,.zip,.jpg,.png"
                    />
                    <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                      <Upload className="w-6 h-6 text-[#ff6b00]" />
                      <div className="text-xs text-slate-300">
                        {fileName ? (
                          <span className="font-semibold text-[#ff6b00]">Selected: {fileName}</span>
                        ) : (
                          <span>Click to browse or drop architectural plan drawings (PDF/DWG up to 50MB)</span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Takeoffs returned within 24–48 business hours
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Project Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                    Project Notes & Milestone Dates
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any specific requirements, target drywall hang date, ceiling heights, or inspection deadlines..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#10141a] border border-[#283340] text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b00] text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#ff6b00] hover:bg-[#e05e00] rounded-xl shadow-xl shadow-[#ff6b00]/25 transition-all duration-200 active:scale-98 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 animate-spin" />
                        Processing Submittal...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Submit Project for Formal Bid</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </button>
                  <div className="text-center text-xs text-slate-400 mt-3">
                    Strict contractor confidentiality · Direct reply from Steve or Kelly Frechette
                  </div>
                </div>

              </form>
            </div>
          ) : (
            /* Interactive Estimator Tool */
            <div className="p-6 sm:p-10 rounded-3xl bg-[#151b22] border border-[#283340] shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#283340] pb-5 mb-6">
                <div>
                  <div className="text-xs font-mono font-bold text-[#ff6b00]">
                    PRELIMINARY TAKEOFF CALCULATOR
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Drywall Scope & Capacity Forecaster
                  </h3>
                </div>
                <div className="px-3 py-1 rounded bg-[#ff6b00]/15 text-[#ff6b00] text-xs font-mono font-semibold">
                  Ontario Rates 2026
                </div>
              </div>

              {/* Calculator Inputs */}
              <div className="space-y-6">
                {/* Square Footage Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase text-slate-300">
                      Estimated Drywall Board Area
                    </span>
                    <span className="text-lg font-heading font-bold text-[#ff6b00] tabular-nums">
                      {calcSqft.toLocaleString()} sq ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="30000"
                    step="500"
                    value={calcSqft}
                    onChange={(e) => setCalcSqft(Number(e.target.value))}
                    className="w-full h-2 bg-[#283340] rounded-lg appearance-none cursor-pointer accent-[#ff6b00]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                    <span>1,000 sq ft (Custom Suite)</span>
                    <span>15,000 sq ft</span>
                    <span>30,000+ sq ft (Subdivision)</span>
                  </div>
                </div>

                {/* Building Tier */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-300 mb-2">
                    Project Classification
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'multi', label: 'Multi-Unit / Subdivision' },
                      { id: 'custom', label: 'Custom Luxury Estate' },
                      { id: 'commercial', label: 'Commercial Fit-Out' },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setCalcTier(tier.id as any)}
                        className={`p-3 rounded-xl border text-xs font-semibold text-center transition-colors ${
                          calcTier === tier.id
                            ? 'bg-[#ff6b00]/15 border-[#ff6b00] text-white'
                            : 'bg-[#10141a] border-[#283340] text-slate-400 hover:text-white'
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Finish Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-300 mb-2">
                      Finish Specification
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setCalcFinish('level4')}
                        className={`flex-1 p-3 rounded-xl border text-xs font-semibold transition-colors ${
                          calcFinish === 'level4'
                            ? 'bg-[#ff6b00]/15 border-[#ff6b00] text-white'
                            : 'bg-[#10141a] border-[#283340] text-slate-400'
                        }`}
                      >
                        Level 4 Standard
                      </button>
                      <button
                        type="button"
                        onClick={() => setCalcFinish('level5')}
                        className={`flex-1 p-3 rounded-xl border text-xs font-semibold transition-colors ${
                          calcFinish === 'level5'
                            ? 'bg-[#ff6b00]/15 border-[#ff6b00] text-white'
                            : 'bg-[#10141a] border-[#283340] text-slate-400'
                        }`}
                      >
                        Level 5 Skim Coat
                      </button>
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-300 mb-2">
                      Add-On Scope
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setCalcAcoustic(!calcAcoustic)}
                        className={`flex-1 p-3 rounded-xl border text-xs font-semibold transition-colors ${
                          calcAcoustic
                            ? 'bg-[#ff6b00]/15 border-[#ff6b00] text-white'
                            : 'bg-[#10141a] border-[#283340] text-slate-400'
                        }`}
                      >
                        Acoustic / Poly
                      </button>
                      <button
                        type="button"
                        onClick={() => setCalcFraming(!calcFraming)}
                        className={`flex-1 p-3 rounded-xl border text-xs font-semibold transition-colors ${
                          calcFraming
                            ? 'bg-[#ff6b00]/15 border-[#ff6b00] text-white'
                            : 'bg-[#10141a] border-[#283340] text-slate-400'
                        }`}
                      >
                        Steel Stud Framing
                      </button>
                    </div>
                  </div>
                </div>

                {/* Calculation Output Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#0e1217] border border-[#283340]">
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Sheets (4x12)</div>
                    <div className="text-base sm:text-lg font-bold text-white tabular-nums mt-0.5">
                      ~{boardsEstimated} sheets
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Target Timeline</div>
                    <div className="text-base sm:text-lg font-bold text-[#ff6b00] tabular-nums mt-0.5">
                      {estimatedDays} Working Days
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Assigned Crew</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5 text-xs sm:text-sm">
                      {crewRecommended}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Ballpark Range</div>
                    <div className="text-base sm:text-lg font-bold text-[#ff6b00] tabular-nums mt-0.5 text-xs sm:text-sm">
                      ${minBudget.toLocaleString()} – ${maxBudget.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Transfer to Official Quote */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={transferCalcToQuote}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#ff6b00] hover:bg-[#e05e00] text-sm font-semibold text-white transition-all shadow-lg active:scale-98"
                  >
                    <span>Load This Scope into Formal Bid Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    *Estimates are non-binding and subject to architectural plan review, ceiling heights, and site walk-through.
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
