"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const workProjects = [
  {
    title: "E-commerce Website",
    description: "Complete online store with payment integration and inventory management.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, colors, and guidelines.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Graphic Design",
  },
  {
    title: "Social Media Campaign",
    description: "Comprehensive social media strategy and content creation.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Marketing",
  },
  {
    title: "AI-Powered Application",
    description: "Full stack agentic AI application with advanced features.",
    image: "/placeholder.svg?height=300&width=400",
    category: "AI Development",
  },
  {
    title: "Mobile App Design",
    description: "UI/UX design for mobile application with user testing.",
    image: "/placeholder.svg?height=300&width=400",
    category: "UI/UX Design",
  },
]

export default function WorkShowcase() {
  const [isClient, setIsClient] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    setIsClient(true)
  }, [])

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="work" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Work</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover our portfolio of exceptional projects that showcase our expertise and creativity.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {workProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:transform hover:scale-105 transition-all duration-300 bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative h-60 overflow-hidden">
                {isClient && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}