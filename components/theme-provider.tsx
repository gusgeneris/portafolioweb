"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useAnimatedColors } from "@/hooks/use-animated-colors"

function AnimatedThemeWrapper({ children }: { children: React.ReactNode }) {
  useAnimatedColors()
  return <>{children}</>
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <AnimatedThemeWrapper>{children}</AnimatedThemeWrapper>
    </NextThemesProvider>
  )
}
