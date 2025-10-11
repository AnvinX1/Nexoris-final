"use client"

import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById("solutions")
    solutionsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden min-h-[80vh] md:min-h-screen flex flex-col justify-between">
      <div className="flex-1"></div>
      <div className="flex items-center justify-center">
        <ParticleTextEffect words={["NEXORIS", "TECH", "SOLUTIONS", "INNOVATION"]} />
      </div>
      <div className="flex-1"></div>

      <div className="container mx-auto text-center relative z-10 pb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 text-balance px-4">
            Transform Your Business with{" "}
            <span className="text-muted-foreground">Cutting-Edge Technology Solutions</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background group w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Get a Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-accent bg-transparent w-full sm:w-auto"
              onClick={scrollToSolutions}
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
