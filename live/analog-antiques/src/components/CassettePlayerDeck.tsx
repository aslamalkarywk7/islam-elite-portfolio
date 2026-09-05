import React, { useEffect, useState } from 'react';
import { TapeArchiveItem } from '../types';
import { ARCHIVE_TAPES } from '../data/tapes';
import { audioEngine } from '../utils/audioSynthesizer';
import { Play, Pause, FastForward, Rewind, Square, Volume2, VolumeX, Sliders, Disc, Sparkles } from 'lucide-react';

interface CassettePlayerDeckProps {
  currentTape: TapeArchiveItem;
  onSelectTape: (tape: TapeArchiveItem) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const CassettePlayerDeck: React.FC<CassettePlayerDeckProps> = ({
  currentTape,
  onSelectTape,
  isOpen,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isRewinding, setIsRewinding] = useState<boolean>(false);
  const [isFastForwarding, setIsFastForwarding] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1.0);
  const [tapeNoise, setTapeNoise] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0.7);
  const [vuMeter, setVuMeter] = useState<{ left: number; right: number }>({ left: 15, right: 15 });
  const [activeSide, setActiveSide] = useState<'A' | 'B'>('A');

  // Animation loop for VU meters
  useEffect(() => {
    let animId: number;
    const updateVU = () => {
      if (isPlaying) {
        const levels = audioEngine.getVULevel();
        setVuMeter(levels);
      } else {
        setVuMeter({ left: 5 + Math.random() * 3, right: 5 + Math.random() * 3 });
      }
      animId = requestAnimationFrame(updateVU);
    };
    animId = requestAnimationFrame(updateVU);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  const handlePlayToggle = () => {
    audioEngine.playClickSound();
    if (isPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
    } else {
      audioEngine.playPreset(currentTape.synthPreset, speed);
      setIsPlaying(true);
    }
  };

  const handleRewind = () => {
    audioEngine.playClickSound();
    setIsRewinding(true);
    setIsFastForwarding(false);
    setTimeout(() => setIsRewinding(false), 1200);
  };

  const handleFastForward = () => {
    audioEngine.playClickSound();
    setIsFastForwarding(true);
    setIsRewinding(false);
    setTimeout(() => setIsFastForwarding(false), 1200);
  };

  const handleSpeedChange = (val: number) => {
    setSpeed(val);
    audioEngine.setTapeSpeed(val);
  };

  const handleTapeNoiseToggle = () => {
    const next = !tapeNoise;
    setTapeNoise(next);
    audioEngine.toggleTapeNoise(next);
  };

  const handleVolumeChange = (v: number) => {
    setVolume(v);
    audioEngine.setVolume(v);
  };

  const handleTapeSwitch = (tape: TapeArchiveItem) => {
    audioEngine.playClickSound();
    onSelectTape(tape);
    if (isPlaying) {
      audioEngine.playPreset(tape.synthPreset, speed);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bg-[#1A1A1A] text-[#E8D9C5] border-y-4 border-[#1A1A1A] py-6 px-4 sm:px-6 shadow-retro relative film-grain">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Deck Header */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#5F6F52] pb-3 gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-[#BF5B30] animate-pulse" />
            <h2 className="slab text-lg sm:text-2xl text-[#D4A017] uppercase tracking-wider">
              ANALOG TAPE DECK MODEL TC-1968
            </h2>
            <span className="bg-[#5F6F52] text-[#E8D9C5] text-[10px] font-mono-retro px-2 py-0.5 border border-[#E8D9C5]">
              DOLBY B NOISE REDUCTION
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Tape Selector dropdown */}
            <select
              value={currentTape.id}
              onChange={(e) => {
                const found = ARCHIVE_TAPES.find((t) => t.id === e.target.value);
                if (found) handleTapeSwitch(found);
              }}
              className="bg-[#2A2A2A] text-[#D4A017] border border-[#D4A017] px-3 py-1 font-mono-retro text-xs focus:outline-none"
            >
              {ARCHIVE_TAPES.map((tape) => (
                <option key={tape.id} value={tape.id}>
                  {tape.title} ({tape.year})
                </option>
              ))}
            </select>

            <button
              onClick={onClose}
              className="bg-[#BF5B30] text-[#E8D9C5] text-xs font-mono-retro px-3 py-1 border border-[#E8D9C5] hover:bg-[#D4A017] hover:text-[#1A1A1A] cursor-pointer"
            >
              Close Deck [X]
            </button>
          </div>
        </div>

        {/* Main Deck Controls Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Cassette Tape Bay Window (5 cols) */}
          <div className="lg:col-span-5 bg-[#2A2A2A] p-4 border-2 border-[#5F6F52] shadow-[4px_4px_0px_0px_#000]">
            
            {/* Clear Tape Window */}
            <div className="relative bg-[#111] border-2 border-[#6D5E50] p-4 rounded-none overflow-hidden">
              {/* Tape Shell */}
              <div 
                className="p-4 border-2 border-[#1A1A1A] shadow-inner relative flex flex-col justify-between h-40 transition-colors"
                style={{ backgroundColor: currentTape.tapeColor }}
              >
                {/* Paper Sticker Label */}
                <div 
                  className="p-2 text-[#1A1A1A] border border-[#1A1A1A] flex justify-between items-center font-typewriter text-xs shadow-sm"
                  style={{ backgroundColor: currentTape.labelColor }}
                >
                  <span className="font-bold truncate max-w-[200px]">{currentTape.title}</span>
                  <span className="bg-[#1A1A1A] text-[#E8D9C5] px-1.5 py-0.5 text-[10px] font-mono-retro">
                    SIDE {activeSide}
                  </span>
                </div>

                {/* Reels Bay */}
                <div className="flex justify-around items-center my-2 bg-[#111]/80 p-2 border border-[#1A1A1A]">
                  {/* Left Reel */}
                  <div className="relative w-12 h-12 bg-[#D4A017] rounded-full border-2 border-[#1A1A1A] flex items-center justify-center">
                    <div 
                      className={`w-10 h-10 border-2 border-dashed border-[#1A1A1A] rounded-full flex items-center justify-center ${
                        isPlaying ? 'animate-spin-reel' : isRewinding ? 'animate-spin-reel-reverse' : isFastForwarding ? 'animate-spin-reel-fast' : ''
                      }`}
                    >
                      <div className="w-3 h-3 bg-[#1A1A1A] rounded-full" />
                    </div>
                  </div>

                  {/* Tape Reader Head & Spool */}
                  <div className="h-6 w-24 bg-[#6D5E50] border border-[#1A1A1A] flex items-center justify-center text-[9px] font-mono-retro text-[#E8D9C5]">
                    MAGNETIC RIBBON
                  </div>

                  {/* Right Reel */}
                  <div className="relative w-12 h-12 bg-[#D4A017] rounded-full border-2 border-[#1A1A1A] flex items-center justify-center">
                    <div 
                      className={`w-10 h-10 border-2 border-dashed border-[#1A1A1A] rounded-full flex items-center justify-center ${
                        isPlaying ? 'animate-spin-reel' : isRewinding ? 'animate-spin-reel-reverse' : isFastForwarding ? 'animate-spin-reel-fast' : ''
                      }`}
                    >
                      <div className="w-3 h-3 bg-[#1A1A1A] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Bottom Tape Specs */}
                <div className="flex justify-between items-center text-[10px] font-mono-retro text-[#E8D9C5] bg-[#1A1A1A]/80 px-2 py-0.5">
                  <span>GENRE: {currentTape.genre}</span>
                  <span>{currentTape.year}</span>
                </div>
              </div>
            </div>

            {/* Tape Side Switcher */}
            <div className="mt-3 flex justify-between items-center text-xs font-mono-retro">
              <span className="text-[#A09384]">TAPE DIRECTION:</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveSide('A')}
                  className={`px-3 py-1 font-bold border cursor-pointer ${
                    activeSide === 'A' ? 'bg-[#BF5B30] text-[#E8D9C5] border-[#E8D9C5]' : 'bg-[#111] text-[#A09384] border-[#6D5E50]'
                  }`}
                >
                  SIDE A
                </button>
                <button
                  onClick={() => setActiveSide('B')}
                  className={`px-3 py-1 font-bold border cursor-pointer ${
                    activeSide === 'B' ? 'bg-[#BF5B30] text-[#E8D9C5] border-[#E8D9C5]' : 'bg-[#111] text-[#A09384] border-[#6D5E50]'
                  }`}
                >
                  SIDE B
                </button>
              </div>
            </div>
          </div>

          {/* Analog VU Meters & Sliders (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Dual Analog VU Meter Display */}
            <div className="bg-[#2A2A2A] p-3 border-2 border-[#5F6F52]">
              <p className="text-[10px] font-mono-retro text-[#D4A017] mb-2 uppercase tracking-widest text-center font-bold">
                ANALOG SIGNAL LEVEL (VU)
              </p>

              <div className="grid grid-cols-2 gap-3">
                {/* Left Meter */}
                <div className="bg-[#FFFDF7] text-[#1A1A1A] p-2 border-2 border-[#111] text-center relative overflow-hidden h-24">
                  <span className="text-[9px] font-mono-retro font-bold block text-[#111]">LEFT CHANNEL</span>
                  <div className="w-full h-1 bg-[#111] my-1" />
                  
                  {/* Gauge Arc */}
                  <div className="relative h-12 flex items-end justify-center">
                    <div 
                      className="w-0.5 h-10 bg-[#BF5B30] origin-bottom transition-transform duration-75"
                      style={{ transform: `rotate(${(vuMeter.left - 50) * 0.8}deg)` }}
                    />
                    <div className="w-3 h-3 rounded-full bg-[#111] absolute -bottom-1" />
                  </div>
                  <span className="text-[8px] font-mono-retro text-[#BF5B30] font-bold block mt-1">
                    {Math.round(vuMeter.left)} dB
                  </span>
                </div>

                {/* Right Meter */}
                <div className="bg-[#FFFDF7] text-[#1A1A1A] p-2 border-2 border-[#111] text-center relative overflow-hidden h-24">
                  <span className="text-[9px] font-mono-retro font-bold block text-[#111]">RIGHT CHANNEL</span>
                  <div className="w-full h-1 bg-[#111] my-1" />
                  
                  {/* Gauge Arc */}
                  <div className="relative h-12 flex items-end justify-center">
                    <div 
                      className="w-0.5 h-10 bg-[#BF5B30] origin-bottom transition-transform duration-75"
                      style={{ transform: `rotate(${(vuMeter.right - 50) * 0.8}deg)` }}
                    />
                    <div className="w-3 h-3 rounded-full bg-[#111] absolute -bottom-1" />
                  </div>
                  <span className="text-[8px] font-mono-retro text-[#BF5B30] font-bold block mt-1">
                    {Math.round(vuMeter.right)} dB
                  </span>
                </div>
              </div>
            </div>

            {/* Sliders: Speed & Volume */}
            <div className="bg-[#2A2A2A] p-3 border-2 border-[#5F6F52] space-y-3 font-mono-retro text-xs">
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span>PITCH / SPEED KNOB:</span>
                  <span className="text-[#D4A017] font-bold">{Math.round(speed * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="1.2"
                  step="0.02"
                  value={speed}
                  onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
                  className="w-full accent-[#BF5B30] bg-[#111] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span>MASTER VOLUME:</span>
                  <span className="text-[#D4A017] font-bold">{Math.round(volume * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-full accent-[#5F6F52] bg-[#111] cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Physical Mechanical Transport Buttons (3 cols) */}
          <div className="lg:col-span-3 space-y-3 bg-[#2A2A2A] p-4 border-2 border-[#5F6F52]">
            <p className="text-[10px] font-mono-retro text-[#D4A017] uppercase text-center tracking-widest font-bold">
              MECHANICAL CONTROLS
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handlePlayToggle}
                className={`p-3 slab text-xs border-2 border-[#E8D9C5] flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                  isPlaying ? 'bg-[#BF5B30] text-[#E8D9C5] shadow-inner' : 'bg-[#5F6F52] text-[#E8D9C5] hover:bg-[#D4A017] hover:text-[#1A1A1A]'
                }`}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>

              <button
                onClick={handleRewind}
                className="p-3 bg-[#383028] text-[#E8D9C5] font-mono-retro text-xs border-2 border-[#E8D9C5] flex flex-col items-center justify-center gap-1 hover:bg-[#BF5B30] cursor-pointer"
              >
                <Rewind className="w-5 h-5" />
                <span>REWIND</span>
              </button>

              <button
                onClick={handleFastForward}
                className="p-3 bg-[#383028] text-[#E8D9C5] font-mono-retro text-xs border-2 border-[#E8D9C5] flex flex-col items-center justify-center gap-1 hover:bg-[#BF5B30] cursor-pointer"
              >
                <FastForward className="w-5 h-5" />
                <span>F.FWD</span>
              </button>

              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  audioEngine.stop();
                  setIsPlaying(false);
                }}
                className="p-3 bg-[#A02B2B] text-[#E8D9C5] font-mono-retro text-xs border-2 border-[#E8D9C5] flex flex-col items-center justify-center gap-1 hover:bg-[#BF5B30] cursor-pointer"
              >
                <Square className="w-5 h-5 fill-current" />
                <span>STOP</span>
              </button>
            </div>

            {/* Tracklist Listing */}
            <div className="bg-[#111] p-2 border border-[#6D5E50] font-mono-retro text-[11px] space-y-1">
              <span className="text-[#D4A017] font-bold block border-b border-[#383028] pb-0.5">
                TRACKLIST (SIDE {activeSide}):
              </span>
              {(activeSide === 'A' ? currentTape.sideATracks : currentTape.sideBTracks).map((tr, idx) => (
                <p key={idx} className="text-[#A09384] truncate">
                  {tr}
                </p>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
