import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/bauhausData';
import { ArrowUpRight, X, Layers, Grid, Compass, ExternalLink } from 'lucide-react';

interface ProjectsShowcaseProps {
  showGridLines: boolean;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ showGridLines }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Branding', 'Architecture', 'Digital', 'Spatial'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="bg-[#FFFFFF] py-16 md:py-24 border-b-2 border-[#121212] relative">
      {/* Structural Grid Background */}
      <div className={`absolute inset-0 ${showGridLines ? 'bg-bauhaus-grid-dense' : ''} pointer-events-none opacity-20`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-2 border-[#121212] gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-[#0055FF] uppercase mb-2">
              <span className="w-3 h-3 bg-[#0055FF]"></span>
              <span>SELECTED ARCHIVAL WORKS & BRANDING SYSTEMS</span>
            </div>
            <h2 className="font-heavy text-4xl sm:text-6xl text-[#121212] tracking-tighter uppercase leading-none">
              SELECTED WORKS
            </h2>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mono-code text-xs px-4 py-2 border-2 border-[#121212] transition-all cursor-pointer font-bold uppercase ${
                    isSelected
                      ? 'bg-[#121212] text-[#FFE600] shadow-[3px_3px_0px_0px_#FF2A1F]'
                      : 'bg-[#F6F5F0] text-[#121212] hover:bg-[#FFE600]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer border-2 border-[#121212] bg-[#F6F5F0] transition-all duration-300 hover:shadow-[10px_10px_0px_0px_#121212] hover:-translate-y-1 relative flex flex-col justify-between"
              >
                {/* Image Box with B&W Desaturated Photo + Geometric Overlay */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden border-b-2 border-[#121212]">
                  {/* Desaturated B&W Photo */}
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Primary Geometric Color Mask Overlay */}
                  {project.overlayShape === 'circle' && (
                    <div
                      className="absolute top-4 left-4 w-28 h-28 rounded-full mix-blend-multiply opacity-80 transition-transform duration-500 group-hover:scale-125"
                      style={{ backgroundColor: project.overlayColor }}
                    />
                  )}

                  {project.overlayShape === 'square' && (
                    <div
                      className="absolute bottom-4 right-4 w-24 h-24 mix-blend-multiply opacity-85 transition-transform duration-500 group-hover:rotate-45"
                      style={{ backgroundColor: project.overlayColor }}
                    />
                  )}

                  {project.overlayShape === 'triangle' && (
                    <div
                      className="absolute bottom-0 left-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] mix-blend-hard-light opacity-90 transition-transform duration-500 group-hover:scale-110"
                      style={{ borderBottomColor: project.overlayColor }}
                    />
                  )}

                  {project.overlayShape === 'diagonal' && (
                    <div
                      className="absolute inset-x-0 top-1/3 h-10 mix-blend-overlay opacity-85 transition-transform duration-500 group-hover:h-16"
                      style={{ backgroundColor: project.overlayColor }}
                    />
                  )}

                  {/* Top Right Specs Tag */}
                  <div className="absolute top-3 right-3 bg-[#121212] text-white font-mono-code text-[10px] px-2 py-1 font-bold">
                    {project.year} // {project.category}
                  </div>

                  {/* Hover Arrow Overlay */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 bg-[#FFE600] border-2 border-[#121212] flex items-center justify-center text-[#121212] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between font-mono-code text-xs text-gray-600 mb-1">
                      <span>CLIENT: {project.client.toUpperCase()}</span>
                      <span className="font-bold text-[#FF2A1F]">#{idx + 1}</span>
                    </div>
                    <h3 className="font-heavy text-2xl text-[#121212] uppercase tracking-tight mb-2 group-hover:text-[#0055FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body text-xs text-gray-700 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-3 border-t border-[#121212]/20 flex flex-wrap gap-1.5 font-mono-code text-[10px]">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-white border border-[#121212] px-2 py-0.5 text-gray-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-[#121212]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#F6F5F0] border-4 border-[#121212] max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-[16px_16px_0px_0px_#FF2A1F] relative font-body animate-in zoom-in-95">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 bg-[#FF2A1F] text-white border-2 border-[#121212] cursor-pointer hover:bg-[#121212] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header Title */}
            <div className="mb-6 pb-4 border-b-2 border-[#121212]">
              <div className="font-mono-code text-xs text-[#0055FF] font-bold uppercase mb-1">
                PROJECT ARCHIVE // {activeModalProject.year} // {activeModalProject.category}
              </div>
              <h2 className="font-heavy text-3xl sm:text-5xl text-[#121212] uppercase tracking-tighter">
                {activeModalProject.title}
              </h2>
              <p className="font-mono-code text-sm text-gray-700 mt-1">
                COMMISSIONED BY: <span className="font-bold text-[#121212]">{activeModalProject.client}</span>
              </p>
            </div>

            {/* Modal Image Display */}
            <div className="relative aspect-[16/9] bg-black overflow-hidden border-2 border-[#121212] mb-6">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div
                className="absolute inset-0 mix-blend-multiply opacity-75"
                style={{ backgroundColor: activeModalProject.overlayColor }}
              />
              <div className="absolute bottom-4 left-4 bg-[#121212] text-[#FFE600] font-mono-code text-xs px-3 py-1.5 font-bold border border-white">
                OVERLAY ACCENT: {activeModalProject.overlayColor}
              </div>
            </div>

            {/* Specifications & Overview */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 space-y-4">
                <h3 className="font-heavy text-lg uppercase text-[#121212]">PROJECT OVERVIEW</h3>
                <p className="font-body text-sm leading-relaxed text-gray-800">
                  {activeModalProject.description}
                </p>
                <div className="pt-2">
                  <span className="font-mono-code text-xs font-bold text-gray-500 uppercase block mb-2">SYSTEM TAGS:</span>
                  <div className="flex flex-wrap gap-2 font-mono-code text-xs">
                    {activeModalProject.tags.map((t) => (
                      <span key={t} className="bg-[#121212] text-white px-3 py-1 font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid Ratio & Spec Box */}
              <div className="md:col-span-4 border-2 border-[#121212] bg-white p-4 space-y-3 font-mono-code text-xs">
                <div className="font-bold text-[#FF2A1F] border-b border-[#121212] pb-2 uppercase flex items-center gap-2">
                  <Grid className="w-4 h-4" />
                  <span>GRID SPECIFICATIONS</span>
                </div>
                <div>
                  <span className="text-gray-500 block">GRID RATIO:</span>
                  <span className="font-bold text-[#121212]">{activeModalProject.specs.gridRatio}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">TYPEFACE PAIRING:</span>
                  <span className="font-bold text-[#121212]">{activeModalProject.specs.fontFamily}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">PRIMARY COLOR HEX:</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="w-4 h-4 border border-[#121212]"
                      style={{ backgroundColor: activeModalProject.specs.primaryHex }}
                    />
                    <span className="font-bold text-[#121212]">{activeModalProject.specs.primaryHex}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Close CTA */}
            <div className="mt-8 pt-4 border-t-2 border-[#121212] flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-6 py-3 bg-[#121212] text-[#FFE600] font-heavy text-xs uppercase tracking-wider border-2 border-[#121212] cursor-pointer hover:bg-[#FF2A1F] hover:text-white transition-colors"
              >
                CLOSE ARCHIVE SPEC
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
