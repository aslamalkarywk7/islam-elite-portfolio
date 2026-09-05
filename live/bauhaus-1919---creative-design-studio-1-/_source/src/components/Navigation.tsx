import React, { useState, useEffect } from 'react';
import { ViewMode } from '../types';
import { Grid, Laptop, Monitor, Sparkles, Compass, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  showGridLines: boolean;
  setShowGridLines: (show: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  viewMode,
  setViewMode,
  showGridLines,
  setShowGridLines,
  activeSection,
  setActiveSection,
}) => {
  const [time, setTime] = useState<string>('');
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 1919, y: 2026 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Europe/Berlin',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }) + ' CET'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { id: 'hero', label: '01 // FORM', href: '#hero' },
    { id: 'manifesto', label: '02 // MANIFESTO', href: '#manifesto' },
    { id: 'works', label: '03 // WORKS', href: '#works' },
    { id: 'lab', label: '04 // LAB', href: '#lab' },
    { id: 'services', label: '05 // DISCIPLINE', href: '#services' },
    { id: 'sandbox', label: '06 // OVERLAY', href: '#sandbox' },
    { id: 'contact', label: '07 // CONTACT', href: '#contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F6F5F0]/95 backdrop-blur-md border-b-2 border-[#121212]">
      {/* Top Status Bar */}
      <div className="hidden lg:grid grid-cols-12 text-xs font-mono-code border-b border-[#121212]/20 py-1.5 px-4 bg-[#121212] text-[#F6F5F0]">
        <div className="col-span-3 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#FF2A1F]"></span>
          <span className="font-bold tracking-wider">BAUHAUS 1919 / KUNST & TECHNIK</span>
        </div>
        <div className="col-span-3 text-center flex items-center justify-center gap-2 text-[#FFE600]">
          <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          <span>GRID POS: X:{coords.x}px Y:{coords.y}px</span>
        </div>
        <div className="col-span-3 text-center text-[#0055FF] font-semibold">
          <span>DESSAU / WEIMAR / BERLIN</span>
        </div>
        <div className="col-span-3 text-right text-gray-300">
          <span>BERLIN TIME: {time}</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="grid grid-cols-12 items-stretch h-16 md:h-20 border-b border-[#121212]">
        {/* Brand Cell */}
        <div className="col-span-8 sm:col-span-5 md:col-span-4 border-r-2 border-[#121212] px-4 md:px-6 flex items-center bg-[#FFFFFF] justify-between">
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            {/* Primary Bauhaus Shape Logo */}
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FF2A1F] rounded-full group-hover:scale-110 transition-transform"></div>
              <div className="absolute top-1 left-1 w-5 h-5 bg-[#FFE600] group-hover:rotate-45 transition-transform"></div>
              <div className="absolute bottom-1 right-1 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#0055FF]"></div>
            </div>

            <div>
              <span className="font-heavy text-lg md:text-xl tracking-tighter leading-none block text-[#121212]">
                BAUHAUS <span className="text-[#FF2A1F]">1919</span>
              </span>
              <span className="font-mono-code text-[10px] tracking-widest text-gray-600 block uppercase mt-0.5">
                CREATIVE AGENCY
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex col-span-5 border-r-2 border-[#121212] items-center justify-around px-2 bg-[#F6F5F0]">
          {navItems.slice(0, 5).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-mono-code text-xs px-2.5 py-1.5 font-bold transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-[#121212] text-[#FFE600]'
                    : 'text-[#121212] hover:bg-[#FFE600] hover:text-[#121212]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Control Tools Cell */}
        <div className="col-span-4 sm:col-span-7 md:col-span-8 lg:col-span-3 flex items-center justify-end px-3 md:px-4 gap-2 bg-[#FFFFFF]">
          {/* Construction Grid Toggle Button */}
          <button
            onClick={() => setShowGridLines(!showGridLines)}
            className={`font-mono-code text-xs px-2.5 py-2 border border-[#121212] flex items-center gap-1.5 transition-colors cursor-pointer ${
              showGridLines
                ? 'bg-[#0055FF] text-white font-bold'
                : 'bg-gray-100 text-[#121212] hover:bg-gray-200'
            }`}
            title="Toggle Construction Grid Overlay"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GRID</span>
          </button>

          {/* Mode Switcher: Full Canvas vs Architect Studio MacBook Mockup */}
          <div className="flex border-2 border-[#121212] p-0.5 bg-[#F6F5F0]">
            <button
              onClick={() => setViewMode('canvas')}
              className={`font-mono-code text-xs px-2 py-1.5 flex items-center gap-1 cursor-pointer transition-all ${
                viewMode === 'canvas'
                  ? 'bg-[#FF2A1F] text-white font-bold shadow-sm'
                  : 'text-[#121212] hover:bg-gray-200'
              }`}
              title="Interactive UI Display"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">CANVAS</span>
            </button>
            <button
              onClick={() => setViewMode('mockup')}
              className={`font-mono-code text-xs px-2 py-1.5 flex items-center gap-1 cursor-pointer transition-all ${
                viewMode === 'mockup'
                  ? 'bg-[#121212] text-[#FFE600] font-bold shadow-sm'
                  : 'text-[#121212] hover:bg-gray-200'
              }`}
              title="Architect Studio MacBook Mockup"
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">MOCKUP</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border-2 border-[#121212] bg-[#FFE600] text-[#121212] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121212] text-[#F6F5F0] border-b-4 border-[#FF2A1F] p-6 space-y-4 font-mono-code animate-in fade-in slide-in-from-top-2">
          <div className="text-xs text-[#FFE600] pb-2 border-b border-gray-800">
            BAUHAUS 1919 AGENCY NAVIGATION
          </div>
          <div className="grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-3 px-4 border border-gray-800 hover:border-[#FFE600] hover:bg-[#FFE600] hover:text-[#121212] font-bold text-sm flex items-center justify-between transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            ))}
          </div>
          <div className="pt-4 flex items-center justify-between text-xs text-gray-400">
            <span>DESSAU STUDIO</span>
            <span className="text-[#FF2A1F]">FORM & FUNCTION</span>
          </div>
        </div>
      )}
    </header>
  );
};
