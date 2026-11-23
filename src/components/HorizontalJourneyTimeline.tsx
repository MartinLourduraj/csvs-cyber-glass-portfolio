import React, { useRef, useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Award,
  Sparkles 
} from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

export const HorizontalJourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const offset = 380;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full py-6 select-none">
      {/* Top Header & Controls */}
      <div className="flex items-center justify-between mb-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#00D9FF]">
            ROW 6 // VERIFIED CHRONOLOGICAL TRAJECTORY & ENTERPRISE TIMELINE
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous Milestone"
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              canScrollLeft
                ? 'bg-[#071426]/90 border border-[#00D9FF]/40 text-[#00D9FF] hover:bg-[#008CFF]/20'
                : 'bg-white/5 border border-white/5 text-slate-600 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Next Milestone"
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              canScrollRight
                ? 'bg-[#071426]/90 border border-[#FF1744]/40 text-[#FF1744] hover:bg-[#FF1744]/20'
                : 'bg-white/5 border border-white/5 text-slate-600 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Timeline Track Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Animated Laser Horizon Line Across Milestones */}
        <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-1 bg-gradient-to-r from-[#00D9FF]/40 via-[#008CFF]/60 to-[#FF1744]/40 rounded-full z-0 overflow-hidden">
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
        </div>

        {/* Horizontal Scroll Area */}
        <div
          ref={containerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TIMELINE_DATA.map((milestone, idx) => {
            const isBlue = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="snap-center shrink-0 w-[300px] sm:w-[360px] lg:w-[380px] flex flex-col relative z-10"
              >
                {/* Glowing Node on Timeline */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-mono font-bold shadow-lg border-2 shrink-0 ${
                      isBlue
                        ? 'bg-[#071426] border-[#00D9FF] text-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                        : 'bg-[#071426] border-[#FF1744] text-[#FF1744] shadow-[0_0_15px_rgba(255,23,68,0.4)]'
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-bold text-white flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#00D9FF]" />
                      {milestone.year}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {milestone.period}
                    </span>
                  </div>
                </div>

                {/* Milestone Glass Card */}
                <div
                  className={`h-full rounded-3xl p-6 bg-gradient-to-b from-[#071426]/90 via-[#071426]/80 to-[#050B18]/95 border ${
                    isBlue
                      ? 'border-[#00D9FF]/30 hover:border-[#00D9FF]/60 shadow-[0_10px_30px_-10px_rgba(0,140,255,0.2)]'
                      : 'border-[#FF1744]/30 hover:border-[#FF1744]/60 shadow-[0_10px_30px_-10px_rgba(255,23,68,0.2)]'
                  } backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
                >
                  <div>
                    {/* Header Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#00D9FF]">
                        {milestone.badge}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                        <MapPin className="w-3 h-3 text-[#FF1744]" />
                        {milestone.location}
                      </span>
                    </div>

                    {/* Role & Entity */}
                    <h3 className="text-lg sm:text-xl font-extrabold font-display text-white mb-1">
                      {milestone.role}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-[#00D9FF] mb-3">
                      {milestone.entity}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Key Deliverables:
                    </span>
                    {milestone.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#00D9FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
