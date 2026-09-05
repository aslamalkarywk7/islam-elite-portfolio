import React, { useEffect, useRef, useState } from 'react';
import { GlassConfig } from '../types';

interface BackgroundCanvasProps {
  config: GlassConfig;
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ config }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (clientX / innerWidth - 0.5) * 40,
        y: (clientY / innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Theme color gradients
  const getThemeGradients = () => {
    switch (config.themeColor) {
      case 'magenta':
        return {
          primary: 'from-fuchsia-600/40 via-purple-600/30 to-pink-600/40',
          secondary: 'from-rose-500/30 to-purple-800/40',
          accent: 'from-amber-500/20 via-pink-500/30 to-indigo-600/30',
        };
      case 'emerald':
        return {
          primary: 'from-emerald-600/40 via-teal-600/30 to-cyan-600/40',
          secondary: 'from-blue-600/30 to-emerald-800/40',
          accent: 'from-teal-400/20 via-sky-500/30 to-indigo-600/30',
        };
      case 'cyberpunk':
        return {
          primary: 'from-amber-500/40 via-rose-600/30 to-indigo-700/40',
          secondary: 'from-cyan-500/30 to-purple-800/40',
          accent: 'from-yellow-400/20 via-fuchsia-600/30 to-blue-600/30',
        };
      case 'electric':
      default:
        return {
          primary: 'from-blue-600/40 via-indigo-600/35 to-purple-700/40',
          secondary: 'from-cyan-500/30 to-fuchsia-700/35',
          accent: 'from-purple-500/25 via-pink-600/30 to-blue-700/35',
        };
    }
  };

  const gradients = getThemeGradients();

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 bg-slate-950 ${
        config.noiseOverlay ? 'bg-noise' : ''
      }`}
    >
      {/* Deep Space Base Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 opacity-95" />

      {/* Dynamic Animated Liquid Light Orbs */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full blur-[120px] mix-blend-screen opacity-70 animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, rgba(168, 85, 247, 0.2) 60%, transparent 100%)`,
          transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />

      <div
        className="absolute top-[30%] -right-[15%] w-[60vw] h-[60vw] rounded-full blur-[140px] mix-blend-screen opacity-60 animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, rgba(236, 72, 153, 0.45) 0%, rgba(139, 92, 246, 0.25) 50%, transparent 100%)`,
          animationDelay: '-4s',
          transform: `translate(${-mousePos.x * 0.8}px, ${-mousePos.y * 0.8}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />

      <div
        className="absolute -bottom-[20%] left-[15%] w-[50vw] h-[50vw] rounded-full blur-[130px] mix-blend-screen opacity-65 animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(99, 102, 241, 0.3) 60%, transparent 100%)`,
          animationDelay: '-2s',
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />

      {/* Interactive Cursor Glow Spot */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[90px] mix-blend-screen opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.6) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 80%)',
          left: `calc(50% + ${mousePos.x * 12}px - 200px)`,
          top: `calc(50% + ${mousePos.y * 12}px - 200px)`,
          transition: 'left 0.2s ease-out, top 0.2s ease-out',
        }}
      />

      {/* Floating 3D Geometric Objects (Subtle vector / CSS shapes behind & between glass layers) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating Glass Cube 1 (Hero Left Top) */}
        <div
          className="absolute top-[18%] left-[8%] w-32 h-32 md:w-48 md:h-48 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-2xl animate-float-slow"
          style={{
            transform: `rotateX(45deg) rotateY(25deg) rotateZ(15deg) translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            boxShadow: '0 20px 50px rgba(124, 58, 237, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.5)',
          }}
        >
          <div className="absolute inset-2 rounded-2xl border border-white/10 bg-purple-500/10 backdrop-blur-sm" />
        </div>

        {/* Floating Glowing Prism Ring 2 (Hero Right Center) */}
        <div
          className="absolute top-[28%] right-[10%] w-40 h-40 md:w-64 md:h-64 rounded-full border-2 border-fuchsia-400/30 bg-gradient-to-tr from-fuchsia-500/10 via-indigo-500/10 to-transparent backdrop-blur-lg shadow-2xl animate-float-reverse"
          style={{
            transform: `rotateX(60deg) rotateY(-20deg) translate(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px)`,
            boxShadow: '0 0 60px rgba(236, 72, 153, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.3)',
          }}
        >
          <div className="absolute inset-6 rounded-full border border-cyan-400/30 bg-cyan-500/5 animate-spin" style={{ animationDuration: '25s' }} />
        </div>

        {/* Floating Octahedron Crystal (Center Mid-ground) */}
        <div
          className="absolute top-[55%] left-[22%] w-24 h-24 md:w-36 md:h-36 rounded-2xl border border-sky-300/30 bg-gradient-to-b from-sky-400/15 via-purple-500/10 to-transparent backdrop-blur-md animate-float-slow"
          style={{
            transform: `rotateX(30deg) rotateZ(45deg) translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
            animationDelay: '-3s',
          }}
        />

        {/* Floating Torus Glass Loop (Bottom Right) */}
        <div
          className="absolute bottom-[15%] right-[18%] w-48 h-48 md:w-72 md:h-72 rounded-full border border-purple-300/20 bg-gradient-to-bl from-purple-500/10 via-pink-500/5 to-transparent backdrop-blur-xl animate-float-reverse"
          style={{
            transform: `rotateX(50deg) rotateY(30deg) translate(${-mousePos.x * 0.25}px, ${-mousePos.y * 0.25}px)`,
            animationDelay: '-6s',
          }}
        />

        {/* Additional Geometric Shapes if config.geometryCount > 4 */}
        {config.geometryCount >= 6 && (
          <>
            <div
              className="absolute top-[75%] left-[60%] w-20 h-20 md:w-32 md:h-32 rounded-xl border border-pink-300/20 bg-gradient-to-tr from-pink-500/20 to-transparent backdrop-blur-md animate-float-slow"
              style={{ transform: `rotateX(20deg) rotateY(40deg) translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)` }}
            />
            <div
              className="absolute top-[12%] right-[40%] w-16 h-16 md:w-28 md:h-28 rounded-full border border-indigo-300/30 bg-indigo-500/15 backdrop-blur-lg animate-float-reverse"
              style={{ transform: `translate(${-mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
            />
          </>
        )}
      </div>

      {/* Fine Digital Grid lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
