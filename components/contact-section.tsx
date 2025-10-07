"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
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
            <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">Contact Us</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Get In Touch
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Ready to transform your business? Let's start a conversation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 hover:border-border/50 transition-all duration-300">
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-background/20 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border/50 focus:bg-background/30 transition-all text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background/20 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border/50 focus:bg-background/30 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-background/20 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border/50 focus:bg-background/30 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-background/20 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border/50 focus:bg-background/30 transition-all resize-none text-sm md:text-base"
                    placeholder="Tell us about your project and requirements..."
                  />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group/btn" size="lg">
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                lines: ["Town Hall, Coimbatore", "Tamil Nadu, India"],
                delay: 0.1,
              },
              {
                icon: Phone,
                title: "Call Us",
                lines: ["+91 422 123 4567", "Mon-Fri 9AM-6PM IST"],
                delay: 0.2,
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["contact@nexoris.com", "support@nexoris.com"],
                delay: 0.3,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                viewport={{ once: true }}
              >
                <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-xl p-5 md:p-6 hover:border-border/50 hover:bg-card/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-border rounded-tr-2xl" />

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-accent/50 p-2.5 md:p-3 rounded-lg border border-border group-hover:bg-accent group-hover:border-border/50 transition-all flex-shrink-0">
                      <item.icon className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">{item.title}</h3>
                      {item.lines.map((line, i) => (
                        <p
                          key={i}
                          className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="relative bg-gradient-to-br from-accent/50 to-accent/20 backdrop-blur-sm border border-border rounded-xl p-5 md:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">Business Hours</h3>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Saturday</span>
                  <span className="text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Sunday</span>
                  <span className="text-muted-foreground/50">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
