"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    image: "/professional-indian-male-ceo.jpg",
    linkedin: "#",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    image: "/professional-indian-female-cto.jpg",
    linkedin: "#",
  },
  {
    name: "Arun Patel",
    role: "Head of Engineering",
    image: "/professional-indian-male-engineer.jpg",
    linkedin: "#",
  },
  {
    name: "Meera Reddy",
    role: "Head of Operations",
    image: "/professional-indian-female-operations.jpg",
    linkedin: "#",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
            <div className="h-1 w-1 rounded-full bg-white/40" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3 md:mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Meet Our Team
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Experienced leaders driving innovation and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative border border-border rounded-lg p-5 md:p-6 bg-card/20 backdrop-blur-sm hover:bg-card/40 hover:border-border/50 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-border rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-border rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-border rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-border rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-border to-accent/50 p-[2px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img
                        src={member.image || "/placeholder.svg?height=96&width=96&query=team%20member%20portrait"}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement
                          target.onerror = null
                          target.src = "/team-member-portrait.png"
                        }}
                      />
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-full bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={member.linkedin}
                      className="bg-foreground text-background p-2 rounded-full hover:bg-foreground/90 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
