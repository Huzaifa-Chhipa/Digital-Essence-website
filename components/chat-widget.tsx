"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  time: string
}

export default function ChatWidget() {
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Set isClient to true once the component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load initial message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0 && isClient) {
      const initialMessage: Message = {
        id: 1,
        text: "Hi there! 👋 How can we help you today?\n\nYou can ask me about our services:\n\n1. Web Development\n\n2. Graphic Design\n\n3. Branding Design\n\n4. Business Strategy\n\n5. Full Stack Agentic AI Development\n\nOr just type your question!",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([initialMessage])
    }
  }, [isOpen, messages.length, isClient])

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newMessage.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: newMessage,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsLoading(true)

    try {
      // Send message to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newMessage }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      const data = await response.json()

      // Add bot response
      setMessages((prev) => [...prev, data.message])
    } catch (error) {
      console.error("Chat error:", error)

      // Add error message
      const errorMessage: Message = {
        id: Date.now(),
        text: "Sorry, there was an error processing your message. Please try again later.",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isClient) {
    return null // Return nothing during SSR
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-gray-700 rotate-90" : "bg-blue-600 hover:bg-blue-700"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl z-40 transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Chat Header */}
        <div className="bg-gray-800 p-4 rounded-t-xl border-b border-gray-700">
          <h3 className="text-lg font-bold">Digital Essence Support</h3>
          <p className="text-sm text-white/70">We typically reply within minutes</p>
        </div>

        {/* Chat Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-800 text-white"
                }`}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-200" : "text-gray-400"}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-white max-w-[80%] rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-800">
          <div className="flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-lg disabled:opacity-50"
              disabled={isLoading}
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

