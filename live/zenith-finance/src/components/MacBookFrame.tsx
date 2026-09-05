import React from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { ViewMode } from '../types';
import { Monitor, Maximize2, Sliders, Sparkles } from 'lucide-react';

interface MacBookFrameProps {
  children: React.ReactNode;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleStudio: () => void;
}

export const MacBookFrame: React.FC<MacBookFrameProps> = ({
  children,
  viewMode,
  setViewMode,
  toggleStudio,
}) => {
  if (viewMode === 'fullscreen') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#111317] text-white py-8 px-4 sm:px-8 flex flex-col items-center justify-start relative overflow-hidden select-none">
      
      {/* DESK ENVIRONMENT AMBIENT BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
        <img
          src="/src/assets/images/macbook_oak_desk_1785192125819.jpg"
          alt="Light Oak Desk Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter blur-xs"
        />
      </div>

      {/* FLOATING SHOWCASE CONTROL BAR */}
      <div className="z-20 mb-6 max-w-2xl w-full px-6 py-3 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-2xl flex items-center justify-between text-xs font-semibold text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-white font-bold tracking-wide">MacBook Pro 16" Showcase</span>
          <span className="hidden sm:inline text-slate-400 font-normal">| Light Oak Home Office Studio</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleStudio}
            className="px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all flex items-center gap-1.5"
            title="Open Neumorphism Studio"
          >
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Lighting Studio</span>
          </button>

          <button
            onClick={() => setViewMode('fullscreen')}
            className="px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-blue-600/30"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fullscreen View</span>
          </button>
        </div>
      </div>

      {/* MACBOOK PRO LAPTOP FRAME CONTAINER */}
      <div className="z-10 w-full max-w-6xl relative transition-all duration-500">
        
        {/* LAPTOP TOP BEZEL / DISPLAY ENCLOSURE */}
        <div className="relative rounded-t-[28px] border-[12px] sm:border-[16px] border-[#22252a] bg-[#e5e2dd] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* CAMERA NOTCH */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-4 sm:h-5 bg-[#22252a] rounded-b-xl z-50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#0a0b0d] border border-slate-700"></div>
          </div>

          {/* SCREEN DISPLAY CONTENT SCROLLABLE AREA */}
          <div className="w-full h-[680px] sm:h-[780px] overflow-y-auto bg-[#e5e2dd] custom-scrollbar text-[#2c3038] relative pt-2">
            {children}
          </div>

          {/* GLASS GLARE REFLECTION OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
        </div>

        {/* LAPTOP HINGE AND LOWER ALUMINUM BASE */}
        <div className="w-full relative flex flex-col items-center">
          {/* HINGE */}
          <div className="w-36 sm:w-48 h-3 sm:h-4 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-b-md shadow-inner"></div>

          {/* ALUMINUM BOTTOM CASE */}
          <div className="w-[102%] -ml-[1%] h-4 sm:h-6 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 rounded-b-2xl border-t border-slate-400 shadow-2xl relative flex justify-center items-center">
            {/* THUMB NOTCH FOR OPENING */}
            <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-slate-400/60 rounded-b-md"></div>
          </div>

          {/* AMBIENT SHADOW ON desk */}
          <div className="w-[98%] h-8 bg-black/60 blur-xl rounded-full -mt-2"></div>
        </div>

      </div>

      {/* FOOTER CAPTION */}
      <div className="z-10 mt-6 text-xs text-slate-400 text-center font-medium max-w-lg">
        Natural daylight highlights the soft diffused shadows and extruded Neumorphic 2.0 depth on Zenith Finance. Click "Fullscreen View" anytime for unconstrained interaction.
      </div>

    </div>
  );
};
