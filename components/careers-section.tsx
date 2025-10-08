"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { useState } from "react"

const jobOpenings = [
  {
    title: "SOFTWARE ENGINEER",
    location: "Coimbatore, India",
    description: "We're looking for a talented software engineer to join our development team. You'll work on cutting-edge projects using modern technologies and frameworks. Experience with React, Node.js, and cloud platforms preferred.",
  },
  {
    title: "DATA SCIENTIST",
    location: "Remote",
    description: "Join our data science team to build machine learning models and analytics solutions. We need someone with experience in Python, TensorFlow, and big data technologies to help drive our AI initiatives.",
  },
  {
    title: "DEVOPS ENGINEER",
    location: "Coimbatore, India",
    description: "Help us scale our infrastructure and deployment pipelines. We're seeking a DevOps engineer with experience in AWS, Docker, Kubernetes, and CI/CD automation to support our growing platform.",
  },
]

export function CareersSection() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const currentJob = jobOpenings[currentJobIndex]

  const scrollToCareers = () => {
    window.location.href = '/careers'
  }

  const nextJob = () => {
    setCurrentJobIndex((prev) => (prev + 1) % jobOpenings.length)
  }

  const prevJob = () => {
    setCurrentJobIndex((prev) => (prev - 1 + jobOpenings.length) % jobOpenings.length)
  }

  return (
    <section id="careers" className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Content Block - Careers Overview */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-sm uppercase tracking-wider text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              CAREERS
            </motion.div>
            
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We're looking for innovative talent to join our team. See all positions and submit your CV.
            </motion.h2>
            
            <motion.button
              onClick={scrollToCareers}
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded-lg w-fit group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              Openings
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Content Block - Job Opening Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="border border-border rounded-xl p-6 md:p-8 bg-card/50 backdrop-blur-sm">
              <motion.div
                key={currentJobIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  {currentJob.title}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  {currentJob.location}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {currentJob.description}
                </p>
                
                <button
                  onClick={scrollToCareers}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded-lg text-sm group"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
              
              {/* Pagination Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {jobOpenings.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentJobIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentJobIndex 
                        ? 'bg-foreground' 
                        : 'bg-muted-foreground hover:bg-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
