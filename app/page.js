import Link from 'next/link'
import AppCard from '@/components/site/AppCard'
import { APPS } from '@/lib/apps'
import { GUIDES } from '@/lib/guides'
import { waLink } from '@/lib/site'

export const metadata = {
  alternates: { canonical: '/' },
}

const SERVICES = [
  ['Applications sur mesure', 'Web et mobile, conçues avec vous, livrées et maintenues.'],
  ['Analyse de données', 'Tableaux de bord et indicateurs pour décider vite.'],
  ['Conseil et audit digital', 'Un diagnostic clair et un plan d’action chiffré.'],
  ['Formation des équipes', 'Outils numériques et gestion, en entreprise.'],
]

export default function Home() {
  const guides = GUIDES.filter((g) => g.published).slice(0, 2)
  return (
    <>
      <section className="hero">
        <div className="wrap hero__in">
          <div className="hero__txt">
            <p className="hero__kicker">Studio tech ivoirien · Abidjan</p>
            <h1 className="h1">Votre activité, gérée depuis votre téléphone.</h1>
            <p className="lead">
              Des applications de gestion pour les PME, commerces et organisations d’Afrique francophone :
              légères, pensées pour les petits réseaux, payables en Mobile Money.
            </p>
            <div className="btns">
              <a href="#applications" className="btn btn--green">Trouver mon application</a>
              <Link href="/contact" className="btn btn--ghost">Demander une démo</Link>
            </div>
          </div>
          <div className="hero__vis">
            <div className="phone">
              <div className="phone__screen home-screen">
                <p style={{ fontSize: 12, color: '#9FB0C8' }}>Bonsoir</p>
                <p className="title" style={{ fontSize: 18, marginTop: 2 }}>Vos applications</p>
                <div className="home-screen__grid">
                  {APPS.map((a) => (
                    <Link key={a.slug} href={`/applications/${a.slug}`} className="home-screen__app">
                      <img src={a.icon} alt="" width="52" height="52" fetchPriority="high" />
                      {a.name}
                    </Link>
                  ))}
                  <Link href="/catalogue" className="home-screen__app">
                    <span className="home-screen__plus" aria-hidden="true">+</span>
                    Sur mesure
                  </Link>
                </div>
                <p className="home-screen__notif"><small>Cheptelio · 19:00</small>Rapport du soir envoyé sur WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="appsbar" aria-label="Nos applications">
        <div className="wrap appsbar__in">
          {APPS.map((a) => (
            <Link key={a.slug} href={`/applications/${a.slug}`}>
              <img src={a.icon} alt="" width="36" height="36" />
              <span><strong>{a.name}</strong><small>{a.short}</small></span>
            </Link>
          ))}
        </div>
      </nav>

      <section className="sec" id="applications">
        <div className="wrap">
          <div className="sec__head">
            <h2 className="h2">Une application par métier</h2>
            <p>Chacune a son site, ses tarifs en FCFA et un essai gratuit. Gesconnect les conçoit, les héberge et les fait évoluer.</p>
          </div>
          <div className="grid" style={{ '--min': '330px', gap: 20 }}>
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

      <section className="sec sec--white">
        <div className="wrap">
          <blockquote className="quote">
            « Une application qui continue quand le réseau coupe, ce n’est pas un luxe.{' '}
            <span>C’est la condition pour qu’on s’en serve.</span> »
          </blockquote>
          <p className="muted" style={{ marginTop: 16, fontSize: 15 }}>— Notre principe de conception</p>
          <div className="rules">
            <div><h3>Un Android simple suffit</h3><p>Léger, testé sur l’entrée de gamme.</p></div>
            <div><h3>Quand le réseau coupe</h3><p>Cheptelio, Maquis360, Amicalo et MonArche continuent sans réseau.</p></div>
            <div><h3>Mobile Money intégré</h3><p>Wave, Orange, MTN, Moov, avec reçus.</p></div>
            <div><h3>Une équipe à Abidjan</h3><p>Mise en place, formation, WhatsApp.</p></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <h2 className="h2">Au-delà des applications</h2>
            <p className="muted" style={{ marginTop: 14, maxWidth: 400, fontSize: 17 }}>Un logiciel à votre mesure, des chiffres qui parlent, des équipes formées.</p>
            <Link href="/services" className="link-arrow" style={{ marginTop: 8 }}>Tous nos services →</Link>
          </div>
          <div className="grid" style={{ '--min': '250px', gap: 14 }}>
            {SERVICES.map(([t, d]) => (
              <Link key={t} href="/services" className="tile"><strong>{t}</strong><span>{d}</span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
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
