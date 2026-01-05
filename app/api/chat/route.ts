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
    "please write a service name what you want!",
  pricing:
    "Our pricing varies based on project requirements. For web development, our packages start at $1,500 for basic websites and go up to $15,000+ for enterprise solutions. Would you like to schedule a consultation for a custom quote?",
  contact:
    "You can reach us at info@digitalessence.com or call us at +1 (555) 123-4567. Our office is located at 123 Innovation Drive, Tech City, TC 12345.",
  services:
    "We offer Web Development, Graphic Design, Branding Design, Business Strategy, and Full Stack Agentic AI Development services. Each service has different packages to suit your needs. Would you like to know more about any specific service?",
  timeline:
    "Project timelines vary based on complexity. A basic website typically takes 2-4 weeks, while more complex projects can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
  webDevelopment:
    "Our Web Development service includes custom websites and web applications built with cutting-edge technologies.\n\nWe offer 3 packages:\n\n1) Basic Website ($1,500): 5-7 pages, responsive design, basic SEO, contact form\n\n2) Business Website ($5,000): 10-15 pages, advanced responsive design, full SEO, CMS, analytics\n\n3) Enterprise Solution ($10,000+): Custom web app, API integration, advanced security, ongoing support",
  graphicDesign:
    "Our Graphic Design service creates stunning visual designs that capture your brand's essence.\n\nWe offer 3 packages:\n\n1) Brand Identity ($800): Logo design, color palette, typography, brand guidelines\n\n2) Marketing Materials ($1,200): Social media graphics, email templates, digital ads, presentation templates\n\n3) Print Design ($1,000): Business cards, brochures, posters, packaging, trade show materials",
  brandingDesign:
    "Our Branding Design service provides comprehensive brand identity development.\n\nWe offer 3 packages:\n\n1) Brand Discovery ($2,000): Brand audit, competitor analysis, target audience research, brand positioning\n\n2) Brand Identity ($3,000): Logo design, visual identity system, brand guidelines, voice & messaging\n\n3) Brand Experience ($5,000): Website design, social media strategy, content strategy, customer journey mapping, brand activation",
  businessStrategy:
    "Our Business Strategy service offers strategic planning and consulting.\n\nWe offer 3 packages:\n\n1) Digital Assessment ($1,500): Digital presence audit, competitive analysis, SWOT analysis, opportunity identification\n\n2) Growth Strategy ($3,500): Market research, customer acquisition strategy, revenue model, digital transformation roadmap\n\n3) Performance Optimization ($4,000): Process improvement, analytics, conversion optimization, customer experience enhancement, ongoing consultation",
  aiDevelopment:
    "Our Full Stack Agentic AI Development service creates cutting-edge AI applications and chatbots.\n\nWe offer 3 packages:\n\n1) AI Chatbot Solution ($4,000): Custom AI chatbot, NLP, integration APIs, analytics dashboard\n\n2) Full Stack AI Web App ($8,000): Complete AI-powered web app, advanced algorithms, real-time processing, authentication, database integration\n\n3) Enterprise AI Solution ($12,000+): Custom agentic AI system, advanced ML, predictive analytics, API integration, scalable infrastructure, ongoing AI model training",
  webDevelopmentPackages:
    "Our Web Development packages:\n\n1) Basic Website ($1,500): 5-7 pages, responsive design, basic SEO, contact form\n\n2) Business Website ($5,000): 10-15 pages, advanced responsive design, full SEO, CMS, analytics\n\n3) Enterprise Solution ($10,000+): Custom web app, API integration, advanced security, ongoing support",
  graphicDesignPackages:
    "Our Graphic Design packages:\n\n1) Brand Identity ($800): Logo design, color palette, typography, brand guidelines\n\n2) Marketing Materials ($1,200): Social media graphics, email templates, digital ads, presentation templates\n\n3) Print Design ($1,000): Business cards, brochures, posters, packaging, trade show materials",
  brandingDesignPackages:
    "Our Branding Design packages:\n\n1) Brand Discovery ($2,000): Brand audit, competitor analysis, target audience research, brand positioning\n\n2) Brand Identity ($3,000): Logo design, visual identity system, brand guidelines, voice & messaging\n\n3) Brand Experience ($5,000): Website design, social media strategy, content strategy, customer journey mapping, brand activation",
  businessStrategyPackages:
    "Our Business Strategy packages:\n\n1) Digital Assessment ($1,500): Digital presence audit, competitive analysis, SWOT analysis, opportunity identification\n\n2) Growth Strategy ($3,500): Market research, customer acquisition strategy, revenue model, digital transformation roadmap\n\n3) Performance Optimization ($4,000): Process improvement, analytics, conversion optimization, customer experience enhancement, ongoing consultation",
  aiDevelopmentPackages:
    "Our Full Stack Agentic AI Development packages:\n\n1) AI Chatbot Solution ($4,000): Custom AI chatbot, NLP, integration APIs, analytics dashboard\n\n2) Full Stack AI Web App ($8,000): Complete AI-powered web app, advanced algorithms, real-time processing, authentication, database integration\n\n3) Enterprise AI Solution ($12,000+): Custom agentic AI system, advanced ML, predictive analytics, API integration, scalable infrastructure, ongoing AI model training",
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
  } else if (lowerMessage.includes("web development") || lowerMessage.includes("web dev") || lowerMessage.includes("website")) {
    return responses.webDevelopment
  } else if (lowerMessage.includes("graphic design") || lowerMessage.includes("graphic") || lowerMessage.includes("design")) {
    return responses.graphicDesign
  } else if (lowerMessage.includes("branding") || lowerMessage.includes("brand design")) {
    return responses.brandingDesign
  } else if (lowerMessage.includes("business strategy") || lowerMessage.includes("strategy") || lowerMessage.includes("business")) {
    return responses.businessStrategy
  } else if (
    lowerMessage.includes("ai development") ||
    lowerMessage.includes("ai") ||
    lowerMessage.includes("artificial intelligence") ||
    lowerMessage.includes("agentic ai")
  ) {
    return responses.aiDevelopment
  } else if (
    lowerMessage.includes("web development packages") ||
    lowerMessage.includes("web packages") ||
    lowerMessage.includes("website packages")
  ) {
    return responses.webDevelopmentPackages
  } else if (
    lowerMessage.includes("graphic design packages") ||
    lowerMessage.includes("graphic packages") ||
    lowerMessage.includes("design packages")
  ) {
    return responses.graphicDesignPackages
  } else if (
    lowerMessage.includes("branding packages") ||
    lowerMessage.includes("brand packages")
  ) {
    return responses.brandingDesignPackages
  } else if (
    lowerMessage.includes("business strategy packages") ||
    lowerMessage.includes("strategy packages")
  ) {
    return responses.businessStrategyPackages
  } else if (
    lowerMessage.includes("ai packages") ||
    lowerMessage.includes("ai development packages") ||
    lowerMessage.includes("artificial intelligence packages")
  ) {
    return responses.aiDevelopmentPackages
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

