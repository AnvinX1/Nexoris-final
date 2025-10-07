"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "#", description: "Professional Network" },
  { name: "Twitter", icon: Twitter, url: "#", description: "Latest Updates" },
  { name: "Facebook", icon: Facebook, url: "#", description: "Community" },
  { name: "Instagram", icon: Instagram, url: "#", description: "Visual Stories" },
  { name: "YouTube", icon: Youtube, url: "#", description: "Video Content" },
]

export function SocialsSection() {
  return (
    <section id="socials" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-white/20" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Connect With Us
            </h2>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Stay connected and follow our journey across social platforms
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              aria-label={social.name}
            >
              <div className="relative bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-border transition-all duration-300 hover:bg-card/70 hover:border-border/50">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-border transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-border transition-all duration-300 group-hover:w-6 group-hover:h-6" />

                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/50 rounded-full blur-xl transition-all duration-300 group-hover:bg-accent" />
                    <social.icon className="relative h-8 w-8 md:h-10 md:w-10 text-foreground transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-semibold text-foreground mb-0.5 md:mb-1">{social.name}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground/70 transition-colors duration-300 group-hover:text-muted-foreground">
                      {social.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
