import React, { useState } from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, Sparkles, Trophy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/agencyData';
import { PortfolioItem } from '../types';

interface PortfolioSectionProps {
  onOpenContactWithProject?: (title: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenContactWithProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'content' | 'social' | 'branding'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeFilter);

  const getThemeBadge = (color: PortfolioItem['colorTheme']) => {
    switch (color) {
      case 'sky':
        return 'bg-[#0984E3] text-white';
      case 'orange':
        return 'bg-[#FF7675] text-white';
      case 'green':
        return 'bg-[#2ECC71] text-white';
      case 'charcoal':
      default:
        return 'bg-[#2D3436] text-white';
    }
  };

  return (
    <section id="portfolio" className="w-full bg-white py-16 sm:py-20 border-b-2 border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#F8F9FA] border-2 border-[#2D3436] px-3.5 py-1.5 rounded-md mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7675]"></span>
              <span className="text-xs font-black uppercase text-[#2D3436] tracking-wider">
                SELECTED CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2D3436] uppercase tracking-tight font-sans">
              FEATURED CLIENT WORK
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web Design' },
              { id: 'content', label: 'Content' },
              { id: 'social', label: 'Social Media' },
              { id: 'branding', label: 'Branding' },
            ].map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer border-2 ${
                    isActive
                      ? 'bg-[#2D3436] text-white border-black'
                      : 'bg-white text-[#2D3436] border-[#E9ECEF] hover:border-gray-400'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-[#F8F9FA] border-3 border-[#2D3436] rounded-2xl overflow-hidden transition-all hover:border-[#0984E3] flex flex-col justify-between group"
              >
                <div>
                  {/* Flat Graphic Frame Preview */}
                  <div className="bg-white border-b-3 border-[#2D3436] p-6 relative flex flex-col justify-center items-center min-h-[220px]">
                    
                    {/* Flat Geometric Decorative Layout Mockup */}
                    <div className="w-full bg-[#EBF5FB] border-2 border-[#2D3436] rounded-xl p-4 shadow-none">
                      <div className="flex items-center justify-between border-b-2 border-[#2D3436] pb-2 mb-3">
                        <div className="flex space-x-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7675]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#0984E3]"></span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-gray-600">
                          {project.client.toUpperCase()}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="h-6 bg-[#2D3436] rounded text-white text-[10px] font-bold flex items-center px-2 justify-between">
                          <span>{project.title}</span>
                          <span className="bg-[#0984E3] px-1.5 py-0.5 rounded text-[9px]">{project.year}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-8 bg-[#FF7675] rounded"></div>
                          <div className="h-8 bg-[#2ECC71] rounded"></div>
                          <div className="h-8 bg-[#0984E3] rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Impact Metric Floating Overlay Badge */}
                    <div className="absolute bottom-3 right-3 bg-[#2D3436] text-white px-3.5 py-1.5 rounded-lg border-2 border-black flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-[#FF7675]" />
                      <span className="text-sm font-black text-[#2ECC71]">{project.impactMetric}</span>
                      <span className="text-[10px] font-bold text-gray-300 uppercase">{project.impactLabel}</span>
                    </div>

                  </div>

                  {/* Project Info Block */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded uppercase tracking-wider ${getThemeBadge(project.colorTheme)}`}>
                        {project.categoryLabel}
                      </span>
                      <span className="text-xs font-bold text-gray-500">• {project.client}</span>
                    </div>

                    <h3 className="text-2xl font-black text-[#2D3436] uppercase font-sans mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-700 font-semibold leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white border border-[#2D3436] text-[#2D3436] text-[10px] font-extrabold px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-[#0984E3] hover:bg-[#0773C5] text-white font-extrabold text-xs py-3 rounded-xl uppercase tracking-wider flex items-center justify-center space-x-2 transition-transform active:scale-95 cursor-pointer"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CASE STUDY MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-none">
            <div className="bg-white border-4 border-[#2D3436] rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black font-black text-xl bg-gray-100 hover:bg-gray-200 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center space-x-3 mb-3">
                <span className={`text-xs font-black px-3 py-1 rounded uppercase ${getThemeBadge(selectedProject.colorTheme)}`}>
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs font-bold text-gray-500">CLIENT: {selectedProject.client} ({selectedProject.year})</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-[#2D3436] uppercase font-sans mb-4">
                {selectedProject.title}
              </h3>

              {/* Key Metric Banner */}
              <div className="bg-[#2D3436] text-white p-4 rounded-xl mb-6 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">PROJECT RESULT METRIC</div>
                  <div className="text-3xl font-black text-[#2ECC71]">{selectedProject.impactMetric}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-white uppercase">{selectedProject.impactLabel}</div>
                  <div className="text-[10px] text-gray-300 font-semibold">Verified Client Data</div>
                </div>
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#FDEDEC] border-2 border-[#FF7675] p-4 rounded-xl">
                  <h4 className="text-xs font-black uppercase text-[#E17055] tracking-wider mb-1">
                    THE CHALLENGE
                  </h4>
                  <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="bg-[#E8F8F5] border-2 border-[#2ECC71] p-4 rounded-xl">
                  <h4 className="text-xs font-black uppercase text-[#10AC84] tracking-wider mb-1">
                    OUR FLAT DESIGN SOLUTION
                  </h4>
                  <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-black uppercase text-[#2D3436] tracking-wider mb-3">
                  DELIVERABLES & OUTCOMES
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs font-extrabold text-[#2D3436] bg-[#F8F9FA] p-2.5 border border-[#E9ECEF] rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-[#0984E3]" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t-2 border-[#E9ECEF]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-lg border-2 border-gray-300 font-bold text-xs uppercase hover:bg-gray-100 cursor-pointer"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    if (onOpenContactWithProject) {
                      onOpenContactWithProject(`Inquiry regarding ${title}`);
                    }
                  }}
                  className="bg-[#0984E3] hover:bg-[#0773C5] text-white font-extrabold text-xs px-6 py-2.5 rounded-lg uppercase tracking-wider cursor-pointer"
                >
                  WANT RESULTS LIKE THIS? LET'S WORK TOGETHER
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
