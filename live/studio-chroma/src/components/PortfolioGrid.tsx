import React, { useState } from 'react';
import { ArrowUpRight, Filter, Search, Sparkles } from 'lucide-react';
import { Category, Project } from '../types';
import { M3Ripple } from './M3Ripple';
import { M3Button } from './M3Button';

interface PortfolioGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Category[] = ['All', 'Mobile Apps', 'Branding', 'Web Systems', 'Spatial UI'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work" className="py-16 md:py-24 bg-[#FDFBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E1E2EC] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8E2FF] text-[#001D33] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#005CBB]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#005CBB]" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1C1E] tracking-tight">
              Featured Studio Works
            </h2>
            <p className="text-sm sm:text-base text-[#757780] mt-1 max-w-xl">
              High-impact digital products, spatial interfaces, and brand systems engineered to Material Design 3 guidelines.
            </p>
          </div>

          {/* Search bar input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#757780]" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white rounded-full border border-[#E1E2EC] focus:border-[#005CBB] focus:ring-2 focus:ring-[#005CBB]/20 outline-none transition-all placeholder:text-[#757780]"
            />
          </div>
        </div>

        {/* M3 Segmented Control Filter Buttons */}
        <div className="flex items-center justify-start overflow-x-auto pb-2 scrollbar-none gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 select-none shrink-0 ${
                  isActive
                    ? 'bg-[#005CBB] text-white shadow-xs'
                    : 'bg-white text-[#44474E] border border-[#E1E2EC] hover:border-[#005CBB] hover:bg-[#E1E2EC]/30'
                }`}
              >
                <M3Ripple color={isActive ? 'rgba(255,255,255,0.2)' : 'rgba(0,92,187,0.1)'} />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bento-card group overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Image Container */}
              <div className="p-3">
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#E1E2EC]/50 rounded-2xl">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Category M3 Tonal Chip Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#001D33] text-[11px] font-bold tracking-wide shadow-2xs border border-white/40">
                      {project.category}
                    </span>
                  </div>

                  {/* Top-Right Arrow Action */}
                  <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#005CBB] shadow-xs group-hover:bg-[#005CBB] group-hover:text-white transition-colors duration-200">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#757780] font-medium">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1C1E] group-hover:text-[#005CBB] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#44474E] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action Button in M3 Style */}
              <div className="px-5 pb-5 pt-0 border-t border-[#E1E2EC]/60 mt-1 flex items-center justify-between">
                <M3Button
                  variant="outlined"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  View Case Study
                </M3Button>

                <div className="flex items-center gap-1">
                  {project.colorPalette.slice(0, 3).map((hex, idx) => (
                    <span
                      key={idx}
                      className="w-3 h-3 rounded-full border border-white shadow-2xs"
                      style={{ backgroundColor: hex }}
                      title={`Token ${hex}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bento-card space-y-3">
            <Filter className="w-8 h-8 text-[#757780] mx-auto" />
            <h3 className="text-lg font-bold text-[#1A1C1E]">No projects match your filter</h3>
            <p className="text-sm text-[#757780]">Try selecting a different category or clearing search terms.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-[#005CBB] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
