"use client"

import { motion } from "framer-motion"
import { Code2, Cloud, Zap, Shield } from "lucide-react"

export function AboutSection() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "24/7", label: "Support" },
  ]

  const highlights = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored software solutions built to your exact specifications",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud architecture for modern businesses",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Fast turnaround times without compromising on quality",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols protecting your data",
    },
  ]

  return (
    <section id="about" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About Nexoris
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            A leading technology solutions company transforming businesses through innovative software, cloud
            infrastructure, and enterprise consulting services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-6 hover:border-foreground/30 transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-border rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-border rounded-bl-2xl" />

              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 transition-all duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="group relative bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 hover:border-foreground/30 transition-all duration-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index + 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-border rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-border rounded-bl-2xl" />

              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-muted border border-border group-hover:bg-accent group-hover:border-foreground/20 transition-all duration-500 flex-shrink-0">
                  <highlight.icon className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-foreground transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative group bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 hover:border-foreground/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-border rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-border rounded-bl-2xl" />

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed relative z-10">
              Based in Coimbatore, our team of skilled engineers and consultants work closely with clients to understand
              their unique challenges and deliver tailored solutions that drive growth, efficiency, and innovation in
              the digital age.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
