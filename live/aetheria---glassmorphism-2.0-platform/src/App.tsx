import React, { useState } from 'react';
import { GlassConfig } from './types';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DepthExploder } from './components/DepthExploder';
import { FeaturesSection } from './components/FeaturesSection';
import { LiveInteractiveDemos } from './components/LiveInteractiveDemos';
import { Footer } from './components/Footer';
import { GlassCustomizer } from './components/GlassCustomizer';
import { CommandPalette } from './components/CommandPalette';
import { StudioMonitorWrapper } from './components/StudioMonitorWrapper';

export default function App() {
  const [config, setConfig] = useState<GlassConfig>({
    blur: 24,
    opacity: 0.05,
    borderOpacity: 0.15,
    specularShine: 0.9,
    noiseOverlay: true,
    themeColor: 'electric',
    geometryCount: 6,
    studioFrame: false,
    exploder3D: false,
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);

  const mainContent = (
    <div className="min-h-screen text-slate-100 relative font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Dynamic Glass Canvas Background */}
      <BackgroundCanvas config={config} />

      {/* Main Foreground Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating Glass Header */}
        <Navbar
          config={config}
          setConfig={setConfig}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
          onOpenCmdPalette={() => setIsCmdPaletteOpen(true)}
        />

        {/* Hero Section */}
        <HeroSection
          config={config}
          onExplodeToggle={() => setConfig((prev) => ({ ...prev, exploder3D: !prev.exploder3D }))}
        />

        {/* 3D Depth Layer Inspector / Exploder */}
        <DepthExploder config={config} setConfig={setConfig} />

        {/* Features Section */}
        <FeaturesSection config={config} />

        {/* Interactive Demos & Terminal CLI */}
        <LiveInteractiveDemos config={config} setConfig={setConfig} />

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Customizer Drawer */}
      <GlassCustomizer
        config={config}
        setConfig={setConfig}
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
      />

      {/* Command Palette Modal (Cmd+K) */}
      <CommandPalette
        isOpen={isCmdPaletteOpen}
        onClose={() => setIsCmdPaletteOpen(false)}
        config={config}
        setConfig={setConfig}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />
    </div>
  );

  return (
    <StudioMonitorWrapper
      config={config}
      setConfig={setConfig}
      onOpenCustomizer={() => setIsCustomizerOpen(true)}
    >
      {mainContent}
    </StudioMonitorWrapper>
  );
}
