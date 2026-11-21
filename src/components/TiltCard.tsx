import React, { useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 12,
  perspective = 1000,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="relative transition-transform duration-200 ease-out h-full"
      >
        {children}

        {/* Dynamic Light Glare Overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0, 217, 255, 0.45) 0%, rgba(255, 23, 68, 0.15) 35%, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
