import React from 'react';
import { Disc, ShoppingBag, Volume2, VolumeX, FileText, Search, CassetteTape, Radio } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenDocs: () => void;
  onTogglePlayer: () => void;
  isPlayerOpen: boolean;
  tapeNoiseEnabled: boolean;
  onToggleTapeNoise: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeSection: string;
  onNavClick: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenDocs,
  onTogglePlayer,
  isPlayerOpen,
  tapeNoiseEnabled,
  onToggleTapeNoise,
  searchQuery,
  onSearchChange,
  activeSection,
  onNavClick,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#E8D9C5] border-b-2 border-[#1A1A1A] shadow-retro">
      {/* Top Banner Stripe */}
      <div className="bg-[#1A1A1A] text-[#E8D9C5] py-1 px-4 text-xs font-mono-retro flex justify-between items-center overflow-x-auto">
        <div className="flex items-center space-x-4 whitespace-nowrap">
          <span className="flex items-center text-[#D4A017]">
            <Radio className="w-3.5 h-3.5 mr-1 animate-pulse" />
            100% HAND-RESTORED ANALOG EQUIPMENT & RARE MAGNETIC TAPES
          </span>
          <span className="hidden md:inline text-[#BF5B30]">• HAIGHT ST. SAN FRANCISCO, CA</span>
        </div>
        <div className="flex items-center space-x-3 text-xs">
          <button
            onClick={onToggleTapeNoise}
            className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold transition-colors flex items-center gap-1 border ${
              tapeNoiseEnabled ? 'bg-[#5F6F52] text-[#E8D9C5] border-[#E8D9C5]' : 'bg-[#2A2A2A] text-[#A09384] border-[#A09384]'
            }`}
            title="Toggle Tape Noise Hiss Emulation"
          >
            {tapeNoiseEnabled ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
            Tape Hiss: {tapeNoiseEnabled ? 'ON' : 'OFF'}
          </button>
          
          <button
            onClick={onOpenDocs}
            className="text-[#D4A017] hover:text-[#BF5B30] underline flex items-center gap-1 font-bold"
          >
            <FileText className="w-3 h-3" />
            [Project Docs]
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div 
          onClick={() => onNavClick('welcome')}
          className="cursor-pointer group flex items-center space-x-3"
        >
          <div className="w-10 h-10 bg-[#BF5B30] rounded-full flex items-center justify-center border-2 border-[#1A1A1A] shadow-retro group-hover:bg-[#D4A017] transition-colors relative">
            <CassetteTape className="w-5 h-5 text-[#E8D9C5] transform group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <h1 className="slab text-2xl sm:text-3xl text-[#1A1A1A] tracking-tighter leading-none uppercase">
              Analog Antiques
            </h1>
            <p className="font-sans-retro text-[10px] text-[#BF5B30] tracking-widest font-bold uppercase">
              Archive & Hi-Fi Audio Shop • Est. 1968
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-xs hidden md:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search tapes, cameras, decks..."
            className="w-full bg-[#D8C7B0] border-2 border-[#1A1A1A] px-3 py-1.5 pl-9 text-xs font-mono-retro placeholder-[#6D5E50] focus:outline-none focus:bg-[#FFF] shadow-[2px_2px_0px_0px_#1A1A1A]"
          />
          <Search className="w-4 h-4 text-[#1A1A1A] absolute left-2.5 top-2.5" />
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center space-x-2 font-sans-retro text-xs font-bold uppercase tracking-widest">
          {[
            { id: 'welcome', label: 'Welcome' },
            { id: 'collections', label: 'Collections' },
            { id: 'tapes', label: 'Tapes' },
            { id: 'shop', label: 'Shop' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`px-3 py-1.5 border-2 transition-all ${
                activeSection === item.id
                  ? 'bg-[#BF5B30] text-[#E8D9C5] border-[#1A1A1A] shadow-retro'
                  : 'border-transparent text-[#1A1A1A] hover:bg-[#D8C7B0] hover:border-[#1A1A1A]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Toggle Tape Deck Player */}
          <button
            onClick={onTogglePlayer}
            className={`px-3 py-1.5 border-2 border-[#1A1A1A] font-sans-retro text-xs font-bold flex items-center gap-2 transition-all ${
              isPlayerOpen
                ? 'bg-[#5F6F52] text-[#E8D9C5] shadow-retro-olive'
                : 'bg-[#D4A017] text-[#1A1A1A] hover:bg-[#BF5B30] hover:text-[#E8D9C5] shadow-retro'
            }`}
          >
            <Disc className={`w-4 h-4 ${isPlayerOpen ? 'animate-spin-reel' : ''}`} />
            <span className="hidden sm:inline uppercase">Tape Player</span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="px-3 py-1.5 bg-[#BF5B30] text-[#E8D9C5] border-2 border-[#1A1A1A] font-sans-retro text-xs font-bold flex items-center gap-2 shadow-retro hover:bg-[#1A1A1A] transition-colors relative uppercase"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 bg-[#D4A017] text-[#1A1A1A] border border-[#1A1A1A] rounded-full text-[10px] font-bold flex items-center justify-center -mr-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
