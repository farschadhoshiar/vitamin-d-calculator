"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function AnimatedSunLogo() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="w-6 h-6 text-primary">
      <AnimatePresence mode="wait">
        {isMounted ? (
          <motion.div
            key="animated"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              rotate: 360 
            }}
            transition={{ 
              opacity: { duration: 0.2 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="w-full h-full"
          >
            <Sun className="w-full h-full" />
          </motion.div>
        ) : (
          <motion.div
            key="static"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full"
          >
            <Sun className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 