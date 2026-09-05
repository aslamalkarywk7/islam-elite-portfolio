import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/bauhausData';
import { Square, Circle, Triangle, Layers, Plus, Minus, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  showGridLines: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ showGridLines }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string>('srv-01');

  return (
    <section id="services" className="bg-[#F6F5F0] py-16 md:py-24 border-b-2 border-[#121212] relative">
      {/* Structural Grid Background */}
      <div className={`absolute inset-0 ${showGridLines ? 'bg-bauhaus-grid' : ''} pointer-events-none opacity-20`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 items-end mb-12 pb-6 border-b-2 border-[#121212]">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-2 font-mono-code text-xs font-bold text-[#FF2A1F] uppercase mb-2">
              <span className="w-3 h-3 bg-[#FFE600]"></span>
              <span>AGENCY DISCIPLINES & SERVICE ARCHITECTURE</span>
            </div>
            <h2 className="font-heavy text-4xl sm:text-6xl text-[#121212] tracking-tighter uppercase leading-none">
              OUR DISCIPLINES
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right font-mono-code text-xs text-gray-700">
            <span>DISCIPLINE MATRIX 01 — 04</span>
            <span className="block text-[#0055FF] font-bold mt-1">SYSTEMIC BRANDING & CODE</span>
          </div>
        </div>

        {/* Accordion / Grid Matrix */}
        <div className="border-2 border-[#121212] bg-white divide-y-2 divide-[#121212] shadow-[10px_10px_0px_0px_#121212]">
          {SERVICES_DATA.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            return (
              <div
                key={service.id}
                className={`transition-colors duration-200 ${
                  isExpanded ? 'bg-[#F6F5F0]' : 'bg-white hover:bg-gray-50'
                }`}
              >
                {/* Accordion Header Row */}
                <button
                  onClick={() => setExpandedServiceId(isExpanded ? '' : service.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    {/* Number Badge with Primary Shape Accent */}
                    <div
                      className="w-12 h-12 flex items-center justify-center font-heavy text-white text-lg border-2 border-[#121212] flex-shrink-0 transition-transform group-hover:rotate-12"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      {service.number}
                    </div>

                    <div>
                      <h3 className="font-heavy text-xl sm:text-3xl text-[#121212] uppercase tracking-tight group-hover:text-[#0055FF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-mono-code text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                        {service.germanTitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Plus/Minus Button */}
                  <div className="w-10 h-10 border-2 border-[#121212] bg-[#FFE600] flex items-center justify-center text-[#121212] flex-shrink-0">
                    {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 grid grid-cols-1 md:grid-cols-12 gap-6 border-t-2 border-[#121212]/20 font-body animate-in fade-in">
                    <div className="md:col-span-6 space-y-3">
                      <p className="font-body text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                        {service.description}
                      </p>
                      <div className="font-mono-code text-xs text-[#0055FF] font-bold">
                        ESTIMATED SPRINT DURATION: 4 - 8 WEEKS // MODULAR ROADMAP
                      </div>
                    </div>

                    <div className="md:col-span-6 bg-white border-2 border-[#121212] p-5 font-mono-code text-xs">
                      <div className="font-bold text-[#FF2A1F] border-b border-[#121212] pb-2 uppercase mb-3 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        <span>DELIVERABLES ARCHITECTURE:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.deliverables.map((deliv) => (
                          <div key={deliv} className="flex items-center gap-2 text-gray-800">
                            <span className="w-2 h-2 bg-[#121212] flex-shrink-0"></span>
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
