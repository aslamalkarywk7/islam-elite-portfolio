import React, { useState } from 'react';
import { GridConfig, RedVariant } from '../types';
import { SwissLandingPage } from './SwissLandingPage';
import { Maximize2, Monitor, Sun, Compass, Sparkles, Eye, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface MacBookMockupProps {
  gridConfig: GridConfig;
  onUpdateGridConfig: (config: Partial<GridConfig>) => void;
  onOpenPosterPlayground: () => void;
  onSwitchToFullscreen: () => void;
  studioImageSrc?: string;
  redAccent?: RedVariant;
}

export const MacBookMockup: React.FC<MacBookMockupProps> = ({
  gridConfig,
  onUpdateGridConfig,
  onOpenPosterPlayground,
  onSwitchToFullscreen,
  studioImageSrc = '/src/assets/images/swiss_studio_desk_1785196585459.jpg',
  redAccent = '#E30613',
}) => {
  const [screenZoom, setScreenZoom] = useState<number>(1);
  const [showGlare, setShowGlare] = useState<boolean>(true);
  const [deskAmbient, setDeskAmbient] = useState<'daylight' | 'warm' | 'dramatic'>('daylight');

  const handleZoomIn = () => setScreenZoom((z) => Math.min(z + 0.15, 1.4));
  const handleZoomOut = () => setScreenZoom((z) => Math.max(z - 0.15, 0.75));
  const handleResetZoom = () => setScreenZoom(1);

  return (
    <div className="relative min-h-screen bg-[#111215] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#E30613] selection:text-white">
      
      {/* BACKGROUND STUDIO SCENE WITH DESK & AMBIENT LIGHT */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Photorealistic Background Desk & Plants */}
        <img
          src={studioImageSrc}
          alt="Creative Studio Light Wood Desk Environment"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            deskAmbient === 'daylight' 
              ? 'brightness-[0.85] contrast-[1.05] saturate-[1.05]' 
              : deskAmbient === 'warm'
              ? 'brightness-[0.75] sepia-[0.25] contrast-[1.1]'
              : 'brightness-[0.6] contrast-[1.2] saturate-[0.8]'
          }`}
        />

        {/* Soft Ambient Sunlight Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/40 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* TOP STUDIO TOOLBAR CONTROLS */}
      <header className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4 bg-black/60 backdrop-blur-md border-b border-white/10 mt-2 rounded-xl shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#E30613] rounded-full animate-ping" />
          <span className="font-extrabold text-lg tracking-tight font-swiss text-white uppercase">
            GRID STUDIO <span className="text-xs font-mono font-normal text-white/60 ml-2">MOCKUP ENVIRONMENT</span>
          </span>
        </div>

        {/* Studio Controls */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          
          {/* Lighting Mode Selector */}
          <div className="flex items-center bg-black/80 rounded-lg border border-white/15 p-1 gap-1">
            <button
              onClick={() => setDeskAmbient('daylight')}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
                deskAmbient === 'daylight' ? 'bg-[#E30613] text-white font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sun className="w-3 h-3" />
              <span>DAYLIGHT</span>
            </button>
            <button
              onClick={() => setDeskAmbient('warm')}
              className={`px-2.5 py-1 rounded transition-colors ${
                deskAmbient === 'warm' ? 'bg-[#E30613] text-white font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              WARM
            </button>
          </div>

          {/* Glare Toggle */}
          <button
            onClick={() => setShowGlare(!showGlare)}
            className={`px-3 py-1.5 rounded-lg border border-white/20 transition-all font-mono text-xs flex items-center gap-1.5 ${
              showGlare ? 'bg-white/15 text-white' : 'bg-black/60 text-neutral-400'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>GLASS GLARE {showGlare ? 'ON' : 'OFF'}</span>
          </button>

          {/* Zoom Controls */}
          <div className="flex items-center bg-black/80 rounded-lg border border-white/15 p-1">
            <button onClick={handleZoomOut} className="p-1 hover:text-[#E30613] text-neutral-300" title="Zoom Out">
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 text-[11px] font-bold text-white min-w-[42px] text-center">
              {Math.round(screenZoom * 100)}%
            </span>
            <button onClick={handleZoomIn} className="p-1 hover:text-[#E30613] text-neutral-300" title="Zoom In">
              <ZoomIn className="w-4 h-4" />
            </button>
            <button onClick={handleResetZoom} className="p-1 hover:text-white text-neutral-500 ml-1" title="Reset Zoom">
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Direct Fullscreen View Toggle */}
          <button
            onClick={onSwitchToFullscreen}
            className="px-4 py-2 bg-[#E30613] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" />
            <span>FULLSCREEN LANDING PAGE</span>
          </button>

        </div>
      </header>

      {/* MACBOOK PRO 3D DESK DISPLAY CONTAINER */}
      <main className="relative z-10 flex-1 flex items-center justify-center py-8 sm:py-12 px-2 sm:px-6">
        <div 
          className="w-full max-w-6xl transition-transform duration-300 ease-out flex flex-col items-center"
          style={{ transform: `scale(${screenZoom})` }}
        >
          
          {/* SILVER MACBOOK PRO TOP LID / DISPLAY BEZEL */}
          <div className="relative w-full max-w-[1020px] bg-[#1a1b1e] rounded-t-[22px] p-[12px] sm:p-[16px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-t border-x border-[#43454b]">
            
            {/* Top Webcam Notch Dot */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full border border-neutral-700 flex items-center justify-center z-30">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0b3142]" />
            </div>

            {/* RETINA SCREEN CONTAINER */}
            <div className="relative w-full aspect-[16/10] bg-white rounded-lg overflow-hidden border border-neutral-800 shadow-inner group">
              
              {/* Actual Swiss Landing Page Component Rendered Inside Screen */}
              <div className="w-full h-full overflow-y-auto custom-scrollbar bg-white">
                <SwissLandingPage
                  gridConfig={gridConfig}
                  onUpdateGridConfig={onUpdateGridConfig}
                  onOpenPosterPlayground={onOpenPosterPlayground}
                  redAccent={redAccent}
                />
              </div>

              {/* Realistic Glass Screen Glare Reflection Overlay */}
              {showGlare && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] mix-blend-overlay z-20" />
              )}
            </div>

          </div>

          {/* MACBOOK LOWER CHASSIS, METALLIC HINGE & TRACKPAD BASE */}
          <div className="relative w-full max-w-[1100px]">
            {/* Metallic Hinge */}
            <div className="h-[12px] bg-gradient-to-r from-[#2a2c30] via-[#52565e] to-[#2a2c30] mx-auto w-[96%] rounded-b-sm shadow-md" />
            
            {/* MacBook Base Surface */}
            <div className="h-[16px] bg-gradient-to-b from-[#8a8e97] via-[#b2b6c1] to-[#6d717a] rounded-b-[18px] border-b-2 border-black/80 shadow-[0_30px_50px_rgba(0,0,0,0.7)] flex justify-center items-start pt-1">
              {/* Front Notch for Screen Opening */}
              <div className="w-24 h-1.5 bg-[#4a4c52] rounded-b-md shadow-inner" />
            </div>
          </div>

          {/* REALISTIC DESK PROPS CAPTION OVERLAY */}
          <div className="mt-8 bg-black/70 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full text-xs font-mono text-neutral-300 flex items-center gap-4 shadow-xl">
            <span className="flex items-center gap-1.5 text-white font-bold">
              <Compass className="w-3.5 h-3.5 text-[#E30613]" />
              SWISS GRID ARCHITECTURE
            </span>
            <span className="text-white/30">•</span>
            <span>SILVER MACBOOK PRO 16"</span>
            <span className="text-white/30">•</span>
            <span>LIGHT-WOOD DESIGN DESK</span>
            <span className="text-white/30">•</span>
            <span className="text-[#E30613] font-bold">NATURAL STUDIO LIGHTING</span>
          </div>

        </div>
      </main>

      {/* FOOTER BAR */}
      <footer className="relative z-20 bg-black/80 border-t border-white/10 py-3 px-6 text-center font-mono text-[11px] text-neutral-400">
        GRID STUDIO • PHOTOREALISTIC SWISS TYPOGRAPHIC LANDING PAGE UI MOCKUP • ZÜRICH, CH
      </footer>

    </div>
  );
};
