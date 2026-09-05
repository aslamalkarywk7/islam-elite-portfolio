import React, { useState } from 'react';
import { StudioSetting } from '../types';
import { Sun, Moon, Maximize2, Sparkles, Sliders, Eye, RefreshCw, ZoomIn, ZoomOut } from 'lucide-react';

interface MacBookStudioMockupProps {
  children: React.ReactNode;
  onSwitchToCanvas: () => void;
}

export const MacBookStudioMockup: React.FC<MacBookStudioMockupProps> = ({
  children,
  onSwitchToCanvas,
}) => {
  const [settings, setSettings] = useState<StudioSetting>({
    studioLight: 'natural',
    laptopAngle: 0,
    gridOverlay: true,
    colorFilter: false,
    screenGlow: true,
    ambientShadows: true,
  });

  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const getLightingStyle = () => {
    switch (settings.studioLight) {
      case 'dramatic':
        return 'bg-gradient-to-br from-[#E6D0AC] via-[#C8AF86] to-[#735C3E] text-[#121212]';
      case 'golden':
        return 'bg-gradient-to-br from-[#FCE2B6] via-[#E8B87B] to-[#996530] text-[#121212]';
      case 'night':
        return 'bg-gradient-to-br from-[#1A1A24] via-[#121218] to-[#0A0A0F] text-white';
      default: // natural
        return 'bg-[#E3D9CC] text-[#121212]';
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-700 font-body ${getLightingStyle()}`}>
      
      {/* Wooden Desk Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 2px, transparent 2px, transparent 12px)`,
        }}
      />

      {/* Sunlight Window Pane Shadow Filter */}
      {settings.ambientShadows && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
          style={{
            background: 'linear-gradient(135deg, transparent 20%, rgba(0,0,0,0.4) 25%, transparent 30%, transparent 45%, rgba(0,0,0,0.4) 50%, transparent 55%)',
          }}
        />
      )}

      {/* Studio Header Controls Bar */}
      <div className="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-md text-[#F6F5F0] border-b-2 border-[#FFE600] py-2 px-4 sm:px-6 flex items-center justify-between font-mono-code text-xs">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#FF2A1F] rounded-full"></div>
          <span className="font-bold tracking-wider text-[#FFE600] hidden sm:inline">
            ARCHITECT STUDIO MOCKUP PRESENTATION
          </span>
          <span className="text-gray-400 text-[10px]">MACBOOK PRO // 8K DISPLAY</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Lighting Mode Selector */}
          <div className="flex bg-[#1E1E1E] border border-white/20 p-0.5">
            <button
              onClick={() => setSettings({ ...settings, studioLight: 'natural' })}
              className={`px-2 py-1 flex items-center gap-1 cursor-pointer transition-colors ${
                settings.studioLight === 'natural' ? 'bg-[#FFE600] text-[#121212] font-bold' : 'text-gray-400'
              }`}
              title="Natural Studio Light"
            >
              <Sun className="w-3.5 h-3.5" />
              <span className="hidden md:inline">DAYLIGHT</span>
            </button>
            <button
              onClick={() => setSettings({ ...settings, studioLight: 'dramatic' })}
              className={`px-2 py-1 flex items-center gap-1 cursor-pointer transition-colors ${
                settings.studioLight === 'dramatic' ? 'bg-[#FF2A1F] text-white font-bold' : 'text-gray-400'
              }`}
              title="Dramatic Golden Hour"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden md:inline">GOLDEN</span>
            </button>
            <button
              onClick={() => setSettings({ ...settings, studioLight: 'night' })}
              className={`px-2 py-1 flex items-center gap-1 cursor-pointer transition-colors ${
                settings.studioLight === 'night' ? 'bg-[#0055FF] text-white font-bold' : 'text-gray-400'
              }`}
              title="Night Studio"
            >
              <Moon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">NIGHT</span>
            </button>
          </div>

          {/* Zoom Buttons */}
          <div className="hidden sm:flex border border-white/20 bg-[#1E1E1E]">
            <button
              onClick={() => setZoomLevel((prev) => Math.max(80, prev - 10))}
              className="p-1.5 text-gray-300 hover:text-white cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-1.5 py-1 text-[10px] text-[#FFE600] font-bold flex items-center">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel((prev) => Math.min(130, prev + 10))}
              className="p-1.5 text-gray-300 hover:text-white cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Switch to Direct Fullscreen Canvas */}
          <button
            onClick={onSwitchToCanvas}
            className="px-3 py-1.5 bg-[#FF2A1F] text-white font-bold border border-white flex items-center gap-1.5 cursor-pointer hover:bg-white hover:text-[#121212] transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>FULLSCREEN DISPLAY</span>
          </button>
        </div>
      </div>

      {/* Main Studio Desk Viewport */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-60px)]">
        
        {/* Architect Desk Props Layout */}
        <div className="relative w-full flex items-center justify-center my-auto transition-transform duration-500" style={{ transform: `scale(${zoomLevel / 100})` }}>
          
          {/* DESK PROP 1: Metal Bauhaus Ruler on Left */}
          <div className="absolute -left-4 sm:left-2 top-10 hidden xl:flex flex-col items-center bg-[#D4D4D4] border-2 border-[#121212] w-8 py-4 shadow-lg font-mono-code text-[8px] font-bold text-[#121212] select-none rotate-[-6deg]">
            <span className="mb-2 uppercase text-[7px] text-[#FF2A1F]">METRIC</span>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-full flex items-center justify-between px-1 my-1">
                <span className="w-3 h-[1px] bg-[#121212]"></span>
                <span className="text-[7px]">{i * 2}</span>
              </div>
            ))}
          </div>

          {/* DESK PROP 2: Pantone / Bauhaus Swatch Cards on Right */}
          <div className="absolute right-0 sm:right-4 top-12 hidden xl:flex flex-col gap-1.5 bg-white border-2 border-[#121212] p-2 shadow-xl rotate-[8deg] select-none">
            <div className="font-mono-code text-[9px] font-bold text-[#121212] border-b border-[#121212] pb-1 mb-1">
              SWATCH 1919
            </div>
            <div className="flex gap-1">
              <div className="w-5 h-8 bg-[#FF2A1F] border border-black"></div>
              <div className="w-5 h-8 bg-[#FFE600] border border-black"></div>
              <div className="w-5 h-8 bg-[#0055FF] border border-black"></div>
              <div className="w-5 h-8 bg-[#121212] border border-black"></div>
            </div>
          </div>

          {/* DESK PROP 3: Ceramic Espresso Cup on Top Right */}
          <div className="absolute right-12 -top-10 hidden lg:block select-none">
            <div className="w-14 h-14 bg-[#F6F5F0] rounded-full border-4 border-[#121212] shadow-md flex items-center justify-center relative">
              <div className="w-9 h-9 bg-[#3E2723] rounded-full border-2 border-[#121212] flex items-center justify-center">
                <div className="w-4 h-4 bg-[#4E342E] rounded-full opacity-80"></div>
              </div>
            </div>
          </div>

          {/* THE MACBOOK PRO HARDWARE MOCKUP FRAME */}
          <div className="w-full max-w-5xl relative">
            
            {/* MacBook Pro Display Lid Frame (Silver Aluminum Finish) */}
            <div className="bg-[#D1D5DB] p-3 sm:p-5 md:p-6 rounded-t-2xl sm:rounded-t-3xl border-2 border-[#9CA3AF] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative">
              
              {/* Web Camera Notch Dot */}
              <div className="absolute top-1.5 sm:top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1F2937] rounded-full border border-gray-600 flex items-center justify-center">
                <div className="w-0.5 h-0.5 bg-[#10B981] rounded-full"></div>
              </div>

              {/* Inner Screen Display Bezel */}
              <div className="bg-[#090A0F] rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-gray-800 relative overflow-hidden shadow-inner">
                
                {/* Screen Reflection Glare Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/15 z-40" />

                {/* Live App Display Content Screen Container */}
                <div className="bg-[#F6F5F0] rounded-md overflow-hidden max-h-[680px] overflow-y-auto relative border border-gray-300 shadow-2xl">
                  {children}
                </div>

              </div>

            </div>

            {/* MacBook Pro Bottom Base & Hinge (Silver Aluminum) */}
            <div className="relative">
              {/* Center Hinge Strip */}
              <div className="w-32 sm:w-44 h-2 bg-[#4B5563] mx-auto rounded-b-md shadow-sm"></div>

              {/* Base Deck Body */}
              <div className="bg-gradient-to-b from-[#E5E7EB] via-[#D1D5DB] to-[#9CA3AF] h-4 sm:h-5 rounded-b-xl sm:rounded-b-2xl border-t border-gray-300 border-x border-b border-gray-500 shadow-2xl flex items-center justify-between px-8 sm:px-12 relative">
                
                {/* Thumb Groove Notch */}
                <div className="w-16 sm:w-24 h-1.5 bg-[#9CA3AF] rounded-b-md mx-auto shadow-inner border-t border-gray-600"></div>

              </div>

              {/* Bottom Soft Reflection & Ambient Shadow */}
              <div className="w-[96%] h-6 bg-black/40 mx-auto rounded-full blur-md -mt-1 -z-10"></div>
            </div>

          </div>

        </div>

      </div>

      {/* Studio Footer Information */}
      <div className="border-t border-[#121212]/20 py-3 px-6 bg-[#121212] text-[#F6F5F0] font-mono-code text-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#FFE600]"></span>
          <span>LOCATION: ARCHITECT STUDIO // DESSAU</span>
        </div>
        <div className="text-gray-400">
          PHOTOREALISTIC SCREEN DISPLAY // 8K RESOLUTION
        </div>
      </div>

    </div>
  );
};
