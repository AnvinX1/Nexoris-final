"use client"

import { motion } from "framer-motion"
import { Cloud, BarChart3, Layers, Users, ArrowUp, Database, Cpu, Network } from "lucide-react"
import { ParticleBackground } from "./particle-background"

const visionFeatures = [
  {
    icon: Cloud,
    title: "Cloud Analytics Modernization",
    description: "Transform your data infrastructure with cutting-edge cloud solutions that scale with your business needs and provide real-time insights.",
  },
  {
    icon: BarChart3,
    title: "Data Science Acceleration",
    description: "Leverage advanced analytics and machine learning to unlock hidden patterns in your data and drive intelligent decision-making.",
  },
  {
    icon: Layers,
    title: "Versatility in Application",
    description: "Our flexible solutions adapt to your unique business requirements, ensuring seamless integration across all your systems and processes.",
  },
  {
    icon: Users,
    title: "Full Customer Experience Service",
    description: "Deliver exceptional customer experiences through comprehensive service design, from initial contact to long-term relationship management.",
  },
]

export function VisionSection() {
  return (
    <section id="vision" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden min-h-screen">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 min-h-[80vh]">
          
          {/* Left Section - Hero Style with Particle Background */}
          <motion.div
            className="relative flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Particle Background */}
            <ParticleBackground particleCount={40} className="opacity-60" />
            
            <div className="relative z-10">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Let Your Data Take Your Business to Higher Grounds
              </motion.h2>
              
              <motion.p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Transform your business with cutting-edge data solutions that drive innovation, 
                efficiency, and growth. Our comprehensive approach ensures your data becomes 
                your most powerful competitive advantage.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Section - Feature Cards */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visionFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Progress line */}
                  <div className="w-full h-px bg-gradient-to-r from-primary/50 to-transparent mb-4"></div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
