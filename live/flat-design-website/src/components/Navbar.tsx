import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavSection } from '../types';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenContactModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; value: NavSection }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Blog', value: 'blog' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (section: NavSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b-2 border-[#E9ECEF] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO: Connective with geometric flat shapes */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 group text-left cursor-pointer"
        >
          {/* Geometric Icon Emblem */}
          <div className="flex items-center space-x-1 bg-[#2D3436] p-2 rounded-xl group-hover:bg-[#0984E3] transition-colors">
            <div className="w-3.5 h-3.5 rounded-full bg-[#0984E3] group-hover:bg-white"></div>
            <div className="w-3.5 h-3.5 rounded-sm bg-[#FF7675]"></div>
            <div className="w-3.5 h-3.5 rounded-none transform rotate-45 bg-[#2ECC71]"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight text-[#2D3436] font-sans">
              CONNECTIVE
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#0984E3]">
              DIGITAL AGENCY
            </span>
          </div>
        </button>

        {/* DESKTOP NAVIGATION LINKS */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.value;
            return (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-base font-bold transition-all cursor-pointer relative py-2 ${
                  isActive
                    ? 'text-[#0984E3]'
                    : 'text-[#2D3436] hover:text-[#0984E3]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#0984E3] rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* PROMINENT SOLID BLUE CTA BUTTON WITH ROUNDED CORNERS */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onOpenContactModal}
            className="bg-[#0984E3] hover:bg-[#0773C5] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl uppercase tracking-wider flex items-center space-x-2 transition-transform active:scale-95 cursor-pointer"
          >
            <span>LET'S WORK TOGETHER</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2D3436] hover:text-[#0984E3] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-[#2D3436] px-4 pt-3 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`block w-full text-left py-2.5 px-4 rounded-lg font-extrabold text-lg ${
                activeSection === item.value
                  ? 'bg-[#0984E3] text-white'
                  : 'text-[#2D3436] hover:bg-[#F8F9FA]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full bg-[#0984E3] hover:bg-[#0773C5] text-white font-black py-3.5 px-4 rounded-xl text-center uppercase tracking-wider block"
            >
              LET'S WORK TOGETHER
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
