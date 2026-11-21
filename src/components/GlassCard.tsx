import React from 'react';
import { clsx } from 'clsx';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'blue' | 'red' | 'fusion' | 'default';
  hoverEffect?: boolean;
  glow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  variant = 'default',
  hoverEffect = true,
  glow = false,
  children,
  className,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'blue':
        return 'border-[#00D9FF]/20 bg-[#071426]/70 shadow-glass-blue hover:border-[#00D9FF]/50';
      case 'red':
        return 'border-[#FF1744]/25 bg-[#170911]/70 shadow-glass-red hover:border-[#FF1744]/55';
      case 'fusion':
        return 'border-[#00D9FF]/25 bg-gradient-to-br from-[#071426]/80 via-[#0a1226]/70 to-[#190913]/80 shadow-glass-fusion hover:border-[#FF1744]/40';
      default:
        return 'border-white/10 bg-[#071426]/60 hover:border-[#00D9FF]/35';
    }
  };

  return (
    <div
      className={clsx(
        'relative rounded-2xl backdrop-blur-xl border transition-all duration-300 overflow-hidden',
        getVariantStyles(),
        hoverEffect && 'hover:-translate-y-1 hover:shadow-2xl',
        glow && 'ring-1 ring-[#00D9FF]/30',
        className
      )}
      {...props}
    >
      {/* Top Glass Highlight Reflection */}
      <div 
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" 
        aria-hidden="true"
      />
      {children}
    </div>
  );
};
