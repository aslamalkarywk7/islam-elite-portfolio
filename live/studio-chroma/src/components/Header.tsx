import React, { useState } from 'react';
import { Sparkles, Menu, X, Layers, PhoneCall } from 'lucide-react';
import { M3Ripple } from './M3Ripple';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
  onToggleThemeInspector: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenContact,
  onToggleThemeInspector,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'contact') {
      onOpenContact();
    } else {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFBFF]/95 backdrop-blur-md border-b border-[#E1E2EC] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Minimalist Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="group cursor-pointer flex items-center gap-2.5 select-none"
        >
          <div className="w-8 h-8 rounded-xl bg-[#005CBB] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
            <span className="font-bold text-lg tracking-tighter">C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl tracking-tight text-[#005CBB] leading-none">
              STUDIO CHROMA
            </span>
            <span className="text-[10px] font-medium tracking-widest text-[#757780] uppercase">
              Material Design 3 Studio
            </span>
          </div>
        </div>

        {/* Desktop Simplified Navigation with M3 Active Pill Indicator */}
        <nav className="hidden md:flex items-center gap-1 bg-[#E1E2EC]/50 p-1.5 rounded-full border border-[#E1E2EC]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 select-none ${
                  isActive
                    ? 'text-[#001D33] font-bold bg-[#D8E2FF] shadow-xs'
                    : 'text-[#44474E] hover:text-[#1A1C1E] hover:bg-black/5'
                }`}
              >
                <M3Ripple color={isActive ? 'rgba(0,92,187,0.12)' : 'rgba(0,92,187,0.08)'} />
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Inspector Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onToggleThemeInspector}
            title="Inspect M3 Tokens & Color Palette"
            className="p-2 text-[#44474E] hover:text-[#005CBB] hover:bg-[#E1E2EC]/50 rounded-full transition-colors relative"
          >
            <M3Ripple />
            <Layers className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-[#005CBB] rounded-full shadow-xs hover:bg-[#004A99] hover:m3-elevation-2 active:scale-98 transition-all"
          >
            <M3Ripple color="rgba(255,255,255,0.2)" />
            <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
            <span>Start Project</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleThemeInspector}
            className="p-2 text-[#44474E] hover:bg-[#E1E2EC]/50 rounded-full"
          >
            <Layers className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#1A1C1E] hover:bg-[#E1E2EC]/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBFF] border-b border-[#E1E2EC] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                activeSection === item.id
                  ? 'bg-[#D8E2FF] text-[#001D33] font-bold'
                  : 'text-[#44474E] hover:bg-[#E1E2EC]/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#005CBB] text-white rounded-xl font-semibold shadow-xs"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Studio Chroma</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
