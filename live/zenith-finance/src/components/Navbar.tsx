import React, { useState } from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { ViewMode, ShadowConfig } from '../types';
import { Monitor, Sliders, ShieldCheck, ArrowRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  shadowConfig: ShadowConfig;
  toggleStudio: () => void;
  onGetStartedClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  viewMode,
  setViewMode,
  shadowConfig,
  toggleStudio,
  onGetStartedClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-4 backdrop-blur-md bg-[#e6e9ef]/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* LOGO: Sleek sans-serif, deeply recessed text */}
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center gap-3 group"
          id="nav-logo"
        >
          <NeumorphicBox 
            variant="convex" 
            pill 
            className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105"
            shadowConfig={shadowConfig}
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#4d7cfe] to-indigo-500 shadow-inner flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            </div>
          </NeumorphicBox>

          <div className="flex flex-col">
            <span className="font-extrabold tracking-widest text-lg sm:text-xl neu-recessed-text uppercase select-none font-sans">
              ZENITH<span className="text-[#4d7cfe] text-shadow-none font-light">FINANCE</span>
            </span>
            <span className="text-[10px] tracking-wider text-[#718096] font-medium -mt-1">
              GEOMETRIC BALANCE WEALTH
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION BAR */}
        <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-full neu-inset">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-item-${item.id}`}
                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative ${
                  isActive
                    ? 'text-[#4d7cfe] neu-inset shadow-inner font-bold'
                    : 'text-[#6b7280] hover:text-[#2d3748] hover:neu-raised-sm'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#4d7cfe] rounded-full shadow-glow"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT CONTROLS & CTA BUTTON */}
        <div className="hidden lg:flex items-center gap-3">
          {/* VIEW MODE TOGGLE */}
          <NeumorphicBox
            variant={viewMode === 'macbook' ? 'inset' : 'raised-sm'}
            clickable
            onClick={() => setViewMode(viewMode === 'macbook' ? 'fullscreen' : 'macbook')}
            className="px-3 py-2 text-xs font-semibold text-[#4a5568] flex items-center gap-2"
            shadowConfig={shadowConfig}
            id="btn-toggle-viewmode"
            title="Switch display between Photorealistic MacBook Pro Desk Frame and Fullscreen UI"
          >
            <Monitor className={`w-4 h-4 ${viewMode === 'macbook' ? 'text-[#4d7cfe]' : ''}`} />
            <span>{viewMode === 'macbook' ? 'Desk Frame' : 'Fullscreen'}</span>
          </NeumorphicBox>

          {/* LIGHTING & SHADOW STUDIO DRAWER TOGGLE */}
          <NeumorphicBox
            variant="raised-sm"
            clickable
            onClick={toggleStudio}
            className="p-2.5 text-xs font-semibold text-[#4a5568] flex items-center justify-center hover:text-[#4d7cfe]"
            shadowConfig={shadowConfig}
            id="btn-toggle-studio"
            title="Open Soft UI Neumorphic Lighting Studio"
          >
            <Sliders className="w-4 h-4" />
          </NeumorphicBox>

          {/* HERO CTA BUTTON: Geometric Accent Glow */}
          <NeumorphicBox
            variant="glowing"
            clickable
            hoverable
            onClick={onGetStartedClick}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#4d7cfe] bg-[#e6e9ef] border border-blue-200/50 flex items-center gap-2 group hover:text-white hover:bg-[#4d7cfe] transition-colors"
            shadowConfig={shadowConfig}
            id="btn-nav-get-started"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </NeumorphicBox>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden items-center gap-2">
          <NeumorphicBox
            variant="raised-sm"
            clickable
            onClick={toggleStudio}
            className="p-2 text-xs text-[#4b525d]"
            id="btn-mobile-studio"
          >
            <Sliders className="w-4 h-4" />
          </NeumorphicBox>

          <NeumorphicBox
            variant={mobileMenuOpen ? 'inset' : 'raised-sm'}
            clickable
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-[#4b525d]"
            id="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </NeumorphicBox>
        </div>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-4 rounded-2xl neu-raised-lg flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full py-3 px-4 text-left font-medium rounded-xl transition-all ${
                  activeTab === item.id ? 'neu-inset text-blue-600 font-bold' : 'text-[#4b525d]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#d4cfc7]/60 flex flex-col gap-3">
            <NeumorphicBox
              variant={viewMode === 'macbook' ? 'inset' : 'raised-sm'}
              clickable
              onClick={() => {
                setViewMode(viewMode === 'macbook' ? 'fullscreen' : 'macbook');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 px-4 text-xs font-semibold text-[#4b525d] flex items-center justify-between"
            >
              <span>MacBook Desk Frame Mode</span>
              <Monitor className={`w-4 h-4 ${viewMode === 'macbook' ? 'text-blue-600' : ''}`} />
            </NeumorphicBox>

            <NeumorphicBox
              variant="glowing"
              clickable
              onClick={() => {
                onGetStartedClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-blue-600"
            >
              Get Started
            </NeumorphicBox>
          </div>
        </div>
      )}
    </header>
  );
};
