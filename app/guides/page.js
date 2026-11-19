import Link from 'next/link'
import { GUIDES } from '@/lib/guides'
import { getApp } from '@/lib/apps'
import { waLink, og } from '@/lib/site'

export const metadata = {
  title: 'Guides pour gérer mieux son commerce, sa ferme ou son association',
  description:
    'Conseils concrets pour les maquis, quincailleries, élevages, associations, églises et PME d’Afrique francophone, écrits par l’équipe Gesconnect.',
  alternates: { canonical: '/guides' },
  openGraph: og({ title: 'Guides pour gérer mieux son commerce, sa ferme ou son association', description: 'Conseils concrets pour les maquis, quincailleries, élevages, associations, églises et PME d’Afrique francophone, écrits par l’équipe Gesconnect.', path: '/guides' }),
}

export default function Guides() {
  const published = GUIDES.filter((g) => g.published)
  const featured = published[0]
  const others = published.slice(1)
  const app = featured.app ? getApp(featured.app) : null
  const vis = featured.visual || (app ? { sub: app.phone.sub, title: app.phone.title, rows: app.phone.rows, alert: app.phone.alert } : null)
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">›</span><span>Guides</span></nav>
          <h1 className="h1">Guides pour gérer mieux</h1>
          <p className="lead">Des conseils concrets pour les commerces, les fermes, les associations et les églises d’Afrique francophone. Écrits par l’équipe Gesconnect, à partir du terrain.</p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 36 }}>
        <div className="wrap">
          <Link href={`/guides/${featured.slug}`} className="appcard" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <div className="feat-vis" style={{ '--fv-bg': app ? app.theme.hero : '#0F1E4A', '--fv-glow': app ? app.theme.glow : 'rgba(34,197,94,.3)' }}>
              {vis ? (
                <div className="feat-vis__screen" aria-hidden="true">
                  <small>{vis.sub}</small>
                  <strong>{vis.title}</strong>
                  {vis.rows.map(([k, v]) => <p key={k}><span>{k}</span><b className={String(v).startsWith('−') ? 'neg' : undefined}>{v}</b></p>)}
                  {vis.alert ? <em>{vis.alert}</em> : null}
                </div>
              ) : null}
              {app ? (
                <span className="feat-vis__by">
                  <img src={app.icon} alt="" width="36" height="36" />
                  Avec l’expérience de {app.name}
                </span>
              ) : null}
            </div>
            <div style={{ flex: '1 1 420px', minWidth: 0, padding: 'clamp(22px, 3vw, 36px)' }}>
              <p className="eyebrow" style={{ color: featured.ink }}>{featured.theme} · À la une</p>
              <h2 className="h3" style={{ marginTop: 10, fontSize: 'clamp(24px, 3vw, 32px)' }}>{featured.title}</h2>
              <p className="muted" style={{ marginTop: 12 }}>{featured.excerpt}</p>
              <p className="muted" style={{ marginTop: 16, fontSize: 14 }}>L’équipe Gesconnect · {featured.readingTime}</p>
            </div>
          </Link>

          {others.length > 0 && (
            <div className="grid" style={{ gap: 14, marginTop: 20 }}>
              {others.map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-card" style={{ '--c': g.color, '--ci': g.ink }}>
                  <small>{g.theme}</small><strong>{g.title}</strong><em>{g.readingTime}</em>
                </Link>
              ))}
            </div>
          )}

          <div className="card-dark" style={{ marginTop: 40, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: '18px 36px' }}>
            <div style={{ flex: '2 1 420px', minWidth: 0 }}>
              <h2 className="h3" style={{ color: '#fff' }}>Recevoir les nouveaux guides sur WhatsApp</h2>
              <p style={{ marginTop: 6 }}>Un message quand un guide sort, pas plus. Vous arrêtez quand vous voulez.</p>
            </div>
            <a className="btn btn--green" href={waLink('Bonjour Gesconnect, je souhaite recevoir les nouveaux guides sur WhatsApp.')} target="_blank" rel="noopener">M’abonner sur WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
