import React, { useState } from 'react';
import { MEMPHIS_SERVICES } from '../data/memphisData';
import { ServiceItem } from '../types';
import { ArrowUpRight, CheckCircle2, Sparkles, X, Layers, ShieldCheck, Palette } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MemphisServiceCardsProps {
  onSelectService: (service: ServiceItem) => void;
}

export const MemphisServiceCards: React.FC<MemphisServiceCardsProps> = ({
  onSelectService
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleCardClick = (service: ServiceItem) => {
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.7 },
      colors: [service.accentColor, service.secondaryColor, '#000000', '#FFE600']
    });
    setActiveModalService(service);
    onSelectService(service);
  };

  return (
    <section id="services" className="w-full bg-slate-50 py-20 px-4 sm:px-8 border-b-4 border-black relative select-none">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pattern-stripes opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FF007A] text-white font-space font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_#FFE600] mb-4">
              <Layers className="w-4 h-4" />
              <span>What We Create</span>
            </div>
            <h2 className="font-lexend font-black text-4xl sm:text-6xl text-black uppercase tracking-tight">
              Radical <span className="bg-[#FFE600] px-2 py-0.5 border-3 border-black text-black shadow-[4px_4px_0px_0px_#0047FF]">Services</span>
            </h2>
          </div>

          <p className="font-space font-extrabold text-base sm:text-lg text-slate-800 max-w-md bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_#FF5C00]">
            Every service is executed with maximalist flair, heavy black strokes, and electric neon color theories.
          </p>
        </div>

        {/* Three Distinct Memphis Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {MEMPHIS_SERVICES.map((service, index) => {
            
            // Dynamic card frame pattern backgrounds
            const getPatternClass = () => {
              if (service.patternType === 'dots') return 'bg-pattern-dots-pink';
              if (service.patternType === 'grid') return 'bg-pattern-grid-bold opacity-15';
              return 'bg-pattern-stripes opacity-20';
            };

            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service)}
                className="group relative bg-white border-4 border-black p-5 sm:p-6 shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#FF007A] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Clashing Frame Geometric Background Badge */}
                <div 
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full border-4 border-black pointer-events-none transition-transform group-hover:scale-125"
                  style={{ backgroundColor: service.secondaryColor }}
                />

                <div className="relative z-10">
                  
                  {/* Badge Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="font-space font-black text-xs uppercase px-3 py-1 border-2 border-black text-black shadow-[2px_2px_0px_0px_#000]"
                      style={{ backgroundColor: service.secondaryColor }}
                    >
                      {service.badge}
                    </span>

                    <div 
                      className="w-10 h-10 rounded-full border-3 border-black flex items-center justify-center text-black font-black group-hover:rotate-45 transition-transform"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* High Quality Desaturated Thumbnail Image */}
                  <div className="w-full h-52 sm:h-60 mb-6 relative border-3 border-black overflow-hidden bg-slate-900 group-hover:border-4 transition-all">
                    
                    {/* Desaturated Image with Hover Color Unveil */}
                    <img
                      src={service.thumbnail}
                      alt={service.title}
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Clashing Geometric Pattern Overlay Corner */}
                    <div className="absolute bottom-0 right-0 bg-black text-white p-2 border-t-2 border-l-2 border-black font-mono text-[10px] uppercase tracking-widest">
                      desaturated photo
                    </div>

                    <div 
                      className="absolute top-3 left-3 w-6 h-6 border-2 border-black"
                      style={{ backgroundColor: service.accentColor }}
                    />
                  </div>

                  {/* Bold Title */}
                  <h3 className="font-lexend font-black text-2xl sm:text-3xl text-black uppercase mb-1 group-hover:text-[#FF007A] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-space font-bold text-xs uppercase text-slate-500 mb-3 tracking-widest">
                    {service.subtitle}
                  </p>

                  {/* Brief Description */}
                  <p className="font-space text-sm text-slate-900 font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer Action Tag */}
                <div className="relative z-10 pt-4 border-t-2 border-black flex items-center justify-between">
                  <span className="font-space font-extrabold text-xs uppercase text-black group-hover:underline">
                    Explore Scope & Deliverables →
                  </span>
                  <Sparkles className="w-4 h-4 text-pink-600" />
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* --- Service Detail Modal Popup --- */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-4 border-black max-w-2xl w-full p-6 sm:p-8 shadow-[12px_12px_0px_0px_#FFE600] relative animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 bg-[#FF007A] text-white p-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span 
                className="font-space font-black text-xs uppercase px-3 py-1 border-2 border-black"
                style={{ backgroundColor: activeModalService.secondaryColor }}
              >
                {activeModalService.badge}
              </span>
              <h3 className="font-lexend font-black text-3xl text-black uppercase">
                {activeModalService.title}
              </h3>
            </div>

            <p className="font-space font-extrabold text-sm uppercase text-slate-600 mb-6">
              {activeModalService.subtitle}
            </p>

            {/* Thumbnail Preview */}
            <div className="w-full h-48 border-3 border-black mb-6 overflow-hidden relative">
              <img 
                src={activeModalService.thumbnail} 
                alt={activeModalService.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div 
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: activeModalService.accentColor }}
              />
            </div>

            <p className="font-space text-base text-slate-900 font-medium mb-6">
              {activeModalService.description}
            </p>

            {/* Features & Deliverables Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-yellow-100 p-4 border-2 border-black">
                <h4 className="font-lexend font-black text-sm uppercase text-black mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-pink-600" />
                  Key Features
                </h4>
                <ul className="space-y-2 font-space text-xs font-bold text-slate-800">
                  {activeModalService.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-black rounded-full" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cyan-100 p-4 border-2 border-black">
                <h4 className="font-lexend font-black text-sm uppercase text-black mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-blue-600" />
                  Deliverables
                </h4>
                <ul className="space-y-2 font-space text-xs font-bold text-slate-800">
                  {activeModalService.deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {del}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA inside Modal */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-2.5 bg-slate-200 text-black font-space font-black text-sm border-2 border-black"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
