"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

// Componente de partículas flotantes optimizado para móviles
function FloatingParticles({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<THREE.Points>(null)
  const { theme } = useTheme()
  
  // Reducir partículas en móviles para mejor rendimiento
  const particleCount = isMobile ? 400 : 1200
  
  // Generar posiciones aleatorias de partículas con distribución más uniforme
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      // Distribución más amplia para mejor efecto visual
      positions[i * 3] = (Math.random() - 0.5) * 25
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return positions
  }, [particleCount])

  // Obtener color según el tema
  const particleColor = theme === "dark" 
    ? new THREE.Color(0x22c55e) // Verde primario en dark mode
    : new THREE.Color(0x4a90a4) // Azul primario en light mode

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotación suave de las partículas con movimiento más dinámico
      ref.current.rotation.x += delta * 0.03
      ref.current.rotation.y += delta * 0.02
      // Movimiento vertical sutil
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={particleColor}
        size={isMobile ? 0.02 : 0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={theme === "dark" ? 0.7 : 0.5}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

// Componente de geometría flotante (icosaedros)
function FloatingGeometry({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()
  
  const geometryCount = isMobile ? 2 : 5
  
  const geometries = useMemo(() => {
    return Array.from({ length: geometryCount }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      scale: 0.4 + Math.random() * 0.4,
    }))
  }, [geometryCount])

  const color = theme === "dark" 
    ? new THREE.Color(0x16a34a) // Verde secundario en dark mode
    : new THREE.Color(0x5ba3b8) // Azul secundario en light mode

  return (
    <>
      {geometries.map((geo, i) => (
        <FloatingMesh
          key={i}
          position={geo.position}
          rotation={geo.rotation}
          scale={geo.scale}
          color={color}
          delay={i * 0.5}
        />
      ))}
    </>
  )
}

function FloatingMesh({
  position,
  rotation,
  scale,
  color,
  delay,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  color: THREE.Color
  delay: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * (0.15 + delay * 0.05)
      meshRef.current.rotation.y += delta * (0.2 + delay * 0.05)
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.02
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.25}
        wireframe
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  )
}

// Componente principal del fondo Three.js
export default function ThreeBackground() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: !isMobile, // Desactivar antialiasing en móviles para mejor rendimiento
          powerPreference: isMobile ? "low-power" : "high-performance",
          preserveDrawingBuffer: false, // Mejor rendimiento
        }}
        dpr={isMobile ? (typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1) : 2} // Limitar DPR en móviles
        performance={{ min: isMobile ? 0.5 : 0.8 }} // Ajustar rendimiento
        frameloop="always"
      >
        {/* Iluminación suave y dinámica */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />

        {/* Partículas flotantes */}
        <FloatingParticles isMobile={isMobile} />

        {/* Geometrías flotantes */}
        <FloatingGeometry isMobile={isMobile} />
      </Canvas>
    </div>
  )
}

