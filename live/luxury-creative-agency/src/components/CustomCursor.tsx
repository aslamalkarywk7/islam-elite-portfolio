import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  enabled: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ enabled }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const updateMouse = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 blend-difference transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }}
    >
      {/* Precision Crosshair */}
      <div
        className={`relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'scale-150' : 'scale-100'
        }`}
      >
        <div className="w-6 h-6 border border-white/60 rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
        <div className="absolute w-[1px] h-8 bg-white/30 -top-1" />
        <div className="absolute h-[1px] w-8 bg-white/30 -left-1" />

        {/* Readout coordinates badge */}
        <div className="absolute top-5 left-5 text-[9px] font-mono tracking-widest text-white/70 whitespace-nowrap bg-black/80 px-1.5 py-0.5 border border-white/10 uppercase">
          {pos.x.toString().padStart(4, '0')} : {pos.y.toString().padStart(4, '0')}
        </div>
      </div>
    </div>
  );
};
