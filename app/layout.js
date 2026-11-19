import Script from 'next/script'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import WhatsAppFloat from '@/components/site/WhatsAppFloat'
import JsonLd from '@/components/site/JsonLd'
import { SITE } from '@/lib/site'
import { APPS } from '@/lib/apps'

// Polices hébergées sur le site (aucun appel à Google Fonts) : plus rapide sur petit réseau.
const dm = localFont({
  src: [
    { path: './fonts/dm-sans-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/dm-sans-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/dm-sans-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-dm',
  display: 'swap',
})
const jakarta = localFont({
  src: [
    { path: './fonts/plus-jakarta-sans-latin-700-normal.woff2', weight: '700', style: 'normal' },
    { path: './fonts/plus-jakarta-sans-latin-800-normal.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-jakarta',
  display: 'swap',
})
// Police du nom « Gesconnect » à côté du logo.
const sora = localFont({
  src: [{ path: './fonts/sora-latin-700-normal.woff2', weight: '700', style: 'normal' }],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Gesconnect — Logiciels de gestion pour PME, commerces et organisations en Côte d’Ivoire',
    template: '%s | Gesconnect',
  },
  description:
    'Studio tech ivoirien : applications de gestion qui marchent sur un téléphone simple et encaissent en Mobile Money. Cheptelio, Maquis360, Quinca360, Amicalo, MonArche.',
  applicationName: 'Gesconnect',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    url: SITE.url,
    siteName: 'Gesconnect',
    title: 'Gesconnect — Votre activité, gérée depuis votre téléphone',
    description:
      'Des applications de gestion pour les PME, commerces et organisations d’Afrique francophone, qui marchent sur un téléphone simple.',
    images: [{ url: '/og_image.jpg', width: 1200, height: 630, alt: 'Gesconnect' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png', apple: '/logo_512.png' },
}

export const viewport = {
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
}

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organisation`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/logo_512.png`,
  email: SITE.email,
  telephone: SITE.phoneIntl,
  address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressCountry: 'CI' },
  areaServed: 'Afrique francophone',
  sameAs: [SITE.facebook, ...APPS.map((a) => `https://${a.domain}`)],
  makesOffer: APPS.map((a) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'SoftwareApplication', name: a.name, url: `${SITE.url}/applications/${a.slug}` },
  })),
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${dm.variable} ${jakarta.variable} ${sora.variable}`}>
      <body>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={organization} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${SITE.gaId}');`}
        </Script>
      </body>
    </html>
  )
}
