import Link from 'next/link'
import { APPS } from '@/lib/apps'
import { og } from '@/lib/site'

export const metadata = {
  title: 'À propos : un studio tech ivoirien',
  description:
    'Gesconnect Consulting est un studio tech basé à Abidjan qui conçoit des applications de gestion pour les PME, commerces et organisations d’Afrique francophone.',
  alternates: { canonical: '/a-propos' },
  openGraph: og({ title: 'À propos : un studio tech ivoirien', description: 'Gesconnect Consulting est un studio tech basé à Abidjan qui conçoit des applications de gestion pour les PME, commerces et organisations d’Afrique francophone.', path: '/a-propos' }),
}

const PRINCIPES = [
  ['Partir du terrain', 'Chaque application part des habitudes réelles d’un métier : le cahier du trésorier, la note du maquis, le tour des bâtiments à la ferme.'],
  ['Marcher là où on vit', 'Téléphones d’entrée de gamme, réseau qui coupe, peu de data : c’est la règle, pas l’exception.'],
  ['Payer comme on paie', 'Mobile Money, espèces avec reçu, prix en FCFA. L’argent des clients va sur leur compte, jamais chez nous.'],
  ['Rendre les comptes visibles', 'Écritures qu’on ne retouche pas, actions signées par la personne qui les fait : la confiance se construit sur des preuves.'],
]

export default function APropos() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">›</span><span>À propos</span></nav>
          <h1 className="h1">Un studio tech ivoirien, au service de ceux qui gèrent</h1>
          <p className="lead">
            Gesconnect Consulting conçoit des applications de gestion pour les PME, les commerces et les organisations d’Afrique
            francophone. Notre équipe est basée à Abidjan.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div><h2 className="h2">Pourquoi Gesconnect</h2></div>
          <div style={{ fontSize: 17, color: 'var(--text)' }}>
            <p>
              Beaucoup d’entreprises et d’organisations d’ici se gèrent encore au cahier ou dans des fichiers dispersés. Les grands
              logiciels du marché sont pensés pour d’autres réalités : un bon ordinateur, une connexion stable, une carte bancaire.
            </p>
            <p style={{ marginTop: 16 }}>
              Nous faisons l’inverse : des applications simples, une par métier, qui tiennent dans un téléphone, continuent sans
              réseau et encaissent en Mobile Money. Elles sont déjà au travail :{' '}
              {APPS.map((a, i) => (
                <span key={a.slug}>
                  <Link href={`/applications/${a.slug}`}>{a.name}</Link>{i < APPS.length - 2 ? ', ' : i === APPS.length - 2 ? ' et ' : '.'}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: 28 }}>Nos principes</h2>
          <div className="rules" style={{ marginTop: 0 }}>
            {PRINCIPES.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div><h2 className="h2">L’équipe</h2></div>
          <div style={{ fontSize: 17, color: 'var(--text)' }}>
            <p>
              Notre équipe, basée à Abidjan, conçoit, développe, héberge et accompagne chaque application, de la première
              démonstration à la formation des utilisateurs.
            </p>
            <div className="btns" style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn btn--navy">Nous contacter</Link>
              <Link href="/services" className="btn btn--line">Nos services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
