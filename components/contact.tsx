"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Smartphone, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Contact() {
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

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <Smartphone className="h-5 w-5" />,
      url: "https://wa.me/923232141426",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/share/14uF4dGKAn/",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/digital-essence-964295351",
      color: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/digital_essence7?igsh=MXVrOHp1Z212ZTZraQ==",
      color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
      hoverColor: "hover:from-purple-700 hover:via-pink-600 hover:to-orange-500",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title" id="get-in-touch">
            Get In Touch
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Connect with us through any of these platforms and let's
            bring your vision to life.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-3 ${link.color} ${link.hoverColor} rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-white h-full`}
                >
                  <div className="mb-1 bg-white/20 p-2 rounded-full">{link.icon}</div>
                  <h3 className="text-sm font-bold">{link.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="card bg-gradient-to-r from-blue-600 to-blue-400 border-none p-6">
              <h3 className="text-xl font-bold mb-3">Ready to Start Your Project?</h3>
              <p className="text-white/90 mb-4 max-w-2xl mx-auto">
                Reach out to us through any of our social platforms or send us an email. We're excited to hear about
                your ideas and help you bring them to life!
              </p>
              <p className="text-lg font-semibold">
                <a
                  href="mailto:digitalessence32@gmail.com"
                  className="text-white hover:text-blue-100 transition-colors duration-300"
                >
                  digitalessence32@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

