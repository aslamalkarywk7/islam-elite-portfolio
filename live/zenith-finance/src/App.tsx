import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureGrid } from './components/FeatureGrid';
import { WealthCalculator } from './components/WealthCalculator';
import { PricingSection } from './components/PricingSection';
import { AboutTrustSection } from './components/AboutTrustSection';
import { Footer } from './components/Footer';
import { SoftUIStudioDrawer } from './components/SoftUIStudioDrawer';
import { MacBookFrame } from './components/MacBookFrame';
import { GetStartedModal } from './components/GetStartedModal';
import { ViewMode, ShadowConfig } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [viewMode, setViewMode] = useState<ViewMode>('macbook');
  const [studioOpen, setStudioOpen] = useState<boolean>(false);
  const [getStartedModalOpen, setGetStartedModalOpen] = useState<boolean>(false);

  // Soft UI Default Shadow Configuration - Geometric Balance
  const defaultShadowConfig: ShadowConfig = {
    distance: 8,
    blur: 16,
    intensity: 1.0,
    lightAngle: 145,
    bgTone: 'velvet-beige',
    glowColor: '#4d7cfe',
  };

  const [shadowConfig, setShadowConfig] = useState<ShadowConfig>(defaultShadowConfig);

  const resetShadowDefaults = () => {
    setShadowConfig(defaultShadowConfig);
    document.documentElement.style.setProperty('--neu-bg', '#e6e9ef');
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mainLandingPageContent = (
    <div className="min-h-screen bg-[#e6e9ef] text-[#2d3748] font-sans selection:bg-[#4d7cfe] selection:text-white transition-colors duration-300">
      
      {/* NAVBAR */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        viewMode={viewMode}
        setViewMode={setViewMode}
        shadowConfig={shadowConfig}
        toggleStudio={() => setStudioOpen(!studioOpen)}
        onGetStartedClick={() => setGetStartedModalOpen(true)}
      />

      {/* HERO SECTION */}
      <HeroSection
        shadowConfig={shadowConfig}
        onGetStartedClick={() => setGetStartedModalOpen(true)}
        onWatchDemoClick={() => scrollToSection('features')}
      />

      {/* FEATURE GRID */}
      <FeatureGrid shadowConfig={shadowConfig} />

      {/* INTERACTIVE WEALTH HORIZON CALCULATOR */}
      <WealthCalculator
        shadowConfig={shadowConfig}
        onGetStartedClick={() => setGetStartedModalOpen(true)}
      />

      {/* PRICING TIERS */}
      <PricingSection
        shadowConfig={shadowConfig}
        onGetStartedClick={() => setGetStartedModalOpen(true)}
      />

      {/* ABOUT & TRUST GOVERNANCE */}
      <AboutTrustSection shadowConfig={shadowConfig} />

      {/* FOOTER */}
      <Footer shadowConfig={shadowConfig} onNavClick={scrollToSection} />

    </div>
  );

  return (
    <>
      {/* MACBOOK FRAME WRAPPER OR FULLSCREEN MODE */}
      <MacBookFrame
        viewMode={viewMode}
        setViewMode={setViewMode}
        toggleStudio={() => setStudioOpen(!studioOpen)}
      >
        {mainLandingPageContent}
      </MacBookFrame>

      {/* SOFT UI LIGHTING & SHADOW STUDIO DRAWER */}
      <SoftUIStudioDrawer
        isOpen={studioOpen}
        onClose={() => setStudioOpen(false)}
        shadowConfig={shadowConfig}
        setShadowConfig={setShadowConfig}
        resetToDefault={resetShadowDefaults}
      />

      {/* ONBOARDING MODAL */}
      <GetStartedModal
        isOpen={getStartedModalOpen}
        onClose={() => setGetStartedModalOpen(false)}
        shadowConfig={shadowConfig}
      />
    </>
  );
}
