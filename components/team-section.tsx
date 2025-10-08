"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    image: "/team-member-1.jpg",
    linkedin: "#",
  },
  {
    name: "Ashley Stewart",
    role: "Community Manager",
    image: "/team-member-2.jpg",
    linkedin: "#",
  },
  {
    name: "Arun Patel",
    role: "Head of Engineering",
    image: "/team-member-3.jpg",
    linkedin: "#",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Operations",
    image: "/team-member-4.jpg",
    linkedin: "#",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-20 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Top Section - Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          
          {/* Left Section - Text Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-12 h-px bg-primary mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              OUR TEAM
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Meet the talented individuals who make Nexoris a leader in technology innovation. Our diverse team brings together expertise from around the world to deliver exceptional solutions.
            </p>
          </motion.div>

          {/* Right Section - Navigation Dots */}
          <motion.div
            className="flex justify-center lg:justify-end items-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-2">
              <div className="w-2 h-2 rounded-full bg-foreground"></div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Team Member Portraits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                {/* Placeholder for team member image */}
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-foreground/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                
                {/* Overlay with name and role */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-white/80">{member.role}</p>
                  </div>
                </div>
                
                {/* LinkedIn overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
