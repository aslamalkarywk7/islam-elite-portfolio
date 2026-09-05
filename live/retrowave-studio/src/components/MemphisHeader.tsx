import React, { useState } from 'react';
import { Menu, X, Sparkles, Send, ArrowRight, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MemphisHeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
  onOpenPosterStudio: () => void;
}

export const MemphisHeader: React.FC<MemphisHeaderProps> = ({
  onNavigate,
  onOpenContact,
  onOpenPosterStudio,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleConfettiAndNav = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#FF007A', '#FFE600', '#0047FF', '#39FF14', '#FF5C00']
    });
    onOpenContact();
  };

  return (
    <nav className="w-full bg-white border-b-4 border-black px-4 sm:px-8 py-4 sticky top-0 z-40 relative select-none">
      
      {/* Decorative Top Geometric Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-pattern-stripes border-b border-black" />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Header Logo: 'RetroWave Studio' (large, blocky, non-traditional text) */}
        <div 
          onClick={() => handleConfettiAndNav('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Memphis Icon Badge */}
          <div className="w-12 h-12 bg-[#FF007A] border-3 border-black shadow-[4px_4px_0px_0px_#FFE600] group-hover:shadow-[6px_6px_0px_0px_#0047FF] group-hover:-translate-y-0.5 transition-all flex items-center justify-center relative overflow-hidden">
            <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#FFE600] border-2 border-black" />
            <span className="font-lexend font-black text-white text-xl z-10 text-stroke-black">
              RWS
            </span>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#39FF14] rotate-45 border border-black" />
          </div>

          <div className="flex flex-col">
            <span className="font-lexend font-black text-2xl sm:text-3xl text-black uppercase tracking-tight leading-none group-hover:text-[#FF007A] transition-colors">
              RetroWave Studio
            </span>
            <span className="font-space font-extrabold text-[11px] text-black bg-[#FFE600] px-2 py-0.5 mt-1 border border-black uppercase tracking-widest inline-block w-max shadow-[2px_2px_0px_0px_#000]">
              Memphis Design Lab
            </span>
          </div>
        </div>

        {/* Simplified Text Navigation (Services, Work, About) + Contact */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-space text-base font-bold text-black">
          <button
            onClick={() => handleConfettiAndNav('services')}
            className="hover:text-[#FF007A] hover:bg-[#FFE600] px-3 py-1 rounded-md border-2 border-transparent hover:border-black transition-all hover:shadow-[3px_3px_0px_0px_#000]"
          >
            Services
          </button>

          <button
            onClick={() => handleConfettiAndNav('work')}
            className="hover:text-[#0047FF] hover:bg-[#39FF14] px-3 py-1 rounded-md border-2 border-transparent hover:border-black transition-all hover:shadow-[3px_3px_0px_0px_#000]"
          >
            Work
          </button>

          <button
            onClick={() => handleConfettiAndNav('about')}
            className="hover:text-[#FF5C00] hover:bg-[#00E5FF] px-3 py-1 rounded-md border-2 border-transparent hover:border-black transition-all hover:shadow-[3px_3px_0px_0px_#000]"
          >
            About
          </button>

          <button
            onClick={onOpenPosterStudio}
            className="flex items-center gap-1.5 bg-[#FFE600] text-black px-3 py-1.5 border-2 border-black font-extrabold text-sm shadow-[3px_3px_0px_0px_#FF007A] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
          >
            <Sparkles className="w-4 h-4 text-black" />
            Poster Studio
          </button>

          {/* Primary Action Button */}
          <button
            onClick={triggerConfetti}
            className="flex items-center gap-2 bg-[#FF007A] text-white font-extrabold text-sm uppercase px-5 py-2.5 border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#0047FF] hover:shadow-[6px_6px_0px_0px_#FFE600] transition-all active:translate-x-1 active:translate-y-1"
          >
            <span>Let's Talk Chaos</span>
            <Zap className="w-4 h-4 fill-yellow-300" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 bg-[#FFE600] text-black border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#FF007A] hover:text-white transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t-3 border-black bg-[#FFE600] p-6 border-3 border-black shadow-[6px_6px_0px_0px_#000] space-y-4 font-space">
          <button
            onClick={() => handleConfettiAndNav('services')}
            className="w-full text-left font-black text-xl text-black py-2 border-b-2 border-black flex justify-between items-center"
          >
            <span>01 / Services</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => handleConfettiAndNav('work')}
            className="w-full text-left font-black text-xl text-black py-2 border-b-2 border-black flex justify-between items-center"
          >
            <span>02 / Work & Portfolio</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => handleConfettiAndNav('about')}
            className="w-full text-left font-black text-xl text-black py-2 border-b-2 border-black flex justify-between items-center"
          >
            <span>03 / About Studio</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              onOpenPosterStudio();
              setMobileMenuOpen(false);
            }}
            className="w-full bg-[#00E5FF] text-black font-black text-lg py-3 px-4 border-3 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-between"
          >
            <span>Create Memphis Poster</span>
            <Sparkles className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              triggerConfetti();
              setMobileMenuOpen(false);
            }}
            className="w-full bg-[#FF007A] text-white font-black text-lg py-3 px-4 border-3 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-between"
          >
            <span>Start a Project</span>
            <Send className="w-5 h-5" />
          </button>
        </div>
      )}
    </nav>
  );
};
