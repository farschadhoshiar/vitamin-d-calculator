import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const referenceData = [
  { 
    ng_ml: "< 20", 
    nmol_L: "< 50", 
    beurteilung: "Schwerer Mangel", 
    color: "bg-red-500 text-white" 
  },
  { 
    ng_ml: "20 – 32", 
    nmol_L: "50 – 80", 
    beurteilung: "Leichter Mangel", 
    color: "bg-yellow-400 text-black" 
  },
  { 
    ng_ml: "32 – 100", 
    nmol_L: "80 – 250", 
    beurteilung: "Optimale Versorgung", 
    color: "bg-green-500 text-white" 
  },
  { 
    ng_ml: "54 – 90", 
    nmol_L: "135 – 225", 
    beurteilung: "Typisch in Sonnenländern", 
    color: "bg-green-500 text-white" 
  },
  { 
    ng_ml: "> 100", 
    nmol_L: "> 250", 
    beurteilung: "Erhöhter Wert", 
    color: "bg-yellow-400 text-black" 
  },
  { 
    ng_ml: "> 150", 
    nmol_L: "> 325", 
    beurteilung: "Toxischer Bereich", 
    color: "bg-red-500 text-white" 
  }
]

export default function VitaminDToxicityPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Vitamin‑D‑Toxizität – Welche Vitamin D‑Dosen sind sicher?</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none space-y-6">
            <p>Die Diskussion um Vitamin D ist häufig von Missverständnissen und veralteten Richtlinien geprägt. Historische Erfahrungen, die insbesondere aus den 1930er und 1940er Jahren stammen, haben maßgeblich zu der weit verbreiteten Angst vor einer Vitamin‑D‑Toxizität beigetragen. Damals wurden Erkrankungen wie Arthritis, Tuberkulose und Asthma mit bis zu 600.000 I.E. behandelt – ein Vorgehen, das in mehreren Fällen zu klinisch signifikanter Hyperkalzämie und sogar zu Todesfällen führte. Dabei konnte aufgrund der erst in den 1970er Jahren verfügbaren Messmethoden nie exakt bestimmt werden, welche Blutspiegel tatsächlich zu Toxizitätserscheinungen führten.</p>

            <p>Seit jenen Zeiten hat sich die Diskussion grundlegend gewandelt. Die wissenschaftliche Evidenz aus den vergangenen Jahrzehnten zeigt deutlich, dass eine tägliche Zufuhr von bis zu 10.000 I.E. Vitamin D sicher ist. Zwar wird in offiziellen Richtlinien häufig noch eine Grenze von 4.000 I.E. pro Tag empfohlen, doch aktuelle Studien – unter anderem jene von Hathcock et al. (2007) und Prof. Holick (2019) – bestätigen, dass selbst bei einer Zufuhr von 10.000 I.E. über längere Zeiträume weder ein erhöhter Hyperkalzämie-Risiko noch eine signifikante Veränderung des Kalziumspiegels zu beobachten sind. Erst bei täglichen Dosen oberhalb von 40.000 I.E. über mehrere Wochen, und dem Erreichen von Blutspiegeln über 150 ng/ml, können Toxizitätserscheinungen auftreten.</p>

            <p>Interessant ist dabei auch die natürliche Vitamin‑D‑Synthese der Haut, die unter optimalen Bedingungen täglich 20.000–25.000 I.E. produziert – ein Beleg dafür, dass unser Körper grundsätzlich hohe Mengen Vitamin D toleriert. Ein körpereigener Schutzmechanismus sorgt dafür, dass durch UV‑Bestrahlung niemals Blutwerte von mehr als 100 ng/ml erreicht werden. Diese Werte können allein durch Supplementation erzielt werden, weshalb auch hier deutlich zwischen natürlicher Synthese und künstlicher Überdosierung unterschieden werden muss.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vitamin D Referenzwerte im Blut</CardTitle>
          </CardHeader>
          <CardContent>
            <Card className="overflow-hidden border-0 shadow-none">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[20%] font-semibold">Nanogramm/ml</TableHead>
                    <TableHead className="w-[20%] font-semibold">Nanomol/L</TableHead>
                    <TableHead className="w-[60%] font-semibold">Bewertung</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {referenceData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className={`${row.color} text-center rounded-l-lg`}>{row.ng_ml}</TableCell>
                      <TableCell className={`${row.color} text-center`}>{row.nmol_L}</TableCell>
                      <TableCell className={`${row.color} text-center font-medium rounded-r-lg`}>{row.beurteilung}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="prose dark:prose-invert max-w-none space-y-6">
            <p>Die Gründe für die derzeit noch bestehende Vorsicht liegen zum einen in den historisch gewachsenen Therapieansätzen und zum anderen in veralteten Grenzwerten, die weiterhin zu Verunsicherung in der Bevölkerung führen. Ursprünglich wurde Vitamin D zur Behandlung schwerwiegender Erkrankungen in hohen Dosen eingesetzt. Nachdem sich gezeigt hatte, dass der Einsatz hoher Dosen zu erheblichen Nebenwirkungen führen kann, wurde man zu deutlich niedrigeren Dosierungen – wie den 400 I.E. pro Tag, die sich bei der Rachitisprävention bewährt hatten – übergegangen. Diese Dosis reicht jedoch oftmals nicht aus, um die weit verbreitete Vitamin‑D‑Unterversorgung zu beheben.</p>

            <p>Erhebungen aus umfangreichen Studien, unter anderem mit über 22.000 Teilnehmern, haben den Zusammenhang zwischen der täglichen Vitamin‑D‑Zufuhr und dem erreichten Blutspiegel eindrucksvoll dargestellt. Es zeigte sich, dass Personen mit höherem Körpergewicht entsprechend höhere Dosen benötigen, um vergleichbare Blutwerte zu erzielen. Unabhängig von individuellen Faktoren gilt jedoch, dass eine tägliche Einnahme von 10.000 I.E. als vollkommen ungefährlich einzustufen ist.</p>

            <p>Die Forschung untermauert diese Ergebnisse eindrucksvoll: So zeigte eine Untersuchung an Patienten mit Multipler Sklerose, dass auch bei einer Zufuhr von 40.000 I.E. täglich über einen längeren Zeitraum „astronomische" Blutspiegel erreicht wurden, ohne dass es zu Komplikationen im Sinne einer Hyperkalzämie kam. Ebenso belegt eine Studie von Prof. Holick, dass Kalziumspiegel sowie die parathyreoide Aktivität konstant blieben, gleichgültig ob 600 I.E., 4.000 I.E. oder 10.000 I.E. supplementiert wurden.</p>

            <p>Zusammenfassend lässt sich feststellen, dass die umfangreichen wissenschaftlichen Untersuchungen deutlich belegen, dass Vitamin D in Dosen von bis zu 10.000 I.E. täglich eine hohe Anwendungssicherheit besitzt. Es ist an der Zeit, die überholten Grenzwerte zu überdenken und die Bevölkerungsunterversorgung mit Vitamin D nachhaltig anzugehen. Für eine individuelle Supplementierung empfiehlt es sich, auf bedarfsgerechte Rechner zurückzugreifen und bei langfristiger Einnahme oberhalb von 5.000 I.E. regelmäßige Laboruntersuchungen – insbesondere der Werte für Vitamin D, Kalzium und Parathormon – durchzuführen.</p>

            <p>Die aktuellen wissenschaftlichen Erkenntnisse sollten dazu beitragen, Ängste vor einer Vitamin‑D‑Toxizität zu zerstreuen und den Weg für eine zeitgemäße, evidenzbasierte Dosierung zu ebnen. Letztlich ist es das Ziel, die Gesundheit der Bevölkerung zu fördern und den natürlichen Gegebenheiten, wie der unbedenklichen körpereigenen Produktion von Vitamin D unter Sonneneinstrahlung, gerechter zu werden.</p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
