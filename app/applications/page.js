import Link from 'next/link'
import AppCard from '@/components/site/AppCard'
import { APPS } from '@/lib/apps'

export const metadata = {
  title: 'Nos applications de gestion',
  description:
    'Cheptelio (élevage), Maquis360 (maquis et bars), Quinca360 (quincailleries), Amicalo (associations) et MonArche (églises) : cinq applications de gestion conçues par Gesconnect.',
  alternates: { canonical: '/applications' },
}

export default function Applications() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">›</span><span>Applications</span></nav>
          <h1 className="h1">Nos applications de gestion</h1>
          <p className="lead">Cinq applications en service, chacune pensée pour un métier. Toutes conçues, hébergées et suivies par Gesconnect à Abidjan.</p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 36 }}>
        <div className="wrap">
          <div className="grid" style={{ '--min': '330px', gap: 20 }}>
            {APPS.map((a) => <AppCard key={a.slug} app={a} />)}
            <div className="card-dark">
              <h2 className="h3" style={{ color: '#fff' }}>Votre métier n’y est pas ?</h2>
              <p>Plus de trente métiers sont au catalogue, en préparation ou réalisables sur demande.</p>
              <div className="btns" style={{ marginTop: 6 }}>
                <Link href="/catalogue" className="btn btn--green btn--sm">Voir le catalogue</Link>
                <Link href="/contact" className="btn btn--ghost btn--sm">Décrire mon besoin</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
