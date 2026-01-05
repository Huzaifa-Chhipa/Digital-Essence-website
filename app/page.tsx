import Hero from "@/components/hero"
import About from "@/components/about"
import Team from "@/components/team"
import Services from "@/components/services"
import CustomOrders from "@/components/custom-orders"
import Contact from "@/components/contact"
import ChatWidget from "@/components/chat-widget"
import WhatsappWidget from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-8 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-6000"></div>
      </div>

      <Hero />
      <About />
      <Team />
      <Services />
      <CustomOrders />
      <Contact />
      <ChatWidget />
      <WhatsappWidget />
    </main>
  )
}

