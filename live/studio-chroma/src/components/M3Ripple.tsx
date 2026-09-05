import React, { useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface M3RippleProps {
  color?: string;
}

export const M3Ripple: React.FC<M3RippleProps> = ({ color = 'rgba(26, 86, 219, 0.16)' }) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-auto rounded-[inherit]"
      onClick={addRipple}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none rounded-full animate-m3-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};
