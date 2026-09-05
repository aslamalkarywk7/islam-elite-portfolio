import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Monitor, Layout, Terminal, Flame, Zap } from 'lucide-react';
import { DisplaySettings } from '../types';
import { audioSynth } from '../utils/audioSynth';

interface NavbarProps {
  displaySettings: DisplaySettings;
  setDisplaySettings: React.Dispatch<React.SetStateAction<DisplaySettings>>;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  displaySettings,
  setDisplaySettings,
  onOpenTerminal,
}) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toISOString().substring(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    const nextMuted = !displaySettings.audioMuted;
    audioSynth.setMuted(nextMuted);
    setDisplaySettings((prev) => ({ ...prev, audioMuted: nextMuted }));
    if (!nextMuted) {
      audioSynth.playClick();
    }
  };

  const toggleMode = (mode: 'canvas' | 'studio_mockup') => {
    audioSynth.playHeavyPop();
    setDisplaySettings((prev) => ({ ...prev, mode }));
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b-[5px] border-black text-white select-none">
      {/* Top Warning Strip */}
      <div className="bg-[#CCFF00] text-black font-mono font-bold text-xs uppercase px-4 py-1 flex justify-between items-center border-b-4 border-black overflow-hidden">
        <div className="flex items-center space-x-2 font-extrabold tracking-wider">
          <Flame className="w-4 h-4 fill-black animate-pulse" />
          <span>STRICT 5PX STROKES // ZERO GRADIENTS // ELECTRIC LIME ACCENTS</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <span>SYS_TIME: {timeStr}</span>
          <span className="bg-black text-[#CCFF00] px-2 py-0.5 text-[10px] font-black border border-black">
            STATUS: 100% OPERATIONAL
          </span>
        </div>
      </div>

      {/* Main Nav Controls */}
      <div className="max-w-[1800px] mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-3">
        {/* Brand Logo Block */}
        <a 
          href="#top" 
          onClick={() => audioSynth.playClick()}
          className="flex items-center bg-white text-black font-black text-2xl sm:text-3xl tracking-tighter px-4 py-2 border-4 border-black shadow-[4px_4px_0px_#CCFF00] hover:-translate-x-1 hover:-translate-y-1 transition-all"
        >
          <span className="bg-black text-white px-2 py-0.5 mr-2 text-xl font-mono">RAW</span>
          <span>STUDIO</span>
          <span className="text-[#CCFF00] text-sm ml-2 font-mono font-bold bg-black px-1.5 py-0.5 border border-black">
            2026
          </span>
        </a>

        {/* Quick Jumps */}
        <nav className="hidden lg:flex items-center space-x-2 font-bold text-xs">
          <a
            href="#projects"
            onClick={() => audioSynth.playClick()}
            className="px-3 py-2 bg-black border-2 border-white hover:bg-[#CCFF00] hover:text-black transition-colors"
          >
            01. WORK [06]
          </a>
          <a
            href="#manifesto"
            onClick={() => audioSynth.playClick()}
            className="px-3 py-2 bg-black border-2 border-white hover:bg-[#CCFF00] hover:text-black transition-colors"
          >
            02. LAWS
          </a>
          <a
            href="#poster-studio"
            onClick={() => audioSynth.playClick()}
            className="px-3 py-2 bg-black border-2 border-white hover:bg-[#CCFF00] hover:text-black transition-colors"
          >
            03. POSTER GENERATOR
          </a>
          <a
            href="#clients"
            onClick={() => audioSynth.playClick()}
            className="px-3 py-2 bg-black border-2 border-white hover:bg-[#CCFF00] hover:text-black transition-colors"
          >
            04. ROSTER
          </a>
        </nav>

        {/* Interactive Controls & View Modes */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* View Mode Switcher */}
          <div className="flex bg-black border-4 border-white p-1">
            <button
              onClick={() => toggleMode('canvas')}
              className={`px-2.5 py-1 text-xs font-black font-mono flex items-center space-x-1.5 transition-colors ${
                displaySettings.mode === 'canvas'
                  ? 'bg-[#CCFF00] text-black border-2 border-black'
                  : 'text-white hover:bg-zinc-800'
              }`}
              title="Full interactive direct web UI"
            >
              <Layout className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">RAW UI</span>
            </button>
            <button
              onClick={() => toggleMode('studio_mockup')}
              className={`px-2.5 py-1 text-xs font-black font-mono flex items-center space-x-1.5 transition-colors ${
                displaySettings.mode === 'studio_mockup'
                  ? 'bg-[#CCFF00] text-black border-2 border-black'
                  : 'text-white hover:bg-zinc-800'
              }`}
              title="Photorealistic 8K studio display monitor mockup"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">8K MOCKUP</span>
            </button>
          </div>

          {/* Audio Synth Toggle */}
          <button
            onClick={toggleAudio}
            className={`p-2 border-4 border-black font-mono text-xs font-bold transition-all shadow-[3px_3px_0px_#000] ${
              !displaySettings.audioMuted
                ? 'bg-[#CCFF00] text-black'
                : 'bg-zinc-800 text-zinc-400'
            }`}
            title={displaySettings.audioMuted ? 'Unmute Audio Synth' : 'Mute Audio Synth'}
          >
            {!displaySettings.audioMuted ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Contact Terminal Button */}
          <button
            onClick={() => {
              audioSynth.playGlitchBeep();
              onOpenTerminal();
            }}
            className="btn-brutal-lime px-3 sm:px-4 py-2 text-xs font-black flex items-center space-x-2"
          >
            <Terminal className="w-4 h-4" />
            <span className="uppercase">START PROJECT</span>
          </button>
        </div>
      </div>
    </header>
  );
};
