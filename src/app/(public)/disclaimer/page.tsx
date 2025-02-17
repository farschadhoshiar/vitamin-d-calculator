import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Haftungsausschluss / Medizinischer und Affiliate-Haftungsausschluss</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Allgemeiner Hinweis zur Informationsfunktion</h3>
              <p>Die von diesem Vitamin‑D‑Rechner bereitgestellten Informationen und Empfehlungen basieren auf von Ihnen eingegebenen Daten (wie z. B. Gewicht und aktuelle Blutwerte) und dienen ausschließlich allgemeinen Informations- und Orientierungszwecken. Sie stellen in keiner Weise eine ärztliche Diagnose, Therapieempfehlung oder sonstige medizinische Beratung dar. Die Nutzung dieses Tools ersetzt keinesfalls den persönlichen Kontakt und die individuelle Beratung durch qualifizierte medizinische Fachkräfte.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. Keine Gewährleistung für Richtigkeit, Vollständigkeit und Aktualität</h3>
              <p>Obgleich nach bestem Wissen und Gewissen erstellt, können weder die Richtigkeit noch die Vollständigkeit und Aktualität der bereitgestellten Informationen garantiert werden. Insbesondere werden die Berechnungen und Empfehlungen ohne Berücksichtigung individueller Gesundheitszustände, Vorerkrankungen oder anderer medizinischer Parameter durchgeführt. Jegliche Haftung für Fehler, unvollständige oder veraltete Informationen wird – soweit gesetzlich zulässig – ausdrücklich ausgeschlossen.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Eigenverantwortliche Nutzung und Haftungsausschluss</h3>
              <p>Die Nutzung des Vitamin‑D‑Rechners erfolgt auf eigene Gefahr und eigene Verantwortung. Weder der Betreiber noch Dritte übernehmen irgendeine Haftung für direkte oder indirekte Schäden, Folgeschäden oder sonstige Nachteile, die sich aus der Nutzung oder dem Vertrauen auf die hier bereitgestellten Informationen ergeben. Dies gilt insbesondere für gesundheitliche Beeinträchtigungen, die infolge einer fehlerhaften Berechnung oder falschen Interpretation der Ergebnisse eintreten könnten.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Affiliate-Links und externe Verweise</h3>
              <p>Diese Webseite enthält Affiliate-Links zu Nahrungsergänzungsmitteln und anderen Produkten, die als potenziell geeignet zur Unterstützung des Vitamin‑D‑Haushalts ausgewiesen werden. Die Aufnahme von Affiliate-Links erfolgt ausschließlich zu kommerziellen Zwecken. Es wird darauf hingewiesen, dass die Empfehlungen und Verlinkungen keinerlei persönliche Beratung darstellen und nicht als alleinige Entscheidungsgrundlage für den Kauf oder die Einnahme von Nahrungsergänzungsmitteln herangezogen werden dürfen.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. Keine Haftung für technische Mängel und Störungen</h3>
              <p>Der Betreiber haftet nicht für technische Mängel, Systemausfälle, fehlerhafte Übertragung der Daten oder sonstige Störungen, die den Zugang oder die Nutzung des Vitamin‑D‑Rechners beeinträchtigen könnten. Ebenso wird keine Haftung für etwaige Schäden übernommen, die durch fehlerhafte Dateneingabe oder -interpretation entstehen.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">6. Rechtliche Bindung und salvatorische Klausel</h3>
              <p>Mit der Nutzung des Vitamin‑D‑Rechners erklären Sie sich ausdrücklich mit diesem Haftungsausschluss einverstanden. Sollte eine Bestimmung dieses Haftungsausschlusses ganz oder teilweise unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">7. Schlussbestimmungen</h3>
              <p>Die hier bereitgestellten Informationen und Empfehlungen sollen ausschließlich als ergänzende Hinweise dienen. Sie ersetzen nicht die individuelle Beratung durch einen Arzt oder eine andere qualifizierte medizinische Fachkraft. Jegliche eigenmächtige Anwendung der Informationen erfolgt auf Ihr eigenes Risiko. Bei gesundheitlichen Beschwerden oder Unsicherheiten ist unverzüglich professionelle medizinische Hilfe in Anspruch zu nehmen.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
