import React from 'react';
import { X, CheckCircle2, MapPin, Calendar, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenQuote,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#151b22] border border-[#2b3746] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151b22] via-[#151b22]/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#ff6b00] uppercase mb-1">
              <span>{project.categoryLabel}</span>
              <span>·</span>
              <span>{project.completedYear}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#0e1217] border border-[#283340] text-center">
            <div>
              <div className="text-[11px] text-slate-400 font-mono uppercase">Scope Scale</div>
              <div className="text-sm sm:text-base font-bold text-white mt-0.5">{project.sqft}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-mono uppercase">Finish Grade</div>
              <div className="text-sm sm:text-base font-bold text-white mt-0.5 truncate">{project.finishLevel}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-mono uppercase">Timeline Delivered</div>
              <div className="text-sm sm:text-base font-bold text-[#ff6b00] mt-0.5">{project.duration}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-mono uppercase">Lead Client</div>
              <div className="text-sm sm:text-base font-bold text-white mt-0.5 truncate">{project.client}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Overview & Site Context
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technical Execution Highlights */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              Foreman Execution & Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#1c242f] border border-[#2b3746] text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-5 sm:px-8 border-t border-[#283340] bg-[#12171e] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-slate-400 hidden sm:block">
            Have a project similar to this? We review plans within 48 hours.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg bg-[#1f2733] hover:bg-[#283340] text-xs font-semibold text-slate-300 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#ff6b00] hover:bg-[#e05e00] text-xs font-semibold text-white shadow-md transition-colors"
            >
              <span>Bid Similar Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
