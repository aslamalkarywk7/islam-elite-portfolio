import React from 'react';
import { Award, Check, Sparkles, Target, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FDFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-[#EADDFF] text-[#6750A4] text-xs font-semibold uppercase tracking-wider border border-[#6750A4]/20">
              About Studio Chroma
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1C1E] tracking-tight leading-tight">
              Crafting Purposeful Interfaces with Material Design Precision.
            </h2>

            <p className="text-base text-[#44474E] leading-relaxed">
              Founded in 2021, Studio Chroma is an independent design laboratory focused on digital product craftsmanship. We bridge the gap between aesthetic beauty and rigorous Material Design 3 engineering.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Strict adherence to Google Material Design 3 guidelines',
                'Color contrast & WCAG AAA accessible by default',
                'Design system tokens built for production code handoff',
                'Collaborative sprints with weekly prototype builds'
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3 text-sm font-medium text-[#1A1C1E]">
                  <div className="w-5 h-5 rounded-full bg-[#D8E2FF] flex items-center justify-center text-[#001D33] shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#005CBB]" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bento-card p-6 space-y-2">
                <Target className="w-8 h-8 text-[#005CBB]" />
                <h3 className="text-3xl font-black text-[#1A1C1E]">98%</h3>
                <p className="text-xs text-[#757780] font-medium">On-Time Delivery Rate</p>
              </div>

              <div className="bento-card p-6 bg-[#D8E2FF] text-[#001D33] border-[#005CBB]/20 space-y-2">
                <Users className="w-8 h-8 text-[#005CBB]" />
                <h3 className="text-3xl font-black">60+</h3>
                <p className="text-xs font-medium opacity-90">Global Clients Partnered</p>
              </div>

              <div className="bento-card p-6 bg-[#EADDFF] text-[#6750A4] border-[#6750A4]/20 space-y-2">
                <Award className="w-8 h-8 text-[#6750A4]" />
                <h3 className="text-3xl font-black">18</h3>
                <p className="text-xs font-medium opacity-90">Industry Accolades</p>
              </div>

              <div className="bento-card p-6 space-y-2">
                <Sparkles className="w-8 h-8 text-[#005CBB]" />
                <h3 className="text-3xl font-black text-[#1A1C1E]">100%</h3>
                <p className="text-xs text-[#757780] font-medium">Native Code Handoff</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
