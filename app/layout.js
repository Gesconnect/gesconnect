import './globals.css'

export const metadata = {
  title: 'Gesconnect Consulting — Studio Tech Ivoirien pour PME',
  description:
    "Gesconnect conçoit des applications de gestion sur mesure pour les PME et entreprises d'Afrique francophone. Commerce, Hôtel, Scolaire, Restauration, Scholio et bien plus.",
  keywords: [
    "logiciel gestion PME Côte d'Ivoire",
    'application gestion entreprise Abidjan',
    'transformation digitale Afrique',
    'Gesconnect',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    url: 'https://gesconnect.com',
    siteName: 'Gesconnect Consulting',
    title: "Gesconnect — Connectez votre Entreprise, Automatisez votre Succès",
    description:
      "Studio tech ivoirien spécialisé dans les solutions de gestion pour PME et secteur informel d'Afrique francophone.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo_512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
