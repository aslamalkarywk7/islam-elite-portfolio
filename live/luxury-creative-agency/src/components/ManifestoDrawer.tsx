import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { MANIFESTO_TEXT, PROJECTS, AGENCY_METRICS } from '../data';
import { X, Copy, Check, ArrowUpRight, Award, Compass, Send } from 'lucide-react';

interface ManifestoDrawerProps {
  isOpen: boolean;
  theme: ThemeMode;
  onClose: () => void;
}

export const ManifestoDrawer: React.FC<ManifestoDrawerProps> = ({
  isOpen,
  theme,
  onClose
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'manifesto' | 'projects' | 'contact'>('manifesto');
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  const emailAddress = 'atelier@maisonnoir.design';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex justify-end animate-in fade-in duration-300">
      <div
        className={`w-full max-w-2xl h-full flex flex-col justify-between border-l p-6 md:p-12 transition-colors duration-300 overflow-y-auto ${
          isDark
            ? 'bg-black text-white border-white/20'
            : 'bg-white text-black border-black/20'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-current/20">
            <div>
              <span className="font-mono-editorial text-[10px] tracking-[0.3em] opacity-60 uppercase">
                EST. MMXXIV / PARIS — TOKYO — NY
              </span>
              <h2 className="font-serif-editorial text-3xl uppercase tracking-tight font-bold mt-1">
                MAISON NOIR
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-current/30 hover:border-current transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-6 mt-8 border-b border-current/10 pb-4 font-mono-editorial text-xs tracking-widest uppercase">
            <button
              onClick={() => setActiveTab('manifesto')}
              className={`pb-1 transition-all ${
                activeTab === 'manifesto'
                  ? 'border-b-2 border-current font-bold opacity-100'
                  : 'opacity-50 hover:opacity-100'
              }`}
            >
              MANIFESTO
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`pb-1 transition-all ${
                activeTab === 'projects'
                  ? 'border-b-2 border-current font-bold opacity-100'
                  : 'opacity-50 hover:opacity-100'
              }`}
            >
              PROJECT ROSTER ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`pb-1 transition-all ${
                activeTab === 'contact'
                  ? 'border-b-2 border-current font-bold opacity-100'
                  : 'opacity-50 hover:opacity-100'
              }`}
            >
              ATELIER INQUIRIES
            </button>
          </div>

          {/* Manifesto Tab */}
          {activeTab === 'manifesto' && (
            <div className="mt-8 space-y-8">
              <div className="space-y-6 font-serif-editorial text-lg md:text-xl leading-relaxed font-light">
                {MANIFESTO_TEXT.trim()
                  .split('\n\n')
                  .map((paragraph, idx) => (
                    <p key={idx} className="tracking-wide">
                      {paragraph}
                    </p>
                  ))}
              </div>

              <div className="pt-8 border-t border-current/15 grid grid-cols-2 gap-6 font-mono-editorial text-xs uppercase">
                <div>
                  <span className="block opacity-50 text-[10px] tracking-widest mb-1">
                    LOCATIONS
                  </span>
                  <p className="font-bold tracking-wider">
                    PARIS / TOKYO / NEW YORK
                  </p>
                </div>
                <div>
                  <span className="block opacity-50 text-[10px] tracking-widest mb-1">
                    FOUNDING PRINCIPLE
                  </span>
                  <p className="font-bold tracking-wider">
                    RADICAL MONOCHROMATIC MINIMALISM
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Project Roster Tab */}
          {activeTab === 'projects' && (
            <div className="mt-8 space-y-6">
              {PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="p-5 border border-current/20 flex flex-col md:flex-row gap-6 items-start justify-between group transition-colors hover:border-current/60"
                >
                  <div className="w-full md:w-28 aspect-[3/4] border border-current/20 overflow-hidden shrink-0">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between font-mono-editorial text-[10px] tracking-widest opacity-60 uppercase">
                      <span>N° {proj.number}</span>
                      <span>{proj.year}</span>
                    </div>
                    <h3 className="font-serif-editorial text-xl font-bold uppercase tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="font-mono-editorial text-xs opacity-75 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="pt-2 font-mono-editorial text-[10px] tracking-widest opacity-50 uppercase">
                      CLIENT: {proj.client} • CATEGORY: {proj.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="mt-8 space-y-8 font-mono-editorial">
              <div className="p-6 border border-current/20 space-y-4">
                <span className="text-[10px] tracking-widest opacity-60 uppercase block">
                  PRIVATE COMMISSIONS & BRAND MANIFESTOS
                </span>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm md:text-base font-bold tracking-wider">
                    {emailAddress}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 border border-current/30 hover:bg-current hover:text-black transition-colors text-xs flex items-center gap-1.5 uppercase"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-500" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] tracking-widest opacity-60 uppercase block">
                  ATELIER REPRESENTATION
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 border border-current/15">
                    <span className="block opacity-50 text-[10px] mb-1">PARIS</span>
                    <span className="font-bold">75001 RUE DE LA PAIX</span>
                  </div>
                  <div className="p-4 border border-current/15">
                    <span className="block opacity-50 text-[10px] mb-1">TOKYO</span>
                    <span className="font-bold">GINZA 6-CHOME, CHUO</span>
                  </div>
                  <div className="p-4 border border-current/15">
                    <span className="block opacity-50 text-[10px] mb-1">NEW YORK</span>
                    <span className="font-bold">MADISON AVE, SOHO</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-8 mt-8 border-t border-current/20 flex items-center justify-between font-mono-editorial text-[10px] tracking-widest opacity-60 uppercase">
          <span>PARIS — TOKYO — NEW YORK</span>
          <span>© MMXXVI MAISON NOIR</span>
        </div>
      </div>
    </div>
  );
};
