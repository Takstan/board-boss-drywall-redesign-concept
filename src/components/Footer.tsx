import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, ShieldCheck, Award } from 'lucide-react';
import { SERVICE_AREAS } from '../data/landingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0e12] border-t border-[#232c37] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1c242f]">
          
          {/* Col 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-heading font-bold text-xl tracking-tight">
              <div className="w-7 h-7 rounded bg-[#ff6b00] flex items-center justify-center text-white font-black text-xs">
                BB
              </div>
              <span>
                BOARD BOSS <span className="text-[#ff6b00]">DRYWALL</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Niagara and Southern Ontario’s trusted commercial and multi-unit residential drywall contractor since 2017. Over 1,000 completed projects with guaranteed milestone delivery.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151b22] border border-[#2b3746] text-[11px] text-slate-300">
                <Award className="w-3.5 h-3.5 text-[#ff6b00]" />
                <span>3x CommunityVotes Platinum</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151b22] border border-[#2b3746] text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff6b00]" />
                <span>WSIB Ontario</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Specialized Capabilities
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#ff6b00] transition-colors">Commercial & Multi-Unit Boarding</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff6b00] transition-colors">Precision Level 5 Skim Coating</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff6b00] transition-colors">Light-Gauge Steel Stud Framing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff6b00] transition-colors">Insulation, Poly & Soundproofing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff6b00] transition-colors">Acoustic Ceilings & T-Bar Systems</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff6b00] transition-colors">Plan Takeoffs & Project Consultation</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Service Regions
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              {SERVICE_AREAS.slice(0, 6).map((city) => (
                <li key={city} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#ff6b00]" />
                  <span>{city}</span>
                </li>
              ))}
              <li className="text-[#ff6b00] font-medium">+ Greater Toronto Area</li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Direct Contact Desk
            </div>
            <div className="space-y-2.5">
              <a
                href="tel:9053212677"
                className="flex items-center gap-2.5 text-slate-200 hover:text-[#ff6b00] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <span className="font-semibold tabular-nums">(905) 321-BOSS (2677)</span>
              </a>

              <a
                href="mailto:info@boardbossdrywall.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#ff6b00] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <span>info@boardbossdrywall.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                <span>Head Office: Niagara Region, ON, Canada</span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                <span>Hours: Mon – Fri: 6:30 AM – 5:30 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Board Boss Drywall Inc. All rights reserved. Registered Ontario Corporation.
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#services" className="hover:text-slate-300 transition-colors">Subtrade Terms</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#ff6b00] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
