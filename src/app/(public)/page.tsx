import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VitaminDCalculator } from "@/components/VitaminDCalculator"
import { Header } from "@/components/Header"

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8 space-y-8">
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
      </div>
    </>
  )
}
