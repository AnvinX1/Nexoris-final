"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import PixelCard from "./ui/pixel-card"

const teamMembers = [
  {
    name: "Narendran G",
    role: "CEO",
    image: "/team-member-1.jpg",
    linkedin: "#",
  },
  {
    name: "Rathi",
    role: "Director",
    image: "/team-member-2.jpg",
    linkedin: "#",
  },
  {
    name: "Anvin P Shibu",
    role: "COO",
    image: "/team-member-3.jpg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PixelCard 
                variant="blue"
                className="w-full aspect-[3/4] rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                {/* Team Member Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                  {/* Avatar */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-foreground/10 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl font-bold text-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    {member.role}
                  </p>
                  
                  {/* LinkedIn Button */}
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors border border-primary/20"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
