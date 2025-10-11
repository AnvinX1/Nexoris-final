"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Town Hall, Coimbatore",
      subValue: "Tamil Nadu, India 641001",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8111867771",
      subValue: "Mon-Fri, 9AM-6PM",
    },
    {
      icon: Mail,
      label: "Email",
      value: "admin@nexoris.in",
      subValue: "We reply within 24hrs",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon - Fri: 9AM - 6PM",
      subValue: "Sat: 10AM - 2PM",
    },
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "#", description: "Professional Network" },
    { name: "Twitter", icon: Twitter, url: "#", description: "Latest Updates" },
    { name: "Facebook", icon: Facebook, url: "#", description: "Community" },
    { name: "Instagram", icon: Instagram, url: "#", description: "Visual Stories" },
    { name: "YouTube", icon: Youtube, url: "#", description: "Video Content" },
  ]

  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl">

        {/* Top Section - GET IN TOUCH */}
        <div className="relative py-16 md:py-20 px-8 md:px-12 rounded-xl mb-8 bg-foreground">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

            {/* Left Section - Title */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background">
                GET IN TOUCH
              </h2>
            </motion.div>

            {/* Middle Section - Contact Information */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Email Column */}
                <div className="text-center">
                  <div className="w-full h-px bg-background mb-4"></div>
                  <div className="space-y-2">
                    <p className="text-sm text-background">admin@nexoris.in</p>
                    <p className="text-sm text-background">admin@nexoris.in</p>
                  </div>
                </div>

                {/* Phone Column */}
                <div className="text-center">
                  <div className="w-full h-px bg-background mb-4"></div>
                  <div className="space-y-2">
                    <p className="text-sm text-background">Tel: +91 8111867771</p>
                    <p className="text-sm text-background">Mobile: +91 8111867771</p>
                  </div>
                </div>

                {/* Address Column */}
                <div className="text-center">
                  <div className="w-full h-px bg-background mb-4"></div>
                  <div className="space-y-2">
                    <p className="text-sm text-background">Town Hall, Coimbatore</p>
                    <p className="text-sm text-background">Tamil Nadu, India 641001</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Social Icons */}
            <motion.div
              className="lg:col-span-1 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-background/80 transition-colors"
                  >
                    <social.icon className="w-4 h-4 text-foreground" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Middle Section - Contact Info Cards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/70 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-border group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-border group-hover:border-primary transition-colors" />

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-base text-foreground font-medium mb-1">{info.value}</p>
                    <p className="text-sm text-muted-foreground/70">{info.subValue}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section - Full Theater Mode Map */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-[70vh] md:h-[80vh] rounded-xl overflow-hidden bg-muted relative">
            {/* Map Overlay Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-nexoris">NEXORIS OFFICES</h3>
                  <p className="text-white/80">Town Hall, Coimbatore • Tamil Nadu, India</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">Find Us</span>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2615!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%20Town%20Hall!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nexoris Location - Coimbatore Town Hall"
              className="grayscale contrast-125 opacity-90 dark:invert-[0.9]"
            />

            {/* Map Overlay Footer */}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div className="text-white/80 text-sm">
                  <p>📍 Located in the heart of Coimbatore</p>
                  <p>🚗 Easy access via public transport</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors">
                    Get Directions
                  </button>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
