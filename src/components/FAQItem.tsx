"use client"

import { Card } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface FAQItemProps {
  question: string
  children: React.ReactNode
}

export function FAQItem({ question, children }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full justify-between p-6">
            <span className="text-lg font-semibold text-left">{question}</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </Button>
        </CollapsibleTrigger>
        <AnimatePresence>
          {isOpen && (
            <CollapsibleContent forceMount>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="prose dark:prose-invert px-6 pb-6"
              >
                {children}
              </motion.div>
            </CollapsibleContent>
          )}
        </AnimatePresence>
      </Collapsible>
    </Card>
  )
} 