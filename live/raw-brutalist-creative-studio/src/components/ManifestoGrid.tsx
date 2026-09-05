import React, { useState } from 'react';
import { Shield, ChevronDown, ChevronUp, AlertCircle, Zap, Sparkles } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

export const ManifestoGrid: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const laws = [
    {
      num: '01',
      title: 'NO GRADIENTS EVER',
      summary: 'Soft radial overlays and subtle pastel transitions are banned.',
      deepDive: 'We believe flat, unyielding monochromatic planes and electric accent pops create immediate structural impact. Color must communicate intent, not act as decorative wallpaper.',
      accent: '#CCFF00',
    },
    {
      num: '02',
      title: '5PX HARD STROKES ARE LAW',
      summary: 'Every boundary must be strictly defined by a solid black stroke.',
      deepDive: 'Hairline 1px subtle gray borders bleed into nothingness. A 5px solid black border commands authority, frames content like concrete beams, and eliminates layout ambiguity.',
      accent: '#FFFFFF',
    },
    {
      num: '03',
      title: 'EMOTION OVER SOFTNESS',
      summary: 'Reject friendly rounded pill buttons designed for children.',
      deepDive: 'Modern web software has become overly cautious, sterile, and homogeneous. We build interfaces with raw visceral energy, crisp tactile clicks, and heavy physical weight.',
      accent: '#CCFF00',
    },
    {
      num: '04',
      title: 'INTENTIONAL CLUNKY GRID',
      summary: 'Embrace asymmetrical block overlaps and raw rotated badges.',
      deepDive: 'Symmetry is predictable. Unconventional vertical grids create visual tension, guide the eye through deliberate contrast, and make content memorable.',
      accent: '#00FF66',
    },
    {
      num: '05',
      title: 'MASSIVE DENSE TYPOGRAPHY',
      summary: 'Display text should scream off the screen at 900 Ultra weight.',
      deepDive: 'Typography is not just legible copy—it is architectural structure. Scale contrast between 8xl ultra display headlines and monospaced technical telemetry creates instant hierarchy.',
      accent: '#CCFF00',
    },
    {
      num: '06',
      title: 'UNAPOLOGETIC HYPER-CONTRAST',
      summary: 'Pure black (#000000) against sharp electric lime (#CCFF00).',
      deepDive: 'High contrast guarantees accessibility, legibility, and visual force across all display technologies and sunlight conditions.',
      accent: '#FFFFFF',
    },
  ];

  const toggleLaw = (idx: number) => {
    audioSynth.playClick();
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="manifesto" className="py-16 bg-zinc-950 text-white border-b-[5px] border-black relative">
      <div className="max-w-[1800px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-12 border-b-4 border-white pb-6">
          <div className="bg-white text-black font-mono font-black text-xs px-3 py-1 border-2 border-black inline-block uppercase mb-3">
            STUDIO PHILOSOPHY // LAWS
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tighter">
            OUR RAW <span className="text-[#CCFF00]">MANIFESTO</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 font-bold mt-1">
            SIX NON-NEGOTIABLE CORE LAWS THAT GOVERN EVERY PIXEL WE SHIP
          </p>
        </div>

        {/* Laws Accordion / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laws.map((law, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={law.num}
                className={`bg-black border-4 border-white p-6 shadow-[8px_8px_0px_#000] flex flex-col justify-between transition-all duration-150 ${
                  isExpanded ? 'border-[#CCFF00] shadow-[10px_10px_0px_#CCFF00]' : ''
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4 border-b-2 border-zinc-800 pb-3">
                    <span className="font-display font-black text-3xl text-[#CCFF00] bg-zinc-900 px-2 py-0.5 border border-black">
                      LAW_{law.num}
                    </span>
                    <button
                      onClick={() => toggleLaw(idx)}
                      className="p-1.5 bg-zinc-900 border-2 border-white hover:bg-[#CCFF00] hover:text-black font-bold transition-colors cursor-pointer"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase tracking-tight mb-2 text-white">
                    {law.title}
                  </h3>

                  <p className="font-mono text-xs text-zinc-300 font-bold leading-relaxed mb-4">
                    {law.summary}
                  </p>

                  {isExpanded && (
                    <div className="mt-3 p-4 bg-zinc-900 border-2 border-[#CCFF00] font-mono text-xs text-zinc-200 leading-relaxed font-bold animate-fadeIn">
                      <div className="text-[#CCFF00] font-black uppercase mb-1">DEEP DIVE:</div>
                      {law.deepDive}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t-2 border-zinc-800 mt-4 flex justify-between items-center font-mono text-[10px]">
                  <span className="text-zinc-500 font-bold">ENFORCED IN CODE</span>
                  <span className="bg-[#CCFF00] text-black px-2 py-0.5 font-black uppercase">
                    100% COMPLIANT
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
