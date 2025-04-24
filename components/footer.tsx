"use client"

import { useState, useEffect } from "react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("")

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold gradient-text mb-4">Digital Essence</h2>
            <p className="text-white/70 mb-6 max-w-md">
              We create exceptional digital experiences that drive business growth and innovation. Our team of experts
              brings together diverse skills to deliver results that exceed expectations.
            </p>
            <div className="flex space-x-4"></div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#custom-orders" className="text-white/70 hover:text-white transition-colors duration-300">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/70 hover:text-white transition-colors duration-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Branding Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Business Strategy
                </a>
              </li>
              <li>
                <a href="#custom-orders" className="text-white/70 hover:text-white transition-colors duration-300">
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">&copy; {currentYear || "2024"} Digital Essence. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

