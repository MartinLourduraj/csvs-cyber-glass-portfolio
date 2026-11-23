import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NanoParticlesProps {
  stage: 'idle' | 'burst' | 'dispersion' | 'assembly';
  particleCount?: number;
  className?: string;
}

export const NanoParticles: React.FC<NanoParticlesProps> = ({
  stage = 'idle',
  particleCount = 2400,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 2. Adjust count for performance & mobile
    const count = width < 768 ? Math.min(1000, particleCount) : particleCount;

    // 3. BufferGeometry & Attributes
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const targetPositions = new Float32Array(count * 3);

    // Color choices: Cyan (0x00d9ff), Electric Blue (0x008cff), Silver (0xe2e8f0), Crimson (0xff1744)
    const colorPalette = [
      new THREE.Color(0x00d9ff),
      new THREE.Color(0x008cff),
      new THREE.Color(0xe2e8f0),
      new THREE.Color(0xff1744),
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Position spread
      positions[i3] = (Math.random() - 0.5) * 12;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 6;

      // Velocities for blast/swirl
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 3.5;
      velocities[i3] = Math.cos(angle) * speed;
      velocities[i3 + 1] = Math.sin(angle) * speed;
      velocities[i3 + 2] = (Math.random() - 0.5) * 2;

      // Target geometric lattice for assembly stage
      const u = (i % 60) / 60;
      const v = Math.floor(i / 60) / (count / 60);
      targetPositions[i3] = (u - 0.5) * 8;
      targetPositions[i3 + 1] = (v - 0.5) * 5;
      targetPositions[i3 + 2] = (Math.random() - 0.5) * 0.5;

      // Random color from palette
      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture creation procedurally
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(0,217,255,0.8)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: width < 768 ? 0.08 : 0.06,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Resize handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let burstProgress = 0;

    const animate = () => {
      const delta = clock.getDelta();
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;

      if (stage === 'idle') {
        // Floating ambient dust
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          posArr[i3 + 1] += Math.sin(clock.getElapsedTime() + i) * 0.003;
          posArr[i3] += Math.cos(clock.getElapsedTime() + i) * 0.002;
        }
        particles.rotation.y += 0.03 * delta;
      } else if (stage === 'burst') {
        // Explosive expansion from center (0,0,0)
        burstProgress += delta * 2.5;
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          posArr[i3] += velocities[i3] * delta * 4;
          posArr[i3 + 1] += velocities[i3 + 1] * delta * 4;
          posArr[i3 + 2] += velocities[i3 + 2] * delta * 2;
        }
        particles.rotation.z += 0.2 * delta;
      } else if (stage === 'dispersion') {
        // Swirling nanotech storm
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const x = posArr[i3];
          const y = posArr[i3 + 1];
          posArr[i3] += -y * delta * 1.8;
          posArr[i3 + 1] += x * delta * 1.8;
        }
        particles.rotation.z += 0.4 * delta;
      } else if (stage === 'assembly') {
        // Particles converge toward geometric targets
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          posArr[i3] += (targetPositions[i3] - posArr[i3]) * (delta * 3);
          posArr[i3 + 1] += (targetPositions[i3 + 1] - posArr[i3 + 1]) * (delta * 3);
          posArr[i3 + 2] += (targetPositions[i3 + 2] - posArr[i3 + 2]) * (delta * 3);
        }
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, [stage, particleCount]);

  return (
    <div
      ref={mountRef}
      className={`fixed inset-0 pointer-events-none z-20 ${className}`}
    />
  );
};
