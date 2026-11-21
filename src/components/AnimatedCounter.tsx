import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface AnimatedCounterProps {
  value: string | number;
  suffix?: string;
  duration?: number;
  label: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  duration = 1800,
  label,
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const reducedMotion = useReducedMotion();

  // Parse numeric component if string like "4+"
  const numericTarget = typeof value === 'number' ? value : parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (reducedMotion) {
      setDisplayValue(numericTarget);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(easeOutProgress * numericTarget);

            setDisplayValue(currentNum);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(numericTarget);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [numericTarget, duration, hasAnimated, reducedMotion]);

  return (
    <div ref={counterRef} className="text-center group">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight flex items-center justify-center gap-0.5">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#008CFF] group-hover:from-white group-hover:to-[#00D9FF] transition-all">
          {displayValue}
        </span>
        <span className="text-[#00D9FF]">{suffix || (typeof value === 'string' && value.includes('+') ? '+' : (typeof value === 'string' && value.includes('%') ? '%' : ''))}</span>
      </div>
      <div className="text-xs sm:text-sm font-mono text-slate-300 mt-1 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};
