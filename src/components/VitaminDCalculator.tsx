"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { DosageRecommendations } from "@/components/DosageRecommendations"
import { MinusIcon, PlusIcon } from "lucide-react"
import { CalculationExplanation } from "@/components/CalculationExplanation"
import { Slider } from "@/components/ui/slider"

const formSchema = z.object({
  weight: z.number().min(30).max(200),
  hasTestedLevels: z.boolean().default(false),
  currentLevel: z.string().optional(),
})

interface CalculationResult {
  daily: number
  maintenance: number
  k2Daily: number
  k2Maintenance: number
  magnesiumDaily: number
  magnesiumMaintenance: number
}

export function VitaminDCalculator() {
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [isEditing, setIsEditing] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: 75,
      hasTestedLevels: false,
    },
  })

  function calculateSupplements(iuDose: number) {
    // K2 sollte etwa 100mcg pro 5000-7000 IU D3 sein
    const k2 = Math.round((iuDose / 5000) * 100)
    
    // Magnesium bleibt gleich: etwa 400mg pro 10000 IU
    const magnesium = Math.round((iuDose / 10000) * 400)
    return { k2, magnesium }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    
    // Simuliere eine kurze Verzögerung für besseres Feedback
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const targetLevel = 85
    const currentLevel = values.hasTestedLevels && values.currentLevel 
      ? parseFloat(values.currentLevel)
      : 40

    const levelDifference = targetLevel - currentLevel
    const dailyDose = Math.max(1000, Math.round((values.weight * 140 * levelDifference) / 90))
    // Neue Berechnung für Erhaltungsdosis: 94.08 IU pro kg Körpergewicht
    const maintenanceDose = Math.max(800, Math.round(values.weight * 94.08))

    const dailySupplements = calculateSupplements(dailyDose)
    const maintenanceSupplements = calculateSupplements(maintenanceDose)

    setResult({
      daily: dailyDose,
      maintenance: maintenanceDose,
      k2Daily: dailySupplements.k2,
      k2Maintenance: maintenanceSupplements.k2,
      magnesiumDaily: dailySupplements.magnesium,
      magnesiumMaintenance: maintenanceSupplements.magnesium
    })
    
    setIsLoading(false)
  }

  return (
    <motion.div className="space-y-6">
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            key="full-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gewicht in kg</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={30}
                            max={200}
                            {...field}
                            value={field.value === 0 ? "" : field.value}
                            onChange={e => {
                              const value = e.target.value === "" ? 0 : Number(e.target.value)
                              field.onChange(value)
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasTestedLevels"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Vitamin D Wert bekannt?</FormLabel>
                          <div className="text-sm text-muted-foreground">
                            Aktivieren Sie dies, wenn Sie Ihren aktuellen Vitamin D Wert kennen
                          </div>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <AnimatePresence>
                    {form.watch("hasTestedLevels") && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <FormField
                          control={form.control}
                          name="currentLevel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Aktueller Vitamin D Wert</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Wert in ng/ml" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Button 
                  type="submit" 
                  className="w-full transition-colors duration-200 hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      />
                      Berechne...
                    </motion.div>
                  ) : (
                    "Berechnen"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        ) : (
          <motion.div
            key="compact-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Gewicht: {form.getValues("weight")} kg
              </div>
              {form.getValues("hasTestedLevels") && (
                <div className="text-sm text-muted-foreground">
                  Vitamin D Level: {form.getValues("currentLevel")} ng/ml
                </div>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(true)}
            >
              Bearbeiten
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-4 grid-cols-1 md:grid-cols-2"
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Aufbauphase (90 Tage)</h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <span className="text-sm">Vitamin D3:</span>
                      <span className="font-mono text-base">{result.daily.toLocaleString()} IU</span>
                    </div>
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <span className="text-sm">Vitamin K2 (MK7):</span>
                      <span className="font-mono text-base">{result.k2Daily} mcg</span>
                    </div>
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <span className="text-sm">Magnesium:</span>
                      <span className="font-mono text-base">{result.magnesiumDaily} mg</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Erhaltungsdosis</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Vitamin D3:</span>
                      <span className="font-mono text-base">{result.maintenance.toLocaleString()} IU</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Vitamin K2 (MK7):</span>
                      <span className="font-mono text-base">{result.k2Maintenance} mcg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Magnesium:</span>
                      <span className="font-mono text-base">{result.magnesiumMaintenance} mg</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2"
            >
              <DosageRecommendations
                daily={result.daily}
                maintenance={result.maintenance}
                k2Daily={result.k2Daily}
                k2Maintenance={result.k2Maintenance}
                magnesiumDaily={result.magnesiumDaily}
                magnesiumMaintenance={result.magnesiumMaintenance}
              />
            </motion.div>

            <motion.div className="md:col-span-2">
              <CalculationExplanation
                weight={form.getValues("weight")}
                currentLevel={form.getValues("hasTestedLevels") ? parseFloat(form.getValues("currentLevel")) : 40}
                targetLevel={85}
                daily={result.daily}
                maintenance={result.maintenance}
                isUsingDefaultLevel={!form.getValues("hasTestedLevels")}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 