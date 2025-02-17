import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import { FAQItem } from "@/components/FAQItem"

export default function FAQPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8 space-y-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Häufig gestellte Fragen</CardTitle>
          </CardHeader>
        </Card>

        <FAQItem question="Was ist Vitamin D und warum ist es so wichtig?">
          <p>Vitamin D ist ein essenzieller Nährstoff, der als Fundament Ihrer Gesundheit gilt. Es unterstützt unter anderem:</p>
          <ul>
            <li>Das Immunsystem</li>
            <li>Den Knochenaufbau</li>
            <li>Die Muskel- und Nervenfunktion</li>
            <li>Das Herz-Kreislauf-System</li>
            <li>Die Diabetesprävention</li>
            <li>Die Krebsabwehr</li>
          </ul>
          <p>Prof. Dr. med. Jörg Spitz betont: „In keinem Pharmalabor der Welt wurde und wird jemals eine Substanz entwickelt, die nur annähernd die vielfältigen positiven gesundheitlichen Eigenschaften von Vitamin D hat."</p>
        </FAQItem>

        <FAQItem question="Wie verbreitet ist ein Vitamin-D-Mangel?">
          <p>Schätzungen zufolge leiden 80-90% der Menschen an einem Vitamin-D-Mangel. Daher ist es besonders wichtig, auf eine ausreichende Versorgung zu achten – sei es über natürliche Sonneneinstrahlung oder gegebenenfalls durch Supplementation.</p>
        </FAQItem>

        <FAQItem question="Welche Werte gelten als optimal bzw. grenzwertig?">
          <ul className="list-none space-y-2">
            <li><strong>Mangelgrenzwert:</strong> ca. 30 ng/ml</li>
            <li><strong>Optimaler Wert:</strong> 40-60 ng/ml</li>
            <li><strong>Toxizitätsgrenze:</strong> ab 150 ng/ml</li>
          </ul>
        </FAQItem>

        <FAQItem question="Wie hoch ist die tägliche empfohlene Dosierung?">
          <p>Je nach individuellen Faktoren wie Körpergewicht und Stoffwechsel benötigt ein Erwachsener in der Regel zwischen 4.000 und 9.000 I.E. Vitamin D pro Tag, um den optimalen Spiegel von 40-60 ng/ml zu erreichen.</p>
          <p className="font-semibold text-red-500 dark:text-red-400">Wichtig: Nehmen Sie dauerhaft keine Dosis oberhalb von 10.000 I.E. pro Tag ohne ärztliche Begleitung ein!</p>
        </FAQItem>

        <FAQItem question="Welche Rolle spielen Magnesium und Vitamin K2?">
          <p>Magnesium ist der wichtigste Kofaktor für die Aktivierung von Vitamin D. Achten Sie daher auf eine ausreichende Zufuhr des Mineralstoffs. Eine gleichzeitige Einnahme von Vitamin K2 kann zusätzliche Vorteile bieten, ist jedoch keine Voraussetzung für die Funktion des Vitamin-D-Stoffwechsels.</p>
        </FAQItem>

        <FAQItem question="Wann ist Sonneneinstrahlung ausreichend?">
          <p>In Deutschland, Österreich und der Schweiz ist von Oktober bis März aufgrund der flachen Sonneneinstrahlung kaum Vitamin-D-Produktion möglich.</p>
          <p>Von April bis September wird empfohlen:</p>
          <ul className="list-disc pl-6">
            <li>Zwischen 10:30 und 15:30 Uhr (besonders im Hochsommer)</li>
            <li>Ca. 15-30 Minuten ungeschützt (ohne Sonnencreme)</li>
            <li>Arme und Beine der Sonne aussetzen</li>
            <li>Bei klarem Himmel und direktem Sonnenschein</li>
          </ul>
        </FAQItem>
      </div>
    </>
  )
}
