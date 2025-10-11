"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function FindUsSection() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Town Hall, Coimbatore",
      subValue: "Tamil Nadu, India",
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

  return (
    <section id="find-us" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-white/20" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Find Us
            </h2>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Visit our office in the heart of Coimbatore
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            className="lg:col-span-1 space-y-3 md:space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 md:p-6 hover:bg-card/70 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-border group-hover:border-border/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-border group-hover:border-border/50 transition-colors" />

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2.5 md:p-3 bg-accent/50 rounded-lg border border-border group-hover:bg-accent transition-colors flex-shrink-0">
                    <info.icon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-sm md:text-base text-foreground font-medium mb-1">{info.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground/70">{info.subValue}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden border border-border bg-card/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-border z-10" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-border z-10" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-border z-10" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-border z-10" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2615!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%20Town%20Hall!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nexoris Location - Coimbatore Town Hall"
                className="grayscale contrast-125 opacity-90 md:h-[600px] dark:invert-[0.9]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
