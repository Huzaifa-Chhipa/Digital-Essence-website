"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Code, Palette, Briefcase, BarChart, ArrowRight, X } from "lucide-react"

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: <Code className="h-8 w-8 text-blue-400" />,
    shortDesc: "Custom websites and web applications built with cutting-edge technologies.",
    fullDesc:
      "We create responsive, high-performance websites and web applications tailored to your specific needs. Our development team uses the latest technologies to ensure your digital presence is fast, secure, and scalable.",
    packages: [
      {
        name: "Basic Website",
        features: ["5-7 Pages", "Responsive Design", "Basic SEO", "Contact Form"],
      },
      {
        name: "Business Website",
        features: [
          "10-15 Pages",
          "Advanced Responsive Design",
          "Full SEO Package",
          "Content Management System",
          "Analytics Integration",
        ],
      },
      {
        name: "Enterprise Solution",
        features: [
          "Custom Web Application",
          "API Integration",
          "User Authentication",
          "Database Design",
          "Advanced Security Features",
          "Ongoing Support",
        ],
      },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: <Palette className="h-8 w-8 text-blue-400" />,
    shortDesc: "Stunning visual designs that capture your brand's essence and message.",
    fullDesc:
      "Our graphic design services help you communicate your brand message effectively through visually compelling designs. From logos to marketing materials, we create designs that resonate with your target audience.",
    packages: [
      {
        name: "Brand Identity",
        features: ["Logo Design", "Color Palette", "Typography Selection", "Brand Guidelines"],
      },
      {
        name: "Marketing Materials",
        features: ["Social Media Graphics", "Email Templates", "Digital Ads", "Presentation Templates"],
      },
      {
        name: "Print Design",
        features: ["Business Cards", "Brochures", "Posters", "Packaging Design", "Trade Show Materials"],
      },
    ],
  },
  {
    id: "branding-design",
    title: "Branding Design",
    icon: <Briefcase className="h-8 w-8 text-blue-400" />,
    shortDesc: "Comprehensive brand identity development to establish a strong market presence.",
    fullDesc:
      "We help you build a cohesive brand identity that differentiates your business in the marketplace. Our branding services include everything from brand strategy to visual identity development.",
    packages: [
      {
        name: "Brand Discovery",
        features: ["Brand Audit", "Competitor Analysis", "Target Audience Research", "Brand Positioning"],
      },
      {
        name: "Brand Identity",
        features: ["Logo Design", "Visual Identity System", "Brand Guidelines", "Brand Voice & Messaging"],
      },
      {
        name: "Brand Experience",
        features: [
          "Website Design",
          "Social Media Strategy",
          "Content Strategy",
          "Customer Journey Mapping",
          "Brand Activation",
        ],
      },
    ],
  },
  {
    id: "business-strategy",
    title: "Business Strategy",
    icon: <BarChart className="h-8 w-8 text-blue-400" />,
    shortDesc: "Strategic planning and consulting to help your business achieve its goals.",
    fullDesc:
      "Our business strategy services help you navigate the complexities of the digital landscape. We work with you to develop actionable strategies that drive growth, improve efficiency, and increase profitability.",
    packages: [
      {
        name: "Digital Assessment",
        features: ["Digital Presence Audit", "Competitive Analysis", "SWOT Analysis", "Opportunity Identification"],
      },
      {
        name: "Growth Strategy",
        features: [
          "Market Research",
          "Customer Acquisition Strategy",
          "Revenue Model Development",
          "Digital Transformation Roadmap",
        ],
      },
      {
        name: "Performance Optimization",
        features: [
          "Process Improvement",
          "Analytics & Reporting",
          "Conversion Rate Optimization",
          "Customer Experience Enhancement",
          "Ongoing Consultation",
        ],
      },
    ],
  },
  {
    id: "ai-development",
    title: "Full Stack Agentic AI Development",
    icon: <Code className="h-8 w-8 text-blue-400" />,
    shortDesc: "Full Stack Agentic AI applications, web apps, and intelligent chatbots.",
    fullDesc:
      "We develop cutting-edge Full Stack Agentic AI applications, web applications, and intelligent chatbots that transform how businesses interact with technology. Our AI solutions are designed to automate processes, enhance user experiences, and provide intelligent insights for your business.",
    packages: [
      {
        name: "AI Chatbot Solution",
        features: ["Custom AI Chatbot", "Natural Language Processing", "Integration APIs", "Analytics Dashboard"],
      },
      {
        name: "Full Stack AI Web App",
        features: [
          "Complete AI-Powered Web Application",
          "Advanced AI Algorithms",
          "Real-time Processing",
          "User Authentication",
          "Database Integration",
        ],
      },
      {
        name: "Enterprise AI Solution",
        features: [
          "Custom Agentic AI System",
          "Advanced Machine Learning",
          "Predictive Analytics",
          "API Integration",
          "Scalable Infrastructure",
          "Ongoing AI Model Training",
        ],
      },
    ],
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [shutterActive, setShutterActive] = useState(false)
  const [shutterAnimating, setShutterAnimating] = useState(false)
  const [targetUrl, setTargetUrl] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const router = useRouter()

  const triggerShutterAnimation = (url: string) => {
    if (shutterAnimating) return;

    setTargetUrl(url);
    setShutterAnimating(true);
    setShutterActive(true);

    // Check if this is a service-specific URL
    const isServiceUrl = url.startsWith('#service-');
    let serviceId = null;

    if (isServiceUrl) {
      serviceId = url.replace('#service-', '');
    }

    // After shutters close, handle the navigation or scrolling
    setTimeout(() => {
      // Start revealing the shutters first
      setShutterActive(false);

      // Then handle the navigation or scrolling after a brief delay to allow shutter opening to start
      setTimeout(() => {
        if (url.startsWith('#')) {
          // For anchor links, scroll to the element
          const element = document.querySelector(url);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }

          // If it's a service URL, open the modal after animation
          if (isServiceUrl && serviceId) {
            setTimeout(() => {
              setSelectedService(serviceId);
            }, 100); // Small delay to ensure animation is processed
          }
        } else {
          // For regular navigation, use router
          router.push(url);
        }
      }, 100); // Small delay to allow shutter opening to begin

      // Reset animation state after the reveal animation completes
      setTimeout(() => {
        setShutterAnimating(false);
      }, 1100); // Wait for the full animation sequence to complete
    }, 600); // Wait for shutters to fully close
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const selectedServiceData = services.find((s) => s.id === selectedService)

  return (
    <section id="services" className="py-20 md:py-32">
      {/* Service anchor points */}
      {services.map((service) => (
        <div key={`anchor-${service.id}`} id={`service-${service.id}`} className="anchor-point" style={{ position: 'relative', top: '-100px', visibility: 'hidden' }}></div>
      ))}
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="card cursor-pointer group"
              onClick={() => triggerShutterAnimation(`#service-${service.id}`)}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 mb-4">{service.shortDesc}</p>
              <button className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-50 overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-16">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-gray-800/50 p-2 rounded-full transition-colors duration-300"
              >
                <X size={24} />
              </button>

              {selectedServiceData && (
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    <div className="mb-4">{selectedServiceData.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{selectedServiceData.title}</h2>
                    <p className="text-lg text-white/80 mb-8">{selectedServiceData.fullDesc}</p>
                  </div>

                  <h3 className="text-2xl font-bold mb-6 gradient-text">Our Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {selectedServiceData.packages.map((pkg, index) => (
                      <div key={index} className="card">
                        <h4 className="text-xl font-bold mb-4">{pkg.name}</h4>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-white/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => {
                        setSelectedService(null); // Close the modal first
                        setTimeout(() => {
                          triggerShutterAnimation("#contact");
                        }, 50); // Small delay to ensure modal starts closing
                      }}
                      className="btn-primary inline-flex items-center"
                      disabled={shutterAnimating}
                    >
                      Get Started <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shutter Overlay */}
      {shutterAnimating && (
        <div className={`shutter-overlay ${shutterActive ? 'active' : 'revealing'}`}>
          <div className="shutter-top"></div>
          <div className="shutter-bottom"></div>
        </div>
      )}
    </section>
  )
}

