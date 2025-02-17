"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface FAQItemProps {
  question: string
  children: React.ReactNode
  icon?: React.ReactNode
}

export function FAQItem({ question, children, icon }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 flex items-start justify-between gap-3 hover:bg-muted/50 transition-colors"
      >
        <div className="flex gap-3 text-left">
          <div className="flex-shrink-0 mt-1">
            {icon}
          </div>
          <span className="text-base font-medium">{question}</span>
        </div>
        <ChevronDown 
          className="h-5 w-5 flex-shrink-0 mt-1 transition-transform duration-200" 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2">
              <div className="pl-8">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
} 