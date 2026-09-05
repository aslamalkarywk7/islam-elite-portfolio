import React, { useState } from 'react';
import { ThemeMode, FontStyle } from './types';
import { Header } from './components/Header';
import { EditorialHero } from './components/EditorialHero';
import { PrecisionToolbar } from './components/PrecisionToolbar';
import { SpecsDrawer } from './components/SpecsDrawer';
import { ManifestoDrawer } from './components/ManifestoDrawer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [fontStyle, setFontStyle] = useState<FontStyle>('bodoni');
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [cursorEnabled, setCursorEnabled] = useState<boolean>(true);
  const [lookbookIndex, setLookbookIndex] = useState<number>(0);
  const [isSpecsOpen, setIsSpecsOpen] = useState<boolean>(false);
  const [isManifestoOpen, setIsManifestoOpen] = useState<boolean>(false);

  // Toggle helpers
  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleGrid = () => {
    setShowGrid((prev) => !prev);
  };

  const handleToggleFont = () => {
    setFontStyle((prev) => {
      if (prev === 'bodoni') return 'playfair';
      if (prev === 'playfair') return 'cormorant';
      return 'bodoni';
    });
  };

  const handleToggleCursor = () => {
    setCursorEnabled((prev) => !prev);
  };

  const handleToggleLookbook = () => {
    setLookbookIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 relative font-sans ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {/* Precision Crosshair Cursor */}
      <CustomCursor enabled={cursorEnabled} />

      {/* Main Header */}
      <Header
        theme={theme}
        lookbookIndex={lookbookIndex}
        onOpenManifesto={() => setIsManifestoOpen(true)}
        onOpenSpecs={() => setIsSpecsOpen(true)}
        onToggleLookbook={handleToggleLookbook}
      />

      {/* Primary Hero Masterpiece Component */}
      <EditorialHero
        theme={theme}
        fontStyle={fontStyle}
        lookbookIndex={lookbookIndex}
        showGrid={showGrid}
        onOpenSpecs={() => setIsSpecsOpen(true)}
        onOpenManifesto={() => setIsManifestoOpen(true)}
      />

      {/* Floating HTML/CSS Precision Toolbar */}
      <PrecisionToolbar
        theme={theme}
        fontStyle={fontStyle}
        showGrid={showGrid}
        cursorEnabled={cursorEnabled}
        lookbookIndex={lookbookIndex}
        onToggleTheme={handleToggleTheme}
        onToggleGrid={handleToggleGrid}
        onToggleFont={handleToggleFont}
        onToggleCursor={handleToggleCursor}
        onToggleLookbook={handleToggleLookbook}
        onOpenSpecs={() => setIsSpecsOpen(true)}
      />

      {/* Drawers */}
      <SpecsDrawer
        isOpen={isSpecsOpen}
        theme={theme}
        fontStyle={fontStyle}
        onClose={() => setIsSpecsOpen(false)}
      />

      <ManifestoDrawer
        isOpen={isManifestoOpen}
        theme={theme}
        onClose={() => setIsManifestoOpen(false)}
      />
    </div>
  );
}
