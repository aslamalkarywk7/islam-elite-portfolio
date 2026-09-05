import React, { useState } from 'react';
import { Maximize2, Monitor, ZoomIn, ZoomOut, RotateCcw, Sparkles, Sun, Eye } from 'lucide-react';

interface WorkspaceMockupProps {
  children: React.ReactNode;
  onExpandDirectView: () => void;
}

export const WorkspaceMockup: React.FC<WorkspaceMockupProps> = ({
  children,
  onExpandDirectView,
}) => {
  const [scale, setScale] = useState<number>(0.95);
  const [glareEffect, setGlareEffect] = useState<boolean>(true);

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-x-hidden selection:bg-[#005CBB] selection:text-white">
      
      {/* Top Interactive Floating Mockup Toolbar */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 flex flex-wrap items-center justify-between gap-4 text-white">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#005CBB] text-white flex items-center justify-center font-black text-sm">
            M3
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              Studio Chroma — Workspace Mockup
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-blue-400 font-semibold border border-slate-700">
                MacBook Pro Render
              </span>
            </h1>
            <p className="text-xs text-slate-400 hidden sm:block">
              Interactive Material Design 3 UI displayed inside a modern space gray laptop frame on a light wooden desk
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          
          <div className="hidden sm:flex items-center gap-1 bg-slate-800/80 p-1 rounded-full border border-slate-700/60">
            <button
              onClick={() => setScale(Math.max(0.7, scale - 0.1))}
              title="Zoom Out"
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-medium text-slate-300 px-2">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale(Math.min(1.2, scale + 0.1))}
              title="Zoom In"
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setScale(0.95)}
              title="Reset Zoom"
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border-l border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setGlareEffect(!glareEffect)}
            title="Toggle Screen Glass Reflection"
            className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors flex items-center gap-1.5 ${
              glareEffect
                ? 'bg-blue-600/20 text-blue-300 border-blue-500/40'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Screen Glare</span>
          </button>

          <button
            onClick={onExpandDirectView}
            className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-white bg-[#005CBB] hover:bg-[#004A99] rounded-full shadow-lg transition-all active:scale-95"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Interactive Full Screen</span>
          </button>
        </div>

      </div>

      {/* Real Workspace Background Environment (Light wooden desk, plant, notebook, blurred daylight window) */}
      <div className="relative min-h-[calc(100vh-60px)] flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-hidden bg-[#E2D8CC] dark:bg-[#1A1816]">
        
        {/* Soft Daylight Blurred Window Overlay Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF5EF]/90 via-[#EAE1D6]/80 to-[#D8CBB9]/90 backdrop-blur-3xl" />
        
        {/* Natural Sun Rays and Ambient Light Pass */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        {/* Wooden Desk Surface Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.15) 100%), repeating-linear-gradient(90deg, rgba(160,130,100,0.08) 0px, rgba(160,130,100,0.08) 2px, transparent 2px, transparent 12px)`
          }}
        />

        {/* Desk Accessories Visual Highlights (Plant on left, Sketch Notebook on right requested by prompt) */}
        
        {/* Potted Succulent Plant on Left Desk Corner */}
        <div className="absolute left-6 lg:left-16 bottom-12 z-10 hidden md:block pointer-events-none opacity-90 transition-transform duration-500 hover:scale-105">
          <div className="relative w-32 h-44 flex flex-col items-center justify-end">
            {/* Leaves */}
            <div className="w-24 h-24 bg-emerald-700/80 rounded-t-full rounded-br-full transform -rotate-12 blur-[0.5px] shadow-lg border border-emerald-600/40 flex items-center justify-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-t-full rounded-bl-full transform rotate-45 opacity-90" />
            </div>
            {/* Ceramic Pot */}
            <div className="w-20 h-20 bg-gradient-to-b from-[#F5EFE6] to-[#E3D9CC] rounded-b-2xl rounded-t-sm shadow-xl border border-white/60 relative -mt-4">
              <div className="w-full h-2 bg-amber-900/20 absolute top-0" />
            </div>
            {/* Shadow on desk */}
            <div className="w-24 h-4 bg-black/20 rounded-full blur-sm -mt-1" />
          </div>
        </div>

        {/* Sketch Notebook with Pencil on Right Desk Corner */}
        <div className="absolute right-6 lg:right-16 bottom-12 z-10 hidden md:block pointer-events-none opacity-90 transition-transform duration-500 hover:scale-105">
          <div className="relative w-44 h-52 bg-[#FCFBF8] rounded-r-lg rounded-l-xs shadow-2xl border border-stone-300/80 transform rotate-6 p-4 flex flex-col justify-between">
            {/* Binding Rings */}
            <div className="absolute -left-3 top-4 bottom-4 w-3 flex flex-col justify-between">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-4 h-1.5 bg-zinc-700 rounded-full shadow-xs" />
              ))}
            </div>
            {/* Notebook Grid Page */}
            <div className="w-full h-full border border-dashed border-stone-200/80 rounded p-2 text-[8px] font-mono text-stone-400 space-y-2">
              <p className="font-bold text-stone-600">STUDIO CHROMA</p>
              <div className="w-full h-0.5 bg-blue-500/40 rounded" />
              <div className="space-y-1">
                <div className="w-3/4 h-1 bg-stone-200 rounded" />
                <div className="w-1/2 h-1 bg-stone-200 rounded" />
                <div className="w-5/6 h-1 bg-stone-200 rounded" />
              </div>
              <div className="w-12 h-12 rounded-full border border-purple-400/50 flex items-center justify-center text-[7px] text-purple-600 font-bold mt-2">
                M3 FAB
              </div>
            </div>
            {/* Wooden Pencil resting on notebook */}
            <div className="absolute -right-2 top-10 w-36 h-2 bg-amber-600 rounded-full transform -rotate-12 shadow-md border border-amber-800/40">
              <div className="w-3 h-full bg-stone-800 rounded-r-full float-right" />
            </div>
          </div>
        </div>

        {/* Laptop Container with Scale Transform */}
        <div 
          className="relative z-20 transition-transform duration-300 ease-out flex flex-col items-center max-w-6xl w-full"
          style={{ transform: `scale(${scale})` }}
        >
          
          {/* Space Gray MacBook Pro Screen Outer Frame */}
          <div className="relative w-full rounded-[28px] bg-gradient-to-b from-[#2E3138] via-[#1E2024] to-[#121315] p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-600/40">
            
            {/* Aluminum Bezel Inner Ring */}
            <div className="relative w-full rounded-[20px] bg-black overflow-hidden border border-slate-800 flex flex-col">
              
              {/* Top Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-40 w-32 h-4 bg-black rounded-b-xl flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              </div>

              {/* Glass Screen Reflection Glare Overlay */}
              {glareEffect && (
                <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12]" />
              )}

              {/* Screen Content Viewport - Studio Chroma Material 3 Landing Page */}
              <div className="w-full h-[620px] sm:h-[680px] lg:h-[720px] overflow-y-auto bg-[#FDFBFF] text-[#1A1C1E] relative">
                {children}
              </div>

            </div>

            {/* Bottom MacBook Logo / Edge Detail */}
            <div className="pt-2 flex items-center justify-center">
              <span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase opacity-70">
                MacBook Pro
              </span>
            </div>

          </div>

          {/* MacBook Keyboard Base & Hinge (Space Gray Aluminum) */}
          <div className="relative w-[104%] h-5 bg-gradient-to-b from-[#3A3D45] via-[#2A2C32] to-[#1A1C20] rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-t border-slate-500/30 flex items-center justify-center">
            {/* Opening Notch */}
            <div className="w-20 h-1.5 bg-[#121315] rounded-b-md shadow-inner" />
          </div>

          {/* Desk Drop Shadow */}
          <div className="w-[98%] h-6 bg-black/40 rounded-full blur-xl -mt-2 pointer-events-none" />

        </div>

      </div>

    </div>
  );
};
