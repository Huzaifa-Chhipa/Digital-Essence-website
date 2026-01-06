import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import WorkShowcase from "@/components/work-showcase"
import CustomOrders from "@/components/custom-orders"
import Contact from "@/components/contact"
import ChatWidget from "@/components/chat-widget"
import WhatsappWidget from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Original animated blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-8 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-6000"></div>

        {/* Additional floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-purple-400 rounded-full opacity-15 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-25 animate-float animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-20 animate-float animation-delay-6000"></div>

        {/* Geometric floating shapes */}
        <div className="absolute top-1/5 left-1/5 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rotate-45 opacity-10 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/5 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-10 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rotate-12 opacity-15 animate-pulse animation-delay-5000"></div>

        {/* Moving lines/particles */}
        <div className="absolute top-1/4 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 animate-slide"></div>
        <div className="absolute top-1/2 right-0 w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-15 animate-slide animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-10 animate-slide animation-delay-4000"></div>
      </div>

      <Hero />
      <About />
      <WorkShowcase />
      <Services />
      <CustomOrders />
      <Contact />
      <ChatWidget />
      <WhatsappWidget />
    </main>
  )
}

