// src/components/ThreeBackground.js
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// import { OrbitControls } from '@react-three/drei'; // Keep commented out for fixed background

// Define the colors for the gold sparkle cycle
const COLOR_CYCLE = [
 new THREE.Color("#00008B"), // Dark Blue
  new THREE.Color("#0000CD"), // Medium Blue
  new THREE.Color("#4169E1"), // Royal Blue
  new THREE.Color("#6495ED"), // Cornflower Blue
  new THREE.Color("#87CEFA"), // Light Sky Blue
  new THREE.Color("#ADD8E6"), // Light Blue
  new THREE.Color("#00008B"), // Back to Dark Blue for seamless loop
];

// Reusable Color instances for interpolation to avoid creating new ones every frame
const tempColor1 = new THREE.Color();
const tempColor2 = new THREE.Color();
const finalColor = new THREE.Color();

// Component for the revolving gold sparkle particles
const RevolvingSparkles = () => {
  const pointsRef = useRef();
  const groupRef = useRef();

  // TWEAKED PARAMETERS FOR SPARKLE EFFECT
  const numParticles = 40000;
  const fieldRange = 250;     // Total depth for particle generation from -fieldRange to +fieldRange
  const baseParticleSize = 1.2;
  const forwardSpeed = 20;    // How fast the group moves forward
  const revolutionSpeed = 0.005;

  // Parameters for the subtle breathing zoom effect (kept for a dynamic feel)
  const zoomAmplitude = 0.05;
  const zoomFrequency = 0.1;

  // Memoize particle data
  const [positions, initialColors, colorOffsets] = useMemo(() => {
    const p = new Float32Array(numParticles * 3);
    const c = new Float32Array(numParticles * 3);
    const co = new Float32Array(numParticles);

    for (let i = 0; i < numParticles; i++) {
      // Random position within a large sphere/box
      p[i * 3] = (Math.random() * 2 - 1) * fieldRange;
      p[i * 3 + 1] = (Math.random() * 2 - 1) * fieldRange;
      p[i * 3 + 2] = (Math.random() * 2 - 1) * fieldRange;

      // Unique random offset for each particle's color cycle (0 to 1)
      co[i] = Math.random();

      // Set initial color based on its random offset
      const normalizedTime = co[i];
      const numSegments = COLOR_CYCLE.length - 1;
      const segment = Math.floor(normalizedTime * numSegments);
      const localTime = (normalizedTime * numSegments) - segment;

      const colorA = COLOR_CYCLE[segment];
      const colorB = COLOR_CYCLE[(segment + 1) % COLOR_CYCLE.length];

      finalColor.copy(colorA).lerp(colorB, localTime);

      c[i * 3] = finalColor.r;
      c[i * 3 + 1] = finalColor.g;
      c[i * 3 + 2] = finalColor.b;
    }
    return [p, c, co];
  }, [numParticles, fieldRange]);


  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    const delta = state.clock.getDelta(); // Time since last frame, for frame-rate independence

    // --- Overall Group Motion ---
    if (groupRef.current) {
      groupRef.current.rotation.y += revolutionSpeed;
      groupRef.current.rotation.x = Math.sin(elapsedTime * 0.05) * 0.05;

      // --- Seamless Forward Motion & Looping ---
      // Move the group towards the camera (negative Z)
      groupRef.current.position.z -= forwardSpeed * delta;

      // When the group has moved past a certain point behind the camera,
      // reset it to the front to create an infinite loop.
      // The total depth of our particle field is fieldRange * 2.
      // If the group's origin (0,0,0) moves past -fieldRange (the back wall of the initial field),
      // then move it back to +fieldRange (the front wall of the initial field).
      if (groupRef.current.position.z < -fieldRange) {
        groupRef.current.position.z += fieldRange * 2; // Reset by adding the full depth
      }

      // --- Breathing Zoom Effect ---
      const scaleFactor = 1 + Math.sin(elapsedTime * zoomFrequency) * zoomAmplitude;
      groupRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }

    // --- Per-Particle Color Cycling ---
    if (pointsRef.current && pointsRef.current.geometry && pointsRef.current.geometry.attributes.color) {
      const colorsAttribute = pointsRef.current.geometry.attributes.color.array;
      const cycleDuration = 8;

      for (let i = 0; i < numParticles; i++) {
        const normalizedTime = ((elapsedTime + colorOffsets[i] * cycleDuration) % cycleDuration) / cycleDuration;
        
        const numSegments = COLOR_CYCLE.length - 1;
        const segmentIndex = Math.floor(normalizedTime * numSegments);
        const localSegmentTime = (normalizedTime * numSegments) - segmentIndex;

        tempColor1.copy(COLOR_CYCLE[segmentIndex]);
        tempColor2.copy(COLOR_CYCLE[(segmentIndex + 1) % COLOR_CYCLE.length]);

        finalColor.copy(tempColor1).lerp(tempColor2, localSegmentTime);

        colorsAttribute[i * 3] = finalColor.r;
        colorsAttribute[i * 3 + 1] = finalColor.g;
        colorsAttribute[i * 3 + 2] = finalColor.b;
      }
      pointsRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                count={positions.length / 3}
                array={positions}
                itemSize={3}
            />
            <bufferAttribute
                attach="attributes-color"
                count={initialColors.length / 3}
                array={initialColors}
                itemSize={3}
            />
        </bufferGeometry>
        <pointsMaterial
          size={baseParticleSize}
          sizeAttenuation={true}
          transparent={true}
          alphaTest={0.001}
          blending={THREE.AdditiveBlending}
          vertexColors
        />
      </points>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 100], fov: 75 }} // Camera still at 100
      style={{ background: '#000000' }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.1} />
      <RevolvingSparkles />
      {/* OrbitControls remain commented out */}
    </Canvas>
  );
};

export default ThreeBackground;