import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

interface MemphisFooterProps {
  onScrollTop: () => void;
  onOpenPosterStudio: () => void;
}

export const MemphisFooter: React.FC<MemphisFooterProps> = ({
  onScrollTop,
  onOpenPosterStudio
}) => {
  return (
    <footer className="w-full bg-black text-white border-t-4 border-yellow-400 font-space select-none">
      
      {/* Marquee Ticker */}
      <div className="bg-[#FFE600] text-black font-lexend font-black text-sm uppercase tracking-widest py-3 border-b-4 border-black overflow-hidden">
        <div className="flex whitespace-nowrap animate-pulse gap-8">
          <span>★ RETROWAVE STUDIO ★</span>
          <span>MEMPHIS DESIGN EXPERTS</span>
          <span>★ ELECTRIC PINK & NEON YELLOW ★</span>
          <span>UNFILTERED CREATIVITY</span>
          <span>★ RETROWAVE STUDIO ★</span>
          <span>MEMPHIS DESIGN EXPERTS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-lexend font-black text-3xl uppercase text-yellow-300">
              RetroWave Studio
            </h3>
            <p className="font-bold text-sm text-slate-300 max-w-md leading-relaxed">
              Crafting unapologetically bold brand identities, high-intensity web experiences, and 3D geometric digital art.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-yellow-300 font-bold uppercase">
                Available for Q3/Q4 Creative Commissions
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-lexend font-black text-base uppercase text-[#FF007A] mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-300">
              <li><a href="#services" className="hover:text-yellow-300">01 / Services</a></li>
              <li><a href="#work" className="hover:text-yellow-300">02 / Selected Work</a></li>
              <li><a href="#about" className="hover:text-yellow-300">03 / Studio Manifesto</a></li>
              <li><button onClick={onOpenPosterStudio} className="text-pink-400 hover:underline">04 / Poster Lab</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-lexend font-black text-base uppercase text-[#00E5FF] mb-2">
              Connect
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-300">
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300">Twitter / X</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300">Instagram</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-yellow-300">Behance Portfolio</a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300">Dribbble Shots</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© 2026 RetroWave Studio. All rights reserved. Memphis Design Style.</p>

          <button
            onClick={onScrollTop}
            className="flex items-center gap-2 bg-[#FF007A] text-white font-extrabold px-4 py-2 border-2 border-white shadow-[3px_3px_0px_0px_#FFE600] hover:bg-yellow-400 hover:text-black transition-colors"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
