import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  return (
    <footer className="bg-[#121212] text-[#F6F5F0] border-t-2 border-[#121212] font-body relative overflow-hidden">
      
      {/* Top Asymmetrical Primary Color Blocks Row */}
      <div className="grid grid-cols-12 h-4 sm:h-6 border-b-2 border-white/20">
        <div className="col-span-4 bg-[#FF2A1F]"></div>
        <div className="col-span-5 bg-[#FFE600]"></div>
        <div className="col-span-3 bg-[#0055FF]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand & Manifesto Statement */}
          <div className="col-span-12 lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FF2A1F] rounded-full border border-white"></div>
              <span className="font-heavy text-2xl sm:text-3xl text-white tracking-tight">
                BAUHAUS <span className="text-[#FFE600]">1919</span>
              </span>
            </div>
            <p className="font-body text-sm text-gray-300 max-w-lg leading-relaxed">
              Dissolving the barrier between artistic craftsmanship and digital frontend software engineering. Pure Bauhaus aesthetic: geometric grid alignment, primary color theory, and bold graphic typography.
            </p>
            <div className="font-mono-code text-xs text-[#0055FF] font-bold">
              EST. DESSAU 1919 // REIMAGINED FOR MODERN DIGITAL UI/UX
            </div>
          </div>

          {/* Locations & Contact */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 space-y-3 font-mono-code text-xs">
            <div className="text-[#FFE600] font-bold uppercase border-b border-white/20 pb-1">
              STUDIO LOCATIONS:
            </div>
            <ul className="space-y-1.5 text-gray-300">
              <li>• Dessau-Roßlau // Gropiusallee</li>
              <li>• Weimar // Geschwister-Scholl-Str</li>
              <li>• Berlin // Auguststraße</li>
            </ul>
          </div>

          {/* Direct Actions & Top Link */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col justify-between items-start sm:items-end space-y-4 font-mono-code text-xs">
            <button
              onClick={onBackToTop}
              className="px-4 py-3 bg-[#FFE600] text-[#121212] font-heavy uppercase tracking-wider border-2 border-white cursor-pointer hover:bg-[#FF2A1F] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="text-right text-gray-400 text-[10px]">
              <div>SYSTEM: REACT 19 + TAILWIND</div>
              <div>LICENSE: APACHE 2.0</div>
            </div>
          </div>

        </div>

        {/* Massive Giant Typography Footer Graphic Art */}
        <div className="border-t-2 border-white/20 pt-6 select-none overflow-hidden">
          <div className="font-heavy text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white/10 tracking-tighter uppercase whitespace-nowrap leading-none hover:text-[#FF2A1F] transition-colors">
            KUNST UND TECHNIK
          </div>
        </div>

      </div>

    </footer>
  );
};
