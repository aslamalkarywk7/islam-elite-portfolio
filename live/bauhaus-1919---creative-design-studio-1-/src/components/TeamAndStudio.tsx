import React from 'react';
import { TEAM_MASTERS, CLIENT_LOGOS } from '../data/bauhausData';
import { MapPin, Building, Users } from 'lucide-react';

interface TeamAndStudioProps {
  showGridLines: boolean;
}

export const TeamAndStudio: React.FC<TeamAndStudioProps> = ({ showGridLines }) => {
  return (
    <section className="bg-[#F6F5F0] py-16 md:py-24 border-b-2 border-[#121212] relative">
      {/* Grid background */}
      <div className={`absolute inset-0 ${showGridLines ? 'bg-bauhaus-grid' : ''} pointer-events-none opacity-20`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 items-end mb-12 pb-6 border-b-2 border-[#121212]">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-[#FF2A1F] uppercase mb-2">
              <Users className="w-4 h-4 text-[#FF2A1F]" />
              <span>MASTERS OF FORM & DIGITAL CRAFT // TEAM & LOCATIONS</span>
            </div>
            <h2 className="font-heavy text-4xl sm:text-6xl text-[#121212] tracking-tighter uppercase leading-none">
              THE MASTERS
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right font-mono-code text-xs text-gray-700">
            <span>DIRECTORATE & FACULTY</span>
            <span className="block text-[#0055FF] font-bold mt-1">DESSAU // WEIMAR // BERLIN</span>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TEAM_MASTERS.map((member, idx) => (
            <div
              key={member.name}
              className="border-2 border-[#121212] bg-white p-5 shadow-[6px_6px_0px_0px_#121212] relative flex flex-col justify-between group hover:-translate-y-1 transition-all"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-[3/4] bg-black overflow-hidden border-2 border-[#121212] mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute top-3 left-3 w-12 h-12 rounded-full mix-blend-multiply opacity-80"
                    style={{ backgroundColor: member.color }}
                  />
                  <div className="absolute bottom-2 right-2 bg-[#121212] text-white font-mono-code text-[10px] px-2 py-0.5 font-bold">
                    MASTER 0{idx + 1}
                  </div>
                </div>

                <h3 className="font-heavy text-xl text-[#121212] uppercase tracking-tight">
                  {member.name}
                </h3>
                <p className="font-mono-code text-xs font-bold text-[#FF2A1F] uppercase mb-2">
                  {member.role}
                </p>
                <p className="font-body text-xs text-gray-700 leading-relaxed">
                  {member.discipline}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#121212]/20 flex items-center justify-between font-mono-code text-[11px] text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#0055FF]" />
                  <span>{member.location}</span>
                </span>
                <span className="font-bold text-[#121212]">RESIDENT</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client & Partner Ticker Grid */}
        <div className="border-2 border-[#121212] bg-[#121212] text-white p-6 sm:p-8">
          <div className="font-mono-code text-xs text-[#FFE600] font-bold uppercase mb-4 tracking-widest border-b border-white/20 pb-2">
            // SELECTED INSTITUTIONAL COLLABORATORS:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-heavy text-center text-xs tracking-wider">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo}
                className="p-3 border border-white/20 bg-black hover:border-[#FF2A1F] hover:text-[#FFE600] transition-colors flex items-center justify-center uppercase"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
