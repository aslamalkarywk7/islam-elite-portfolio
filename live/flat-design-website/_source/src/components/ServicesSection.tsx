import React, { useState } from 'react';
import { Layout, PenTool, Share2, Sparkles, Check, ArrowRight, Calculator } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenContactWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenContactWithService,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'calculator'>('all');

  // Interactive Estimator State
  const [selectedServices, setSelectedServices] = useState<string[]>(['web-design']);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'express'>('standard');
  const [addons, setAddons] = useState<string[]>(['seo']);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-8 h-8" />;
      case 'PenTool':
        return <PenTool className="w-8 h-8" />;
      case 'Share2':
        return <Share2 className="w-8 h-8" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-8 h-8" />;
    }
  };

  const getThemeClasses = (color: ServiceItem['color']) => {
    switch (color) {
      case 'sky':
        return {
          bg: 'bg-[#0984E3]',
          bgLight: 'bg-[#EBF5FB]',
          border: 'border-[#0984E3]',
          text: 'text-[#0984E3]',
          btn: 'bg-[#0984E3] hover:bg-[#0773C5]',
        };
      case 'orange':
        return {
          bg: 'bg-[#FF7675]',
          bgLight: 'bg-[#FDEDEC]',
          border: 'border-[#FF7675]',
          text: 'text-[#E17055]',
          btn: 'bg-[#FF7675] hover:bg-[#E17055]',
        };
      case 'green':
        return {
          bg: 'bg-[#2ECC71]',
          bgLight: 'bg-[#E8F8F5]',
          border: 'border-[#2ECC71]',
          text: 'text-[#10AC84]',
          btn: 'bg-[#2ECC71] hover:bg-[#10AC84]',
        };
      case 'charcoal':
      default:
        return {
          bg: 'bg-[#2D3436]',
          bgLight: 'bg-[#F8F9FA]',
          border: 'border-[#2D3436]',
          text: 'text-[#2D3436]',
          btn: 'bg-[#2D3436] hover:bg-black',
        };
    }
  };

  // Calculate total estimate for the interactive estimator
  const calculateTotal = () => {
    let sum = 0;
    selectedServices.forEach((id) => {
      const s = SERVICES_DATA.find((item) => item.id === id);
      if (s) sum += s.basePrice;
    });

    if (addons.includes('seo')) sum += 600;
    if (addons.includes('support')) sum += 800;
    if (addons.includes('source-files')) sum += 400;

    if (timelineSpeed === 'express') sum *= 1.25;

    return Math.round(sum);
  };

  const toggleEstimatorService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter((a) => a !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  return (
    <section id="services" className="w-full bg-[#F8F9FA] py-16 sm:py-20 border-b-2 border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#2D3436] px-3.5 py-1.5 rounded-md mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0984E3]"></span>
              <span className="text-xs font-black uppercase text-[#2D3436] tracking-wider">
                OUR CREATIVE SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2D3436] uppercase tracking-tight font-sans">
              WHAT WE DO BEST
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="mt-6 md:mt-0 flex items-center space-x-2 bg-white p-1.5 border-2 border-[#2D3436] rounded-xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg font-extrabold text-sm uppercase transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0984E3] text-white'
                  : 'text-[#2D3436] hover:bg-[#F8F9FA]'
              }`}
            >
              Services Overview
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-4 py-2 rounded-lg font-extrabold text-sm uppercase flex items-center space-x-2 transition-colors cursor-pointer ${
                activeTab === 'calculator'
                  ? 'bg-[#FF7675] text-white'
                  : 'text-[#2D3436] hover:bg-[#F8F9FA]'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Project Estimator</span>
            </button>
          </div>
        </div>

        {/* SERVICES OVERVIEW GRID */}
        {activeTab === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, index) => {
              const theme = getThemeClasses(service.color);
              return (
                <div
                  key={service.id}
                  className="bg-white border-3 border-[#2D3436] rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-[#0984E3] relative group"
                >
                  {/* Top Badge Number */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl ${theme.bg} text-white font-black`}>
                        {getIcon(service.iconName)}
                      </div>
                      <span className="text-2xl font-black text-[#2D3436] font-mono opacity-25">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-[#2D3436] uppercase mb-2 font-sans">
                      {service.title}
                    </h3>
                    <p className="text-xs font-extrabold text-[#0984E3] uppercase mb-4 tracking-wide">
                      {service.subtitle}
                    </p>

                    <p className="text-xs text-gray-700 font-semibold leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs font-bold text-[#2D3436]">
                          <Check className={`w-4 h-4 ${theme.text} flex-shrink-0 mt-0.5 stroke-[3]`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t-2 border-[#E9ECEF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase text-gray-500 block">STARTING AT</span>
                      <span className="text-lg font-black text-[#2D3436]">${service.basePrice}</span>
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className={`${theme.btn} text-white text-xs font-black px-4 py-2.5 rounded-lg uppercase tracking-wider flex items-center space-x-1 cursor-pointer transition-transform active:scale-95`}
                    >
                      <span>DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* INTERACTIVE PROJECT ESTIMATOR CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="bg-white border-3 border-[#2D3436] rounded-2xl p-6 sm:p-10">
            <div className="max-w-3xl mb-8">
              <span className="bg-[#FF7675] text-white font-extrabold text-xs px-3 py-1 rounded-md uppercase tracking-wider">
                REAL-TIME ESTIMATOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#2D3436] uppercase mt-2 font-sans">
                BUILD YOUR CUSTOM PROJECT SCOPE
              </h3>
              <p className="text-sm font-bold text-gray-600 mt-1">
                Select your required creative pillars and deliverables to calculate a flat estimate instantly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left 2 Cols: Options */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* 1. Core Services */}
                <div>
                  <label className="text-xs font-black uppercase text-[#2D3436] tracking-wider block mb-3">
                    1. SELECT CREATIVE SERVICES (MULTI-SELECT)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES_DATA.map((srv) => {
                      const isSelected = selectedServices.includes(srv.id);
                      return (
                        <div
                          key={srv.id}
                          onClick={() => toggleEstimatorService(srv.id)}
                          className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'border-[#0984E3] bg-[#EBF5FB]'
                              : 'border-[#E9ECEF] bg-white hover:border-gray-400'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-5 h-5 rounded flex items-center justify-center font-black text-xs ${
                              isSelected ? 'bg-[#0984E3] text-white' : 'border-2 border-gray-400 bg-white'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <div>
                              <div className="text-sm font-extrabold text-[#2D3436]">{srv.title}</div>
                              <div className="text-xs text-gray-500 font-semibold">${srv.basePrice} base</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Timeline Speed */}
                <div>
                  <label className="text-xs font-black uppercase text-[#2D3436] tracking-wider block mb-3">
                    2. PROJECT TIMELINE & PACING
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setTimelineSpeed('standard')}
                      className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                        timelineSpeed === 'standard'
                          ? 'border-[#2ECC71] bg-[#E8F8F5]'
                          : 'border-[#E9ECEF] bg-white'
                      }`}
                    >
                      <div className="text-sm font-black text-[#2D3436] uppercase">STANDARD PACING</div>
                      <div className="text-xs text-gray-600 font-semibold mt-0.5">3 - 5 Weeks (Standard rate)</div>
                    </button>

                    <button
                      onClick={() => setTimelineSpeed('express')}
                      className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                        timelineSpeed === 'express'
                          ? 'border-[#FF7675] bg-[#FDEDEC]'
                          : 'border-[#E9ECEF] bg-white'
                      }`}
                    >
                      <div className="text-sm font-black text-[#2D3436] uppercase">EXPRESS TURNAROUND</div>
                      <div className="text-xs text-gray-600 font-semibold mt-0.5">1 - 2 Weeks (+25% express)</div>
                    </button>
                  </div>
                </div>

                {/* 3. Add-ons */}
                <div>
                  <label className="text-xs font-black uppercase text-[#2D3436] tracking-wider block mb-3">
                    3. OPTIONAL ADD-ONS & GROWTH PACKS
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'seo', name: 'Technical SEO & Speed Optimization', price: 600 },
                      { id: 'support', name: '3 Months Post-Launch Support & Hosting', price: 800 },
                      { id: 'source-files', name: 'Complete Figma & Vector Source Asset Pack', price: 400 },
                    ].map((addon) => {
                      const isChecked = addons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                            isChecked
                              ? 'border-[#2D3436] bg-[#F8F9FA]'
                              : 'border-[#E9ECEF] bg-white'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded flex items-center justify-center ${
                              isChecked ? 'bg-[#2D3436] text-white' : 'border border-gray-400'
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className="text-xs font-extrabold text-[#2D3436]">{addon.name}</span>
                          </div>
                          <span className="text-xs font-black text-[#0984E3]">+${addon.price}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Col: Instant Calculation Summary */}
              <div className="bg-[#2D3436] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between border-2 border-black">
                <div>
                  <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF7675]">
                      ESTIMATE SUMMARY
                    </span>
                    <span className="bg-[#0984E3] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">
                      FLAT RATE
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-semibold text-gray-300">Selected Services:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedServices.map((sId) => {
                        const s = SERVICES_DATA.find((item) => item.id === sId);
                        return (
                          <span key={sId} className="bg-gray-800 text-white font-extrabold text-[11px] px-2.5 py-1 rounded">
                            {s?.title}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="text-xs text-gray-400 font-semibold mb-1">TOTAL ESTIMATED INVESTMENT</div>
                    <div className="text-4xl sm:text-5xl font-black text-[#2ECC71] font-sans">
                      ${calculateTotal()}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-1 font-semibold">
                      Includes flat project scope & full source code transfer.
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (onOpenContactWithService) {
                      onOpenContactWithService(`Estimated Project ($${calculateTotal()})`);
                    }
                  }}
                  className="w-full bg-[#0984E3] hover:bg-[#0773C5] text-white font-black py-4 px-6 rounded-xl uppercase tracking-wider text-sm flex items-center justify-center space-x-2 transition-transform active:scale-95 cursor-pointer mt-6"
                >
                  <span>BOOK THIS PROJECT SCOPE</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* SERVICE DETAIL MODAL */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-none">
            <div className="bg-white border-4 border-[#2D3436] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black font-black text-xl bg-gray-100 hover:bg-gray-200 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-[#0984E3] text-white text-xs font-black px-3 py-1 rounded-md uppercase">
                  {selectedService.category}
                </span>
                <span className="text-xs font-bold text-gray-500">
                  BASE: ${selectedService.basePrice}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#2D3436] uppercase font-sans mb-2">
                {selectedService.title}
              </h3>
              <p className="text-sm font-bold text-[#0984E3] mb-4">
                {selectedService.subtitle}
              </p>

              <p className="text-sm text-gray-700 leading-relaxed font-semibold mb-6">
                {selectedService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-t-2 border-[#E9ECEF] pt-6">
                <div>
                  <h4 className="text-xs font-black uppercase text-[#2D3436] tracking-wider mb-3">
                    KEY CAPABILITIES
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs font-bold text-gray-800">
                        <Check className="w-4 h-4 text-[#2ECC71] flex-shrink-0 mt-0.5 stroke-[3]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase text-[#2D3436] tracking-wider mb-3">
                    WHAT YOU RECEIVE
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs font-bold text-gray-800">
                        <span className="w-2 h-2 rounded-full bg-[#FF7675] mt-1.5 flex-shrink-0"></span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-4 border-t-2 border-[#E9ECEF]">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-lg border-2 border-gray-300 font-bold text-xs uppercase hover:bg-gray-100 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = selectedService.title;
                    setSelectedService(null);
                    if (onOpenContactWithService) {
                      onOpenContactWithService(name);
                    }
                  }}
                  className="bg-[#0984E3] hover:bg-[#0773C5] text-white font-extrabold text-xs px-6 py-2.5 rounded-lg uppercase tracking-wider cursor-pointer"
                >
                  LET'S WORK TOGETHER ON THIS
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
