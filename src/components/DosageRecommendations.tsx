"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WeeklyPillOrganizer } from "@/components/WeeklyPillOrganizer"

interface DosageProps {
  daily: number
  maintenance: number
  k2Daily: number
  k2Maintenance: number
  magnesiumDaily: number
  magnesiumMaintenance: number
}

export function DosageRecommendations({
  daily,
  maintenance,
  k2Daily,
  k2Maintenance,
  magnesiumDaily,
  magnesiumMaintenance
}: DosageProps) {
  const calculateD3Pills = (dose: number) => {
    let pillSize
    if (dose <= 3500) {
      pillSize = 2000
    } else if (dose <= 7500) {
      pillSize = 5000
    } else {
      pillSize = 10000
    }
    return { pillSize, total: dose }
  }

  const calculateK2Pills = (dose: number) => {
    let pillSize
    if (dose <= 110) {
      pillSize = 100
    } else {
      pillSize = 200
    }
    return { pillSize, total: dose }
  }

  const calculateMagnesiumPills = (dose: number) => {
    let pillSize
    if (dose <= 400) {
      pillSize = 400
    } else {
      pillSize = 800  // 2 x 400mg
    }
    return { pillSize, total: dose }
  }

  const dailyD3 = calculateD3Pills(daily)
  const maintenanceD3 = calculateD3Pills(maintenance)
  const dailyK2 = calculateK2Pills(k2Daily)
  const maintenanceK2 = calculateK2Pills(k2Maintenance)
  const dailyMag = calculateMagnesiumPills(magnesiumDaily)
  const maintenanceMag = calculateMagnesiumPills(magnesiumMaintenance)

  return (
    <Tabs defaultValue="loading" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="loading">Aufbauphase</TabsTrigger>
        <TabsTrigger value="maintenance">Erhaltungsdosis</TabsTrigger>
      </TabsList>
      
      <TabsContent value="loading">
        <WeeklyPillOrganizer
          d3Daily={daily}
          k2Daily={k2Daily}
          magDaily={magnesiumDaily}
        />
      </TabsContent>

      <TabsContent value="maintenance">
        <WeeklyPillOrganizer
          d3Daily={maintenance}
          k2Daily={k2Maintenance}
          magDaily={magnesiumMaintenance}
        />
      </TabsContent>
    </Tabs>
  )
} 