// Neue Datei für die zentrale Navigation-Konfiguration
export const navigationConfig = {
  resources: [
    {
      title: "Vitamin D Toxizität",
      href: "/blog/vitamin-d-toxicity",
      description: "Welche Vitamin D Dosen sind sicher? Eine evidenzbasierte Analyse.",
      internal: true
    },
    {
      title: "Vitamin D und COVID-19",
      href: "https://pubmed.ncbi.nlm.nih.gov/32679784/",
      description: "Studie über die Rolle von Vitamin D bei COVID-19",
      internal: false
    },
    {
      title: "Vitamin D und Darmkrebs",
      href: "https://sonnenallianz.spitzen-praevention.com/2025/02/06/studien-zeigen-vitamin-d-beugt-darmkrebs-vor-und-erhoeht-die-ueberlebensrate-von-darmkrebserkrankten/",
      description: "Vitamin D beugt Darmkrebs vor und erhöht die Überlebensrate von Darmkrebserkrankten.",
      internal: false
    },
  ],
  legal: [
    {
      title: "Disclaimer",
      href: "/disclaimer",
      description: "Medizinischer und rechtlicher Haftungsausschluss",
      internal: true
    },
    {
      title: "Impressum",
      href: "/imprint",
      description: "Gesetzlich vorgeschriebene Anbieterkennzeichnung",
      internal: true
    },
  ],
  mainNav: [
    {
      title: "Bedarfsrechner",
      href: "/",
      internal: true
    },
    {
      title: "FAQ",
      href: "/faq",
      internal: true
    }

  ]
} 