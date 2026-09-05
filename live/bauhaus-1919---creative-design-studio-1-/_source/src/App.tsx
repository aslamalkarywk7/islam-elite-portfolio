import React, { useState } from 'react';
import { ViewMode } from './types';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { InteractivePosterStudio } from './components/InteractivePosterStudio';
import { ServicesSection } from './components/ServicesSection';
import { ColorOverlaySandbox } from './components/ColorOverlaySandbox';
import { TeamAndStudio } from './components/TeamAndStudio';
import { ContactInquiry } from './components/ContactInquiry';
import { MacBookStudioMockup } from './components/MacBookStudioMockup';
import { Footer } from './components/Footer';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('canvas');
  const [showGridLines, setShowGridLines] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  // The Bauhaus Agency Landing Page Main Body
  const landingPageContent = (
    <main className="min-h-screen bg-[#F6F5F0] text-[#121212] selection:bg-[#FF2A1F] selection:text-white font-body">
      <Navigation
        viewMode={viewMode}
        setViewMode={setViewMode}
        showGridLines={showGridLines}
        setShowGridLines={setShowGridLines}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <HeroSection
        showGridLines={showGridLines}
        onExploreClick={() => scrollToSection('works')}
        onOpenLab={() => scrollToSection('lab')}
      />

      <ManifestoSection showGridLines={showGridLines} />

      <ProjectsShowcase showGridLines={showGridLines} />

      <InteractivePosterStudio showGridLines={showGridLines} />

      <ServicesSection showGridLines={showGridLines} />

      <ColorOverlaySandbox showGridLines={showGridLines} />

      <TeamAndStudio showGridLines={showGridLines} />

      <ContactInquiry showGridLines={showGridLines} />

      <Footer onBackToTop={handleBackToTop} />
    </main>
  );

  // Render inside MacBook Pro Mockup Frame if viewMode === 'mockup'
  if (viewMode === 'mockup') {
    return (
      <MacBookStudioMockup onSwitchToCanvas={() => setViewMode('canvas')}>
        {landingPageContent}
      </MacBookStudioMockup>
    );
  }

  return landingPageContent;
}

