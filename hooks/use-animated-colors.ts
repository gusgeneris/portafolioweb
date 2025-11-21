"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

// Paleta de colores para ciclar en modo oscuro
// Cada color está en formato HSL: [hue, saturation, lightness]
// Colores más masculinos: verdes, azules, naranjas y grises
const colorPalette = [
  { hue: 140, sat: 70, light: 20 }, // Verde esmeralda (color original)
  { hue: 200, sat: 70, light: 20 }, // Azul
  { hue: 180, sat: 60, light: 20 }, // Teal/verde azulado (más masculino que cyan)
  { hue: 210, sat: 40, light: 20 }, // Gris azulado/pizarra
  { hue: 30, sat: 70, light: 20 },  // Naranja/ámbar
  { hue: 150, sat: 65, light: 20 }, // Verde esmeralda oscuro
  { hue: 195, sat: 55, light: 20 }, // Azul teal oscuro
  { hue: 220, sat: 35, light: 20 }, // Gris azul acero
]

export function useAnimatedColors() {
  const { theme, resolvedTheme } = useTheme()
  const animationFrameRef = useRef<number>()
  const startTimeRef = useRef<number>(Date.now())
  const isDarkRef = useRef(false)

  useEffect(() => {
    // Determinar si el tema es oscuro
    const isDark = resolvedTheme === "dark" || theme === "dark"
    isDarkRef.current = isDark

    if (!isDark) {
      // Si no es modo oscuro, restaurar valores originales y cancelar animación
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      const root = document.documentElement
      root.style.setProperty("--primary", "190 32% 55%")
      root.style.setProperty("--secondary", "190 32% 35%")
      root.style.setProperty("--accent", "190 32% 75%")
      root.style.setProperty("--ring", "190 32% 45%")
      return
    }

    // Función de animación
    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTimeRef.current
      
      // Cambiar de color cada 4 segundos (4000ms)
      const colorDuration = 4000
      const progress = (elapsed % (colorDuration * colorPalette.length)) / colorDuration
      const currentIndex = Math.floor(progress)
      const nextIndex = (currentIndex + 1) % colorPalette.length
      const localProgress = progress - currentIndex

      const currentColor = colorPalette[currentIndex]
      const nextColor = colorPalette[nextIndex]

      // Interpolación suave entre colores
      const hue = currentColor.hue + (nextColor.hue - currentColor.hue) * easeInOutCubic(localProgress)
      const sat = currentColor.sat + (nextColor.sat - currentColor.sat) * easeInOutCubic(localProgress)
      const light = currentColor.light + (nextColor.light - currentColor.light) * easeInOutCubic(localProgress)

      // Actualizar variables CSS
      const root = document.documentElement
      // Primary: más claro (45% lightness) para mantener contraste
      root.style.setProperty("--primary", `${Math.round(hue)} ${Math.round(sat)}% 45%`)
      // Secondary y Accent: más oscuros (20% lightness)
      root.style.setProperty("--secondary", `${Math.round(hue)} ${Math.round(sat)}% ${Math.round(light)}%`)
      root.style.setProperty("--accent", `${Math.round(hue)} ${Math.round(sat)}% ${Math.round(light)}%`)
      // Ring: intermedio (45% lightness)
      root.style.setProperty("--ring", `${Math.round(hue)} ${Math.round(sat)}% 45%`)

      if (isDarkRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    // Iniciar animación
    startTimeRef.current = Date.now()
    animationFrameRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [theme, resolvedTheme])

  // Función de easing para transiciones suaves
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }
}

