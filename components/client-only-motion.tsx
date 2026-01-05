'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ClientOnlyMotionProps {
  children: React.ReactNode
}

export function ClientOnlyMotion({ children }: ClientOnlyMotionProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Return a static version during SSR
    return <>{children}</>
  }

  return <motion.div>{children}</motion.div>
}

export { motion, AnimatePresence }