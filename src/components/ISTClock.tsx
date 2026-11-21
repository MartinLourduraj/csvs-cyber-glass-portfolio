import React from 'react';
import { Clock, MapPin, Radio } from 'lucide-react';
import { useISTTime } from '../hooks/useISTTime';

export const ISTClock: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { time, timezone, location } = useISTTime();

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#071426]/80 border border-[#00D9FF]/25 text-xs font-mono text-[#F1F5F9] backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]" />
        </span>
        <Clock className="w-3 h-3 text-[#00D9FF]" />
        <span className="text-[#00D9FF] font-semibold">{time}</span>
        <span className="text-[10px] text-slate-400">IST</span>
      </div>
    );
  }

  return (
    <div 
      className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#071426]/70 border border-[#00D9FF]/20 backdrop-blur-md shadow-sm font-mono text-xs text-[#F1F5F9] transition-all hover:border-[#00D9FF]/40"
      title={`${location} · ${timezone}`}
    >
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]" />
        </span>
        <Radio className="w-3.5 h-3.5 text-[#00D9FF] animate-pulse" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="text-[#00D9FF] font-bold tracking-wider">{time}</span>
          <span className="text-[10px] uppercase text-slate-400 font-sans font-medium">IST</span>
        </div>
        <div className="flex items-center gap-1 text-[9px] text-slate-400 font-sans">
          <MapPin className="w-2.5 h-2.5 text-[#FF1744]" />
          <span>Tamil Nadu, IN</span>
        </div>
      </div>
    </div>
  );
};
