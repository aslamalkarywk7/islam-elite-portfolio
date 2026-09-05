import React, { useState } from 'react';
import { DisplaySettings, Project } from './types';
import { Navbar } from './components/Navbar';
import { MarqueeTicker } from './components/MarqueeTicker';
import { HeroSection } from './components/HeroSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectModal } from './components/ProjectModal';
import { PosterGenerator } from './components/PosterGenerator';
import { ManifestoGrid } from './components/ManifestoGrid';
import { ClientRoster } from './components/ClientRoster';
import { ContactTerminal } from './components/ContactTerminal';
import { StudioMockupWrapper } from './components/StudioMockupWrapper';
import { audioSynth } from './utils/audioSynth';
import { ArrowUp, Terminal, Flame, Zap, ShieldAlert, Sparkles } from 'lucide-react';

export default function App() {
  const [displaySettings, setDisplaySettings] = useState<DisplaySettings>({
    mode: 'canvas',
    ambientLighting: 'neon_lime',
    glareEffect: true,
    scanlines: false,
    crtCurvature: false,
    rgbSplit: false,
    noiseLevel: 10,
    audioMuted: false,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToTop = () => {
    audioSynth.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTerminal = () => {
    audioSynth.playGlitchBeep();
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    audioSynth.playHeavyPop();
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StudioMockupWrapper displaySettings={displaySettings} setDisplaySettings={setDisplaySettings}>
      <div className="min-h-screen bg-black text-white font-mono selection:bg-[#CCFF00] selection:text-black">
        
        {/* Navigation */}
        <Navbar
          displaySettings={displaySettings}
          setDisplaySettings={setDisplaySettings}
          onOpenTerminal={scrollToTerminal}
        />

        {/* Top Continuous Ticker */}
        <MarqueeTicker
          text="★ UNCENSORED RAW NEO-BRUTALISM ★ 5PX HARD STROKES ARE LAW ★ NO PASTEL GRADIENTS ★ TOKYO // BERLIN // NEW YORK // LONDON ★ HIGH IMPACT FRONTEND"
          bgColor="bg-[#CCFF00]"
          textColor="text-black"
        />

        {/* Main Hero Section */}
        <HeroSection
          onOpenTerminal={scrollToTerminal}
          onExploreProjects={scrollToProjects}
        />

        {/* Reverse Marquee Ticker */}
        <MarqueeTicker
          text="★ 12-COLUMN ASYMMETRICAL VERTICAL GRID ★ 0.14s PAGE LOAD ENGINE ★ 42 GLOBAL AWARDS ★ CUSTOM WEBAUDIO SYNTH ★ RAW CREATIVE FORCE"
          bgColor="bg-white"
          textColor="text-black"
          reverse={true}
        />

        {/* Portfolio Showcase Section */}
        <ProjectShowcase onSelectProject={(p) => setSelectedProject(p)} />

        {/* Interactive Poster Generator Studio */}
        <PosterGenerator />

        {/* Manifesto Grid Section */}
        <ManifestoGrid />

        {/* Client Roster & Testimonials */}
        <ClientRoster />

        {/* Project Commission Terminal & Calculator */}
        <ContactTerminal />

        {/* Case Study Inspector Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Brutalist Footer */}
        <footer className="bg-black text-white border-t-[5px] border-black pt-12 pb-16 relative">
          <div className="max-w-[1800px] mx-auto px-4">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b-4 border-white pb-10">
              
              {/* Brand Logo & Statement */}
              <div className="md:col-span-6 space-y-4">
                <div className="inline-block bg-[#CCFF00] text-black font-display font-black text-3xl px-4 py-2 border-4 border-black shadow-[6px_6px_0px_#ffffff] uppercase">
                  RAW STUDIO // 2026
                </div>
                <p className="font-mono text-xs text-zinc-300 max-w-lg font-bold leading-relaxed">
                  A cutting-edge Neo-Brutalist design & engineering studio specializing in high-contrast web platforms, experimental WebGL shaders, and unapologetic brand identities.
                </p>
                <div className="flex items-center space-x-2 text-xs font-bold text-[#CCFF00]">
                  <Flame className="w-4 h-4 fill-current animate-pulse" />
                  <span>BUILT WITH REACT 19 + VITE + TAILWIND CSS</span>
                </div>
              </div>

              {/* Quick Links Column */}
              <div className="md:col-span-3 font-mono text-xs space-y-2">
                <div className="bg-white text-black font-black px-2 py-1 inline-block uppercase mb-2">
                  NAVIGATION JUMPS
                </div>
                <div>
                  <a href="#top" className="hover:text-[#CCFF00] font-bold block">01. TOP // HERO</a>
                  <a href="#projects" className="hover:text-[#CCFF00] font-bold block">02. WORK SHOWCASE</a>
                  <a href="#poster-studio" className="hover:text-[#CCFF00] font-bold block">03. POSTER STUDIO</a>
                  <a href="#manifesto" className="hover:text-[#CCFF00] font-bold block">04. MANIFESTO</a>
                  <a href="#contact" className="hover:text-[#CCFF00] font-bold block">05. COMMISSION TERMINAL</a>
                </div>
              </div>

              {/* System Specs Column */}
              <div className="md:col-span-3 font-mono text-xs space-y-2">
                <div className="bg-[#CCFF00] text-black font-black px-2 py-1 inline-block uppercase mb-2">
                  HARDWARE SPECS
                </div>
                <div className="text-zinc-400 font-bold space-y-1">
                  <div>BORDER: 5.0PX SOLID BLACK</div>
                  <div>ACCENT: ELECTRIC LIME (#CCFF00)</div>
                  <div>SHADOWS: HARD-EDGED ZERO BLUR</div>
                  <div>GRADIENTS: 0.00% (STRICT BANNED)</div>
                </div>
              </div>

            </div>

            {/* Bottom Bar & Scroll to Top */}
            <div className="pt-6 flex flex-wrap justify-between items-center gap-4 font-mono text-xs">
              <div className="text-zinc-500 font-bold">
                © 2026 RAW CREATIVE STUDIO. ALL RIGHTS RESERVED. UNCENSORED FRONTEND STYLE.
              </div>

              <button
                onClick={scrollToTop}
                className="btn-brutal-lime px-4 py-2 font-black uppercase flex items-center space-x-2 cursor-pointer"
              >
                <span>TOP OF PAGE</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

          </div>
        </footer>

      </div>
    </StudioMockupWrapper>
  );
}
