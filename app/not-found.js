import Link from 'next/link'

export const metadata = { title: 'Page introuvable', robots: { index: false } }

export default function NotFound() {
  return (
    <section className="page-head" style={{ minHeight: '50vh' }}>
      <div className="wrap">
        <h1 className="h1">Cette page n’existe pas (ou plus).</h1>
        <p className="lead">Elle a peut-être changé d’adresse avec le nouveau site.</p>
        <div className="btns" style={{ marginTop: 24 }}>
          <Link href="/" className="btn btn--navy">Retour à l’accueil</Link>
          <Link href="/applications" className="btn btn--line">Voir les applications</Link>
        </div>
      </div>
    </section>
  )
}
