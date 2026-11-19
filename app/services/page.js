import Link from 'next/link'
import { waLink, og } from '@/lib/site'

export const metadata = {
  title: 'Services : développement sur mesure, données, conseil et formation',
  description:
    'Applications web et mobiles sur mesure, sites internet, intégration de l’IA, analyse de données, conseil, audit digital et formation des équipes, par Gesconnect à Abidjan.',
  alternates: { canonical: '/services' },
  openGraph: og({ title: 'Services : développement sur mesure, données, conseil et formation', description: 'Applications web et mobiles sur mesure, sites internet, intégration de l’IA, analyse de données, conseil, audit digital et formation des équipes, par Gesconnect à Abidjan.', path: '/services' }),
}

const GROUPS = [
  {
    title: 'Développement et produits',
    items: [
      ['Applications sur mesure', 'Votre besoin métier devient une application web complète, conçue à partir de votre réalité terrain, pas d’un modèle générique importé.'],
      ['Applications mobiles', 'Applications Android et iOS légères, utilisables avec un réseau faible, avec paiement Mobile Money.'],
      ['Sites web et e-commerce', 'Sites vitrines, catalogues et boutiques en ligne, rapides et optimisés pour le référencement local.'],
      ['Intégration de l’intelligence artificielle', 'Assistants, automatisation des tâches répétitives et analyses prédictives, ajoutés à vos outils.'],
      ['Hébergement et maintenance', 'Nous hébergeons, maintenons et faisons évoluer vos applications, avec un support réactif.'],
    ],
  },
  {
    title: 'Conseil et données',
    items: [
      ['Conseil en gestion', 'Analyse de vos processus et plan d’action concret pour améliorer votre performance.'],
      ['Audit et diagnostic digital', 'État de vos outils et de vos risques informatiques, avec une feuille de route chiffrée.'],
      ['Analyse de données', 'Tableaux de bord, rapports automatisés et indicateurs clés pour piloter par les chiffres.'],
      ['Support informatique externalisé', 'Support aux utilisateurs, gestion des accès et suivi de votre informatique.'],
    ],
  },
  {
    title: 'Formation et présence en ligne',
    items: [
      ['Formation en entreprise', 'Excel avancé, Power BI, outils de gestion : des formations sur vos propres données.'],
      ['Studio de contenu pédagogique', 'Cours en ligne, vidéos, modules interactifs et quiz pour vos équipes ou votre secteur.'],
      ['Présence en ligne', 'Réseaux sociaux, publicités ciblées, référencement local et contenus.'],
    ],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">›</span><span>Services</span></nav>
          <h1 className="h1">Au-delà des applications</h1>
          <p className="lead">Un logiciel à votre mesure, des chiffres qui parlent et des équipes formées, avec une équipe basée à Abidjan.</p>
          <div className="btns" style={{ marginTop: 24 }}>
            <a className="btn btn--navy" href={waLink('Bonjour Gesconnect, je souhaite parler d’un projet.')} target="_blank" rel="noopener">Parler de mon projet</a>
          </div>
        </div>
      </section>
      {GROUPS.map((g, gi) => (
        <section key={g.title} className={gi === 1 ? 'sec sec--white' : 'sec'}>
          <div className="wrap split">
            <div><h2 className="h2">{g.title}</h2></div>
            <div className="grid" style={{ '--min': '260px', gap: 14 }}>
              {g.items.map(([t, d]) => (
                <div key={t} className="tile" style={gi === 1 ? { background: 'var(--bg)' } : undefined}><strong>{t}</strong><span>{d}</span></div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
