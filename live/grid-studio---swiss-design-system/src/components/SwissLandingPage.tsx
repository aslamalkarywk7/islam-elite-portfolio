import React, { useState } from 'react';
import { GridConfig, RedVariant } from '../types';
import { SWISS_PRINCIPLES, EXTENDED_PRINCIPLES, PROJECTS_DATA, SWISS_QUOTES } from '../data/swissData';
import { ArrowUpRight, Grid, Sliders, Layers, Sparkles, X, Check, Eye } from 'lucide-react';

interface SwissLandingPageProps {
  gridConfig: GridConfig;
  onUpdateGridConfig: (config: Partial<GridConfig>) => void;
  onOpenPosterPlayground: () => void;
  redAccent?: RedVariant;
}

export const SwissLandingPage: React.FC<SwissLandingPageProps> = ({
  gridConfig,
  onUpdateGridConfig,
  onOpenPosterPlayground,
  redAccent = '#E30613',
}) => {
  const [activeTab, setActiveTab] = useState<'HOME' | 'WORK' | 'ABOUT' | 'PRINCIPLES' | 'CONTACT'>('HOME');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [copiedContact, setCopiedContact] = useState<boolean>(false);

  const handleNavClick = (tab: 'HOME' | 'WORK' | 'ABOUT' | 'PRINCIPLES' | 'CONTACT', sectionId?: string) => {
    setActiveTab(tab);
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCopyContact = () => {
    navigator.clipboard.writeText('hello@gridstudio.ch');
    setCopiedContact(true);
    setTimeout(() => setCopiedContact(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-white text-black font-sans selection:bg-[#E30613] selection:text-white border-t-8 border-black">
      
      {/* MATHEMATICAL GRID OVERLAY (WHEN TOGGLED) */}
      {gridConfig.showColumns && (
        <div className="pointer-events-none absolute inset-0 z-40 max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: gridConfig.columnCount }).map((_, i) => (
            <div key={i} className="h-full border-x border-[#E30613]/20 bg-[#E30613]/[0.02] relative">
              <span className="absolute top-2 left-1 text-[9px] font-mono font-bold text-[#E30613] opacity-70">
                COL {i + 1}
              </span>
            </div>
          ))}
        </div>
      )}

      {gridConfig.showBaseline && (
        <div 
          className="pointer-events-none absolute inset-0 z-40 h-full w-full opacity-30"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${redAccent} 1px, transparent 1px)`,
            backgroundSize: '100% 24px'
          }}
        />
      )}

      {gridConfig.showMargins && (
        <div className="pointer-events-none absolute inset-0 z-40 border-[24px] border-[#E30613]/15" />
      )}

      {/* HEADER SECTION */}
      <header id="header" className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('HOME')}
              className="group text-left focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-black group-hover:bg-[#E30613] transition-colors" />
                <span className="font-extrabold text-2xl tracking-tighter text-black uppercase font-swiss">
                  GRID STUDIO
                </span>
              </div>
            </button>
            <span className="text-xs font-mono font-bold bg-black text-white px-2 py-0.5 tracking-widest uppercase">
              CH-1958
            </span>
          </div>

          {/* Navigation Links Precisely Aligned */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs font-bold tracking-widest text-black">
            {(['WORK', 'ABOUT', 'PRINCIPLES', 'CONTACT'] as const).map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item, item.toLowerCase())}
                className={`transition-colors relative py-1 hover:text-[#E30613] ${
                  activeTab === item ? 'text-[#E30613] underline underline-offset-8 decoration-2' : 'text-black'
                }`}
              >
                {item}
              </button>
            ))}

            <div className="h-4 w-px bg-black/20 hidden sm:block" />

            {/* Quick Grid Overlay Control in Nav */}
            <button
              onClick={() => onUpdateGridConfig({ showColumns: !gridConfig.showColumns })}
              className={`flex items-center gap-1.5 px-3 py-1.5 border border-black text-[11px] font-mono transition-all ${
                gridConfig.showColumns ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'
              }`}
              title="Toggle Swiss 12-Column Grid Lines"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>GRID {gridConfig.showColumns ? 'ON' : 'OFF'}</span>
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-16 md:pt-16 md:pb-24 border-b-2 border-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Top Main Title Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 border border-black px-3 py-1 mb-6 text-xs font-mono font-bold uppercase tracking-widest bg-neutral-100">
                <span className="w-2 h-2 rounded-full bg-[#E30613] animate-pulse" />
                SWISS TYPOGRAPHIC SYSTEM
              </div>

              {/* Massive Black Bold Geometric Caps Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-black leading-[0.92] tracking-tighter uppercase font-swiss">
                THE ART OF <br />
                STRUCTURE <br />
                AND GRID
              </h1>
            </div>

            {/* Subtitle Block in Black Caps */}
            <div className="border-l-4 border-black pl-5 py-2 max-w-2xl">
              <p className="font-extrabold text-sm sm:text-base md:text-lg tracking-wider text-black font-swiss leading-relaxed uppercase">
                SWISS TYPOGRAPHIC STYLE. CLARITY. ORGANISATION. SIMPLICITY. PRECISION.
              </p>
              <p className="text-xs sm:text-sm font-medium text-neutral-700 mt-2 leading-relaxed">
                Empowering visual communication through rigorous mathematical alignment, objective typography, and asymmetric equilibrium.
              </p>
            </div>

            {/* Sharp Cornered Rectangular Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => handleNavClick('PRINCIPLES', 'principles')}
                style={{ backgroundColor: redAccent }}
                className="px-8 py-4 text-white text-sm font-black font-mono tracking-widest uppercase transition-all duration-150 hover:bg-black hover:scale-[1.01] active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black flex items-center gap-3 cursor-pointer"
              >
                <span>EXPLORE PRINCIPLES</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={() => handleNavClick('WORK', 'work')}
                className="px-8 py-4 bg-black text-white text-sm font-black font-mono tracking-widest uppercase transition-all duration-150 hover:bg-[#E30613] hover:scale-[1.01] active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black flex items-center gap-3 cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={onOpenPosterPlayground}
                className="px-6 py-4 bg-white text-black border-2 border-black text-sm font-extrabold font-mono tracking-widest uppercase hover:bg-black hover:text-white transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#E30613]" />
                <span>POSTER STUDIO</span>
              </button>
            </div>
          </div>

          {/* Right Solid Swiss Red Block (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div 
              style={{ backgroundColor: redAccent }}
              className="p-8 sm:p-10 text-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1"
            >
              {/* White Square Icon inside Red Block */}
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#E30613]" />
                </div>
                <span className="font-mono text-xs font-bold tracking-widest uppercase bg-black text-white px-2 py-1">
                  CH-1950
                </span>
              </div>

              {/* Text SWISS DESIGN in White */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-swiss leading-none text-white">
                  SWISS DESIGN
                </h2>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/90 leading-relaxed border-t border-white/30 pt-4">
                  INTERNATIONAL TYPOGRAPHIC STYLE • FOUNDED ON RATIONAL GRID ARCHITECTURE
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/20 flex items-center justify-between font-mono text-[11px] font-bold">
                <span>MATHEMATICAL RATIO</span>
                <span>1 : 1.618</span>
              </div>
            </div>

            {/* Quick Stats Grid under Red Block */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="border-2 border-black p-4 bg-neutral-50">
                <span className="block font-mono text-2xl font-black text-black">12</span>
                <span className="text-[10px] font-mono font-bold text-neutral-600 uppercase tracking-wider">MODULAR COLUMNS</span>
              </div>
              <div className="border-2 border-black p-4 bg-neutral-50">
                <span className="block font-mono text-2xl font-black text-black">100%</span>
                <span className="text-[10px] font-mono font-bold text-neutral-600 uppercase tracking-wider">OBJECTIVE TYPE</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* THREE NUMBERED GRID BLOCKS SECTION */}
      <section id="principles" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-20 border-b-2 border-black bg-neutral-50">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-black pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase block mb-1">
              SYSTEMIC FOUNDATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black font-swiss">
              CORE PRINCIPLES
            </h2>
          </div>
          <p className="font-mono text-xs font-bold text-neutral-600 uppercase max-w-xs">
            TRIPLE-BLOCK GRID LAYOUT ENGINEERED FOR MAXIMUM CLARITY.
          </p>
        </div>

        {/* The 01. STRUCTURE, 02. TYPOGRAPHY, 03. FUNCTION blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SWISS_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="bg-white border-2 border-black p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(227,6,19,1)] transition-all group duration-200"
            >
              <div>
                {/* Large Number */}
                <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
                  <span className="font-mono text-4xl sm:text-5xl font-black text-black group-hover:text-[#E30613] transition-colors">
                    {principle.number}.
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase bg-black text-white px-2 py-1">
                    RULE {principle.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black uppercase tracking-tight text-black font-swiss mb-2">
                  {principle.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#E30613] mb-4">
                  {principle.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between font-mono text-[11px] font-bold text-neutral-600">
                <span>TAKEAWAY</span>
                <span className="text-black group-hover:translate-x-1 transition-transform">
                  → {principle.keyTakeaway.slice(0, 24)}...
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK / PORTFOLIO GRID SECTION */}
      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 border-b-2 border-black bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b-2 border-black pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase block mb-1">
              PORTFOLIO ARCHIVE
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black font-swiss">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="font-mono text-xs font-bold text-black uppercase max-w-md">
            EXEMPLARY APPLICATION OF GRID ARCHITECTURE, UNYIELDING HIERARCHY, AND HIGH CONTRAST PALETTE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="border-2 border-black bg-white group cursor-pointer shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(227,6,19,1)] transition-all overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b-2 border-black">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-black text-white font-mono text-xs font-bold px-3 py-1">
                  NO. {project.number}
                </div>
                <div className="absolute top-4 right-4 bg-[#E30613] text-white font-mono text-xs font-bold px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW SPECS
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between font-mono text-xs font-bold text-neutral-600 border-b border-neutral-200 pb-2">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight text-black font-swiss group-hover:text-[#E30613] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 border border-black text-[10px] font-mono font-bold bg-neutral-100 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT & HISTORIC PHILOSOPHY SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 border-b-2 border-black bg-neutral-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase block">
              HISTORICAL MANIFESTO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-swiss leading-none">
              THE SWISS TYPOGRAPHIC REVOLUTION
            </h2>
            
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Originating in Switzerland during the 1950s led by pioneers like Josef Müller-Brockmann, Armin Hofmann, and Emil Ruder, the International Typographic Style prioritized clarity, readability, and objectivity above decorative expressionism.
            </p>

            <div className="border-l-2 border-[#E30613] pl-4 space-y-2 py-2">
              <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                PRIMARY MANIFESTO RULE:
              </p>
              <p className="font-bold text-sm sm:text-base text-white font-swiss uppercase">
                "TYPOGRAPHY IS THE ART OF GIVING FORM AND STRUCTURE TO INFORMATION."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs">
              <div className="border border-white/20 p-4">
                <span className="text-[#E30613] font-bold block mb-1">FOUNDED</span>
                <span className="text-white font-extrabold text-lg">1950s</span>
                <span className="block text-[10px] text-neutral-400">Basel & Zürich, Switzerland</span>
              </div>
              <div className="border border-white/20 p-4">
                <span className="text-[#E30613] font-bold block mb-1">TYPEFACE</span>
                <span className="text-white font-extrabold text-lg">HELVETICA</span>
                <span className="block text-[10px] text-neutral-400">Neue Haas Grotesk (1957)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest border-b border-white/20 pb-2">
              EXCERPTS FROM SWISS DESIGN MASTERS
            </h3>

            <div className="space-y-4">
              {SWISS_QUOTES.map((item, idx) => (
                <div key={idx} className="border border-white/20 p-6 bg-black/50 hover:border-[#E30613] transition-colors">
                  <p className="text-xs sm:text-sm text-neutral-200 italic mb-4 leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-white uppercase">{item.author}</span>
                    <span className="text-[#E30613] text-[10px] font-bold uppercase">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT & FOOTER SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-2 border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-neutral-50">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-black font-swiss">
              INQUIRE FOR SYSTEMIC DESIGN
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed font-medium">
              Grid Studio partners with forward-thinking institutions, architectural practices, and digital product teams to craft timeless typographic systems and design frameworks.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={handleCopyContact}
                className="px-6 py-3.5 bg-black text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#E30613] transition-colors"
              >
                {copiedContact ? <Check className="w-4 h-4 text-green-400" /> : <ArrowUpRight className="w-4 h-4" />}
                <span>{copiedContact ? 'EMAIL COPIED!' : 'HELLO@GRIDSTUDIO.CH'}</span>
              </button>

              <a
                href="mailto:hello@gridstudio.ch"
                className="px-6 py-3.5 border-2 border-black bg-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
              >
                OPEN MAIL CLIENT
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 border-t-2 lg:border-t-0 lg:border-l-2 border-black pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-between font-mono text-xs">
            <div className="space-y-4">
              <div className="border-b border-black/20 pb-2">
                <span className="text-neutral-500 block text-[10px] uppercase font-bold">STUDIO LOCATION</span>
                <span className="font-bold text-black uppercase">ZÜRICH • SWITZERLAND</span>
              </div>

              <div className="border-b border-black/20 pb-2">
                <span className="text-neutral-500 block text-[10px] uppercase font-bold">GRID SPECIFICATION</span>
                <span className="font-bold text-black uppercase">12-COL MODULAR / DIN 16:9</span>
              </div>

              <div className="border-b border-black/20 pb-2">
                <span className="text-neutral-500 block text-[10px] uppercase font-bold">PRIMARY TYPEFACE</span>
                <span className="font-bold text-black uppercase">NEUE HAAS GROTESK / INTER</span>
              </div>
            </div>

            <div className="pt-6 text-[10px] text-neutral-500 font-bold uppercase">
              © 2026 GRID STUDIO. ALL RIGHTS RESERVED. SWISS INTERNATIONAL TYPOGRAPHIC STYLE.
            </div>
          </div>

        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-black max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-[12px_12px_0px_0px_rgba(227,6,19,1)]">
            {(() => {
              const proj = PROJECTS_DATA.find((p) => p.id === selectedProject);
              if (!proj) return null;
              return (
                <>
                  <div className="flex items-center justify-between border-b-2 border-black pb-4">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#E30613] uppercase">
                        PROJECT SPECIFICATION {proj.number}
                      </span>
                      <h3 className="text-2xl font-black uppercase text-black font-swiss">
                        {proj.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-video object-cover border-2 border-black"
                  />

                  <div className="grid grid-cols-2 gap-4 font-mono text-xs border-y border-neutral-200 py-3">
                    <div>
                      <span className="text-neutral-500 block text-[10px]">CATEGORY</span>
                      <span className="font-bold">{proj.category}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px]">YEAR / ORIGIN</span>
                      <span className="font-bold">{proj.year}</span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                    {proj.description}
                  </p>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 bg-black text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#E30613] transition-colors"
                    >
                      CLOSE SPECIFICATION
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

    </div>
  );
};
