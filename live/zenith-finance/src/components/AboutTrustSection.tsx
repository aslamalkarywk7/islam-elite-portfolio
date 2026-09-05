import React from 'react';
import { NeumorphicBox } from './NeumorphicBox';
import { ShadowConfig } from '../types';
import { TRUST_METRICS } from '../data/mockData';
import { ShieldCheck, Award, Lock, Users, Sparkles, Building2, Quote } from 'lucide-react';

interface AboutTrustSectionProps {
  shadowConfig: ShadowConfig;
}

export const AboutTrustSection: React.FC<AboutTrustSectionProps> = ({ shadowConfig }) => {
  const testimonials = [
    {
      quote: "Zenith replaced three separate asset management tools and two spreadsheet models. The Soft UI interface is soothing yet incredibly powerful.",
      author: "Marcus Vance",
      title: "Managing Partner, Vance Family Office",
      portfolio: "$24M Tracked",
    },
    {
      quote: "The tactile response and depth of the dashboard makes wealth management feel sculptural. Automated tax-loss harvesting paid for the annual plan in week one.",
      author: "Elena Rostova",
      title: "Tech Founder & Private Investor",
      portfolio: "$8.5M Tracked",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <NeumorphicBox variant="convex" pill className="px-4 py-1.5 inline-flex items-center gap-2 mb-3">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-xs font-bold tracking-wider text-[#383d46] uppercase">
            INSTITUTIONAL TRUST & GOVERNANCE
          </span>
        </NeumorphicBox>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2c3038] tracking-tight mb-4">
          Architected for High-Net-Worth Security
        </h2>
        <p className="text-[#636a75] font-medium text-base sm:text-lg">
          Zero data monetization, hardware-isolated tokenization, and end-to-end encryption. Built for families, founders, and executives.
        </p>
      </div>

      {/* EMBOSSED METRICS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {TRUST_METRICS.map((metric, i) => (
          <NeumorphicBox
            key={i}
            variant="inset"
            className="p-6 rounded-2xl text-center flex flex-col justify-center items-center"
            shadowConfig={shadowConfig}
          >
            <div className="text-3xl sm:text-4xl font-black text-[#2c3038] neu-recessed-text mb-1">
              {metric.value}
            </div>
            <div className="text-xs font-bold text-[#636a75] uppercase tracking-wider">
              {metric.label}
            </div>
          </NeumorphicBox>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <NeumorphicBox
            key={idx}
            variant="raised-lg"
            className="p-8 rounded-3xl relative border border-white/50 flex flex-col justify-between"
            shadowConfig={shadowConfig}
          >
            <div>
              <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
              <p className="text-sm sm:text-base text-[#383d46] font-medium leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#d4cfc7]/60">
              <div>
                <div className="text-sm font-extrabold text-[#2c3038]">{t.author}</div>
                <div className="text-xs text-[#636a75] font-semibold">{t.title}</div>
              </div>

              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold neu-raised-sm">
                {t.portfolio}
              </span>
            </div>
          </NeumorphicBox>
        ))}
      </div>
    </section>
  );
};
