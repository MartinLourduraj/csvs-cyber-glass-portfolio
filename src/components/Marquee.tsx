import React, { useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { 
  Atom, 
  Code2, 
  FileCode, 
  Palette, 
  Layout, 
  Layers, 
  Terminal, 
  Server, 
  Database, 
  HardDrive, 
  Network, 
  Zap, 
  Cpu, 
  Cloud, 
  Box, 
  Globe, 
  GitBranch, 
  Shield, 
  Activity 
} from 'lucide-react';

interface MarqueeItem {
  name: string;
  category?: string;
  iconName?: string;
  icon?: React.ReactNode;
}

interface MarqueeProps {
  items: MarqueeItem[];
  speedSeconds?: number;
  direction?: 'left' | 'right';
  rowLabel?: string;
  accent?: 'blue' | 'red' | 'cyan' | 'fusion';
  className?: string;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Atom,
  Code2,
  FileCode,
  Palette,
  Layout,
  Layers,
  Terminal,
  Server,
  Database,
  HardDrive,
  Network,
  Zap,
  Cpu,
  Cloud,
  Box,
  Globe,
  GitBranch,
  Shield,
  Activity,
};

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  speedSeconds = 30,
  direction = 'left',
  rowLabel,
  accent = 'blue',
  className = '',
}) => {
  const reducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  const accentStyles = {
    blue: {
      border: 'border-[#008CFF]/25 hover:border-[#00D9FF]/60',
      badge: 'bg-[#008CFF]/15 text-[#00D9FF]',
      icon: 'text-[#00D9FF]',
      glow: 'hover:shadow-[0_0_20px_rgba(0,140,255,0.3)]',
    },
    red: {
      border: 'border-[#FF1744]/25 hover:border-[#FF1744]/60',
      badge: 'bg-[#FF1744]/15 text-[#FF1744]',
      icon: 'text-[#FF1744]',
      glow: 'hover:shadow-[0_0_20px_rgba(255,23,68,0.3)]',
    },
    cyan: {
      border: 'border-[#00D9FF]/25 hover:border-[#00D9FF]/60',
      badge: 'bg-[#00D9FF]/15 text-[#00D9FF]',
      icon: 'text-[#00D9FF]',
      glow: 'hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]',
    },
    fusion: {
      border: 'border-[#00D9FF]/25 hover:border-[#FF1744]/50',
      badge: 'bg-white/5 text-slate-300',
      icon: 'text-[#00D9FF]',
      glow: 'hover:shadow-[0_0_20px_rgba(0,217,255,0.25)]',
    },
  };

  const style = accentStyles[accent] || accentStyles.blue;

  const renderItemContent = (item: MarqueeItem, key: string, isDuplicate = false) => {
    const IconComp = item.iconName ? ICON_MAP[item.iconName] : null;

    return (
      <div
        key={key}
        aria-hidden={isDuplicate ? 'true' : undefined}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#071426]/75 border ${style.border} ${style.glow} backdrop-blur-md text-xs sm:text-sm font-mono text-slate-200 transition-all duration-300 shadow-sm shrink-0 cursor-default select-none`}
      >
        {item.icon ? (
          <span className={`${style.icon} shrink-0`}>{item.icon}</span>
        ) : IconComp ? (
          <IconComp className={`w-4 h-4 ${style.icon} shrink-0`} />
        ) : null}

        <span className="font-semibold text-white tracking-wide">{item.name}</span>

        {item.category && (
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${style.badge} font-medium`}>
            {item.category}
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      className={`relative w-full overflow-hidden py-2 select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label={rowLabel || 'Technology Row'}
    >
      {/* Edge Gradient Shadow Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#050B18] via-[#050B18]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#050B18] via-[#050B18]/80 to-transparent z-10 pointer-events-none" />

      {/* Row Label Pill (Optional) */}
      {rowLabel && (
        <div className="flex items-center gap-2 mb-2 px-4 max-w-7xl mx-auto">
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
            {rowLabel}
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>
      )}

      {/* Track */}
      <div
        className="flex gap-4 w-max will-change-transform"
        style={
          reducedMotion
            ? { flexWrap: 'wrap', justifyContent: 'center' }
            : {
                animation: `marquee-${direction} ${speedSeconds}s linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
              }
        }
      >
        {/* Primary accessible copy */}
        {items.map((item, idx) => renderItemContent(item, `primary-${item.name}-${idx}`, false))}

        {/* Seamless duplicate copies for infinite loop (marked aria-hidden for accessibility) */}
        {!reducedMotion &&
          items.map((item, idx) => renderItemContent(item, `dup1-${item.name}-${idx}`, true))}
        {!reducedMotion &&
          items.map((item, idx) => renderItemContent(item, `dup2-${item.name}-${idx}`, true))}
        {!reducedMotion &&
          items.map((item, idx) => renderItemContent(item, `dup3-${item.name}-${idx}`, true))}
      </div>
    </div>
  );
};
