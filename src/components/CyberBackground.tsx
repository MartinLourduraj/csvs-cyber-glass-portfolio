import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface CyberBackgroundProps {
  theme?: string;
}

export const CyberBackground: React.FC<CyberBackgroundProps> = ({ theme = 'cyber-blue' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with easing
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Particle definition
    const particleCount = reducedMotion ? 20 : Math.min(65, Math.floor(width / 24));
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const isBlue = i % 2 === 0;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 1,
        color: isBlue ? '#00D9FF' : '#FF1744',
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;

      // Mouse smoothing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep Midnight Background
      ctx.fillStyle = '#050B18';
      ctx.fillRect(0, 0, width, height);

      // Parallax scroll offset
      const scrollY = window.scrollY || 0;
      const scrollOffset = scrollY * 0.15;

      // 1. LEFT ENERGY POLE: Flowing Electric Blue Aurora Wave
      const blueX = width * 0.15 + Math.sin(time * 0.8) * 40;
      const blueY = height * 0.35 + Math.cos(time * 0.5) * 50 - scrollOffset;
      const blueRadius = Math.max(width * 0.45, 350);

      const blueGradient = ctx.createRadialGradient(blueX, blueY, 10, blueX, blueY, blueRadius);
      blueGradient.addColorStop(0, 'rgba(0, 140, 255, 0.28)');
      blueGradient.addColorStop(0.4, 'rgba(0, 217, 255, 0.12)');
      blueGradient.addColorStop(1, 'rgba(0, 140, 255, 0)');

      ctx.fillStyle = blueGradient;
      ctx.beginPath();
      ctx.arc(blueX, blueY, blueRadius, 0, Math.PI * 2);
      ctx.fill();

      // 2. RIGHT ENERGY POLE: Flowing Crimson Red Aurora Wave
      const redX = width * 0.85 + Math.cos(time * 0.7) * 40;
      const redY = height * 0.55 + Math.sin(time * 0.6) * 50 - scrollOffset;
      const redRadius = Math.max(width * 0.45, 350);

      const redGradient = ctx.createRadialGradient(redX, redY, 10, redX, redY, redRadius);
      redGradient.addColorStop(0, 'rgba(255, 23, 68, 0.22)');
      redGradient.addColorStop(0.4, 'rgba(255, 64, 129, 0.09)');
      redGradient.addColorStop(1, 'rgba(255, 23, 68, 0)');

      ctx.fillStyle = redGradient;
      ctx.beginPath();
      ctx.arc(redX, redY, redRadius, 0, Math.PI * 2);
      ctx.fill();

      // 3. CENTER FUSION HARMONIC
      const centerX = width * 0.5 + Math.sin(time * 0.5) * 30;
      const centerY = height * 0.45 + Math.cos(time * 0.4) * 40 - scrollOffset;
      const centerRadius = Math.max(width * 0.3, 260);

      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, centerRadius);
      centerGradient.addColorStop(0, 'rgba(99, 102, 241, 0.14)');
      centerGradient.addColorStop(1, 'rgba(5, 11, 24, 0)');

      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
      ctx.fill();

      // 4. CURSOR-RESPONSIVE LIGHT RIPPLE
      if (!reducedMotion) {
        const cursorGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          240
        );
        cursorGradient.addColorStop(0, 'rgba(0, 217, 255, 0.12)');
        cursorGradient.addColorStop(0.5, 'rgba(255, 23, 68, 0.05)');
        cursorGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = cursorGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 240, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. FLOATING LUMINOUS PARTICLES & CYBER CONSTELLATION MESH
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Particle Glow
        ctx.save();
        ctx.globalAlpha = p.alpha + Math.sin(time * 2 + i) * 0.15;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles with subtle cyber filament lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.save();
            ctx.strokeStyle = p.color === '#00D9FF' ? 'rgba(0, 217, 255, 0.12)' : 'rgba(255, 23, 68, 0.1)';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [reducedMotion, theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
      {/* Cyber Grid HUD Matrix Layer */}
      <div 
        className="absolute inset-0 cyber-grid-overlay opacity-40 pointer-events-none"
        aria-hidden="true" 
      />
      {/* Subtle Holographic Vignette */}
      <div 
        className="absolute inset-0 bg-radial-gradient from-transparent via-[#050B18]/40 to-[#050B18]/90 pointer-events-none" 
        aria-hidden="true"
      />
    </div>
  );
};
