import React from 'react';
import { Zap, ShieldAlert, Sparkles, Terminal } from 'lucide-react';

interface MarqueeTickerProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  reverse?: boolean;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  text = '★ UNAPOLOGETIC RAW NEO-BRUTALISM ★ ZERO GRADIENTS ALLOWED ★ 5PX HARD STROKES ARE LAW ★ TOKYO // BERLIN // NEW YORK // LONDON ★ HIGH IMPACT CREATIVE ENGINE',
  bgColor = 'bg-[#CCFF00]',
  textColor = 'text-black',
  reverse = false,
}) => {
  return (
    <div className={`w-full overflow-hidden border-y-[5px] border-black ${bgColor} ${textColor} py-2.5 select-none font-mono`}>
      <div className={`flex whitespace-nowrap font-black text-sm sm:text-base md:text-lg tracking-wider ${reverse ? 'flex-row-reverse animate-marquee' : 'animate-marquee'}`}>
        <span className="flex items-center space-x-6 mx-4">
          <Zap className="w-5 h-5 fill-current inline-block" />
          <span>{text}</span>
          <ShieldAlert className="w-5 h-5 inline-block" />
          <span>{text}</span>
          <Sparkles className="w-5 h-5 inline-block" />
          <span>{text}</span>
        </span>
        <span className="flex items-center space-x-6 mx-4">
          <Terminal className="w-5 h-5 inline-block" />
          <span>{text}</span>
          <Zap className="w-5 h-5 fill-current inline-block" />
          <span>{text}</span>
        </span>
      </div>
    </div>
  );
};
