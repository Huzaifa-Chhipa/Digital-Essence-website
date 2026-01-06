"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { FileText, CheckCircle, Clock, MessageSquare } from "lucide-react"

export default function CustomOrders() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const customOrderSteps = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-400" />,
      title: "Discuss Your Needs",
      description: "Tell us about your project requirements and specific needs.",
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-400" />,
      title: "Get a Custom Quote",
      description: "Receive a personalized quote tailored to your project scope.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      title: "Project Timeline",
      description: "We'll provide a realistic timeline for your custom project.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-400" />,
      title: "Delivery & Support",
      description: "Receive your completed project with ongoing support.",
    },
  ]

  return (
    <section id="custom-orders" className="py-20 md:py-32 bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Custom Orders</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Need something unique? We accept custom orders tailored to your specific requirements and vision.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 mb-12 text-center"
          >
            <h3 className="text-3xl font-bold mb-4 gradient-text">Custom Orders Are Accepted</h3>
            <p className="text-xl text-white/80 mb-6">
              Whatever your digital needs, we're here to bring your vision to life. Our team specializes in creating
              bespoke solutions tailored specifically to your requirements.
            </p>
            <Link href="#get-in-touch" className="btn-primary inline-flex items-center">
              Request a Custom Order
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customOrderSteps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="card text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Types of Custom Orders We Accept:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-400 mb-2">Web Development</h4>
                  <ul className="space-y-2 text-white/70">
                    <li>• Custom web applications</li>
                    <li>• E-commerce solutions</li>
                    <li>• Interactive features</li>
                    <li>• API integrations</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-400 mb-2">Graphic Design</h4>
                  <ul className="space-y-2 text-white/70">
                    <li>• Custom illustrations</li>
                    <li>• Product packaging</li>
                    <li>• Marketing materials</li>
                    <li>• Social media assets</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-400 mb-2">Digital Marketing</h4>
                  <ul className="space-y-2 text-white/70">
                    <li>• Tailored campaigns</li>
                    <li>• Content creation</li>
                    <li>• SEO strategies</li>
                    <li>• Analytics & reporting</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-400 mb-2">Full Stack AI Development</h4>
                  <ul className="space-y-2 text-white/70">
                    <li>• AI-powered web applications</li>
                    <li>• Machine learning integration</li>
                    <li>• Agentic AI systems</li>
                    <li>• Intelligent automation solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

