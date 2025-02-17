"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Calculator } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface CalculationExplanationProps {
  weight: number
  currentLevel: number
  targetLevel: number
  daily: number
  maintenance: number
  isUsingDefaultLevel: boolean
}

export function CalculationExplanation({
  weight,
  currentLevel,
  targetLevel,
  daily,
  maintenance,
  isUsingDefaultLevel
}: CalculationExplanationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="max-w-[calc(100vw-2rem)] overflow-x-auto">
        <CardHeader className="px-3 py-4 sm:p-6 pb-0 sm:pb-0">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Calculator className="h-5 w-5" />
            Berechnungsdetails
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto px-3 pb-3 sm:px-6">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full flex items-center justify-between py-2"
              >
                <span>Wie werden die Dosierungen berechnet?</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-4 py-3">
                      <div>
                        <h4 className="font-medium mb-2">Aufbaudosis (90 Tage)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Die Aufbaudosis wird wie folgt berechnet:
                        </p>
                        <div className="bg-muted/50 p-3 rounded-md space-y-2">
                          <p className="text-sm">
                            1. Differenz zum Zielwert: {targetLevel} - {currentLevel} = {targetLevel - currentLevel} ng/ml
                            {isUsingDefaultLevel && (
                              <span className="text-muted-foreground ml-2">(Standardwert: 40 ng/ml angenommen)</span>
                            )}
                          </p>
                          <p className="text-sm">
                            2. Formel: (Gewicht × 140 × Differenz) ÷ 90 Tage
                          </p>
                          <p className="text-sm">
                            3. ({weight} kg × 140 × {targetLevel - currentLevel}) ÷ 90 = {daily.toLocaleString()} IU/Tag
                          </p>
                          <div className="mt-4 border-t pt-3">
                            <p className="text-sm font-medium mb-2">Warum der Faktor 140?</p>
                            <p className="text-sm text-muted-foreground">
                              Der Faktor 140 basiert auf klinischen Studien und berücksichtigt mehrere wichtige Aspekte:
                            </p>
                            <ul className="text-sm text-muted-foreground list-disc pl-4 mt-2 space-y-1">
                              <li>Etwa 100 IU Vitamin D3 erhöhen den Serumspiegel um 1 ng/ml</li>
                              <li>Der Körper baut täglich etwa 40% des Vitamin D ab</li>
                              <li>Die individuelle Absorption und der Metabolismus variieren</li>
                              <li>Ein Sicherheitspuffer ist eingerechnet für optimale Ergebnisse</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Erhaltungsdosis</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Die Erhaltungsdosis basiert auf dem Körpergewicht:
                        </p>
                        <div className="bg-muted/50 p-3 rounded-md space-y-2">
                          <p className="text-sm">
                            1. Formel: Gewicht × 94,08 IU
                          </p>
                          <p className="text-sm">
                            2. {weight} kg × 94,08 = {maintenance.toLocaleString()} IU/Tag
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Begleitende Nährstoffe</h4>
                        <div className="bg-muted/50 p-3 rounded-md space-y-2">
                          <p className="text-sm">
                            • Vitamin K2 (MK7): 200 mcg pro 10.000 IU Vitamin D3
                          </p>
                          <p className="text-sm">
                            • Magnesium: 400 mg pro 10.000 IU Vitamin D3
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </motion.div>
  )
} 