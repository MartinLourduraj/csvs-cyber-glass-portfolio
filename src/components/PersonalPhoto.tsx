import React, { useState } from 'react';
import { ShieldCheck, Cpu, Sparkles, Terminal, Code2, Server, Cloud, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PersonalPhotoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadges?: boolean;
  showRings?: boolean;
  showScanline?: boolean;
  className?: string;
}

export const PersonalPhoto: React.FC<PersonalPhotoProps> = ({
  size = 'hero',
  showBadges = true,
  showRings = true,
  showScanline = true,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const photoSrc = imgError
    ? '/images/github-avatar.png'
    : (PERSONAL_INFO.photoUrl || '/images/martin-lourduraj.webp');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (size !== 'hero' && size !== 'lg') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Dimensions based on size prop
  const sizeClasses = {
    sm: 'w-24 h-24 sm:w-28 sm:h-28',
    md: 'w-40 h-40 sm:w-48 sm:h-48',
    lg: 'w-56 h-56 sm:w-64 sm:h-64',
    hero: 'w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88',
  };

  const ringSizes = {
    sm: { blue: 'w-32 h-32', red: 'w-36 h-36' },
    md: { blue: 'w-56 h-56', red: 'w-64 h-64' },
    lg: { blue: 'w-72 h-72', red: 'w-80 h-80' },
    hero: { blue: 'w-80 h-80 sm:w-96 sm:h-96', red: 'w-92 h-92 sm:w-[26rem] sm:h-[26rem]' },
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      {/* 1. DUAL ORBITAL ENERGY RINGS */}
      {showRings && (
        <>
          {/* Blue Energy Ring — Rotating Clockwise */}
          <div
            className={`absolute ${ringSizes[size].blue} rounded-full border border-dashed border-[#00D9FF]/40 sm:border-[#00D9FF]/55 animate-orbit-slow pointer-events-none transition-all duration-700`}
            style={{
              boxShadow: isHovered
                ? '0 0 35px rgba(0, 217, 255, 0.35), inset 0 0 20px rgba(0, 140, 255, 0.25)'
                : '0 0 20px rgba(0, 217, 255, 0.15)',
            }}
          >
            {/* Energy Particle on Blue Ring */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00D9FF] shadow-[0_0_12px_#00D9FF]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#008CFF] shadow-[0_0_8px_#008CFF]" />
          </div>

          {/* Crimson Energy Ring — Rotating Counterclockwise */}
          <div
            className={`absolute ${ringSizes[size].red} rounded-full border border-dotted border-[#FF1744]/40 sm:border-[#FF1744]/55 animate-orbit-reverse-slow pointer-events-none transition-all duration-700`}
            style={{
              boxShadow: isHovered
                ? '0 0 35px rgba(255, 23, 68, 0.35), inset 0 0 20px rgba(255, 23, 68, 0.2)'
                : '0 0 20px rgba(255, 23, 68, 0.12)',
            }}
          >
            {/* Energy Particle on Crimson Ring */}
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#FF1744] shadow-[0_0_12px_#FF1744]" />
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF5252] shadow-[0_0_8px_#FF5252]" />
          </div>
        </>
      )}

      {/* 2. AMBIENT BACKLIGHT GLOW (Blue x Red Fusion) */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#008CFF]/25 via-[#7C3AED]/15 to-[#FF1744]/25 blur-2xl sm:blur-3xl pointer-events-none transition-opacity duration-500"
        style={{ opacity: isHovered ? 0.9 : 0.6 }}
      />

      {/* 3. MAIN FLOATING LIQUID GLASS FRAME */}
      <div
        className={`relative ${sizeClasses[size]} rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#071426]/90 via-[#071426]/80 to-[#050B18]/95 border-2 border-[#00D9FF]/45 backdrop-blur-2xl shadow-2xl transition-transform duration-200 ease-out`}
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateY(${isHovered ? '-6px' : '0px'})`,
          boxShadow: isHovered
            ? '0 20px 50px -10px rgba(0, 140, 255, 0.4), 0 0 30px rgba(255, 23, 68, 0.25)'
            : '0 12px 35px -10px rgba(0, 140, 255, 0.25), 0 0 20px rgba(0, 217, 255, 0.15)',
        }}
      >
        {/* Corner HUD Laser Brackets */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#00D9FF] pointer-events-none" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#FF1744] pointer-events-none" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#00D9FF] pointer-events-none" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#FF1744] pointer-events-none" />

        {/* Inner Glass Container Wrapping Portrait */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#050B18] border border-white/10 group">
          {/* Subtle Holographic Scanline Overlay */}
          {showScanline && (
            <div className="absolute inset-0 hologram-scan pointer-events-none z-10 opacity-30" />
          )}

          {/* Glass Specular Reflection Ribbon */}
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transform pointer-events-none z-10 transition-transform duration-1000 group-hover:translate-x-full" />

          {/* REAL PROFESSIONAL PORTRAIT IMAGE */}
          <img
            src={photoSrc}
            alt="Martin Lourduraj — Founder & Full-Stack Architect, CSVS IT Tech"
            className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-500 ease-out group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="eager"
          />

          {/* Subtle Bottom Vignette Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050B18]/90 via-[#050B18]/40 to-transparent pointer-events-none z-10" />

          {/* Mini Inset Badge on Portrait */}
          <div className="absolute bottom-2.5 inset-x-2.5 z-20 flex items-center justify-between px-2.5 py-1 rounded-lg bg-[#071426]/85 border border-[#00D9FF]/30 backdrop-blur-md">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-wider">
                MARTIN LOURDURAJ
              </span>
            </div>
            <span className="text-[9px] font-mono uppercase text-[#00D9FF] font-semibold">
              CSVS IT TECH
            </span>
          </div>
        </div>
      </div>

      {/* 4. FLOATING HOLOGRAPHIC TECHNOLOGY BADGES (Hero mode only) */}
      {showBadges && size === 'hero' && (
        <>
          {/* Badge 1: Top Right — React & TypeScript */}
          <div
            className="absolute -top-4 -right-4 sm:-right-8 px-3 py-1.5 rounded-xl bg-[#071426]/90 border border-[#00D9FF]/40 backdrop-blur-xl shadow-lg flex items-center gap-2 z-20 transition-transform duration-500 animate-float-slow"
            style={{ animationDelay: '0s' }}
          >
            <Code2 className="w-3.5 h-3.5 text-[#00D9FF]" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold text-white leading-tight">React 18 · TS</span>
              <span className="text-[8px] font-mono text-[#00D9FF] leading-tight">Architect Level</span>
            </div>
          </div>

          {/* Badge 2: Mid Left — Python & Django ERP */}
          <div
            className="absolute top-1/3 -left-6 sm:-left-12 px-3 py-1.5 rounded-xl bg-[#071426]/90 border border-[#FF1744]/40 backdrop-blur-xl shadow-lg flex items-center gap-2 z-20 transition-transform duration-500 animate-float-slow"
            style={{ animationDelay: '1.5s' }}
          >
            <Server className="w-3.5 h-3.5 text-[#FF1744]" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold text-white leading-tight">Python · Django</span>
              <span className="text-[8px] font-mono text-[#FF1744] leading-tight">Healthcare ERP Core</span>
            </div>
          </div>

          {/* Badge 3: Bottom Left — AWS Cloud & Infrastructure */}
          <div
            className="absolute -bottom-4 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl bg-[#071426]/90 border border-[#00D9FF]/40 backdrop-blur-xl shadow-lg flex items-center gap-2 z-20 transition-transform duration-500 animate-float-slow"
            style={{ animationDelay: '3s' }}
          >
            <Cloud className="w-3.5 h-3.5 text-[#00D9FF]" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold text-white leading-tight">AWS Cloud</span>
              <span className="text-[8px] font-mono text-slate-400 leading-tight">High Availability</span>
            </div>
          </div>

          {/* Badge 4: Bottom Right — 100% Sovereign Data */}
          <div
            className="absolute -bottom-5 -right-4 sm:-right-8 px-3 py-1.5 rounded-xl bg-[#071426]/90 border border-emerald-500/40 backdrop-blur-xl shadow-lg flex items-center gap-2 z-20 transition-transform duration-500 animate-float-slow"
            style={{ animationDelay: '2s' }}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold text-white leading-tight">100% Data Sovereignty</span>
              <span className="text-[8px] font-mono text-emerald-400 leading-tight">Zero PHI AI Leakage</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
