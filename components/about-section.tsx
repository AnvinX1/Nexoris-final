"use client"

import { motion } from "framer-motion"
import { Shield, Zap, DollarSign } from "lucide-react"
import { ParticleBackground } from "./particle-background"

export function AboutSection() {
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Expert & Reliable Service",
      description: "With years of experience, we provide top-quality technology solutions for businesses of all sizes, always ensuring security, efficiency, and innovation in every project we deliver.",
    },
    {
      icon: Zap,
      title: "Quick & Efficient Response",
      description: "We value your time and business continuity. Our expert team responds quickly to technology challenges, minimizing downtime and implementing solutions fast with precision.",
    },
    {
      icon: DollarSign,
      title: "Transparent & Fair Pricing",
      description: "We believe in honesty and clarity. Enjoy upfront, transparent pricing with no hidden fees, so you know exactly what you're investing in for your business transformation.",
    },
  ]

  return (
    <section id="about" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
      {/* Subtle Particle Background */}
      <ParticleBackground particleCount={30} className="opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Top Section - Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Trusted Experts for All Your Technology Needs
          </p>
        </motion.div>

        {/* Horizontal Divider */}
        <motion.div
          className="w-full h-px bg-foreground mb-12 md:mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative px-8 py-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Vertical Divider (except for last column) */}
              {index < whyChooseUs.length - 1 && (
                <div className="absolute right-0 top-0 bottom-0 w-px bg-foreground hidden md:block" />
              )}

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <item.icon className="w-12 h-12 text-foreground" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}