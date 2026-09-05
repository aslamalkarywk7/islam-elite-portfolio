import React from 'react';
import { Palette, Smartphone, Compass, Layers, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Smartphone className="w-6 h-6 text-[#005CBB]" />,
      title: 'Digital Product & App Design',
      description: 'End-to-end iOS, Android, and Web application architecture built on Material Design 3 guidelines for intuitive user experiences.',
      deliverables: ['iOS & Android Apps', 'Design System tokens', 'Interactive prototypes', 'Accessibility audits']
    },
    {
      icon: <Palette className="w-6 h-6 text-[#6750A4]" />,
      title: 'Brand Identity Systems',
      description: 'Comprehensive brand identities, responsive logos, dynamic typography scales, and tactile print stationery.',
      deliverables: ['Visual identity manuals', 'Typography pairings', 'Color tokens', 'Marketing collateral']
    },
    {
      icon: <Compass className="w-6 h-6 text-[#001D33]" />,
      title: 'Spatial & Motion Interfaces',
      description: 'Futuristic spatial UI for VisionOS & AR environments, micro-animations, and fluid transition systems.',
      deliverables: ['Spatial canvas UI', '3D asset integration', 'Spring motion physics', 'Gesture definitions']
    },
    {
      icon: <Layers className="w-6 h-6 text-[#005CBB]" />,
      title: 'M3 Design System Engineering',
      description: 'Building multi-platform design systems that scale across design files, web codebases, and mobile apps seamlessly.',
      deliverables: ['Figma variant kits', 'React component libraries', 'Token pipelines', 'Documentation portals']
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#FDFBFF] border-y border-[#E1E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-[#D8E2FF] text-[#001D33] text-xs font-semibold uppercase tracking-wider border border-[#005CBB]/10">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1C1E] tracking-tight">
            How Studio Chroma Empowers Brands
          </h2>
          <p className="text-sm sm:text-base text-[#757780]">
            Combining human-centered ergonomics with Material Design 3 expressive principles to build lasting software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bento-card p-8 space-y-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#D8E2FF]/40 border border-[#E1E2EC] flex items-center justify-center">
                {service.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#1A1C1E]">{service.title}</h3>
                <p className="text-sm text-[#44474E] leading-relaxed">{service.description}</p>
              </div>

              <div className="pt-4 border-t border-[#E1E2EC] grid grid-cols-2 gap-2.5">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#44474E] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#005CBB] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
