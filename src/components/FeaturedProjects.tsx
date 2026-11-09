import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Maximize, ArrowRight, Sparkles } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/landingData';
import { ProjectItem } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onOpenQuote,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'multi-unit' | 'custom-home' | 'commercial'>('all');

  const filteredProjects = activeFilter === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#12171e] border-t border-[#283340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest uppercase text-[#ff6b00] mb-2 font-mono">
              PORTFOLIO OF EXECUTION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              Projects That Define Our Craft.
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Real projects delivered for Ontario's leading builders. From multi-unit residential subdivisions to high-end architectural estates requiring monolithic Level 5 finishes.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#171e27] rounded-xl border border-[#2b3746] overflow-x-auto shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-[#ff6b00] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({FEATURED_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('multi-unit')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeFilter === 'multi-unit'
                  ? 'bg-[#ff6b00] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Multi-Unit & Subdivisions
            </button>
            <button
              onClick={() => setActiveFilter('custom-home')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeFilter === 'custom-home'
                  ? 'bg-[#ff6b00] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Custom Luxury Estates
            </button>
            <button
              onClick={() => setActiveFilter('commercial')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeFilter === 'commercial'
                  ? 'bg-[#ff6b00] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Commercial & Fit-Outs
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl bg-[#161c24] border border-[#283340] overflow-hidden cursor-pointer hover:border-[#ff6b00] transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Contrast gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161c24] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-[#0e1217]/80 text-[#ff6b00] border border-[#2b3746] backdrop-blur-sm">
                    {project.categoryLabel}
                  </span>
                  
                  <div className="w-9 h-9 rounded-full bg-[#0e1217]/80 text-white flex items-center justify-center border border-[#2b3746] group-hover:bg-[#ff6b00] group-hover:border-[#ff6b00] transition-all duration-250">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom image overlay specs */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span>{project.sqft}</span>
                  <span className="text-[#ff6b00] font-semibold">{project.finishLevel}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>{project.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-slate-300">{project.client}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-[#ff6b00] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-[#232c37] flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    Completed in <span className="text-white font-semibold">{project.duration}</span>
                  </span>
                  <span className="text-[#ff6b00] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View Project Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Builder Quick CTA Strip directly after portfolio */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171e27] via-[#1c242f] to-[#171e27] border border-[#2b3746] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <div className="text-xs font-mono font-bold uppercase text-[#ff6b00] mb-1">
              GUARANTEED SCHEDULE SLOTS
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Have an upcoming project requiring dependable drywall capacity?
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Send us your architectural plan sets for a comprehensive line-item takeoff within 48 hours.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 w-full md:w-auto justify-center">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#ff6b00] hover:bg-[#e05e00] text-sm font-semibold text-white shadow-lg shadow-[#ff6b00]/20 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <span>Submit Plans for Bid</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
