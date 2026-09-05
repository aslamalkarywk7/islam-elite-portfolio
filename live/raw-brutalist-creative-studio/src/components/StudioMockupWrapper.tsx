import React, { useState } from 'react';
import { DisplaySettings } from '../types';
import { Monitor, Sun, Eye, Sliders, Maximize2, Zap, RefreshCw, Volume2 } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface StudioMockupWrapperProps {
  displaySettings: DisplaySettings;
  setDisplaySettings: React.Dispatch<React.SetStateAction<DisplaySettings>>;
  children: React.ReactNode;
}

export const StudioMockupWrapper: React.FC<StudioMockupWrapperProps> = ({
  displaySettings,
  setDisplaySettings,
  children,
}) => {
  const [tiltAngle, setTiltAngle] = useState<number>(0);

  if (displaySettings.mode === 'canvas') {
    return <>{children}</>;
  }

  const getGlowStyle = () => {
    if (displaySettings.ambientLighting === 'neon_lime') {
      return 'shadow-[0_0_120px_rgba(204,255,0,0.35)]';
    }
    if (displaySettings.ambientLighting === 'studio') {
      return 'shadow-[0_0_100px_rgba(255,255,255,0.2)]';
    }
    return 'shadow-[0_0_50px_rgba(0,0,0,0.8)]';
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-2 sm:p-6 lg:p-10 flex flex-col items-center justify-start select-none transition-colors duration-300">
      
      {/* Top Studio Control Bar */}
      <div className="w-full max-w-[1800px] mb-6 bg-black border-4 border-white p-4 shadow-[8px_8px_0px_#CCFF00] flex flex-wrap justify-between items-center gap-4 font-mono text-xs">
        <div className="flex items-center space-x-3">
          <Monitor className="w-5 h-5 text-[#CCFF00]" />
          <span className="font-black uppercase text-white text-sm">
            STUDIO MOCKUP DISPLAY // 8K RENDER ENGINE
          </span>
        </div>

        {/* Studio Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Ambient Lighting Toggle */}
          <div className="flex items-center space-x-1 bg-zinc-900 border-2 border-white p-1">
            <span className="text-zinc-400 font-bold px-2">LIGHTING:</span>
            {(['studio', 'neon_lime', 'dim'] as const).map((light) => (
              <button
                key={light}
                onClick={() => {
                  audioSynth.playClick();
                  setDisplaySettings((prev) => ({ ...prev, ambientLighting: light }));
                }}
                className={`px-2 py-0.5 font-black uppercase text-[10px] cursor-pointer ${
                  displaySettings.ambientLighting === light
                    ? 'bg-[#CCFF00] text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {light}
              </button>
            ))}
          </div>

          {/* Glare Toggle */}
          <button
            onClick={() => {
              audioSynth.playClick();
              setDisplaySettings((prev) => ({ ...prev, glareEffect: !prev.glareEffect }));
            }}
            className={`px-3 py-1 font-bold border-2 border-white cursor-pointer ${
              displaySettings.glareEffect ? 'bg-[#CCFF00] text-black font-black' : 'bg-black text-white'
            }`}
          >
            GLARE {displaySettings.glareEffect ? '[ON]' : '[OFF]'}
          </button>

          {/* Scanlines Toggle */}
          <button
            onClick={() => {
              audioSynth.playClick();
              setDisplaySettings((prev) => ({ ...prev, scanlines: !prev.scanlines }));
            }}
            className={`px-3 py-1 font-bold border-2 border-white cursor-pointer ${
              displaySettings.scanlines ? 'bg-[#CCFF00] text-black font-black' : 'bg-black text-white'
            }`}
          >
            SCANLINES {displaySettings.scanlines ? '[ON]' : '[OFF]'}
          </button>

          {/* Switch back to Direct UI */}
          <button
            onClick={() => {
              audioSynth.playHeavyPop();
              setDisplaySettings((prev) => ({ ...prev, mode: 'canvas' }));
            }}
            className="btn-brutal-lime px-4 py-1.5 text-xs font-black uppercase flex items-center space-x-2 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>EXIT MOCKUP MODE</span>
          </button>
        </div>
      </div>

      {/* Photorealistic Monitor Hardware Frame */}
      <div 
        style={{ transform: `rotateX(${tiltAngle}deg)` }}
        className={`w-full max-w-[1750px] bg-zinc-900 border-[10px] border-zinc-800 rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 relative ${getGlowStyle()}`}
      >
        {/* Top Hardware Bezel with Camera Notch */}
        <div className="flex justify-between items-center mb-4 px-4 font-mono text-[10px] text-zinc-500">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse inline-block" />
            <span className="font-bold text-zinc-300">STUDIO MONITOR 32" OLED // 240Hz</span>
          </div>

          <div className="w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-700 mx-auto" title="Built-in Studio Camera" />

          <div className="font-bold text-[#CCFF00]">
            RESOLUTION: 7680 x 4320 (8K)
          </div>
        </div>

        {/* Screen Glass Display Frame */}
        <div className={`relative border-4 border-black bg-black rounded-lg overflow-hidden ${displaySettings.scanlines ? 'scanlines' : ''}`}>
          
          {/* Glare Simulation Overlay */}
          {displaySettings.glareEffect && (
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-30" />
          )}

          {/* Inner App Canvas */}
          <div className="max-h-[82vh] overflow-y-auto">
            {children}
          </div>
        </div>

        {/* Monitor Base Stand Mockup */}
        <div className="mt-4 flex flex-col items-center">
          <div className="w-48 h-4 bg-zinc-800 rounded-t-md border-t-2 border-zinc-700" />
          <div className="w-80 h-3 bg-zinc-900 border-2 border-zinc-800 rounded-b-lg shadow-2xl flex justify-center items-center font-mono text-[9px] text-zinc-600 font-bold">
            RAW_STUDIO_HARDWARE_DISPLAY_UNIT
          </div>
        </div>

      </div>

    </div>
  );
};
