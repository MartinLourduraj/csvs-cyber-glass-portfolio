import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NoveaGuardianProps {
  isSpeaking: boolean;
  eyeIntensity?: number;
  className?: string;
}

export const NoveaGuardian: React.FC<NoveaGuardianProps> = ({
  isSpeaking,
  eyeIntensity = 1,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * -2;
      mouseRef.current.targetX = x * 0.35;
      mouseRef.current.targetY = y * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 380;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0.4, 3.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 2. Cinematic Lighting
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(2, 3, 3);
    scene.add(keyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x00d9ff, 3.5);
    cyanRimLight.position.set(-3, 2, -1);
    scene.add(cyanRimLight);

    const crimsonFill = new THREE.DirectionalLight(0xff1744, 2.5);
    crimsonFill.position.set(2, -1, -1);
    scene.add(crimsonFill);

    const ambientLight = new THREE.AmbientLight(0x0a1426, 1.2);
    scene.add(ambientLight);

    // 3. Materials
    // Crimson metallic armor plating
    const crimsonArmor = new THREE.MeshPhysicalMaterial({
      color: 0x990018,
      metalness: 0.85,
      roughness: 0.25,
      clearcoat: 0.6,
      clearcoatRoughness: 0.15,
    });

    // Dark Titanium Chassis
    const titaniumDark = new THREE.MeshStandardMaterial({
      color: 0x1f2430,
      metalness: 0.92,
      roughness: 0.35,
    });

    // Regal Gold Trim Accents
    const goldTrim = new THREE.MeshStandardMaterial({
      color: 0xdfb15b,
      metalness: 0.9,
      roughness: 0.2,
    });

    // Cyan glowing optic material
    const cyanOpticsMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.95,
    });

    // Chest Core Energy Glow
    const chestCoreMat = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.9,
    });

    // 4. Procedural Armored Guardian Assembly
    const guardianGroup = new THREE.Group();
    scene.add(guardianGroup);

    // Body / Torso
    const torsoGroup = new THREE.Group();
    guardianGroup.add(torsoGroup);

    // Chest Center Plate
    const chestGeo = new THREE.CylinderGeometry(0.55, 0.42, 0.8, 8);
    const chestPlate = new THREE.Mesh(chestGeo, crimsonArmor);
    chestPlate.position.set(0, -0.15, 0);
    torsoGroup.add(chestPlate);

    // Gold Collar Bezel
    const collarGeo = new THREE.TorusGeometry(0.38, 0.04, 8, 24);
    const collar = new THREE.Mesh(collarGeo, goldTrim);
    collar.position.set(0, 0.28, 0.05);
    collar.rotation.x = Math.PI / 2;
    torsoGroup.add(collar);

    // Recessed Chest Reactor Core
    const chestCoreFrameGeo = new THREE.TorusGeometry(0.18, 0.03, 16, 32);
    const chestCoreFrame = new THREE.Mesh(chestCoreFrameGeo, goldTrim);
    chestCoreFrame.position.set(0, -0.05, 0.46);
    torsoGroup.add(chestCoreFrame);

    const chestCoreGeo = new THREE.CircleGeometry(0.15, 24);
    const chestCore = new THREE.Mesh(chestCoreGeo, chestCoreMat);
    chestCore.position.set(0, -0.05, 0.48);
    torsoGroup.add(chestCore);

    // Shoulder Pauldrons (Left & Right)
    const pauldronGeo = new THREE.SphereGeometry(0.32, 16, 16, 0, Math.PI * 2, 0, Math.PI / 1.7);
    const leftPauldron = new THREE.Mesh(pauldronGeo, crimsonArmor);
    leftPauldron.position.set(-0.75, 0.15, 0);
    leftPauldron.rotation.z = 0.35;
    torsoGroup.add(leftPauldron);

    const rightPauldron = new THREE.Mesh(pauldronGeo, crimsonArmor);
    rightPauldron.position.set(0.75, 0.15, 0);
    rightPauldron.rotation.z = -0.35;
    torsoGroup.add(rightPauldron);

    // Pauldron Gold Trim Rings
    const pTrimGeo = new THREE.TorusGeometry(0.28, 0.025, 8, 24);
    const leftPTrim = new THREE.Mesh(pTrimGeo, goldTrim);
    leftPTrim.position.set(-0.75, 0.05, 0);
    leftPTrim.rotation.x = Math.PI / 2;
    torsoGroup.add(leftPTrim);

    const rightPTrim = new THREE.Mesh(pTrimGeo, goldTrim);
    rightPTrim.position.set(0.75, 0.05, 0);
    rightPTrim.rotation.x = Math.PI / 2;
    torsoGroup.add(rightPTrim);

    // Head Group (Articulated on Neck)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.58, 0.05);
    guardianGroup.add(headGroup);

    // Neck Piston Columns
    const neckGeo = new THREE.CylinderGeometry(0.16, 0.22, 0.25, 12);
    const neck = new THREE.Mesh(neckGeo, titaniumDark);
    neck.position.set(0, -0.15, 0);
    headGroup.add(neck);

    // Armored Robotic Helm Cranium
    const helmGeo = new THREE.BoxGeometry(0.52, 0.58, 0.52);
    const helm = new THREE.Mesh(helmGeo, crimsonArmor);
    headGroup.add(helm);

    // Aerodynamic Crest Fin (Gold)
    const crestGeo = new THREE.BoxGeometry(0.06, 0.22, 0.58);
    const crest = new THREE.Mesh(crestGeo, goldTrim);
    crest.position.set(0, 0.34, -0.02);
    headGroup.add(crest);

    // Faceplate (Titanium with Gold Cheek Flares)
    const faceplateGeo = new THREE.BoxGeometry(0.42, 0.35, 0.12);
    const faceplate = new THREE.Mesh(faceplateGeo, titaniumDark);
    faceplate.position.set(0, -0.05, 0.24);
    headGroup.add(faceplate);

    // Left & Right Cyan Eye Visor Optics
    const eyeGeo = new THREE.BoxGeometry(0.12, 0.035, 0.04);
    const leftEye = new THREE.Mesh(eyeGeo, cyanOpticsMat);
    leftEye.position.set(-0.11, 0.02, 0.31);
    leftEye.rotation.z = -0.08;
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, cyanOpticsMat);
    rightEye.position.set(0.11, 0.02, 0.31);
    rightEye.rotation.z = 0.08;
    headGroup.add(rightEye);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 320;
      const h = container.clientHeight || 380;
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

      // Smooth cursor tracking for head & torso
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * (delta * 4);
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * (delta * 4);

      headGroup.rotation.y = mouseRef.current.x;
      headGroup.rotation.x = -mouseRef.current.y;
      torsoGroup.rotation.y = mouseRef.current.x * 0.4;

      // Gentle breathing / floating motion
      guardianGroup.position.y = Math.sin(time * 1.5) * 0.03;

      // Eye optics & chest reactor speech pulse modulation
      const speechModulation = isSpeaking ? Math.sin(time * 14) * 0.35 + 0.65 : 0.85;
      cyanOpticsMat.opacity = Math.min(1, speechModulation * eyeIntensity);
      chestCoreMat.opacity = Math.min(1, (0.7 + Math.sin(time * 3) * 0.25) * eyeIntensity);

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
      // Cleanup geometries and materials
      [
        chestGeo,
        collarGeo,
        chestCoreFrameGeo,
        chestCoreGeo,
        pauldronGeo,
        pTrimGeo,
        neckGeo,
        helmGeo,
        crestGeo,
        faceplateGeo,
        eyeGeo,
      ].forEach(g => g.dispose());
      [
        crimsonArmor,
        titaniumDark,
        goldTrim,
        cyanOpticsMat,
        chestCoreMat,
      ].forEach(m => m.dispose());
      renderer.dispose();
    };
  }, [isSpeaking, eyeIntensity]);

  return (
    <div
      ref={mountRef}
      className={`relative w-72 h-88 sm:w-80 sm:h-96 mx-auto flex items-center justify-center select-none pointer-events-none ${className}`}
    >
      {/* Soft Holographic Ambient Backlight */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#00D9FF]/15 via-[#FF1744]/15 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
};
