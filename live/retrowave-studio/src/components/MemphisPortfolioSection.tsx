import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/memphisData';
import { PortfolioProject } from '../types';
import { ExternalLink, Sparkles, Filter, Eye, Tag, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MemphisPortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Brand Identity', 'Web Design', 'Digital Art', 'Packaging'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  const handleFilterClick = (cat: string) => {
    setSelectedCategory(cat);
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.8 },
      colors: ['#FFE600', '#FF007A', '#0047FF']
    });
  };

  return (
    <section id="work" className="w-full bg-white py-20 px-4 sm:px-8 border-b-4 border-black relative select-none">
      
      {/* Decorative Strip */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-pattern-stripes-pink" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFE600] text-black font-space font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_#000] mb-4">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-lexend font-black text-4xl sm:text-6xl text-black uppercase tracking-tight">
              Bold <span className="bg-[#FF007A] text-white px-2 py-0.5 border-3 border-black shadow-[4px_4px_0px_0px_#39FF14]">Portfolio</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                className={`font-space font-black text-xs uppercase px-4 py-2 border-2 border-black transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0047FF] text-white shadow-[4px_4px_0px_0px_#FFE600] -translate-y-0.5'
                    : 'bg-white text-black hover:bg-yellow-200 shadow-[2px_2px_0px_0px_#000]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group bg-slate-50 border-4 border-black p-5 shadow-[6px_6px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#FF007A] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Header */}
                <div className="w-full h-56 border-3 border-black overflow-hidden relative mb-5 bg-slate-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 bg-[#FFE600] text-black font-space font-black text-[10px] uppercase px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                    {project.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-black text-white font-mono text-[10px] px-2 py-1 border border-white">
                    {project.year}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-lexend font-black text-2xl text-black uppercase mb-1 group-hover:text-[#FF007A] transition-colors">
                  {project.title}
                </h3>

                <p className="font-space font-bold text-xs text-slate-500 uppercase tracking-wider mb-3">
                  Client: {project.client}
                </p>

                <p className="font-space text-xs text-slate-800 font-medium line-clamp-2 mb-4">
                  {project.description}
                </p>
              </div>

              {/* Color Swatch Indicators & View Button */}
              <div className="pt-3 border-t-2 border-black flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {project.colors.map((c, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-black"
                      style={{ backgroundColor: c }}
                      title={`Color ${c}`}
                    />
                  ))}
                </div>

                <span className="font-space font-black text-xs uppercase text-black flex items-center gap-1 group-hover:underline">
                  <span>View Case</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-4 border-black max-w-2xl w-full p-6 sm:p-8 shadow-[12px_12px_0px_0px_#39FF14] relative">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 bg-[#FF007A] text-white p-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-black"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="font-space font-black text-xs uppercase px-3 py-1 bg-[#FFE600] border-2 border-black inline-block mb-3">
              {activeModalProject.category} • {activeModalProject.year}
            </span>

            <h3 className="font-lexend font-black text-3xl text-black uppercase mb-1">
              {activeModalProject.title}
            </h3>
            <p className="font-space font-bold text-sm text-slate-600 uppercase mb-4">
              Client: {activeModalProject.client}
            </p>

            <div className="w-full h-64 border-3 border-black mb-6 overflow-hidden">
              <img 
                src={activeModalProject.thumbnail} 
                alt={activeModalProject.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="font-space text-sm text-slate-900 font-medium mb-6 leading-relaxed">
              {activeModalProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeModalProject.tags.map((tag, i) => (
                <span key={i} className="bg-cyan-100 text-black font-space font-bold text-xs px-3 py-1 border border-black">
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => setActiveModalProject(null)}
              className="w-full bg-[#FF007A] text-white font-space font-black text-sm uppercase py-3 border-2 border-black shadow-[4px_4px_0px_0px_#000]"
            >
              Close Case Study
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
