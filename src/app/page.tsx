import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VitaminDCalculator } from "@/components/VitaminDCalculator"
import { ReferenceTable } from "@/components/ReferenceTable"
import { FloatingThemeSwitch } from "@/components/floating-theme-switch"
import { WeeklyPillOrganizer } from "@/components/WeeklyPillOrganizer"
import { Header } from "@/components/Header"

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-2 py-4 space-y-4 sm:px-4 sm:py-8 sm:space-y-8">
        <Card className="overflow-hidden">
          <CardHeader className="px-3 py-4 sm:px-6 sm:py-6">
            <CardTitle>Berechnen Sie Ihren Vitamin D Bedarf</CardTitle>
            <CardDescription>
              Geben Sie Ihre Details ein, um Ihren persönlichen Vitamin D Bedarf zu ermitteln
            </CardDescription>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            <VitaminDCalculator />
          </CardContent>
        </Card>
      </div>
      <FloatingThemeSwitch />
    </>
  )
}
