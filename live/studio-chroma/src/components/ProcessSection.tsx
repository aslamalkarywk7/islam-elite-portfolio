import React from 'react';
import { Search, Compass, Layers, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <Search className="w-5 h-5 text-[#005CBB]" />,
      title: 'Discovery & Audit',
      description: 'Understanding brand objectives, target audience ergonomics, and defining initial Material Design 3 token goals.'
    },
    {
      number: '02',
      icon: <Compass className="w-5 h-5 text-[#6750A4]" />,
      title: 'Architecture & Wireframes',
      description: 'Mapping low-cognitive user flows, responsive screen layouts, and structural wireframes.'
    },
    {
      number: '03',
      icon: <Layers className="w-5 h-5 text-[#001D33]" />,
      title: 'Design System & Craft',
      description: 'Crafting high-fidelity Material 3 components, color palettes, elevation layers, and micro-animations.'
    },
    {
      number: '04',
      icon: <Rocket className="w-5 h-5 text-[#005CBB]" />,
      title: 'Production Handoff',
      description: 'Delivering production-ready React component specs, design token files, and interactive developer documentation.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#FDFBFF] border-t border-[#E1E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-[#D8E2FF] text-[#001D33] text-xs font-semibold uppercase tracking-wider border border-[#005CBB]/10">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1C1E] tracking-tight">
            Our Material Design Process
          </h2>
          <p className="text-sm text-[#757780]">
            From concept definition to pixel-perfect code delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bento-card p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-[#D8E2FF]/40 border border-[#E1E2EC] flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E1E2EC] text-[#44474E]">
                  Phase {step.number}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-[#1A1C1E]">{step.title}</h3>
                <p className="text-xs text-[#757780] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
