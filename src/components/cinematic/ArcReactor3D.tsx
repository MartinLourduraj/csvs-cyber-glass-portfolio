import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ArcReactor3DProps {
  onActivate: () => void;
  isActivated: boolean;
  intensity?: number;
  className?: string;
}

export const ArcReactor3D: React.FC<ArcReactor3DProps> = ({
  onActivate,
  isActivated,
  intensity = 1,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0x0a1a2f, 1.5);
    scene.add(ambientLight);

    const cyanPoint = new THREE.PointLight(0x00d9ff, 3, 10);
    cyanPoint.position.set(0, 0, 1.5);
    scene.add(cyanPoint);

    const crimsonPoint = new THREE.PointLight(0xff1744, 2, 8);
    crimsonPoint.position.set(0, 0, -1);
    scene.add(crimsonPoint);

    // 3. Materials
    const metalDark = new THREE.MeshStandardMaterial({
      color: 0x111827,
      metalness: 0.95,
      roughness: 0.2,
    });

    const copperGold = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.3,
    });

    const coreGlowMat = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.95,
    });

    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0x008cff,
      emissive: 0x0055aa,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.15,
    });

    // 4. Geometry Groups
    const reactorGroup = new THREE.Group();
    scene.add(reactorGroup);

    // Outer Dark Titanium Bezel
    const outerBezelGeo = new THREE.TorusGeometry(1.4, 0.08, 16, 64);
    const outerBezel = new THREE.Mesh(outerBezelGeo, metalDark);
    reactorGroup.add(outerBezel);

    // Outer Segmented Coils (10 procedural inductors around ring)
    const coilGroup = new THREE.Group();
    reactorGroup.add(coilGroup);

    const numCoils = 10;
    for (let i = 0; i < numCoils; i++) {
      const angle = (i / numCoils) * Math.PI * 2;
      const coilGeo = new THREE.BoxGeometry(0.12, 0.24, 0.14);
      const coil = new THREE.Mesh(coilGeo, copperGold);
      coil.position.x = Math.cos(angle) * 1.25;
      coil.position.y = Math.sin(angle) * 1.25;
      coil.rotation.z = angle;
      coilGroup.add(coil);

      // Light emitter behind coil
      const emitterGeo = new THREE.BoxGeometry(0.06, 0.18, 0.08);
      const emitter = new THREE.Mesh(emitterGeo, coreGlowMat);
      emitter.position.x = Math.cos(angle) * 1.15;
      emitter.position.y = Math.sin(angle) * 1.15;
      emitter.rotation.z = angle;
      coilGroup.add(emitter);
    }

    // Mid Rotating Segmented Ring
    const midRingGeo = new THREE.TorusGeometry(0.95, 0.05, 16, 48);
    const midRing = new THREE.Mesh(midRingGeo, innerRingMat);
    reactorGroup.add(midRing);

    // Inner Triangular/Hex Core Frame
    const triangleGeo = new THREE.RingGeometry(0.55, 0.68, 6);
    const triangleMat = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      wireframe: true,
    });
    const triangleMesh = new THREE.Mesh(triangleGeo, triangleMat);
    reactorGroup.add(triangleMesh);

    // Central Glowing Arc Core
    const centerCoreGeo = new THREE.CircleGeometry(0.48, 32);
    const centerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.9,
    });
    const centerCore = new THREE.Mesh(centerCoreGeo, centerCoreMat);
    centerCore.position.z = 0.05;
    reactorGroup.add(centerCore);

    // Concentric Energy Pulse Circles
    const pulseRingGeo = new THREE.RingGeometry(0.2, 0.24, 32);
    const pulseRingMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
    });
    const pulseRing = new THREE.Mesh(pulseRingGeo, pulseRingMat);
    pulseRing.position.z = 0.08;
    reactorGroup.add(pulseRing);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 360;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      const speedMultiplier = isActivated ? 8 : isHovered ? 2.5 : 1;

      // Concentric rings counter-rotation
      reactorGroup.rotation.z += 0.3 * delta * speedMultiplier;
      coilGroup.rotation.z -= 0.45 * delta * speedMultiplier;
      triangleMesh.rotation.z += 0.8 * delta * speedMultiplier;

      // Core pulsing
      const pulse = 1 + Math.sin(time * 4) * 0.12 * intensity;
      centerCore.scale.set(pulse, pulse, 1);
      cyanPoint.intensity = (2.5 + Math.sin(time * 6) * 1) * (isHovered ? 1.5 : 1) * intensity;

      // Pulse ring expansion
      const rScale = (time * 1.5) % 2;
      pulseRing.scale.set(rScale, rScale, 1);
      pulseRingMat.opacity = Math.max(0, 1 - rScale / 2);

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
      // Clean up geometries and materials
      [
        outerBezelGeo,
        midRingGeo,
        triangleGeo,
        centerCoreGeo,
        pulseRingGeo,
      ].forEach(g => g.dispose());
      [
        metalDark,
        copperGold,
        coreGlowMat,
        innerRingMat,
        triangleMat,
        centerCoreMat,
        pulseRingMat,
      ].forEach(m => m.dispose());
      renderer.dispose();
    };
  }, [isActivated, isHovered, intensity]);

  return (
    <div
      ref={mountRef}
      onClick={onActivate}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label="Touch the Arc Reactor to activate Martin's World portfolio"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onActivate();
        }
      }}
      className={`relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 mx-auto cursor-pointer flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-[#00D9FF]/50 rounded-full transition-transform duration-300 ${
        isHovered ? 'scale-105' : 'scale-100'
      } ${className}`}
    >
      {/* Outer Glow Halo */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#008CFF]/20 via-[#00D9FF]/30 to-[#FF1744]/20 blur-2xl pointer-events-none transition-opacity duration-300"
        style={{ opacity: isHovered ? 0.9 : 0.5 }}
      />
    </div>
  );
};
