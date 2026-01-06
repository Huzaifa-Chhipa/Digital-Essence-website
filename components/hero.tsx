"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [shutterActive, setShutterActive] = useState(false)
  const [shutterAnimating, setShutterAnimating] = useState(false)
  const [targetUrl, setTargetUrl] = useState("")
  const router = useRouter()

  const triggerShutterAnimation = (url: string) => {
    if (shutterAnimating) return;

    setTargetUrl(url);
    setShutterAnimating(true);
    setShutterActive(true);

    // After shutters close, handle the navigation or scrolling
    setTimeout(() => {
      if (url.startsWith('#')) {
        // For anchor links, scroll to the element
        const element = document.querySelector(url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // For regular navigation, use router
        router.push(url);
      }

      // Start revealing the shutters after a delay
      setTimeout(() => {
        setShutterActive(false);
      }, 300);
    }, 600); // Duration of shutter closing animation
  };

  useEffect(() => {
    setIsClient(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100
    const maxDistance = 200

    class Particle {
      x: number
      y: number
      dirX: number
      dirY: number
      size: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.dirX = (Math.random() - 0.5) * 0.5
        this.dirY = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 0.5
        this.color = `rgba(26, 86, 219, ${Math.random() * 0.5 + 0.1})`
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.dirX = -this.dirX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.dirY = -this.dirY
        }

        this.x += this.dirX
        this.y += this.dirY
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(26, 86, 219, ${0.1 * (1 - distance / maxDistance)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", handleResize)
    init()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!isClient) {
    return (
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting <span className="neon-text">Digital Experiences</span> That Inspire
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              We transform ideas into exceptional digital solutions that elevate your brand and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => triggerShutterAnimation("#services")}
                className="btn-primary flex items-center gap-2"
                disabled={shutterAnimating}
              >
                Explore Our Services <ArrowRight size={16} />
              </button>
              <button
                onClick={() => triggerShutterAnimation("#get-in-touch")}
                className="btn-secondary"
                disabled={shutterAnimating}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Link href="#about" className="text-white/50 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {isClient && <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting <span className="neon-text">Digital Experiences</span> That Inspire
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            We transform ideas into exceptional digital solutions that elevate your brand and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => triggerShutterAnimation("#services")}
              className="btn-primary flex items-center gap-2"
              disabled={shutterAnimating}
            >
              Explore Our Services <ArrowRight size={16} />
            </button>
            <button
              onClick={() => triggerShutterAnimation("#get-in-touch")}
              className="btn-secondary"
              disabled={shutterAnimating}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#about" className="text-white/50 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>

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

