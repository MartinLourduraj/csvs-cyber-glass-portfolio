import React, { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'red' | 'fusion' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  href?: string;
  target?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  variant = 'blue',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className,
  href,
  target,
  onClick,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const pull = 0.28;
    setPosition({
      x: (e.clientX - centerX) * pull,
      y: (e.clientY - centerY) * pull,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 font-medium',
    md: 'px-5 py-2.5 text-sm gap-2 font-semibold',
    lg: 'px-7 py-3 text-base gap-2.5 font-bold',
  };

  const variantClasses = {
    blue: 'bg-gradient-to-r from-[#008CFF] to-[#00D9FF] text-white shadow-lg shadow-[#008CFF]/25 hover:shadow-[#00D9FF]/40 border border-[#00D9FF]/40',
    red: 'bg-gradient-to-r from-[#FF1744] to-[#D50000] text-white shadow-lg shadow-[#FF1744]/25 hover:shadow-[#FF1744]/45 border border-[#FF1744]/40',
    fusion: 'bg-gradient-to-r from-[#008CFF] via-[#7C3AED] to-[#FF1744] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 border border-white/20',
    outline: 'bg-[#071426]/60 backdrop-blur-md text-[#F1F5F9] border border-[#00D9FF]/30 hover:border-[#00D9FF] hover:bg-[#008CFF]/10 hover:shadow-[0_0_15px_rgba(0,217,255,0.25)]',
    ghost: 'bg-transparent text-[#94A3B8] hover:text-[#00D9FF] hover:bg-white/5',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      {/* Laser Border Shimmer */}
      <div 
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" 
        aria-hidden="true"
      />
    </>
  );

  const sharedStyles = clsx(
    'relative inline-flex items-center justify-center rounded-xl cursor-pointer select-none transition-all duration-200 group overflow-hidden',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const transformStyle = reducedMotion
    ? undefined
    : { transform: `translate3d(${position.x}px, ${position.y}px, 0)` };

  if (href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={transformStyle}
        className={sharedStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      className={sharedStyles}
      {...props}
    >
      {content}
    </button>
  );
};
