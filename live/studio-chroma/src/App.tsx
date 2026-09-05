import React, { useState } from 'react';
import { ViewMode, Project } from './types';
import { projectsData } from './data/projectsData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { FAB } from './components/FAB';
import { ContactDrawer } from './components/ContactDrawer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { M3ThemeInspector } from './components/M3ThemeInspector';
import { WorkspaceMockup } from './components/WorkspaceMockup';
import { ArrowUp, Layers, Sparkles, Monitor, Maximize2, ShieldCheck, Heart } from 'lucide-react';
import { M3Button } from './components/M3Button';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('mockup');
  const [activeSection, setActiveSection] = useState<string>('work');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [themeInspectorOpen, setThemeInspectorOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  {/* Main Studio Chroma Landing Page Content */}
  const landingPageContent = (
    <div className="min-h-screen bg-[#FDFBFF] text-[#1A1C1E] relative flex flex-col justify-between selection:bg-[#005CBB] selection:text-white">
      
      <div>
        {/* Header Navigation */}
        <Header
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenContact={() => setContactOpen(true)}
          onToggleThemeInspector={() => setThemeInspectorOpen(!themeInspectorOpen)}
        />

        {/* Hero Section */}
        <HeroSection
          onExploreProjects={() => handleNavigate('work')}
          onOpenContact={() => setContactOpen(true)}
        />

        {/* Portfolio Showcase Grid */}
        <PortfolioGrid
          projects={projectsData}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Services & Capabilities */}
        <ServicesSection />

        {/* About Studio Chroma */}
        <AboutSection />

        {/* Process & Methodology */}
        <ProcessSection />

        {/* Call to Action Banner */}
        <section className="py-20 bg-gradient-to-r from-[#005CBB] via-[#004A99] to-[#6750A4] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              Ready to elevate your digital presence?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Let's Build Something Exceptional Together.
            </h2>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
              Partner with Studio Chroma to craft responsive Material Design 3 interfaces that convert users into loyal advocates.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <M3Button
                variant="filled"
                size="lg"
                className="bg-white text-[#005CBB] hover:bg-slate-100"
                onClick={() => setContactOpen(true)}
              >
                Start Commission
              </M3Button>
              <M3Button
                variant="outlined"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
                onClick={() => setThemeInspectorOpen(true)}
                icon={<Layers className="w-5 h-5" />}
              >
                Inspect M3 Design System
              </M3Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#001D33] text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-1">
              <span className="text-xl font-extrabold text-white tracking-wider">STUDIO CHROMA</span>
              <p className="text-xs text-slate-400">
                Material Design 3 Creative Studio & Digital Product Agency
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
              <button onClick={() => handleNavigate('work')} className="hover:text-white transition-colors">Work</button>
              <button onClick={() => handleNavigate('about')} className="hover:text-white transition-colors">About</button>
              <button onClick={() => handleNavigate('services')} className="hover:text-white transition-colors">Services</button>
              <button onClick={() => handleNavigate('process')} className="hover:text-white transition-colors">Process</button>
              <button onClick={() => setContactOpen(true)} className="hover:text-white transition-colors">Contact</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Studio Chroma. All rights reserved. Crafted with Material Design 3.</p>
            <div className="flex items-center gap-4">
              <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors">
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Action Button (FAB) requested by prompt */}
      <FAB onClick={() => setContactOpen(true)} />

      {/* Side Sheets / Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setContactOpen(true)}
      />

      <ContactDrawer
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <M3ThemeInspector
        isOpen={themeInspectorOpen}
        onClose={() => setThemeInspectorOpen(false)}
      />

    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Top Floating Viewport Control Switcher (Appears in Direct Mode to toggle back to Laptop Mockup) */}
      {viewMode === 'direct' && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-white px-3 py-2 rounded-full shadow-2xl border border-slate-700">
          <button
            onClick={() => setViewMode('mockup')}
            className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-blue-300 transition-colors"
          >
            <Monitor className="w-4 h-4" />
            <span>Switch to MacBook Workspace Mockup</span>
          </button>
        </div>
      )}

      {/* Render selected view mode */}
      {viewMode === 'mockup' ? (
        <WorkspaceMockup onExpandDirectView={() => setViewMode('direct')}>
          {landingPageContent}
        </WorkspaceMockup>
      ) : (
        landingPageContent
      )}
    </div>
  );
}
