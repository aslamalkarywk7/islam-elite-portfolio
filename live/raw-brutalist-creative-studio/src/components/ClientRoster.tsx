import React from 'react';
import { CLIENT_REVIEWS } from '../data/portfolioData';
import { Star, ShieldCheck, Quote, Building2 } from 'lucide-react';

export const ClientRoster: React.FC = () => {
  return (
    <section id="clients" className="py-16 bg-black text-white border-b-[5px] border-black relative">
      <div className="max-w-[1800px] mx-auto px-4">
        
        {/* Header */}
        <div className="mb-12 border-b-4 border-white pb-6">
          <div className="bg-[#CCFF00] text-black font-mono font-black text-xs px-3 py-1 border-2 border-black inline-block uppercase mb-3">
            VERIFIED PARTNERS & CLIENTS
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tighter">
            CLIENT <span className="text-[#CCFF00]">ROSTER</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 font-bold mt-1">
            WHAT INDUSTRY LEADERS SAY ABOUT OUR UNCOMPROMISING FRONTEND EXECUTION
          </p>
        </div>

        {/* Client Logos / Monogram Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            'NEO-TOKYO CYBER',
            'KRAK ARCH',
            'SYNTH_LABS',
            'OFF-GRID SOUND',
            'KRAFT MOTOR',
            'UNCENSORED ENGINE'
          ].map((clientName, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border-4 border-white p-4 text-center shadow-[6px_6px_0px_#000] hover:border-[#CCFF00] hover:shadow-[6px_6px_0px_#CCFF00] transition-all"
            >
              <div className="font-display font-black text-lg text-white uppercase tracking-tight">
                {clientName}
              </div>
              <div className="font-mono text-[9px] font-bold text-[#CCFF00] uppercase mt-1">
                VERIFIED PARTNER
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-zinc-950 border-4 border-white p-6 shadow-[10px_10px_0px_#000] flex flex-col justify-between relative"
            >
              {/* Top Quote Icon */}
              <div className="flex justify-between items-center mb-4 border-b-2 border-zinc-800 pb-3">
                <span className="bg-[#CCFF00] text-black font-mono font-black text-[10px] px-2 py-0.5 border border-black uppercase flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{rev.tag}</span>
                </span>
                <span className="font-mono text-xs font-bold text-[#CCFF00]">
                  {rev.rating}
                </span>
              </div>

              {/* Quote Text */}
              <blockquote className="font-mono text-xs text-zinc-200 leading-relaxed font-bold mb-6 italic">
                "{rev.quote}"
              </blockquote>

              {/* Author Footer */}
              <div className="border-t-2 border-zinc-800 pt-3 mt-auto font-mono text-xs">
                <div className="font-black text-white uppercase text-sm">
                  {rev.clientName}
                </div>
                <div className="text-zinc-400 font-bold text-[11px] uppercase">
                  {rev.role} // {rev.company}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
