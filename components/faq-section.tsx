"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does Nexoris provide?",
    answer:
      "Nexoris is a comprehensive technology solutions provider specializing in cloud infrastructure, custom software development, DevOps automation, and enterprise IT consulting. We help businesses modernize their technology stack, build scalable applications, and optimize their development workflows.",
  },
  {
    question: "Do you offer custom development services?",
    answer:
      "Yes! We specialize in custom software development tailored to your specific business needs. Our team of experienced engineers can build web applications, mobile apps, APIs, microservices, and enterprise solutions using the latest technologies and best practices.",
  },
  {
    question: "How secure is your infrastructure?",
    answer:
      "Security is our top priority. We implement military-grade encryption, follow SOC 2 Type II compliance standards, conduct regular security audits, and offer features like multi-factor authentication, SSO integration, and DDoS protection. Our infrastructure is hosted in secure, redundant data centers with 99.9% uptime guarantee.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "We have extensive experience integrating with legacy systems, third-party APIs, and modern cloud platforms. Whether you use AWS, Azure, Google Cloud, or on-premise infrastructure, our team can create seamless integrations that work with your existing technology stack.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide comprehensive technical support including email and phone support for all plans, priority 24/7 support for Professional plans, and dedicated white-glove support for Enterprise customers. We also offer extensive documentation, training sessions, and ongoing consultation.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. Simple integrations may take 2-4 weeks, while custom applications typically take 3-6 months. Enterprise solutions can range from 6-12 months. We provide detailed project timelines during the consultation phase and use agile methodologies to deliver incremental value.",
  },
  {
    question: "Do you provide ongoing maintenance and updates?",
    answer:
      "Yes, all our plans include ongoing maintenance, security updates, and technical support. We monitor your systems 24/7, apply critical patches, and provide regular performance optimization. Enterprise plans include dedicated DevOps support and proactive system monitoring.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, Go, Kubernetes, Docker, AWS, Azure, Google Cloud, PostgreSQL, MongoDB, and many more. Our team stays current with the latest industry trends and best practices to deliver cutting-edge solutions.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about Nexoris. Can't find what you're looking for? Contact our team.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  )
}
