"use client"

import { useState, useEffect } from "react"
import { NexorisLogo } from "./nexoris-logo"
import { Button } from "./ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark")
  const router = useRouter()
  const pathname = usePathname()

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

  const handleNavigation = (sectionId: string) => {
    if (pathname === '/') {
      // We're on the home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // We're on a different page, navigate to home with section
      router.push(`/#${sectionId}`)
    }
    setIsMobileMenuOpen(false)
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
          relative flex items-center justify-between gap-4 px-6 md:px-8 py-4 rounded-full border transition-all duration-500 ease-out
          ${
            isScrolled
              ? "bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-2xl border-border/60 shadow-2xl shadow-primary/10"
              : "bg-gradient-to-r from-background/80 via-background/70 to-background/80 backdrop-blur-xl border-border/40 shadow-xl shadow-primary/5"
          }
        `}
      >
        <button 
          onClick={() => router.push('/')}
          className="transform transition-transform duration-200 hover:scale-105"
          aria-label="Go to Home page"
        >
          <NexorisLogo />
        </button>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          <button
            onClick={() => handleNavigation('about')}
            aria-label="Go to About section"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group px-4 py-2 rounded-full hover:bg-accent/50 hover:shadow-md hover:scale-105"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation('vision')}
            aria-label="Go to Vision section"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group px-4 py-2 rounded-full hover:bg-accent/50 hover:shadow-md hover:scale-105"
          >
            Vision
          </button>
          <button
            onClick={() => handleNavigation('products')}
            aria-label="Go to Products section"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group px-4 py-2 rounded-full hover:bg-accent/50 hover:shadow-md hover:scale-105"
          >
            Products
          </button>
          <button
            onClick={() => handleNavigation('careers')}
            aria-label="Go to Careers section"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group px-4 py-2 rounded-full hover:bg-accent/50 hover:shadow-md hover:scale-105"
          >
            Careers
          </button>
          <button
            onClick={() => handleNavigation('team')}
            aria-label="Go to Team section"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 group px-4 py-2 rounded-full hover:bg-accent/50 hover:shadow-md hover:scale-105"
          >
            Team
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 rounded-full border border-border/50 hover:border-border hover:shadow-md hover:scale-110 p-2"
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 rounded-full border border-border/50 hover:border-border hover:shadow-md hover:scale-105 px-4 py-2"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 rounded-full px-4 py-2 font-medium"
            onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
          >
            Our Solutions
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent/50 hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 p-6 rounded-3xl border bg-background/90 backdrop-blur-xl border-border/50 shadow-xl relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-border/50 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-border/50 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-border/50 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-border/50 rounded-br-2xl" />

          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            <button
              onClick={() => handleNavigation('about')}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 px-4 py-3 rounded-full hover:bg-accent/50 hover:scale-105 text-left"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('vision')}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 px-4 py-3 rounded-full hover:bg-accent/50 hover:scale-105 text-left"
            >
              Vision
            </button>
            <button
              onClick={() => handleNavigation('products')}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 px-4 py-3 rounded-full hover:bg-accent/50 hover:scale-105 text-left"
            >
              Products
            </button>
            <button
              onClick={() => handleNavigation('careers')}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 px-4 py-3 rounded-full hover:bg-accent/50 hover:scale-105 text-left"
            >
              Careers
            </button>
            <button
              onClick={() => handleNavigation('team')}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 px-4 py-3 rounded-full hover:bg-accent/50 hover:scale-105 text-left"
            >
              Team
            </button>
            <div className="border-t border-border/50 my-2" />
            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                className="justify-start text-muted-foreground hover:text-foreground hover:bg-accent/50 border border-border/50 rounded-full transition-all duration-300 hover:scale-105"
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
              className="justify-start text-muted-foreground hover:text-foreground hover:bg-accent/50 border border-border/50 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                setIsMobileMenuOpen(false)
              }}
            >
              Contact Us
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full transition-all duration-300 hover:scale-105 font-medium"
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
