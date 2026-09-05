import React from 'react';
import { X, ArrowUpRight, CheckCircle2, Sparkles, Tag, Calendar, Building, Layers } from 'lucide-react';
import { Project } from '../types';
import { M3Button } from './M3Button';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      
      {/* Side Sheet Container */}
      <div className="relative w-full max-w-3xl bg-[#FDFBFF] min-h-full p-6 sm:p-10 shadow-2xl flex flex-col justify-between border-l border-[#E1E2EC] overflow-y-auto animate-in slide-in-from-right duration-300">
        
        {/* Header Bar */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E1E2EC] pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#D8E2FF] text-[#001D33] text-xs font-bold uppercase tracking-wider border border-[#005CBB]/10">
                {project.category}
              </span>
              <span className="text-xs text-[#757780] font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#44474E] hover:text-[#1A1C1E] hover:bg-[#E1E2EC]/50 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Title & Client */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1C1E]">
              {project.title}
            </h2>
            <div className="flex items-center gap-2 text-sm text-[#757780] font-medium">
              <Building className="w-4 h-4 text-[#005CBB]" />
              <span>Client: {project.client}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden aspect-16/9 bg-[#E1E2EC]/40 border border-[#E1E2EC] shadow-xs">
            <img
              src={project.thumbnail}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 bento-card p-5">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <p className="text-xl sm:text-2xl font-black text-[#005CBB]">{m.value}</p>
                <p className="text-xs text-[#757780] font-medium mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Description & Case Details */}
          <div className="space-y-6 text-sm text-[#44474E] leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#1A1C1E] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#005CBB]" />
                Project Overview
              </h3>
              <p>{project.fullDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bento-card p-6">
              <div className="space-y-1.5">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#005CBB]">
                  The Challenge
                </h4>
                <p className="text-xs text-[#44474E] leading-relaxed">{project.challenge}</p>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#6750A4]">
                  The M3 Solution
                </h4>
                <p className="text-xs text-[#44474E] leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#1A1C1E] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#005CBB]" />
                Studio Deliverables
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-[#E1E2EC] text-xs font-semibold text-[#1A1C1E] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#005CBB]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applied Color Tokens */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#757780]">
                Applied Color Token Swatches
              </h3>
              <div className="flex items-center gap-3">
                {project.colorPalette.map((hex, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E1E2EC]">
                    <span className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: hex }} />
                    <span className="text-xs font-mono font-bold text-[#44474E]">{hex}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-8 border-t border-[#E1E2EC] mt-8 flex items-center justify-between gap-4">
          <M3Button
            variant="outlined"
            size="md"
            onClick={onClose}
          >
            Back to Showcase
          </M3Button>

          <M3Button
            variant="filled"
            size="md"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Commission Similar Work
          </M3Button>
        </div>

      </div>
    </div>
  );
};
