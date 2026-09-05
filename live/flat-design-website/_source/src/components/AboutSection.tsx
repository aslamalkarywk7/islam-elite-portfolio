import React from 'react';
import { AGENCY_STATS, TEAM_MEMBERS } from '../data/agencyData';
import { Layers, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white py-16 sm:py-20 border-b-2 border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#F8F9FA] border-2 border-[#2D3436] px-3.5 py-1.5 rounded-md mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0984E3]"></span>
            <span className="text-xs font-black uppercase text-[#2D3436] tracking-wider">
              OUR AGENCY MANIFESTO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#2D3436] uppercase tracking-tight font-sans">
            THE POWER OF FLAT DESIGN
          </h2>
          <p className="text-base font-bold text-gray-700 mt-3 leading-relaxed">
            At Connective, we believe pure visual clarity wins attention. We reject artificial drop shadows, complex gradients, and visual noise in favor of strong geometric hierarchy, solid color blocks, and lightning-fast web code.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#EBF5FB] border-3 border-[#0984E3] p-6 rounded-2xl">
            <div className="w-12 h-12 bg-[#0984E3] text-white rounded-xl flex items-center justify-center font-black mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#2D3436] uppercase mb-1">SOLID COLOR BLOCKS</h3>
            <p className="text-xs text-gray-700 font-semibold leading-relaxed">
              Vibrant sky blue, bright orange, and lime green palettes that anchor visual priority instantly.
            </p>
          </div>

          <div className="bg-[#FDEDEC] border-3 border-[#FF7675] p-6 rounded-2xl">
            <div className="w-12 h-12 bg-[#FF7675] text-white rounded-xl flex items-center justify-center font-black mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#2D3436] uppercase mb-1">ZERO NOISE / SHADOWS</h3>
            <p className="text-xs text-gray-700 font-semibold leading-relaxed">
              Crisp 2D vector layouts without skeuomorphic blurs, gradients, or unnecessary background textures.
            </p>
          </div>

          <div className="bg-[#E8F8F5] border-3 border-[#2ECC71] p-6 rounded-2xl">
            <div className="w-12 h-12 bg-[#2ECC71] text-white rounded-xl flex items-center justify-center font-black mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#2D3436] uppercase mb-1">HEAVY MONTSERRAT</h3>
            <p className="text-xs text-gray-700 font-semibold leading-relaxed">
              Bold sans-serif typography engineered for effortless readability across all display resolutions.
            </p>
          </div>

          <div className="bg-[#F8F9FA] border-3 border-[#2D3436] p-6 rounded-2xl">
            <div className="w-12 h-12 bg-[#2D3436] text-white rounded-xl flex items-center justify-center font-black mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#2D3436] uppercase mb-1">HIGH PERFORMANCE</h3>
            <p className="text-xs text-gray-700 font-semibold leading-relaxed">
              Clean HTML structures and lightweight SVG vector assets engineered for sub-second page rendering.
            </p>
          </div>
        </div>

        {/* Agency Statistics Banner */}
        <div className="bg-[#2D3436] text-white rounded-2xl p-8 border-3 border-black mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {AGENCY_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 border-r last:border-r-0 border-gray-700">
                <div className="text-4xl sm:text-5xl font-black text-[#0984E3] font-sans">
                  {stat.value}
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-gray-300 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-black text-[#2D3436] uppercase font-sans mb-8">
            THE CREATIVE MINDS BEHIND CONNECTIVE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="bg-[#F8F9FA] border-3 border-[#2D3436] p-6 rounded-2xl">
                <div className="w-14 h-14 bg-[#0984E3] text-white rounded-2xl flex items-center justify-center text-2xl font-black mb-4">
                  {member.name[0]}
                </div>
                <h4 className="text-lg font-black text-[#2D3436] uppercase">{member.name}</h4>
                <p className="text-xs font-extrabold text-[#0984E3] uppercase mb-2">{member.role}</p>
                <p className="text-xs text-gray-700 font-semibold leading-relaxed mb-4">{member.bio}</p>
                <span className="bg-white border border-[#2D3436] text-[#2D3436] text-[10px] font-black px-2.5 py-1 rounded uppercase">
                  {member.specialty}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
