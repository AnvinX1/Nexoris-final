"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "John Doe",
    quote: "Working with Nexoris has been a game-changer for our operations. Their technology solutions have streamlined our processes and enhanced our productivity significantly.",
  },
  {
    name: "Emily Smith",
    quote: "I highly recommend Nexoris for their innovative approach to digital transformation. They have transformed the way we work and improved our efficiency across all departments.",
  },
  {
    name: "Raj Patel",
    quote: "Nexoris's technology solutions have exceeded our expectations. Their team is dedicated, knowledgeable, and committed to delivering top-notch services that drive real results.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            Our clients share their experiences of working with us and the impact our technology solutions have had on their businesses.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="space-y-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="py-8 md:py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Name Column */}
                <div className="md:col-span-1">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                </div>
                
                {/* Quote Column */}
                <div className="md:col-span-2">
                  <blockquote className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
              
              {/* Horizontal Divider (except for last item) */}
              {index < testimonials.length - 1 && (
                <div className="w-full h-px bg-border mt-8 md:mt-12"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
