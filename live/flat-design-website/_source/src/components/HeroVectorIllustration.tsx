import React from 'react';

export const HeroVectorIllustration: React.FC = () => {
  return (
    <div className="w-full relative flex items-center justify-center p-2 sm:p-4">
      {/* Container with flat background card */}
      <div className="w-full max-w-5xl bg-[#F8F9FA] border-4 border-[#2D3436] rounded-2xl p-4 sm:p-8 relative overflow-hidden">
        
        {/* Background decorative solid geometry */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-[#0984E3] rounded-full opacity-15"></div>
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-[#FF7675] rounded-xl transform rotate-12 opacity-15"></div>
        <div className="absolute top-8 right-12 w-8 h-8 bg-[#2ECC71] transform rotate-45 opacity-20"></div>

        {/* Top Banner Header Label */}
        <div className="flex items-center justify-between border-b-2 border-[#2D3436] pb-3 mb-6">
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FF7675]"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#2ECC71]"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#0984E3]"></span>
            <span className="ml-2 text-xs font-extrabold tracking-wider text-[#2D3436] uppercase font-mono">
              CONNECTIVE_CREATIVE_SERVICES_SUITE.SVG
            </span>
          </div>
          <span className="bg-[#2D3436] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md tracking-widest uppercase">
            FLAT VECTOR v2.6
          </span>
        </div>

        {/* 3 Main Flat Service Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          {/* 1. WEB DESIGN PILLAR (SKY BLUE) */}
          <div className="bg-white border-3 border-[#2D3436] rounded-xl p-5 flex flex-col justify-between group hover:border-[#0984E3] transition-colors">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#0984E3] text-white font-extrabold text-xs px-2.5 py-1 rounded-md uppercase tracking-wider">
                  01. WEB DESIGN
                </span>
                <span className="text-[#0984E3] font-bold text-xs">HTML / CSS / REACT</span>
              </div>

              {/* Flat Browser Graphic */}
              <div className="bg-[#EBF5FB] border-2 border-[#2D3436] rounded-lg p-3 mb-4">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b-2 border-[#2D3436] pb-2 mb-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0984E3]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF7675]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]"></div>
                  </div>
                  <div className="bg-white border border-[#2D3436] rounded px-2 py-0.5 text-[9px] font-mono text-gray-600">
                    https://connective.agency
                  </div>
                </div>

                {/* Flat Layout Mockup Blocks */}
                <div className="space-y-2">
                  <div className="w-full h-8 bg-[#0984E3] rounded flex items-center px-2 justify-between">
                    <div className="w-12 h-2 bg-white rounded"></div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-2 bg-white rounded"></div>
                      <div className="w-3 h-2 bg-white rounded"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 bg-white border border-[#2D3436] rounded p-1 flex flex-col justify-between">
                      <div className="w-8 h-1.5 bg-[#0984E3] rounded"></div>
                      <div className="w-12 h-1 bg-gray-300 rounded"></div>
                    </div>
                    <div className="h-10 bg-[#FF7675] rounded p-1 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center font-black text-[10px] text-[#2D3436]">
                        &lt;/&gt;
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#2D3436] font-semibold leading-relaxed">
                Responsive layouts, clean code structures, and frictionless UI components.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-[11px] font-bold text-[#0984E3]">
              <span>PIXEL PERFECT</span>
              <span className="bg-[#EBF5FB] px-2 py-0.5 rounded text-[#0984E3] border border-[#0984E3]">
                100 FPS
              </span>
            </div>
          </div>

          {/* 2. CONTENT CREATION PILLAR (BRIGHT ORANGE) */}
          <div className="bg-white border-3 border-[#2D3436] rounded-xl p-5 flex flex-col justify-between group hover:border-[#FF7675] transition-colors">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#FF7675] text-white font-extrabold text-xs px-2.5 py-1 rounded-md uppercase tracking-wider">
                  02. CONTENT CREATION
                </span>
                <span className="text-[#E17055] font-bold text-xs">COPY & VECTOR</span>
              </div>

              {/* Flat Content & Drawing Graphic */}
              <div className="bg-[#FDEDEC] border-2 border-[#2D3436] rounded-lg p-3 mb-4">
                <div className="bg-white border-2 border-[#2D3436] rounded p-2.5 relative">
                  {/* Pen / Vector graphic element */}
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-7 h-7 bg-[#FF7675] rounded flex items-center justify-center text-white font-black text-xs border border-[#2D3436]">
                      ✎
                    </div>
                    <div>
                      <div className="w-20 h-2 bg-[#2D3436] rounded mb-1"></div>
                      <div className="w-14 h-1.5 bg-[#FF7675] rounded"></div>
                    </div>
                  </div>

                  {/* Solid Palette Swatches */}
                  <div className="flex space-x-1.5 mt-2 pt-2 border-t border-gray-200">
                    <div className="w-5 h-5 bg-[#0984E3] rounded border border-[#2D3436]"></div>
                    <div className="w-5 h-5 bg-[#FF7675] rounded border border-[#2D3436]"></div>
                    <div className="w-5 h-5 bg-[#2ECC71] rounded border border-[#2D3436]"></div>
                    <div className="w-5 h-5 bg-[#2D3436] rounded border border-[#2D3436]"></div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#2D3436] font-semibold leading-relaxed">
                High-impact copywriting, custom vector illustration, and brand messaging.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-[11px] font-bold text-[#E17055]">
              <span>BESPOKE ARTWORK</span>
              <span className="bg-[#FDEDEC] px-2 py-0.5 rounded text-[#E17055] border border-[#FF7675]">
                SVG READY
              </span>
            </div>
          </div>

          {/* 3. SOCIAL MEDIA PILLAR (LIME GREEN) */}
          <div className="bg-white border-3 border-[#2D3436] rounded-xl p-5 flex flex-col justify-between group hover:border-[#2ECC71] transition-colors">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#2ECC71] text-white font-extrabold text-xs px-2.5 py-1 rounded-md uppercase tracking-wider">
                  03. SOCIAL MEDIA
                </span>
                <span className="text-[#10AC84] font-bold text-xs">GROWTH & ADS</span>
              </div>

              {/* Flat Social Media Graphic */}
              <div className="bg-[#E8F8F5] border-2 border-[#2D3436] rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between space-x-2 mb-2">
                  {/* Chat bubble */}
                  <div className="bg-[#2ECC71] text-white rounded-lg p-2 text-[11px] font-extrabold border border-[#2D3436] flex-1 flex items-center space-x-1">
                    <span>💬</span>
                    <span>ENGAGE!</span>
                  </div>
                  {/* Heart badge */}
                  <div className="bg-[#FF7675] text-white rounded-lg p-2 font-black text-xs border border-[#2D3436]">
                    ♥ 2.8k
                  </div>
                </div>

                {/* Growth Chart block */}
                <div className="bg-white border-2 border-[#2D3436] rounded p-2 flex items-end justify-between h-10 px-3">
                  <div className="w-3 bg-[#2ECC71] h-3 rounded-t"></div>
                  <div className="w-3 bg-[#2ECC71] h-5 rounded-t"></div>
                  <div className="w-3 bg-[#2ECC71] h-7 rounded-t"></div>
                  <div className="w-3 bg-[#0984E3] h-9 rounded-t"></div>
                </div>
              </div>

              <p className="text-xs text-[#2D3436] font-semibold leading-relaxed">
                Strategic platform growth, multi-channel templates, and audience analytics.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-[11px] font-bold text-[#10AC84]">
              <span>HIGH ENGAGEMENT</span>
              <span className="bg-[#E8F8F5] px-2 py-0.5 rounded text-[#10AC84] border border-[#2ECC71]">
                +300% AUDIENCE
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Banner Connection Bar */}
        <div className="mt-6 pt-4 border-t-2 border-[#2D3436] flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-[#2D3436]">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-[#0984E3] inline-block rounded-sm"></span>
            <span>WEB DESIGN</span>
            <span className="text-gray-400">+</span>
            <span className="w-3 h-3 bg-[#FF7675] inline-block rounded-sm"></span>
            <span>CONTENT CREATION</span>
            <span className="text-gray-400">+</span>
            <span className="w-3 h-3 bg-[#2ECC71] inline-block rounded-sm"></span>
            <span>SOCIAL MEDIA</span>
          </div>

          <div className="bg-[#2D3436] text-white px-3 py-1 rounded font-extrabold text-[11px] uppercase tracking-wider">
            = CONNECTIVE DIGITAL POWER
          </div>
        </div>

      </div>
    </div>
  );
};
