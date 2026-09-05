import React from 'react';

interface WoodPanelProps {
  side: 'left' | 'right';
}

export const WoodPanel: React.FC<WoodPanelProps> = ({ side }) => {
  return (
    <div
      className={`relative w-8 md:w-12 h-full flex flex-col justify-between py-6 px-1 select-none z-10 shadow-2xl overflow-hidden ${
        side === 'left' ? 'rounded-l-xl border-r border-gray-900' : 'rounded-r-xl border-l border-gray-900'
      }`}
      style={{
        backgroundImage: `url('/src/assets/images/mahogany_wood_texture_1785195462366.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow:
          side === 'left'
            ? 'inset -5px 0 15px rgba(0,0,0,0.8), -10px 0 25px rgba(0,0,0,0.6)'
            : 'inset 5px 0 15px rgba(0,0,0,0.8), 10px 0 25px rgba(0,0,0,0.6)',
      }}
    >
      {/* Top Metallic End Trim */}
      <div className="w-full h-3 bg-gradient-to-b from-gray-300 via-gray-600 to-gray-900 rounded-sm shadow-md border-t border-gray-200/40" />

      {/* Chrome Hex Corner Screws */}
      <div className="flex flex-col justify-between h-full py-8 items-center">
        {/* Top Screw */}
        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-gray-200 via-gray-500 to-gray-800 border border-gray-400 shadow-md flex items-center justify-center">
          <div className="w-2 h-[1.5px] bg-gray-900 transform rotate-45" />
        </div>

        {/* Middle Decorative Inlay Brass Stripe */}
        <div className="w-[2px] h-32 bg-gradient-to-b from-amber-600/20 via-amber-400/80 to-amber-600/20 shadow-sm" />

        {/* Bottom Screw */}
        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-gray-200 via-gray-500 to-gray-800 border border-gray-400 shadow-md flex items-center justify-center">
          <div className="w-2 h-[1.5px] bg-gray-900 transform -rotate-12" />
        </div>
      </div>

      {/* Bottom Metallic End Trim */}
      <div className="w-full h-3 bg-gradient-to-b from-gray-400 via-gray-700 to-gray-950 rounded-sm shadow-md border-b border-black" />

      {/* Glossy Varnish Sheen Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            side === 'left'
              ? 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.4) 100%)'
              : 'linear-gradient(225deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  );
};
