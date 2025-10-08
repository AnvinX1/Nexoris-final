"use client"

import { motion } from "framer-motion"
import { Cloud, Code, Cog, Shield, Database, Smartphone } from "lucide-react"

const solutions = [
  {
    title: "Strategy",
    subtitle: "Tailored Solutions",
    description: "Our strategic consulting services offer tailored solutions to address your specific business challenges and opportunities. We work closely with you to develop innovative strategies that drive growth and success.",
  },
  {
    title: "Consulting",
    subtitle: "Expert Guidance",
    description: "Our consulting services provide expert guidance to help you navigate complex business landscapes and make informed decisions. We are committed to empowering your business with the knowledge and tools needed for success.",
  },
  {
    title: "Growth",
    subtitle: "Sustainable Expansion",
    description: "Achieve sustainable expansion and maximize your competitive edge with our growth-focused services. We help businesses like yours thrive in today's dynamic market environment.",
  },
  {
    title: "Innovation",
    subtitle: "Creative Solutions",
    description: "Embrace innovation and drive business transformation with our creative solutions. We empower you to stay ahead of the curve and lead with groundbreaking strategies that inspire growth.",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Services
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Main Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {solution.title}
              </h3>
              
              {/* Horizontal Divider */}
              <div className="w-full h-px bg-foreground"></div>
              
              {/* Subtitle */}
              <h4 className="text-lg md:text-xl font-medium text-foreground">
                {solution.subtitle}
              </h4>
              
              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
