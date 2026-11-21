import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  align?: 'left' | 'center';
  color?: 'blue' | 'red' | 'fusion';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  color = 'blue',
}) => {
  const badgeColors = {
    blue: 'border-[#00D9FF]/30 text-[#00D9FF] bg-[#008CFF]/10',
    red: 'border-[#FF1744]/30 text-[#FF1744] bg-[#FF1744]/10',
    fusion: 'border-purple-400/30 text-purple-300 bg-purple-500/10',
  };

  const highlightColors = {
    blue: 'text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#008CFF]',
    red: 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF5252] to-[#FF1744]',
    fusion: 'text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-purple-400 to-[#FF1744]',
  };

  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* HUD Badge */}
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase backdrop-blur-md mb-3 border ${badgeColors[color]}`}>
        <Sparkles className="w-3 h-3 animate-pulse" />
        <span>{badge}</span>
      </div>

      {/* Main Section Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
        {title}{' '}
        {titleHighlight && (
          <span className={highlightColors[color]}>
            {titleHighlight}
          </span>
        )}
      </h2>

      {/* Descriptive Subtitle */}
      <p className={`text-base sm:text-lg text-slate-300/90 leading-relaxed font-sans ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
        {subtitle}
      </p>

      {/* Subtle Laser Divider */}
      <div className={`h-[1px] w-24 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};
