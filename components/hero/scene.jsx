"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus, Box, Octahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";

// Hex approximations of the OKLCH design tokens (three.js doesn't parse oklch).
const AMBER = "#E8A24C";
const TERRACOTTA = "#C96F4A";
const GOLD = "#EFC07A";

function CoreBlob() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    ref.current.rotation.z = state.clock.elapsedTime * 0.06;
  });
  return (
    <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.1}>
      <Icosahedron ref={ref} args={[1.45, 8]}>
        <MeshDistortMaterial
          color={AMBER}
          distort={0.34}
          speed={1.7}
          roughness={0.28}
          metalness={0.18}
          emissive={AMBER}
          emissiveIntensity={0.12}
        />
      </Icosahedron>
    </Float>
  );
}

function Accents() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.4} floatIntensity={1.6} position={[2.6, 1.3, -0.5]}>
        <Box args={[0.5, 0.5, 0.5]}>
          <meshStandardMaterial color={GOLD} roughness={0.35} metalness={0.2} />
        </Box>
      </Float>
      <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.4} position={[-2.7, -0.9, 0.2]}>
        <Torus args={[0.45, 0.16, 16, 40]}>
          <meshStandardMaterial color={TERRACOTTA} roughness={0.3} metalness={0.3} />
        </Torus>
      </Float>
      <Float speed={2.2} rotationIntensity={1.6} floatIntensity={1.8} position={[2.1, -1.6, 0.6]}>
        <Octahedron args={[0.42, 0]}>
          <meshStandardMaterial color={TERRACOTTA} roughness={0.4} metalness={0.2} wireframe />
        </Octahedron>
      </Float>
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.5} position={[-2.2, 1.7, -0.6]}>
        <Box args={[0.34, 0.34, 0.34]}>
          <meshStandardMaterial color={AMBER} roughness={0.3} metalness={0.25} />
        </Box>
      </Float>
    </>
  );
}

function ParallaxRig({ children }) {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.35 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-y * 0.25 - group.current.rotation.x) * 0.05;
  });
  return <group ref={group}>{children}</group>;
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 6, 4]} intensity={1.1} color={AMBER} />
        <pointLight position={[-6, -3, -2]} intensity={2.2} color={TERRACOTTA} />
        <pointLight position={[3, -4, 3]} intensity={1.2} color={GOLD} />
        <ParallaxRig>
          <CoreBlob />
          <Accents />
        </ParallaxRig>
      </Suspense>
    </Canvas>
  );
}
