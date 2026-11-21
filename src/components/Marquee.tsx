import React from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface MarqueeProps {
  items: { name: string; icon?: React.ReactNode; category?: string }[];
  speedSeconds?: number;
  direction?: 'left' | 'right';
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  speedSeconds = 30,
  direction = 'left',
}) => {
  const reducedMotion = useReducedMotion();

  // Duplicate items 4 times to ensure seamless infinite scroll
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none mask-fade">
      {/* Left/Right Edge Shadow Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#050B18] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#050B18] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-4 w-max"
        style={
          reducedMotion
            ? {}
            : {
                animation: `marquee-${direction} ${speedSeconds}s linear infinite`,
              }
        }
      >
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#071426]/70 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 backdrop-blur-md text-xs sm:text-sm font-mono text-slate-200 transition-colors shadow-sm"
          >
            {item.icon && <span className="text-[#00D9FF] shrink-0">{item.icon}</span>}
            <span className="font-semibold">{item.name}</span>
            {item.category && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                {item.category}
              </span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
