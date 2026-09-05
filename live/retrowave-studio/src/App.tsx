import React, { useState } from 'react';
import { DeviceType, WorkspaceLighting } from './types';
import { MacBookWorkspaceFrame } from './components/MacBookWorkspaceFrame';
import { MemphisHeader } from './components/MemphisHeader';
import { MemphisHeroSection } from './components/MemphisHeroSection';
import { MemphisServiceCards } from './components/MemphisServiceCards';
import { MemphisPortfolioSection } from './components/MemphisPortfolioSection';
import { MemphisAboutSection } from './components/MemphisAboutSection';
import { MemphisContactSection } from './components/MemphisContactSection';
import { MemphisFooter } from './components/MemphisFooter';
import { MemphisPosterStudio } from './components/MemphisPosterStudio';
import { MemphisAIGenerator } from './components/MemphisAIGenerator';

export default function App() {
  const [activeDevice, setActiveDevice] = useState<DeviceType>('macbook');
  const [lighting, setLighting] = useState<WorkspaceLighting>('daylight');
  const [posterStudioOpen, setPosterStudioOpen] = useState(false);
  const [aiGeneratorOpen, setAiGeneratorOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MacBookWorkspaceFrame
      activeDevice={activeDevice}
      setActiveDevice={setActiveDevice}
      lighting={lighting}
      setLighting={setLighting}
      onOpenPosterStudio={() => setPosterStudioOpen(true)}
      onOpenAiGenerator={() => setAiGeneratorOpen(true)}
    >
      {/* Live RetroWave Studio Website Landing Page */}
      <div className="w-full bg-white text-black font-space antialiased selection:bg-[#FFE600] selection:text-black min-h-full">
        
        {/* Navigation Header */}
        <MemphisHeader
          onNavigate={scrollToSection}
          onOpenContact={() => scrollToSection('contact')}
          onOpenPosterStudio={() => setPosterStudioOpen(true)}
        />

        {/* Hero Section */}
        <MemphisHeroSection
          onViewPortfolio={() => scrollToSection('work')}
          onOpenContact={() => scrollToSection('contact')}
          onOpenPosterStudio={() => setPosterStudioOpen(true)}
        />

        {/* Three Distinct Memphis Service Cards */}
        <MemphisServiceCards
          onSelectService={() => scrollToSection('contact')}
        />

        {/* Selected Portfolio Works */}
        <MemphisPortfolioSection />

        {/* Studio Manifesto & Stats */}
        <MemphisAboutSection />

        {/* Contact Inquiry Section */}
        <MemphisContactSection />

        {/* Footer */}
        <MemphisFooter
          onScrollTop={() => scrollToSection('hero')}
          onOpenPosterStudio={() => setPosterStudioOpen(true)}
        />

      </div>

      {/* Interactive Memphis Poster Builder Studio Modal */}
      <MemphisPosterStudio
        isOpen={posterStudioOpen}
        onClose={() => setPosterStudioOpen(false)}
      />

      {/* Gemini AI Memphis Concept Generator Modal */}
      <MemphisAIGenerator
        isOpen={aiGeneratorOpen}
        onClose={() => setAiGeneratorOpen(false)}
      />

    </MacBookWorkspaceFrame>
  );
}
