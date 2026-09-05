import React from 'react';
import { Flame, Zap, Award, Smile, Check, ArrowRight } from 'lucide-react';

export const MemphisAboutSection: React.FC = () => {
  const rules = [
    { title: '01 / Clash With Purpose', desc: 'Why settle for neutral beige when electric pink and neon yellow command the room?' },
    { title: '02 / Break The Rigid Grid', desc: 'Squiggles, floating triangles, and zigzags aren’t decorations — they are creative electricity.' },
    { title: '03 / Heavy Stroke Priority', desc: 'Every line is anchored in 3px-5px solid black outlines for maximum graphic impact.' },
    { title: '04 / Zero Boring Templates', desc: 'We treat every canvas like a 1980s Ettore Sottsass masterpiece brought into the 8K digital era.' }
  ];

  return (
    <section id="about" className="w-full bg-[#FFE600] py-20 px-4 sm:px-8 border-b-4 border-black relative select-none">
      
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-black text-white font-space font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_#FF007A] mb-4">
            <Flame className="w-4 h-4 text-yellow-300" />
            <span>Studio Manifesto</span>
          </div>
          <h2 className="font-lexend font-black text-4xl sm:text-6xl text-black uppercase tracking-tight mb-4">
            About <span className="bg-[#FF007A] text-white px-2 py-0.5 border-3 border-black shadow-[4px_4px_0px_0px_#000]">RetroWave</span>
          </h2>
          <p className="font-space font-bold text-lg sm:text-xl text-black bg-white p-4 border-3 border-black shadow-[4px_4px_0px_0px_#0047FF]">
            Founded by a collective of graphic artists, motion directors, and code sculptors obsessed with the radical aesthetic of the 1980s Memphis Group.
          </p>
        </div>

        {/* Manifesto Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#FF007A] hover:-translate-y-1 transition-all"
            >
              <span className="font-lexend font-black text-xl sm:text-2xl text-[#FF007A] block mb-2">
                {rule.title}
              </span>
              <p className="font-space font-extrabold text-base text-black leading-relaxed">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Statistics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 bg-black text-white p-6 sm:p-8 border-4 border-black shadow-[10px_10px_0px_0px_#FF007A]">
          <div className="text-center p-2 border-r border-slate-800">
            <span className="font-lexend font-black text-3xl sm:text-5xl text-[#FFE600] block">
              150+
            </span>
            <span className="font-space font-extrabold text-xs uppercase tracking-widest text-slate-300">
              Bold Campaigns
            </span>
          </div>

          <div className="text-center p-2 border-r border-slate-800">
            <span className="font-lexend font-black text-3xl sm:text-5xl text-[#FF007A] block">
              18
            </span>
            <span className="font-space font-extrabold text-xs uppercase tracking-widest text-slate-300">
              Design Awards
            </span>
          </div>

          <div className="text-center p-2 border-r border-slate-800">
            <span className="font-lexend font-black text-3xl sm:text-5xl text-[#39FF14] block">
              100%
            </span>
            <span className="font-space font-extrabold text-xs uppercase tracking-widest text-slate-300">
              Vector Precision
            </span>
          </div>

          <div className="text-center p-2">
            <span className="font-lexend font-black text-3xl sm:text-5xl text-[#00E5FF] block">
              0%
            </span>
            <span className="font-space font-extrabold text-xs uppercase tracking-widest text-slate-300">
              Corporate Beige
            </span>
          </div>
        </div>

      </div>

    </section>
  );
};
