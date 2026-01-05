"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Linkedin, Instagram, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Abdullah Qadir",
    role: "Graphic Designer",
    bio: "4+Years Experience Blending creativity with strategy to craft stunning, impactful designs.",
    image: "https://i.imgur.com/IJl13SU.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/abdullah-qadir10/",
      instagram: "https://www.instagram.com/itx_me_abdullah_aq/",
      email: "abdullahqadir10@gmail.com",
    },
  },
  {
    name: "Huzaifa Chhipa",
    role: "Graphic Designer & Web Developer",
    bio: "Transforming ideas into stunning visuals and seamless digital experiences.",
    image: "https://i.imgur.com/a2D7PpG.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/huzaifa-c-b42797321/",
      instagram: "https://www.instagram.com/huzaifa_chhipa73/",
      email: "huzaifachhipa73@gmail.com",
    },
  },
  {
    name: "Shayan Ali",
    role: "Social Media Marketer",
    bio: "Creating impactful strategies to grow brands and engage audiences.",
    image: "https://i.imgur.com/cknpWe7.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/shayan-ali-b74470355/",
      instagram: "https://www.instagram.com/shayan_ali_103/",
      email: "digitalneesai@gmail.com",
    },
  },
]

export default function Team() {
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
    <section id="team" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our talented professionals bring diverse skills and perspectives to deliver exceptional results.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-square relative">
                  {isClient && (
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-4">
                    {/* LinkedIn */}
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full hover:bg-blue-600/50 transition-colors duration-300"
                    >
                      <Linkedin size={18} />
                    </a>

                    {/* Instagram */}
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full hover:bg-blue-600/50 transition-colors duration-300"
                    >
                      <Instagram size={18} />
                    </a>

                    {/* Gmail */}
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.social.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full hover:bg-blue-600/50 transition-colors duration-300"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-blue-400 mb-3">{member.role}</p>
              <p className="text-white/70">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

