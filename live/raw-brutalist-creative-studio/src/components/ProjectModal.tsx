import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle, Sliders, Layers, Sparkles, Terminal, Code } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'case_study' | 'wireframe' | 'spec_sheet'>('case_study');
  const [rgbShift, setRgbShift] = useState<boolean>(false);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm select-none">
      <div className="bg-black text-white border-4 border-white w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-[16px_16px_0px_#CCFF00] relative flex flex-col">
        
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 bg-[#CCFF00] text-black p-4 border-b-4 border-black flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center space-x-3">
            <span className="font-display font-black text-2xl sm:text-3xl bg-black text-[#CCFF00] px-3 py-0.5 border-2 border-black">
              {project.number}
            </span>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight">
                {project.title}
              </h2>
              <span className="font-mono text-xs font-bold uppercase text-black">
                CLIENT: {project.client} // {project.year}
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => {
              audioSynth.playClick();
              onClose();
            }}
            className="p-2 bg-black text-white hover:bg-white hover:text-black border-4 border-black font-black transition-colors cursor-pointer"
            title="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-zinc-900 border-b-4 border-white p-2 flex flex-wrap gap-2 font-mono text-xs font-black uppercase">
          <button
            onClick={() => {
              audioSynth.playClick();
              setActiveTab('case_study');
            }}
            className={`px-4 py-2 border-2 border-black cursor-pointer ${
              activeTab === 'case_study'
                ? 'bg-white text-black shadow-[3px_3px_0px_#CCFF00]'
                : 'bg-black text-white hover:bg-zinc-800'
            }`}
          >
            01. CASE STUDY & IMPACT
          </button>
          <button
            onClick={() => {
              audioSynth.playClick();
              setActiveTab('wireframe');
            }}
            className={`px-4 py-2 border-2 border-black cursor-pointer ${
              activeTab === 'wireframe'
                ? 'bg-white text-black shadow-[3px_3px_0px_#CCFF00]'
                : 'bg-black text-white hover:bg-zinc-800'
            }`}
          >
            02. WIREFRAME & RGB SHADER
          </button>
          <button
            onClick={() => {
              audioSynth.playClick();
              setActiveTab('spec_sheet');
            }}
            className={`px-4 py-2 border-2 border-black cursor-pointer ${
              activeTab === 'spec_sheet'
                ? 'bg-white text-black shadow-[3px_3px_0px_#CCFF00]'
                : 'bg-black text-white hover:bg-zinc-800'
            }`}
          >
            03. TECH SPEC & DELIVERABLES
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-8 flex-1">
          
          {/* Main Showcase Image Frame with RGB Shift Toggle */}
          <div className="relative border-4 border-white bg-zinc-900 overflow-hidden shadow-[8px_8px_0px_#000]">
            <div className={`relative aspect-[16/9] w-full overflow-hidden ${rgbShift ? 'filter saturate-200 hue-rotate-180 contrast-200' : ''}`}>
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none" />
            </div>

            {/* Image Overlay Controls */}
            <div className="bg-black text-white p-3 border-t-4 border-white flex justify-between items-center font-mono text-xs flex-wrap gap-2">
              <button
                onClick={() => {
                  audioSynth.playHeavyPop();
                  setRgbShift(!rgbShift);
                }}
                className={`px-3 py-1 font-bold border border-white cursor-pointer ${
                  rgbShift ? 'bg-[#CCFF00] text-black font-black' : 'bg-zinc-800 text-white'
                }`}
              >
                RGB_SHIFT_EFFECT {rgbShift ? '[ACTIVE]' : '[INACTIVE]'}
              </button>

              <span className="text-[#CCFF00] font-bold">
                CATEGORY: {project.category}
              </span>
            </div>
          </div>

          {/* TAB 1: CASE STUDY */}
          {activeTab === 'case_study' && (
            <div className="space-y-6">
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-zinc-900 border-4 border-white p-4 shadow-[4px_4px_0px_#000]">
                    <div className="font-display font-black text-2xl text-[#CCFF00]">
                      {m.value}
                    </div>
                    <div className="font-mono text-xs font-bold text-zinc-300 uppercase mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge / Solution / Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                
                <div className="bg-black border-4 border-white p-4 shadow-[6px_6px_0px_#000]">
                  <div className="bg-red-600 text-white font-black px-2 py-1 inline-block uppercase mb-3">
                    01. THE CHALLENGE
                  </div>
                  <p className="text-zinc-300 leading-relaxed font-bold">
                    {project.fullCaseStudy.challenge}
                  </p>
                </div>

                <div className="bg-black border-4 border-white p-4 shadow-[6px_6px_0px_#000]">
                  <div className="bg-[#CCFF00] text-black font-black px-2 py-1 inline-block uppercase mb-3">
                    02. THE SOLUTION
                  </div>
                  <p className="text-zinc-300 leading-relaxed font-bold">
                    {project.fullCaseStudy.solution}
                  </p>
                </div>

                <div className="bg-black border-4 border-white p-4 shadow-[6px_6px_0px_#000]">
                  <div className="bg-white text-black font-black px-2 py-1 inline-block uppercase mb-3">
                    03. MEASURED IMPACT
                  </div>
                  <p className="text-zinc-300 leading-relaxed font-bold">
                    {project.fullCaseStudy.impact}
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: WIREFRAME & ARCHITECTURE */}
          {activeTab === 'wireframe' && (
            <div className="space-y-6 font-mono text-xs">
              <div className="bg-zinc-900 border-4 border-white p-6 shadow-[6px_6px_0px_#000]">
                <h3 className="font-display text-xl font-black text-[#CCFF00] uppercase mb-4">
                  STRUCTURAL WIREFRAME & GRID BLUEPRINT
                </h3>
                <div className="border-4 border-dashed border-zinc-600 p-8 bg-black text-center space-y-4">
                  <div className="inline-block bg-[#CCFF00] text-black px-4 py-2 font-black uppercase text-sm border-2 border-black">
                    UNCENSORED GRID BLUEPRINT // {project.number}
                  </div>
                  <p className="text-zinc-400 max-w-xl mx-auto font-bold">
                    12-Column Asymmetrical Grid Layout with 5.0px hard strokes, hard drop shadows, and zero pastel gradients.
                  </p>
                  <div className="grid grid-cols-6 gap-2 pt-4">
                    {[1, 2, 3, 4, 5, 6].map((col) => (
                      <div key={col} className="bg-zinc-800 border-2 border-zinc-600 p-4 font-bold text-zinc-400">
                        COL_{col}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SPEC SHEET & DELIVERABLES */}
          {activeTab === 'spec_sheet' && (
            <div className="space-y-6 font-mono text-xs">
              <div className="bg-zinc-900 border-4 border-white p-6 shadow-[6px_6px_0px_#000]">
                <h3 className="font-display text-xl font-black text-[#CCFF00] uppercase mb-4">
                  VERIFIED DELIVERABLES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.fullCaseStudy.deliverables.map((item, idx) => (
                    <div key={idx} className="bg-black border-2 border-white p-3 flex items-center space-x-3 font-bold text-zinc-200">
                      <CheckCircle className="w-5 h-5 text-[#CCFF00] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="bg-black border-4 border-white p-6 shadow-[6px_6px_0px_#000]">
                <h4 className="font-display text-lg font-black text-white uppercase mb-3">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-[#CCFF00] text-black font-black text-xs px-3 py-1 border-2 border-black">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-black text-white p-4 border-t-4 border-white flex justify-between items-center flex-wrap gap-3 font-mono text-xs">
          <div className="text-zinc-400 font-bold">
            SPEC ID: {project.id.toUpperCase()} // STATUS: APPROVED
          </div>
          <button
            onClick={() => {
              audioSynth.playClick();
              onClose();
            }}
            className="btn-brutal-lime px-6 py-2 text-xs font-black uppercase cursor-pointer"
          >
            CLOSE SPEC SHEET
          </button>
        </div>

      </div>
    </div>
  );
};
