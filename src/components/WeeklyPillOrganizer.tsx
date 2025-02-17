"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Pill, Sun, Moon, Droplets } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface PillOrganizerProps {
  d3Daily: number    // Täglicher Bedarf (nicht Pillengröße)
  k2Daily: number    // Täglicher Bedarf
  magDaily: number   // Täglicher Bedarf
}

export function WeeklyPillOrganizer({ d3Daily, k2Daily, magDaily }: PillOrganizerProps) {
  const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
  
  // Verfügbare Pillengrößen
  const availablePills = {
    d3: [2000, 5000, 10000], // IU
    k2: [100, 200],          // mcg
    mag: [400, 800]          // mg
  }

  // Berechne optimale Verteilung über die Woche
  const calculateWeeklySchedule = () => {
    const weeklyD3Need = d3Daily * 7
    const weeklyK2Need = k2Daily * 7
    const weeklyMagNeed = magDaily * 7

    // Funktion zur Optimierung der Pillenverteilung
    const optimizePillDistribution = (weeklyNeed: number, availableSizes: number[]) => {
      const schedule = Array(7).fill(0)
      let remainingDose = weeklyNeed
      
      // Wähle die größtmögliche Pillengröße
      const pillSize = availableSizes.reduce((prev, curr) => 
        Math.abs(curr - weeklyNeed/7) < Math.abs(prev - weeklyNeed/7) ? curr : prev
      )

      // Berechne, an wie vielen Tagen die Pille genommen werden muss
      const daysNeeded = Math.ceil(weeklyNeed / pillSize)
      
      // Verteile die Pillen möglichst gleichmäßig über die Woche
      const interval = Math.max(1, Math.floor(7 / daysNeeded))
      let day = 0
      for (let i = 0; i < daysNeeded && day < 7; i++) {
        schedule[day] = pillSize
        day += interval
      }

      return {
        schedule,
        pillSize,
        totalWeeklyDose: schedule.reduce((sum, dose) => sum + dose, 0)
      }
    }

    const d3Schedule = optimizePillDistribution(weeklyD3Need, availablePills.d3)
    const k2Schedule = optimizePillDistribution(weeklyK2Need, availablePills.k2)
    const magSchedule = optimizePillDistribution(weeklyMagNeed, availablePills.mag)

    return { d3Schedule, k2Schedule, magSchedule }
  }

  const schedule = calculateWeeklySchedule()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wöchentlicher Einnahmeplan</CardTitle>
        <CardDescription>
          Optimiert für Ihren täglichen Bedarf von {d3Daily.toLocaleString()} IU D3
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {weekdays.map((day, index) => (
            <Card key={day} className="border">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{day}</h3>
                </div>
                
                {schedule.d3Schedule.schedule[index] > 0 && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Pill className="h-4 w-4" />
                      <span>D3</span>
                    </div>
                    <Badge variant="secondary">
                      {(schedule.d3Schedule.schedule[index]/1000).toFixed(1)}k
                    </Badge>
                  </div>
                )}
                
                {schedule.k2Schedule.schedule[index] > 0 && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4" />
                      <span>K2</span>
                    </div>
                    <Badge variant="secondary">
                      {schedule.k2Schedule.schedule[index]}
                    </Badge>
                  </div>
                )}
                
                {schedule.magSchedule.schedule[index] > 0 && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4" />
                      <span>Mag</span>
                    </div>
                    <Badge variant="secondary">
                      {schedule.magSchedule.schedule[index]}
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 border rounded-lg bg-muted/50">
          <p className="font-medium mb-2">Wöchentliche Gesamtdosis:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• D3: {schedule.d3Schedule.totalWeeklyDose.toLocaleString()} IU (Tagesbedarf: {d3Daily.toLocaleString()} IU)</li>
            <li>• K2: {schedule.k2Schedule.totalWeeklyDose} mcg (Tagesbedarf: {k2Daily} mcg)</li>
            <li>• Magnesium: {schedule.magSchedule.totalWeeklyDose} mg (Tagesbedarf: {magDaily} mg)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
} 