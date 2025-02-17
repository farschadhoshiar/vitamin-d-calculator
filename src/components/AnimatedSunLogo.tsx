"use client"

import { motion } from "framer-motion"
import { Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function AnimatedSunLogo() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="w-6 h-6 text-primary">
        <Sun className="w-full h-full" />
      </div>
    )
  }

  return (
    <motion.div
      className="w-6 h-6 text-primary"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <Sun className="w-full h-full" />
    </motion.div>
  )
} 