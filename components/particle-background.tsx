"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
}

interface ParticleBackgroundProps {
  particleCount?: number
  className?: string
}

export function ParticleBackground({ particleCount = 50, className = "" }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark")
    } else {
      if (typeof document !== "undefined") {
        setIsDark(document.documentElement.classList.contains("dark"))
      }
    }
  }, [resolvedTheme])

  const createParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const particles: Particle[] = []
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        life: Math.random() * 100,
        maxLife: 100
      })
    }

    particlesRef.current = particles
  }

  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas with motion blur effect
    ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const particles = particlesRef.current

    particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Update life
      particle.life -= 0.5
      if (particle.life <= 0) {
        particle.life = particle.maxLife
        particle.x = Math.random() * canvas.width
        particle.y = Math.random() * canvas.height
      }

      // Calculate opacity based on life
      const lifeRatio = particle.life / particle.maxLife
      const currentOpacity = particle.opacity * lifeRatio

      // Draw particle
      const color = isDark ? '255, 255, 255' : '0, 0, 0'
      ctx.fillStyle = `rgba(${color}, ${currentOpacity})`
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()

      // Add subtle glow
      ctx.shadowColor = isDark ? 'white' : 'black'
      ctx.shadowBlur = 3
      ctx.fill()
      ctx.shadowBlur = 0

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width
      if (particle.x > canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = canvas.height
      if (particle.y > canvas.height) particle.y = 0
    })

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mounted, particleCount, isDark])

  if (!mounted) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ background: 'transparent' }}
    />
  )
}
