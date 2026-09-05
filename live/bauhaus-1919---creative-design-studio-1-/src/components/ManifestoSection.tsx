import React, { useState } from 'react';
import { MANIFESTO_PILLARS } from '../data/bauhausData';
import { Quote, Compass, Square, Circle, Triangle, CheckCircle2 } from 'lucide-react';

interface ManifestoSectionProps {
  showGridLines: boolean;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ showGridLines }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('pillar-01');

  const selectedPillar = MANIFESTO_PILLARS.find((p) => p.id === selectedPillarId) || MANIFESTO_PILLARS[0];

  return (
    <section id="manifesto" className="bg-[#F6F5F0] py-16 md:py-24 border-b-2 border-[#121212] relative">
      {/* Structural Grid Background */}
      <div className={`absolute inset-0 ${showGridLines ? 'bg-bauhaus-grid' : ''} pointer-events-none opacity-30`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 items-end mb-12 pb-6 border-b-2 border-[#121212]">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-[#FF2A1F] uppercase mb-2">
              <span className="w-3 h-3 bg-[#FF2A1F]"></span>
              <span>PHILOSOPHY & GUIDING PRINCIPLES // WEIMAR & DESSAU</span>
            </div>
            <h2 className="font-heavy text-4xl sm:text-6xl text-[#121212] tracking-tighter uppercase leading-none">
              THE MANIFESTO
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right font-mono-code text-xs text-gray-700">
            <span>DISCIPLINE NO. 01 — 04</span>
            <span className="block text-[#0055FF] font-bold mt-1">4 CORE STRUCTURAL PILLARS</span>
          </div>
        </div>

        {/* Asymmetrical 4-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MANIFESTO_PILLARS.map((pillar) => {
            const isSelected = selectedPillarId === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`cursor-pointer border-2 border-[#121212] p-6 transition-all duration-300 relative flex flex-col justify-between min-h-[320px] ${
                  isSelected
                    ? 'shadow-[8px_8px_0px_0px_#121212] -translate-y-1'
                    : 'bg-white hover:shadow-[4px_4px_0px_0px_#121212] hover:-translate-y-0.5'
                }`}
                style={{
                  backgroundColor: isSelected ? pillar.bgColor : '#FFFFFF',
                  color: isSelected ? pillar.textColor : '#121212',
                }}
              >
                {/* Pillar Header Number */}
                <div className="flex items-center justify-between font-heavy text-2xl border-b-2 border-current pb-3 mb-4">
                  <span>{pillar.number}</span>
                  {pillar.number === '01' && <Circle className="w-6 h-6 fill-current" />}
                  {pillar.number === '02' && <Square className="w-6 h-6 fill-current" />}
                  {pillar.number === '03' && <Triangle className="w-6 h-6 fill-current" />}
                  {pillar.number === '04' && <Compass className="w-6 h-6" />}
                </div>

                {/* Pillar Title */}
                <div>
                  <h3 className="font-heavy text-xl uppercase tracking-tight mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-mono-code text-xs opacity-80 uppercase tracking-wider mb-4">
                    {pillar.german}
                  </p>
                  <p className="font-body text-xs font-medium leading-relaxed opacity-90">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Active Indicator */}
                <div className="pt-4 mt-4 border-t border-current/30 flex items-center justify-between text-[11px] font-mono-code">
                  <span>{isSelected ? 'ACTIVE PRINCIPLE' : 'CLICK TO EXPAND'}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Detailed Quote Box */}
        <div className="border-4 border-[#121212] bg-[#121212] text-[#F6F5F0] p-6 sm:p-10 shadow-[10px_10px_0px_0px_#FFE600] relative">
          <div className="absolute top-4 right-4 text-[#FFE600] font-mono-code text-xs font-bold border border-[#FFE600] px-3 py-1">
            PILLAR {selectedPillar.number} DEEP FOCUS
          </div>

          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 text-[#FF2A1F]">
                <Quote className="w-8 h-8" />
                <span className="font-mono-code text-xs font-bold tracking-widest uppercase">
                  HISTORICAL BAUHAUS TEXT / MASTER SPECIFICATION
                </span>
              </div>
              <blockquote className="font-display text-2xl sm:text-3xl text-[#FFE600] font-bold leading-tight">
                "{selectedPillar.quote}"
              </blockquote>
              <p className="font-body text-sm text-gray-300 leading-relaxed max-w-3xl">
                {selectedPillar.description}
              </p>
            </div>

            {/* Shape Visual Accent */}
            <div className="col-span-12 lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div 
                className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-white flex items-center justify-center p-4 transition-all duration-500"
                style={{ backgroundColor: selectedPillar.bgColor }}
              >
                <div className="text-center font-heavy text-white text-3xl">
                  {selectedPillar.number}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
