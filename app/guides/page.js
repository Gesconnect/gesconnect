import Link from 'next/link'
import { GUIDES } from '@/lib/guides'
import { waLink } from '@/lib/site'

export const metadata = {
  title: 'Guides pour gérer mieux son commerce, sa ferme ou son association',
  description:
    'Conseils concrets pour les maquis, quincailleries, élevages, associations, églises et PME d’Afrique francophone, écrits par l’équipe Gesconnect.',
  alternates: { canonical: '/guides' },
}

export default function Guides() {
  const featured = GUIDES.find((g) => g.published)
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
            <div style={{ flex: '1 1 340px', minHeight: 220, background: 'radial-gradient(360px 240px at 70% 30%, rgba(242,165,49,.35), transparent 70%), #15120F', display: 'flex', alignItems: 'flex-end', padding: 24 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#F6EFE4', fontSize: 14, fontWeight: 600 }}>
                <img src="/apps/maquis360.webp" alt="" width="36" height="36" style={{ borderRadius: 10 }} />
                Avec l’expérience de Maquis360
              </span>
            </div>
            <div style={{ flex: '1 1 420px', minWidth: 0, padding: 'clamp(22px, 3vw, 36px)' }}>
              <p className="eyebrow" style={{ color: featured.ink }}>{featured.theme} · À la une</p>
              <h2 className="h3" style={{ marginTop: 10, fontSize: 'clamp(24px, 3vw, 32px)' }}>{featured.title}</h2>
              <p className="muted" style={{ marginTop: 12 }}>{featured.excerpt}</p>
              <p className="muted" style={{ marginTop: 16, fontSize: 14 }}>L’équipe Gesconnect · {featured.readingTime}</p>
            </div>
          </Link>

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
