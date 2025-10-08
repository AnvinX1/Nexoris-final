"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleTextEffect } from "@/components/particle-text-effect"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

const jobOpenings = [
  {
    title: "Senior Software Engineer",
    location: "Coimbatore, India",
    type: "Full-time",
    experience: "3-5 years",
    description: "We're looking for a talented senior software engineer to lead our development team. You'll work on cutting-edge projects using modern technologies and frameworks. Experience with React, Node.js, and cloud platforms required.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving and communication skills"
    ]
  },
  {
    title: "Data Scientist",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our data science team to build machine learning models and analytics solutions. We need someone with experience in Python, TensorFlow, and big data technologies to help drive our AI initiatives.",
    requirements: [
      "Master's degree in Data Science, Statistics, or related field",
      "2+ years of experience in machine learning and data analysis",
      "Proficiency in Python, R, and SQL",
      "Experience with TensorFlow, PyTorch, or similar frameworks",
      "Strong analytical and statistical skills"
    ]
  },
  {
    title: "DevOps Engineer",
    location: "Coimbatore, India",
    type: "Full-time",
    experience: "2-4 years",
    description: "Help us scale our infrastructure and deployment pipelines. We're seeking a DevOps engineer with experience in AWS, Docker, Kubernetes, and CI/CD automation to support our growing platform.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of experience in DevOps or infrastructure",
      "Experience with AWS, Docker, and Kubernetes",
      "Knowledge of CI/CD pipelines and automation",
      "Strong scripting skills (Bash, Python, or similar)"
    ]
  },
  {
    title: "Frontend Developer Intern",
    location: "Coimbatore, India",
    type: "Internship",
    experience: "0-1 years",
    description: "Join our frontend team as an intern and work on exciting web applications. This is a great opportunity to learn modern frontend technologies and gain real-world experience.",
    requirements: [
      "Currently pursuing or recently completed Computer Science degree",
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with React or similar frameworks preferred",
      "Strong desire to learn and grow",
      "Good communication and teamwork skills"
    ]
  },
  {
    title: "Backend Developer Intern",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description: "Work with our backend team to build scalable APIs and services. This internship offers hands-on experience with modern backend technologies and cloud platforms.",
    requirements: [
      "Currently pursuing or recently completed Computer Science degree",
      "Basic knowledge of programming languages (Python, Java, or Node.js)",
      "Understanding of databases and SQL",
      "Interest in cloud technologies and APIs",
      "Eagerness to learn and contribute to real projects"
    ]
  }
]

export default function CareersPage() {
  const scrollToOpenings = () => {
    const openingsSection = document.getElementById("openings")
    openingsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 relative overflow-hidden min-h-[80vh] md:min-h-screen flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <ParticleTextEffect words={["NEXORIS", "CAREERS", "JOIN US", "GROW WITH US"]} />
        </div>

        <div className="container mx-auto text-center relative z-10 pb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 text-balance px-4">
              Build Your Future with{" "}
              <span className="text-muted-foreground">Innovative Technology Solutions</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background group w-full sm:w-auto"
                onClick={scrollToOpenings}
              >
                View Openings
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-accent bg-transparent w-full sm:w-auto"
                onClick={() => window.open('mailto:careers@nexoris.com', '_blank')}
              >
                Send Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          
          {/* Top Section - Header and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            
            {/* Left Section - Text Content */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Vertical Separator */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-foreground"></div>
              
              <div className="pl-8">
                <motion.div
                  className="text-sm uppercase tracking-wider text-muted-foreground mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  JOB OPENINGS
                </motion.div>
                
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Changing the future of technology means thinking differently.
                </motion.h2>
                
                <motion.p
                  className="text-base md:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  We're building the next generation of technology solutions that will transform how businesses operate. Join our team of innovators, creators, and problem-solvers who are passionate about making a real impact in the digital world.
                </motion.p>
              </div>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-foreground/10 flex items-center justify-center">
                      <Users className="w-12 h-12 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Join Our Team</h3>
                    <p className="text-muted-foreground">Be part of something bigger</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.slice(0, 2).map((job, index) => (
              <motion.div
                key={job.title}
                className="border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:border-foreground/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-wide">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  
                  <button
                    onClick={() => window.open('mailto:careers@nexoris.com?subject=Application for ' + job.title, '_blank')}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded-lg text-sm group"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Send CV Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border border-border rounded-xl p-8 md:p-12 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Don't find what you're looking for?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your CV and we'll keep you in mind for future opportunities that match your skills and interests.
              </p>
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background group"
                onClick={() => window.open('mailto:careers@nexoris.com?subject=General Application - CV Submission', '_blank')}
              >
                Send Us Your CV
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
