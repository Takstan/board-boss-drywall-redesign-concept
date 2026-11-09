import React from 'react';
import { Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { TEAM_MEMBERS, FOUNDER_IMAGE } from '../data/landingData';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[#0e1217]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-[#ff6b00] mb-2 font-mono">
            COMPANY LEADERSHIP & VALUES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Built on Experience. Driven by People.
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Since 2017, Board Boss Drywall has grown through a commitment to skilled trades, strong client relationships, and careful project execution. Meet the people who help bring residential developments and commercial builds to life.
          </p>
        </div>

        {/* Founder & Leadership Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#151b22] border border-[#283340] rounded-3xl p-6 sm:p-10 lg:p-12 mb-12 shadow-2xl">
          
          {/* Portrait on Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden border border-[#2b3746] shadow-xl bg-[#1c242f]">
              <img
                src={FOUNDER_IMAGE}
                alt="Steve Frechette, Founder & CEO of Board Boss Drywall reviewing plans on jobsite"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1217] via-transparent to-transparent opacity-60" />
            </div>

            {/* Bottom floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#1c242f] border border-[#2b3746] text-xs font-semibold text-slate-200 shadow-md whitespace-nowrap">
              <span className="text-[#ff6b00]">3x Platinum Winner</span> · CommunityVotes
            </div>
          </div>

          {/* Bio & Leadership Philosophy on Right */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b00] mb-1">
                FOUNDER & CEO
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Steve Frechette
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                18+ Years in Commercial & Residential Trades · Niagara Region, Ontario
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              "When I started Board Boss Drywall in 2017, my goal was to solve the single biggest complaint I heard from builders: lack of accountability from drywall subtrades. We set out to build a team where our site foremen act as true trade partners—communicating proactively, showing up on schedule, and taking personal pride in every tapered joint and reveal bead."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1c242f] border border-[#2b3746] text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <span>WSIB & Working at Heights Certified</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1c242f] border border-[#2b3746] text-xs text-slate-200">
                <Award className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <span>Over 1,000 Verified Delivered Jobs</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1c242f] border border-[#2b3746] text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <span>Ontario Building Code Part 3 & 9</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1c242f] border border-[#2b3746] text-xs text-slate-200">
                <HeartHandshake className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <span>Direct Superintendent Access</span>
              </div>
            </div>

            {/* Kelly Frechette & Operations Mention */}
            <div className="p-4 rounded-xl bg-[#10141a] border border-[#232c37] text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-white">Operations & Administration:</span> Guided by Kelly Frechette (VP Operations & Client Relations), our estimating and scheduling desk guarantees rapid bid turnarounds and streamlined contractor accounting.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
