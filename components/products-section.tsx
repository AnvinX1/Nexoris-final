"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Cloud, Database, Shield, Cpu, Smartphone, Zap } from "lucide-react"

const mainProducts = [
  {
    id: 1,
    title: "EV Slot Booking App",
    description: "Revolutionary electric vehicle charging station booking platform that connects EV owners with charging stations, providing real-time availability and seamless booking experience.",
    icon: Cloud,
    number: "01",
    featured: true,
  },
  {
    id: 2,
    title: "NexAnalyzer",
    description: "Advanced data visualization tool that transforms complex data into actionable insights through interactive dashboards, charts, and real-time analytics for informed decision making.",
    icon: Database,
    number: "02",
    featured: false,
  },
  {
    id: 3,
    title: "Homeease",
    description: "Comprehensive local services platform connecting communities with trusted service providers. Better than Urban Company - designed specifically for local communities with personalized service delivery.",
    icon: Smartphone,
    number: "03",
    featured: false,
  },
  {
    id: 4,
    title: "Autonomous Attendance System",
    description: "AI-powered attendance management system that automatically tracks employee presence using facial recognition and advanced analytics, eliminating manual processes.",
    icon: Cpu,
    number: "04",
    featured: false,
  },
  {
    id: 5,
    title: "Firm AI & Law Firm Tutor",
    description: "Complete legal technology suite combining intelligent legal assistance platform with comprehensive learning system. Features case analysis, document automation, legal research, and interactive courses for legal professionals.",
    icon: Shield,
    number: "05",
    featured: true,
  },
]

const smallBusinessProducts = [
  {
    id: 1,
    title: "POS System",
    description: "Complete point-of-sale solution for small businesses with inventory management, sales tracking, and customer analytics.",
    icon: Cpu,
  },
  {
    id: 2,
    title: "Leave Management System",
    description: "Streamlined employee leave tracking and approval system with automated workflows and comprehensive reporting.",
    icon: Shield,
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-left mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm md:text-base mb-2">Our Products</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            What We Offer
          </h2>
        </motion.div>

        {/* Main Products Section */}
        <div className="mb-16 md:mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Main Products
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions designed to transform industries and enhance user experiences
            </p>
          </motion.div>

          {/* Top Row - Featured Products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {mainProducts.filter(product => product.featured).map((product, index) => (
              <motion.div
                key={product.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Featured Product Card - Large */}
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 h-full hover:border-primary/50 transition-all duration-500 group-hover:shadow-2xl">
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center">
                        <product.icon className="w-8 h-8 text-foreground" />
                      </div>
                      <span className="text-4xl font-bold text-muted-foreground/20">{product.number}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg flex-grow">
                      {product.description}
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 group-hover:scale-105 transition-all duration-300"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - Regular Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainProducts.filter(product => !product.featured).map((product, index) => (
              <motion.div
                key={product.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Regular Product Card */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 h-full hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <product.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-center mb-4">
                    <span className="text-muted-foreground text-sm font-medium">{product.number}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground text-center mb-4">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-center text-sm">
                    {product.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 text-center">
                    <button 
                      className="text-primary hover:text-primary/80 text-sm font-medium group-hover:translate-x-1 transition-all duration-200"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Small Business Solutions Section */}
        <div className="border-t border-border/50 pt-16 md:pt-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Small Business Solutions
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential tools and systems designed to help small businesses grow and operate efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
            {smallBusinessProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Product Card */}
                <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 md:p-8 h-full hover:border-primary/20 transition-all duration-300 group-hover:shadow-md">
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <product.icon className="w-5 h-5 text-foreground" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground text-center mb-4">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-center text-sm">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
