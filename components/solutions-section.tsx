"use client"

import { motion } from "framer-motion"
import { Cloud, Code, Cog, Shield, Database, Smartphone } from "lucide-react"

const solutions = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with AWS, Azure, and Google Cloud for optimal performance and reliability.",
    features: ["Multi-cloud Strategy", "Auto-scaling", "Cost Optimization"],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored applications built with modern frameworks to meet your unique business requirements.",
    features: ["Agile Development", "Modern Stack", "API Integration"],
  },
  {
    icon: Cog,
    title: "DevOps & Automation",
    description: "Streamline your development pipeline with CI/CD, containerization, and infrastructure as code.",
    features: ["CI/CD Pipelines", "Docker & K8s", "Infrastructure as Code"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your data and infrastructure from evolving threats.",
    features: ["Threat Detection", "Compliance", "Security Audits"],
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and business intelligence.",
    features: ["Big Data Processing", "ML Models", "Real-time Analytics"],
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter"],
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
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
            className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Solutions
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Comprehensive technology services designed to accelerate your digital transformation journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="group relative bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 hover:border-border/50 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-border rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-border rounded-bl-2xl" />

              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/50 border border-border mb-4 md:mb-6 group-hover:bg-accent group-hover:border-border/50 transition-all duration-500">
                  <solution.icon className="h-7 w-7 md:h-8 md:w-8 text-foreground" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-foreground transition-colors">
                  {solution.title}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6 group-hover:text-foreground/80 transition-colors">
                  {solution.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, idx) => (
                    <motion.span
                      key={feature}
                      className="text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-accent/50 border border-border text-foreground/80 group-hover:bg-accent group-hover:border-border/50 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 md:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
            Need a custom solution tailored to your business?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-accent/50 border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
