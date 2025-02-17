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
      <div className="container mx-auto py-8 space-y-8">

        {/* Main Calculator Section */}
        <Card>
          <CardHeader>
            <CardTitle>Berechnen Sie Ihren Vitamin D Bedarf</CardTitle>
            <CardDescription>
              Geben Sie Ihre Details ein, um Ihren persönlichen Vitamin D Bedarf zu ermitteln
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VitaminDCalculator />
          </CardContent>
        </Card>

        {/* Recommendations Section */}
        <Card>
          <CardHeader>
            <CardTitle>What to do if your Vitamin D levels are low?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">1. Gradually Fill Your Reserves</h3>
                <p>We recommend a 90-day period to safely reach optimal levels. 
                   Avoid high-dose short-term supplementation to prevent unwanted side effects.</p>
              </div>
              <div>
                <h3 className="font-semibold">2. Maintain Your Levels</h3>
                <p>Your body uses Vitamin D daily, especially during months with less sunlight. 
                   Maintain your levels with the recommended maintenance dose.</p>
              </div>
              <div>
                <h3 className="font-semibold">3. Check After 3 Months</h3>
                <p>After 90 days, recheck your Vitamin D levels to ensure you've reached 
                   your target level.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reference Values Table */}
        <Card>
          <CardHeader>
            <CardTitle>Reference Values</CardTitle>
            <CardDescription>Compare your values with standard ranges</CardDescription>
          </CardHeader>
          <CardContent>
            <ReferenceTable />
          </CardContent>
        </Card>
      </div>
      <FloatingThemeSwitch />
    </>
  )
}
