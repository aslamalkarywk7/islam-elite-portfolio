import React from 'react';
import { CassetteTape, Radio, FileText, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onOpenDocs: () => void;
  onNavClick: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDocs, onNavClick }) => {
  return (
    <footer className="bg-[#1A1A1A] text-[#E8D9C5] border-t-2 border-[#1A1A1A] pt-12 pb-8 px-4 sm:px-6 film-grain">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b-2 border-[#2A2A2A]">
        
        {/* Brand Column (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#BF5B30] border-2 border-[#E8D9C5] rounded-full flex items-center justify-center">
              <CassetteTape className="w-5 h-5 text-[#E8D9C5]" />
            </div>
            <div>
              <h3 className="slab text-2xl text-[#E8D9C5] uppercase leading-none">
                ANALOG ANTIQUES
              </h3>
              <p className="font-sans-retro text-xs text-[#D4A017] uppercase tracking-wider font-bold">
                Haight-Ashbury Archive & Shop
              </p>
            </div>
          </div>

          <p className="font-mono-retro text-xs text-[#D8C7B0] leading-relaxed max-w-md">
            Dedicated to the preservation, calibration, and enjoyment of magnetic cassette audio tapes, 1970s hi-fi stereo equipment, and analog photography gear.
          </p>

          <div className="flex items-center space-x-2 text-xs font-sans-retro text-[#D4A017] font-bold">
            <Radio className="w-4 h-4" />
            <span>1968 HAIGHT ST, SAN FRANCISCO, CA 94117</span>
          </div>
        </div>

        {/* Quick Links (3 cols) */}
        <div className="md:col-span-3 space-y-3 font-sans-retro text-xs">
          <h4 className="font-bold text-[#BF5B30] uppercase border-b border-[#2A2A2A] pb-1 tracking-widest">
            NAVIGATE THE VAULT
          </h4>
          <ul className="space-y-1.5 text-[#D8C7B0]">
            <li>
              <button onClick={() => onNavClick('welcome')} className="hover:text-[#D4A017] cursor-pointer">
                • Welcome & Hero
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('tape-player-section')} className="hover:text-[#D4A017] cursor-pointer">
                • Cassette Deck Player
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('collections')} className="hover:text-[#D4A017] cursor-pointer">
                • Vault Product Catalog
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('contact')} className="hover:text-[#D4A017] cursor-pointer">
                • Physical Workshop & Club
              </button>
            </li>
          </ul>
        </div>

        {/* Manuals & Specs (4 cols) */}
        <div className="md:col-span-4 space-y-3 font-sans-retro text-xs">
          <h4 className="font-bold text-[#5F6F52] uppercase border-b border-[#2A2A2A] pb-1 tracking-widest">
            TECHNICAL DOCUMENTATION
          </h4>
          <p className="text-[#D8C7B0] text-xs leading-relaxed font-mono-retro">
            Read complete installation guides, troubleshooting steps, build scripts, and MIT open source license files.
          </p>

          <button
            onClick={onOpenDocs}
            className="retro-btn bg-[#BF5B30] text-[#E8D9C5] px-4 py-2 border-2 border-[#E8D9C5] font-bold hover:bg-[#D4A017] hover:text-[#1A1A1A] transition-colors flex items-center gap-2 uppercase cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            OPEN PROJECT DOCS (README / MIT)
          </button>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-xs font-mono-retro text-[#A09384] gap-2">
        <p>&copy; 1968-2026 ANALOG ANTIQUES ARCHIVE & CO. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-[#5F6F52]" />
          <span>PRESERVED WITH TRUE ANALOG CARE</span>
        </div>
      </div>
    </footer>
  );
};
