import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ArrowUpRight, Filter, Search, Layers, ExternalLink, Zap, CheckCircle } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'EXPERIMENTAL WEB', '3D & GLITCH', 'BRAND IDENTITY', 'PHYSICAL INSTALLATION'];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCategory = activeCategory === 'ALL' || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 bg-zinc-950 text-white border-b-[5px] border-black relative">
      <div className="max-w-[1800px] mx-auto px-4">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 border-b-4 border-white pb-8">
          <div>
            <div className="bg-[#CCFF00] text-black font-mono font-black text-xs px-3 py-1 border-2 border-black inline-block mb-3 uppercase">
              FEATURED PORTFOLIO SHOWCASE [06]
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
              FEATURED <span className="text-[#CCFF00]">WORK</span>
            </h2>
            <p className="font-mono text-sm sm:text-base text-zinc-400 max-w-2xl mt-2 font-bold">
              UNCONVENTIONAL VERTICAL GRID // 5PX SOLID BORDERS // CUSTOM METRICS & CASE STUDIES
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="SEARCH PROJECTS / TAGS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black text-white font-mono text-xs font-bold pl-9 pr-3 py-3 border-4 border-black shadow-[4px_4px_0px_#CCFF00] focus:outline-none focus:bg-zinc-900 placeholder:text-zinc-500 uppercase"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    audioSynth.playClick();
                    setActiveCategory(cat);
                  }}
                  className={`px-3 py-2 font-mono text-xs font-black uppercase border-4 border-black transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#CCFF00] text-black shadow-[4px_4px_0px_#ffffff]'
                      : 'bg-black text-white hover:bg-white hover:text-black shadow-[4px_4px_0px_#000]'
                  }`}
                >
                  {cat === 'ALL' ? 'ALL [06]' : cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Extreme Unconventional Asymmetrical Vertical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            // Stagger layout offsets for unconventional brutalist look
            const isWide = idx % 5 === 0;

            return (
              <div
                key={project.id}
                className={`bg-black border-4 border-white p-5 flex flex-col justify-between relative group transition-all duration-150 ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                } shadow-[10px_10px_0px_#000] hover:shadow-[12px_12px_0px_#CCFF00] hover:-translate-x-1 hover:-translate-y-1`}
              >
                {/* Top Raw Tag Bar */}
                <div className="flex justify-between items-center border-b-4 border-white pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-[#CCFF00] bg-zinc-900 px-2 py-0.5 border-2 border-black">
                      {project.number}
                    </span>
                    <span className="bg-white text-black font-mono font-black text-[10px] px-2 py-1 uppercase border border-black">
                      {project.category}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400">
                    YEAR: {project.year}
                  </span>
                </div>

                {/* Project Artwork Image Frame */}
                <div 
                  onClick={() => {
                    audioSynth.playHeavyPop();
                    onSelectProject(project);
                  }}
                  className="relative overflow-hidden border-4 border-black bg-zinc-900 cursor-pointer group-hover:border-[#CCFF00] transition-colors mb-4"
                >
                  <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:contrast-125"
                    />
                    
                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-[#CCFF00] text-black font-mono font-black text-xs px-4 py-2 border-4 border-black shadow-[6px_6px_0px_#000] flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform">
                        <span>INSPECT CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Stamp */}
                    <div className="absolute bottom-2 left-2 bg-black/90 text-[#CCFF00] font-mono text-[10px] font-bold px-2 py-1 border border-[#CCFF00]">
                      CLIENT: {project.client}
                    </div>
                  </div>
                </div>

                {/* Project Title & Description */}
                <div className="space-y-3 mb-4 flex-1">
                  <h3 
                    onClick={() => {
                      audioSynth.playHeavyPop();
                      onSelectProject(project);
                    }}
                    className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-[#CCFF00] transition-colors cursor-pointer uppercase tracking-tight"
                  >
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-300 leading-relaxed font-bold line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Metrics Highlights */}
                <div className="border-t-2 border-zinc-800 pt-3 mt-auto space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-zinc-900 text-zinc-300 font-mono text-[10px] font-bold px-2 py-0.5 border border-zinc-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Metrics Strip */}
                  <div className="grid grid-cols-2 gap-2 bg-zinc-900 p-2 border border-zinc-700 font-mono text-[10px]">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i}>
                        <span className="text-zinc-500 block">{m.label}</span>
                        <span className="text-[#CCFF00] font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex justify-between items-center">
                    <button
                      onClick={() => {
                        audioSynth.playHeavyPop();
                        onSelectProject(project);
                      }}
                      className="w-full btn-brutal-lime py-2 text-xs font-black flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>SPEC & CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-black border-4 border-white my-8">
            <h3 className="font-display text-2xl font-black text-[#CCFF00] uppercase mb-2">
              NO PROJECTS FOUND
            </h3>
            <p className="font-mono text-xs text-zinc-400">
              TRY CLEARING YOUR SEARCH OR CATEGORY FILTER.
            </p>
            <button
              onClick={() => {
                setActiveCategory('ALL');
                setSearchQuery('');
              }}
              className="mt-4 btn-brutal px-4 py-2 bg-white text-black font-black text-xs uppercase"
            >
              RESET FILTERS
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
