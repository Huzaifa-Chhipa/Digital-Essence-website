import { NextResponse } from "next/server"

// Define message type
interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  time: string
}

// Sample responses for different queries
const responses: Record<string, string> = {
  default:
    "Thanks for reaching out! One of our team members will get back to you shortly. In the meantime, feel free to explore our services or check out our portfolio.",
  pricing:
    "Our pricing varies based on project requirements. For web development, our packages start at $1,500 for basic websites and go up to $15,000+ for enterprise solutions. Would you like to schedule a consultation for a custom quote?",
  contact:
    "You can reach us at info@digitalessence.com or call us at +1 (555) 123-4567. Our office is located at 123 Innovation Drive, Tech City, TC 12345.",
  services:
    "We offer Web Development, Graphic Design, Branding Design, and Business Strategy services. Each service has different packages to suit your needs. Would you like to know more about any specific service?",
  timeline:
    "Project timelines vary based on complexity. A basic website typically takes 2-4 weeks, while more complex projects can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
}

// Function to determine the best response based on user message
function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("quote")) {
    return responses.pricing
  } else if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("address")
  ) {
    return responses.contact
  } else if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("provide")) {
    return responses.services
  } else if (
    lowerMessage.includes("time") ||
    lowerMessage.includes("long") ||
    lowerMessage.includes("duration") ||
    lowerMessage.includes("deadline")
  ) {
    return responses.timeline
  } else {
    return responses.default
  }
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Generate response based on user message
    const responseText = getBotResponse(message)

    const botMessage: Message = {
      id: Date.now(),
      text: responseText,
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    return NextResponse.json({ message: botMessage })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}

