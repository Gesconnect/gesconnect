import Link from 'next/link'
import CatalogueFilter from '@/components/site/CatalogueFilter'
import { waLink } from '@/lib/site'

export const metadata = {
  title: 'Catalogue : une application de gestion pour chaque métier',
  description:
    'Commerce, restauration, élevage, santé, éducation, artisanat, associations, immobilier : le catalogue des applications de gestion Gesconnect, prêtes à l’emploi ou construites sur demande.',
  alternates: { canonical: '/catalogue' },
}

export default function Catalogue() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">›</span><span>Catalogue</span></nav>
          <h1 className="h1">Une application de gestion pour chaque métier</h1>
          <p className="lead">Certaines applications sont prêtes à l’emploi. Pour les autres métiers, nous construisons l’application à la demande, sur la même base : téléphone, petits réseaux, Mobile Money.</p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <CatalogueFilter />
          <div className="card-dark" style={{ marginTop: 40, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: '20px 40px' }}>
            <div style={{ flex: '2 1 420px', minWidth: 0 }}>
              <h2 className="h3" style={{ color: '#fff' }}>Votre métier n’est pas dans la liste ?</h2>
              <p style={{ marginTop: 8 }}>Décrivez-nous votre activité sur WhatsApp. Nous vous disons en quelques jours ce que nous pouvons construire, et à quel prix.</p>
            </div>
            <a className="btn btn--green" href={waLink('Bonjour Gesconnect, je cherche une application pour mon activité : ')} target="_blank" rel="noopener">Décrire mon besoin</a>
          </div>
        </div>
      </section>
    </>
  )
}
