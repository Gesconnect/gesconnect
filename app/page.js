import Link from 'next/link'
import AppCard from '@/components/site/AppCard'
import DashboardMock from '@/components/site/DashboardMock'
import HomeHero from '@/components/site/HomeHero'
import LossCalculator from '@/components/site/LossCalculator'
import JsonLd from '@/components/site/JsonLd'
import { APPS } from '@/lib/apps'
import { GUIDES } from '@/lib/guides'
import { HOME_FAQ } from '@/lib/home'
import { waLink } from '@/lib/site'

export const metadata = {
  alternates: { canonical: '/' },
}

const TRUST = [
  ['Dès 5 000 F', 'par mois, ou gratuit pour commencer'],
  ['Essai gratuit', 'sans engagement'],
  ['Mobile Money', 'Wave, Orange, MTN, Moov'],
  ['Abidjan', 'équipe sur place, suivi WhatsApp'],
]

const STEPS = [
  ['Vous écrivez', 'Un message WhatsApp : votre métier, votre ville. On vous répond vite.'],
  ['Démo de 20 minutes', 'Sur votre propre téléphone, par WhatsApp ou dans vos locaux à Abidjan.'],
  ['Mise en place', 'Vos articles, membres ou lots saisis ; votre équipe formée.'],
  ['Suivi', 'Une question, un souci ? L’équipe répond sur WhatsApp.'],
]

const PRO = [
  ['Application sur mesure', 'Construite pour vos processus, sur ordinateur, tablette et téléphone.'],
  ['Tableau de bord', 'Ventes, stocks, cotisations ou dépenses sur un seul écran, mis à jour.'],
  ['Analyse ponctuelle', 'Une question, une réponse chiffrée : quel produit, quelle saison, quel client rapporte.'],
  ['Formation', 'Excel avancé et Power BI, sur vos propres données.'],
]

export default function Home() {
  const guides = GUIDES.filter((g) => g.published).slice(0, 2)
  const items = APPS.map((a) => ({ key: a.slug, name: a.name, short: a.short, icon: a.icon }))
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQ.map(([q, r]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: r } })),
  }

  return (
    <>
      <HomeHero items={items} />

      <section className="trust" aria-label="En bref">
        <div className="wrap trust__in">
          {TRUST.map(([b, s]) => (
            <p key={b}><strong>{b}</strong><span>{s}</span></p>
          ))}
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <h2 className="h2" style={{ maxWidth: 760 }}>Le cahier a fait son temps. Votre activité mérite mieux.</h2>
          <div className="pa">
            <div className="pa__before">
              <p className="pa__tag">Aujourd’hui</p>
              <ul>
                <li>Un cahier qui se perd, se mouille, et que seul le gérant comprend.</li>
                <li>Des calculs à la main, des écarts de caisse que personne n’explique.</li>
                <li>Le patron obligé d’être sur place pour savoir ce qui se passe.</li>
                <li>Des paiements Mobile Money impossibles à rapprocher des ventes.</li>
              </ul>
            </div>
            <div className="pa__after">
              <p className="pa__tag">Avec une application Gesconnect</p>
              <ul>
                <li>Chaque vente, saisie ou cotisation enregistrée avec le nom de la personne.</li>
                <li>Les totaux et les écarts calculés tout seuls.</li>
                <li>Le point de la journée sur votre téléphone, où que vous soyez.</li>
                <li>Chaque paiement Mobile Money noté avec sa référence et son reçu.</li>
              </ul>
            </div>
          </div>
          <p className="pa__src">
            Près de 9 emplois sur 10 sont informels en Côte d’Ivoire. Source :{' '}
            <a href="https://economie-ivoirienne.ci/activites-sectorielles/emplois.html" target="_blank" rel="noopener">economie-ivoirienne.ci</a>
          </p>
        </div>
      </section>

      <section className="sec" id="applications" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="sec__head">
            <h2 className="h2">Une application par métier</h2>
            <p>Chacune a son site, ses tarifs en FCFA et un essai gratuit. Gesconnect les conçoit, les héberge et les fait évoluer.</p>
          </div>
          <div className="grid home-apps" style={{ '--min': '330px', gap: 20 }}>
            {APPS.map((a) => <AppCard key={a.slug} app={a} />)}
            <div className="card-dark">
              <h3 className="h3" style={{ color: '#fff' }}>Hôtel, école, pharmacie, garage…</h3>
              <p>Plus de trente métiers au catalogue. Le vôtre n’y est pas ? Nous le construisons sur mesure.</p>
              <div className="btns" style={{ marginTop: 6 }}>
                <Link href="/catalogue" className="btn btn--green btn--sm">Voir le catalogue</Link>
                <Link href="/services" className="btn btn--ghost btn--sm">Sur mesure</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <LossCalculator />
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <h2 className="h2">Comment ça se passe</h2>
          <ol className="steps4">
            {STEPS.map(([t, d], i) => (
              <li key={t}><span>{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pro" id="entreprises">
        <div className="wrap pro__in">
          <div className="pro__txt">
            <p className="eyebrow" style={{ color: 'var(--mint)' }}>Pour les entreprises</p>
            <h2 className="h2" style={{ marginTop: 10 }}>Vos outils sur mesure, et des chiffres qui parlent.</h2>
            <div className="pro__list">
              {PRO.map(([t, d]) => (
                <div key={t}><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
            <div className="btns" style={{ marginTop: 24 }}>
              <a className="btn btn--green" href={waLink('Bonjour Gesconnect, je représente une entreprise et j’aimerais parler d’un projet.')} target="_blank" rel="noopener">Parler de mon projet</a>
              <Link className="btn btn--ghost" href="/services">Tous nos services</Link>
            </div>
          </div>
          <DashboardMock />
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="founder">
            <div>
              <p className="eyebrow" style={{ color: '#14532D' }}>Places limitées à 10 entreprises</p>
              <h2 className="h2" style={{ marginTop: 8, fontSize: 'clamp(26px, 3.4vw, 40px)' }}>Devenez Client Fondateur</h2>
              <p style={{ marginTop: 10, color: '#1F3B2A' }}>Jusqu’à 40 % de réduction sur votre abonnement, à vie. Vos idées entrent dans l’application, et vous parlez directement aux fondateurs.</p>
            </div>
            <Link className="btn btn--navy" href="/contact#client-fondateur">Je veux une place</Link>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap split">
          <h2 className="h2">Vos questions</h2>
          <div className="faq">
            {HOME_FAQ.map(([q, r]) => (
              <details key={q}><summary>{q}</summary><p>{r}</p></details>
            ))}
          </div>
        </div>
        <JsonLd data={faqLd} />
      </section>

      <section className="sec">
        <div className="wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12, marginBottom: 24 }}>
            <h2 className="h2" style={{ fontSize: 'clamp(26px, 3.6vw, 44px)' }}>Guides pour gérer mieux</h2>
            <Link href="/guides" className="link-arrow" style={{ color: 'var(--green-ink)' }}>Tous les guides →</Link>
          </div>
          <div className="grid" style={{ '--min': '300px' }}>
            {guides.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-card" style={{ '--c': g.color, '--ci': g.ink }}>
                <small>{g.theme}</small><strong>{g.title}</strong><em>{g.readingTime}</em>
              </Link>
            ))}
            <a className="card-dark" style={{ textDecoration: 'none', padding: 22, borderRadius: 20 }} href={waLink('Bonjour Gesconnect, je souhaite recevoir les nouveaux guides sur WhatsApp.')} target="_blank" rel="noopener">
              <strong style={{ fontSize: 19, lineHeight: 1.3 }}>Recevoir les nouveaux guides sur WhatsApp</strong>
              <p style={{ fontSize: 15 }}>Un message quand un guide sort, pas plus.</p>
              <span className="link-arrow" style={{ color: 'var(--mint)', minHeight: 0 }}>M’abonner →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
