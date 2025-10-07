"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Users, Zap, Shield, TrendingUp } from "lucide-react"

const visionData = {
  mission: {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver innovative technology solutions that empower businesses to achieve their full potential and stay ahead in a rapidly evolving digital landscape.",
    highlights: ["Innovation First", "Client Success", "Digital Excellence"],
  },
  vision: {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "To be the most trusted technology partner for businesses worldwide, recognized for excellence, innovation, and transformative impact.",
    highlights: ["Global Leadership", "Trusted Partner", "Transformative Impact"],
  },
}

const coreValues = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparency and honesty",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Achieving more together through teamwork",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "Delivering quality in everything we do",
  },
]

export function VisionSection() {
  return (
    <section id="vision" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-20 h-px bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vision & Values
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Guided by purpose, driven by innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {Object.values(visionData).map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative"
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 hover:border-border/50 transition-all duration-500 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-border rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-border rounded-bl-2xl" />

                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/50 border border-border mb-4 md:mb-6 group-hover:bg-accent group-hover:border-border/50 transition-all duration-500">
                    <item.icon className="h-7 w-7 md:h-8 md:w-8 text-foreground" />
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-base md:text-lg group-hover:text-foreground/80 transition-colors">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm bg-accent/50 border border-border rounded-full text-foreground/80 group-hover:bg-accent group-hover:border-border/50 transition-all duration-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12 px-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="group relative bg-card/40 backdrop-blur-sm border border-border rounded-xl p-5 md:p-6 hover:bg-accent/50 hover:border-border/50 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-border rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-border rounded-bl-xl" />

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-accent/50 border border-border flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent group-hover:border-border/50 transition-all duration-300">
                    <value.icon className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
