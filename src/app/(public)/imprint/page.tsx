import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"

export default function ImprintPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Impressum</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Unternehmensangaben</h2>
              <p>STONKS GmbH</p>
              <p>Buber-Neumann-Weg 68</p>
              <p>60439 Frankfurt am Main</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Kontakt</h2>
              <p>Geschäftsführer: Farschad Hoshiar</p>
              <p>Tel.: +49 176 219 71 447</p>
              <p>E-Mail: info@stonks.consulting</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Rechtliche Angaben</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE325596064</p>
              <p>Die Stonks GmbH ist ein Tochterunternehmen der NetServix Investment Group.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Haftung für Inhalte</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
            <p>Als Diensteanbieter sind wir gemäß § 5 TMG / § 55 Abs. 2 RStV für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei bekannt werden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Haftung für Links</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei bekannt werden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
