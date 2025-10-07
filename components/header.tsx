"use client"

import { useState, useEffect } from "react"
import { NexorisLogo } from "./nexoris-logo"
import { Button } from "./ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    setMounted(true)
    // Use resolvedTheme from next-themes for consistency
    if (resolvedTheme) {
      setCurrentTheme(resolvedTheme as "light" | "dark")
    }
  }, [resolvedTheme])

  useEffect(() => {
    if (mounted) {
      console.log("[v0] Theme changed - theme:", theme, "resolvedTheme:", resolvedTheme)
      console.log("[v0] HTML class:", document.documentElement.className)
    }
  }, [theme, resolvedTheme, mounted])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleThemeToggle = () => {
    if (typeof window === "undefined") return
    
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    setCurrentTheme(newTheme)
    setTheme(newTheme) // Use the next-themes setTheme function
  }

  return (
    <header
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out w-[calc(100%-2rem)] max-w-5xl
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div
        className={`
          relative flex items-center justify-between gap-4 px-4 md:px-6 py-3 rounded-2xl border transition-all duration-300
          ${
            isScrolled
              ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-2xl"
              : "bg-background/60 backdrop-blur-lg border-border/30 shadow-lg"
          }
        `}
      >
        <div className="transform transition-transform duration-200 hover:scale-105">
          <NexorisLogo />
        </div>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <a
            href="#about"
            aria-label="Go to About section"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group px-3 py-1 rounded-lg hover:bg-accent/50"
          >
            About
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-4"></span>
          </a>
          <a
            href="#solutions"
            aria-label="Go to Solutions section"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group px-3 py-1 rounded-lg hover:bg-accent/50"
          >
            Solutions
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-4"></span>
          </a>
          <a
            href="#team"
            aria-label="Go to Team section"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group px-3 py-1 rounded-lg hover:bg-accent/50"
          >
            Team
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-4"></span>
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {mounted && (
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 rounded-xl border border-border/50 hover:border-border p-2"
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 rounded-xl border border-border/50 hover:border-border"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-lg rounded-xl"
            onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
          >
            Our Solutions
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl border bg-background/80 backdrop-blur-lg border-border/50 shadow-lg relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-border/50 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-border/50 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-border/50 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-border/50 rounded-br-2xl" />

          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-accent/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#solutions"
              className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-accent/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#team"
              className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-accent/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </a>
            <div className="border-t border-border/50 my-2" />
            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                className="justify-start text-muted-foreground hover:text-foreground hover:bg-accent/50 border border-border/50"
                onClick={handleThemeToggle}
              >
                {currentTheme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="justify-start text-muted-foreground hover:text-foreground hover:bg-accent/50 border border-border/50"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                setIsMobileMenuOpen(false)
              }}
            >
              Contact Us
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })
                setIsMobileMenuOpen(false)
              }}
            >
              Our Solutions
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
