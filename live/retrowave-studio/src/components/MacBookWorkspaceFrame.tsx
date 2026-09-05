import React, { useState } from 'react';
import { 
  Laptop, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Maximize2, 
  Sun, 
  Sparkles, 
  Moon, 
  Eye, 
  Sliders, 
  Coffee, 
  Palette,
  Volume2,
  VolumeX
} from 'lucide-react';
import { DeviceType, WorkspaceLighting } from '../types';
import { WORKSPACE_DESK_IMG } from '../data/memphisData';

interface MacBookWorkspaceFrameProps {
  children: React.ReactNode;
  activeDevice: DeviceType;
  setActiveDevice: (d: DeviceType) => void;
  lighting: WorkspaceLighting;
  setLighting: (l: WorkspaceLighting) => void;
  onOpenPosterStudio: () => void;
  onOpenAiGenerator: () => void;
}

export const MacBookWorkspaceFrame: React.FC<MacBookWorkspaceFrameProps> = ({
  children,
  activeDevice,
  setActiveDevice,
  lighting,
  setLighting,
  onOpenPosterStudio,
  onOpenAiGenerator
}) => {
  const [showGlare, setShowGlare] = useState(true);
  const [tilt3D, setTilt3D] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Background styling based on lighting mode
  const getLightingStyle = () => {
    switch (lighting) {
      case 'studio':
        return 'bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200';
      case 'neon-dusk':
        return 'bg-gradient-to-br from-slate-900 via-purple-950 to-pink-950 text-white';
      case 'daylight':
      default:
        return 'bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100';
    }
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-700 flex flex-col relative overflow-x-hidden ${getLightingStyle()}`}>
      
      {/* Top Workspace Environment Controls Toolbar */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md text-white border-b-4 border-yellow-400 px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-xl">
        
        {/* Studio Branding & Status */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-500 border-2 border-black rounded-lg flex items-center justify-center font-rubik text-black font-extrabold text-lg shadow-[3px_3px_0px_0px_#FFE600] animate-bounce">
            R
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-syne font-black tracking-wider text-base uppercase text-yellow-300">
                RetroWave Studio
              </span>
              <span className="bg-pink-500 text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase border border-black tracking-widest">
                Mockup Preview
              </span>
            </div>
            <p className="text-xs text-slate-300 hidden sm:block">
              Interactive Memphis Design Landing Page on Space Gray MacBook Pro
            </p>
          </div>
        </div>

        {/* Device Viewport Selector */}
        <div className="flex items-center bg-slate-800/90 p-1.5 rounded-xl border-2 border-black gap-1 shadow-[3px_3px_0px_0px_#FF007A]">
          <button
            onClick={() => setActiveDevice('macbook')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDevice === 'macbook'
                ? 'bg-yellow-400 text-black border border-black shadow-[2px_2px_0px_0px_#000]'
                : 'text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
            title="MacBook Pro 16 Inch Screen"
          >
            <Laptop className="w-4 h-4" />
            <span className="hidden md:inline">MacBook Pro</span>
          </button>

          <button
            onClick={() => setActiveDevice('studio-display')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDevice === 'studio-display'
                ? 'bg-yellow-400 text-black border border-black shadow-[2px_2px_0px_0px_#000]'
                : 'text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
            title="Studio Display Monitor"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden md:inline">Display</span>
          </button>

          <button
            onClick={() => setActiveDevice('ipad')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDevice === 'ipad'
                ? 'bg-yellow-400 text-black border border-black shadow-[2px_2px_0px_0px_#000]'
                : 'text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
            title="iPad Pro Tablet"
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden md:inline">iPad</span>
          </button>

          <button
            onClick={() => setActiveDevice('iphone')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDevice === 'iphone'
                ? 'bg-yellow-400 text-black border border-black shadow-[2px_2px_0px_0px_#000]'
                : 'text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
            title="iPhone 15 Mobile"
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden md:inline">Mobile</span>
          </button>

          <button
            onClick={() => setActiveDevice('fullscreen')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDevice === 'fullscreen'
                ? 'bg-pink-500 text-white border border-black shadow-[2px_2px_0px_0px_#000]'
                : 'text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
            title="Full Screen Web App Mode"
          >
            <Maximize2 className="w-4 h-4" />
            <span className="hidden lg:inline">Full Site</span>
          </button>
        </div>

        {/* Action Tools & Studio Features */}
        <div className="flex items-center gap-2">
          {/* Lighting Mode Selector */}
          <div className="hidden lg:flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setLighting('daylight')}
              className={`p-1.5 rounded-lg transition-all ${
                lighting === 'daylight' ? 'bg-amber-300 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="Daylight Workspace"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLighting('studio')}
              className={`p-1.5 rounded-lg transition-all ${
                lighting === 'studio' ? 'bg-orange-400 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="Studio Spotlight Lighting"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLighting('neon-dusk')}
              className={`p-1.5 rounded-lg transition-all ${
                lighting === 'neon-dusk' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="Neon Cyberpunk Dusk"
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Tools */}
          <button
            onClick={onOpenPosterStudio}
            className="flex items-center gap-1.5 bg-lime-400 text-black font-extrabold text-xs px-3 py-2 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
          >
            <Palette className="w-4 h-4" />
            <span className="hidden sm:inline">Poster Studio</span>
          </button>

          <button
            onClick={onOpenAiGenerator}
            className="flex items-center gap-1.5 bg-pink-500 text-white font-extrabold text-xs px-3 py-2 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#FFE600] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="hidden sm:inline">AI Chaos Gen</span>
          </button>

          {/* Glare Toggle (when in mockup mode) */}
          {activeDevice !== 'fullscreen' && (
            <button
              onClick={() => setShowGlare(!showGlare)}
              className={`p-2 rounded-xl border-2 border-black text-xs font-bold shadow-[2px_2px_0px_0px_#000] transition-colors ${
                showGlare ? 'bg-yellow-300 text-black' : 'bg-slate-700 text-slate-300'
              }`}
              title="Toggle Screen Glare Reflection"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>

      {/* Main Content Viewport */}
      {activeDevice === 'fullscreen' ? (
        <main className="flex-1 w-full bg-white text-black">
          {children}
        </main>
      ) : (
        <main className="flex-1 w-full flex items-center justify-center p-4 sm:p-8 md:p-12 relative overflow-hidden">
          
          {/* Photorealistic Workspace Desk Background Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Wooden Desk Image Asset Overlay */}
            <img 
              src={WORKSPACE_DESK_IMG} 
              alt="Creative Workspace Desk" 
              className="w-full h-full object-cover opacity-85 scale-105 filter blur-[2px] transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Ambient Lighting Gradient Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${
              lighting === 'neon-dusk' 
                ? 'bg-slate-950/70 mix-blend-multiply' 
                : lighting === 'studio' 
                ? 'bg-amber-900/20 mix-blend-soft-light' 
                : 'bg-amber-100/30 mix-blend-overlay'
            }`} />

            {/* Decorative Studio Accessories around desk */}
            <div className="absolute top-8 left-8 hidden xl:flex items-center gap-3 bg-white/80 backdrop-blur-md p-3 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#FF007A]">
              <Coffee className="w-5 h-5 text-amber-800" />
              <div>
                <p className="text-[10px] font-extrabold uppercase text-pink-600 tracking-wider">Studio Fuel</p>
                <p className="text-xs font-bold text-black">Double Espresso Cold Brew</p>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 hidden xl:flex items-center gap-3 bg-yellow-300/90 backdrop-blur-md p-3 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000]">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
              <div>
                <p className="text-[10px] font-extrabold uppercase text-black tracking-wider">Live Display</p>
                <p className="text-xs font-bold text-black">8K Ultra-Sharp Color Calibration</p>
              </div>
            </div>
          </div>

          {/* Device Mockup Shell Container */}
          <div className={`relative z-10 w-full transition-all duration-500 flex flex-col items-center justify-center ${
            activeDevice === 'macbook' ? 'max-w-6xl' :
            activeDevice === 'studio-display' ? 'max-w-7xl' :
            activeDevice === 'ipad' ? 'max-w-3xl' : 'max-w-sm'
          }`}>

            {/* 1. MacBook Pro 16" Mockup Frame */}
            {activeDevice === 'macbook' && (
              <div className="w-full flex flex-col items-center">
                
                {/* MacBook Display Lid Top Bezel & Screen */}
                <div className={`w-full bg-[#1e1e24] rounded-t-[28px] p-3 sm:p-4 border-[3px] border-[#383842] shadow-[0_30px_90px_rgba(0,0,0,0.6)] relative overflow-hidden transition-transform duration-500 ${
                  tilt3D ? 'transform perspective-1000 rotateX-2' : ''
                }`}>
                  
                  {/* Top Notch & Camera WebCam */}
                  <div className="w-full flex items-center justify-center relative mb-2 z-30">
                    <div className="bg-[#0f0f12] h-4 w-32 rounded-b-xl border-x border-b border-[#3a3a45] flex items-center justify-center gap-2 px-3 shadow-inner">
                      <div className="w-2 h-2 rounded-full bg-[#1b2234] border border-[#3b4766] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1f1f26]" />
                    </div>
                  </div>

                  {/* Inner Display Screen Viewport */}
                  <div className="w-full h-[620px] sm:h-[680px] md:h-[740px] bg-white rounded-lg overflow-y-auto overflow-x-hidden relative border border-slate-800 shadow-inner group">
                    
                    {/* Screen Glare Reflection Layer */}
                    {showGlare && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-40 transition-opacity" />
                    )}

                    {/* Live Memphis Studio Landing Page Content */}
                    <div className="w-full min-h-full">
                      {children}
                    </div>
                  </div>

                  {/* Bottom Bezel "MacBook Pro" Subtle Logo */}
                  <div className="w-full py-1.5 flex items-center justify-center">
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-slate-500 uppercase font-sans">
                      MacBook Pro
                    </span>
                  </div>
                </div>

                {/* MacBook Pro Base / Keyboard Hinge & Aluminum Body */}
                <div className="w-[108%] h-5 bg-gradient-to-b from-[#2a2a32] via-[#1a1a20] to-[#0f0f14] rounded-b-2xl border-x border-b border-[#444452] shadow-2xl relative flex items-center justify-center">
                  {/* Opening Notch Lip */}
                  <div className="w-24 h-1.5 bg-[#3a3a46] rounded-b-md shadow-inner border-t border-black/40" />
                </div>

                {/* Soft Table Surface Cast Shadow */}
                <div className="w-[112%] h-8 bg-black/40 blur-xl rounded-full -mt-2 -z-10" />
              </div>
            )}

            {/* 2. Studio Display Mockup Frame */}
            {activeDevice === 'studio-display' && (
              <div className="w-full flex flex-col items-center">
                {/* Display Frame */}
                <div className="w-full bg-[#18181c] rounded-2xl p-4 sm:p-6 border-4 border-[#33333d] shadow-[0_35px_100px_rgba(0,0,0,0.7)] relative overflow-hidden">
                  
                  {/* Top Camera */}
                  <div className="w-full flex items-center justify-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-[#0a0a0d] border border-[#444] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  {/* Display Screen */}
                  <div className="w-full h-[700px] md:h-[800px] bg-white rounded-lg overflow-y-auto overflow-x-hidden relative border border-slate-700">
                    {showGlare && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-40" />
                    )}
                    {children}
                  </div>
                </div>

                {/* Aluminum Studio Stand */}
                <div className="w-40 h-16 bg-gradient-to-b from-[#2d2d36] to-[#1a1a20] border-x border-[#444] shadow-md" />
                <div className="w-64 h-3 bg-[#24242c] rounded-full border border-[#444] shadow-2xl" />
              </div>
            )}

            {/* 3. iPad Pro Mockup Frame */}
            {activeDevice === 'ipad' && (
              <div className="w-full flex flex-col items-center">
                <div className="w-full bg-[#1c1c22] rounded-[36px] p-4 border-4 border-[#3a3a48] shadow-[0_25px_70px_rgba(0,0,0,0.6)] relative overflow-hidden">
                  {/* Front Camera Dot */}
                  <div className="w-full flex items-center justify-center mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#09090c] border border-slate-600" />
                  </div>
                  {/* iPad Screen */}
                  <div className="w-full h-[700px] bg-white rounded-2xl overflow-y-auto relative border border-slate-700">
                    {children}
                  </div>
                </div>
              </div>
            )}

            {/* 4. iPhone 15 Pro Mockup Frame */}
            {activeDevice === 'iphone' && (
              <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-[380px] bg-[#1a1a20] rounded-[48px] p-3 border-4 border-[#444452] shadow-[0_25px_80px_rgba(0,0,0,0.7)] relative overflow-hidden">
                  {/* Dynamic Island Notch */}
                  <div className="w-full flex items-center justify-center mb-2 z-30">
                    <div className="bg-black h-5 w-24 rounded-full flex items-center justify-end px-2 border border-slate-800">
                      <div className="w-2 h-2 rounded-full bg-blue-900/60" />
                    </div>
                  </div>
                  {/* iPhone Screen */}
                  <div className="w-full h-[680px] bg-white rounded-[36px] overflow-y-auto relative border border-slate-800">
                    {children}
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      )}

      {/* Footer Info Bar */}
      <footer className="bg-black text-slate-400 text-xs py-2 px-4 border-t-2 border-yellow-400 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-space font-medium text-white">RetroWave Studio Live Canvas</span>
        </div>
        <p className="hidden md:block text-[11px] font-mono text-slate-400">
          Memphis Group 1980s Aesthetic • Clashing Neon Palette • 8K Pixel Perfect
        </p>
      </footer>
    </div>
  );
};
