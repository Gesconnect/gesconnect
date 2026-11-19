import Link from 'next/link'
import JsonLd from '@/components/site/JsonLd'
import { GUIDES } from '@/lib/guides'
import { SITE, appLink } from '@/lib/site'

const G = GUIDES.find((g) => g.slug === 'argent-maquis')
const URL_PAGE = `${SITE.url}/guides/${G.slug}`

export const metadata = {
  title: G.metaTitle,
  description: G.metaDescription,
  alternates: { canonical: `/guides/${G.slug}` },
  openGraph: { type: 'article', title: G.title, description: G.metaDescription, url: URL_PAGE, publishedTime: G.date },
}

const FUITES = [
  {
    id: 'bouteilles',
    title: 'Les bouteilles qui disparaissent du frigo',
    text: 'Casse non déclarée, bouteille offerte à un ami sans être notée, consommation du personnel pendant le service, vol : les causes sont nombreuses. Sans comptage régulier, impossible de savoir laquelle coûte le plus cher à votre maquis.',
    fix: [
      'Séparer le stock du magasin et celui du frigo-bar, et noter chaque transfert de l’un à l’autre.',
      'Compter le frigo à l’ouverture et à la clôture.',
      'Faire de temps en temps un comptage surprise, sans prévenir l’équipe.',
      'Noter chaque bouteille offerte, avec le nom de la personne qui l’a autorisée.',
    ],
  },
  {
    id: 'annulations',
    title: 'Les notes annulées après paiement',
    text: 'Une note annulée une fois le client parti, c’est de l’argent encaissé qui ne figure plus nulle part. C’est la fuite la plus difficile à voir, parce qu’elle ne laisse aucune trace dans un cahier.',
    fix: ['Pas d’annulation sans motif écrit.', 'Réserver les annulations au gérant.', 'Relire chaque semaine la liste des annulations, serveur par serveur.'],
  },
  {
    id: 'ardoises',
    title: 'Les ardoises qui ne reviennent pas',
    text: 'Le crédit fidélise les habitués, c’est vrai. Mais une ardoise notée sur une page qui se perd ne revient jamais, et parfois le client non plus.',
    fix: ['Une liste fermée de clients autorisés à prendre à crédit.', 'Un plafond par client : au-delà, on ne sert plus à crédit.', 'Une date de remboursement convenue, et une relance polie dès qu’elle passe.'],
  },
  {
    id: 'casiers',
    title: 'Les casiers et les consignes',
    text: 'Un casier vide a une valeur : le fournisseur le facture s’il manque au moment de l’échange. Et les consignes payées par les clients doivent être rendues ou gardées, mais jamais oubliées.',
    fix: ['Compter les casiers vides à chaque livraison, devant le livreur.', 'Noter chaque consigne encaissée et chaque bouteille rendue.'],
  },
  {
    id: 'mobile-money',
    title: 'Le Mobile Money qu’on ne vérifie pas',
    text: 'Wave, Orange Money, MTN, Moov : les paiements par téléphone évitent les problèmes de monnaie, mais ils compliquent la clôture si personne ne note la référence de chaque transaction. Et un message de paiement montré sur l’écran d’un client n’est pas une preuve que l’argent est arrivé.',
    fix: ['Vérifier la réception sur le téléphone du maquis, jamais sur celui du client.', 'Noter la référence de la transaction sur la note.', 'À la clôture, comparer le total Mobile Money des notes avec le relevé du compte.'],
  },
  {
    id: 'caisse',
    title: 'La caisse comptée en connaissant le résultat',
    text: 'Quand la personne qui compte la caisse sait déjà combien elle doit trouver, l’écart a une curieuse tendance à disparaître. Le comptage « à l’aveugle » règle le problème : on compte d’abord, on compare ensuite.',
    fix: ['Le caissier compte et note son total sans voir le montant attendu.', 'Le gérant compare ensuite et note l’écart, même quand il est nul.', 'On garde l’historique des écarts, personne par personne.'],
  },
]

const CLOTURE = [
  'Compter le frigo-bar.',
  'Noter les casses et les bouteilles offertes de la soirée.',
  'Vérifier qu’aucune note n’est restée ouverte.',
  'Relire les annulations et leurs motifs.',
  'Mettre à jour les ardoises.',
  'Rapprocher les paiements Mobile Money.',
  'Compter la caisse à l’aveugle.',
  'Noter l’écart, et le faire signer.',
]

const FAQ = [
  ['Comment éviter les vols dans un maquis ?', 'Séparez le stock du magasin et celui du frigo, comptez à l’ouverture et à la clôture, faites signer chaque action par la personne qui la fait, et comptez la caisse à l’aveugle. La plupart des pertes viennent de trous dans le contrôle, pas d’un seul coupable.'],
  ['Faut-il internet pour utiliser un logiciel de maquis ?', 'Pas forcément. Certaines applications, comme Maquis360, enregistrent tout sur le téléphone et envoient les données dès que le réseau revient.'],
  ['Faut-il accepter le crédit dans un maquis ?', 'Le crédit garde les habitués, à condition de le limiter : une liste de clients autorisés, un plafond par client et une date de remboursement. Sans ces trois règles, l’ardoise devient une perte.'],
]

export default function ArticleMaquis() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: G.title,
      description: G.metaDescription,
      datePublished: G.date,
      dateModified: G.date,
      inLanguage: 'fr',
      mainEntityOfPage: URL_PAGE,
      author: { '@type': 'Organization', name: 'L’équipe Gesconnect', url: SITE.url },
      publisher: { '@id': `${SITE.url}/#organisation` },
      image: `${SITE.url}/og_image.jpg`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE.url}/guides` },
        { '@type': 'ListItem', position: 3, name: G.title, item: URL_PAGE },
      ],
    },
  ]

  return (
    <article className="article sec" style={{ paddingTop: 'clamp(32px, 5vw, 64px)' }}>
      <div className="wrap">
        <div className="prose">
          <nav className="crumbs" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link><span aria-hidden="true">›</span>
            <Link href="/guides">Guides</Link><span aria-hidden="true">›</span>
            <span>{G.theme}</span>
          </nav>
          <p className="eyebrow" style={{ marginTop: 24, color: G.ink }}>{G.theme}</p>
          <h1 className="title" style={{ color: 'var(--navy)' }}>{G.title}</h1>
          <p className="muted" style={{ fontSize: 14 }}>Par l’équipe Gesconnect · <time dateTime={G.date}>{G.dateLabel}</time> · {G.readingTime}</p>

          <p className="standfirst">
            Un maquis perd rarement son argent d’un seul coup. Il le perd par petites fuites, soir après soir, jusqu’au jour où le
            bénéfice du mois ne colle plus avec l’ambiance des week-ends. Voici les six fuites les plus courantes, comment les
            repérer et comment les fermer, avec ou sans logiciel.
          </p>

          <aside className="box box--warm" aria-label="Le calcul qui fait mal">
            <p style={{ marginTop: 0, fontWeight: 800 }}>Le calcul qui fait mal</p>
            <p style={{ marginTop: 8, fontSize: 17 }}>
              Une seule bouteille à 700 F qui manque chaque soir, c’est 21 000 F sur un mois de 30 jours, et plus de 250 000 F sur
              l’année. Faites le calcul avec vos propres chiffres : perte d’un soir × nombre de soirs ouverts.
            </p>
          </aside>

          <nav className="box box--line" aria-label="Sommaire">
            <p style={{ marginTop: 0, fontWeight: 700, color: 'var(--navy)' }}>Dans ce guide</p>
            <ol style={{ marginTop: 8, fontSize: 16, lineHeight: 1.9 }}>
              {FUITES.map((f) => <li key={f.id}><a href={`#${f.id}`}>{f.title}</a></li>)}
              <li><a href="#cloture">La clôture en 8 points</a></li>
            </ol>
          </nav>

          {FUITES.map((f, i) => (
            <section key={f.id} aria-labelledby={f.id}>
              <h2 id={f.id}>{i + 1}. {f.title}</h2>
              <p>{f.text}</p>
              <p className="what">Ce qui marche</p>
              <ul>{f.fix.map((x) => <li key={x}>{x}</li>)}</ul>
            </section>
          ))}

          <section id="cloture" className="box box--navy" aria-labelledby="cloture-titre" style={{ marginTop: 48 }}>
            <h2 id="cloture-titre">La clôture en 8 points</h2>
            <p style={{ marginTop: 6, color: '#C3CFE2', fontSize: 16 }}>À imprimer et à coller derrière le comptoir.</p>
            <ol style={{ marginTop: 14, fontSize: 17 }}>{CLOTURE.map((c) => <li key={c}>{c}</li>)}</ol>
          </section>

          <h2>Cahier ou application ?</h2>
          <p>
            Un cahier bien tenu peut suffire à un petit maquis où le patron est présent tous les soirs. Dès qu’il y a plusieurs
            serveurs, un magasin séparé ou un patron souvent absent, le cahier montre ses limites : il ne dit pas qui a fait quoi, il
            peut se perdre, et il ne prévient personne quand quelque chose cloche.
          </p>
          <p>
            Une application de caisse enregistre chaque action avec le nom de la personne, calcule les écarts toute seule et alerte
            le patron à distance. Choisissez-en une qui fonctionne sans internet : dans un maquis, le réseau coupe toujours au mauvais
            moment.
          </p>

          <aside className="promo" aria-label="Maquis360">
            <img src="/apps/maquis360.webp" alt="Logo Maquis360" width="64" height="64" loading="lazy" />
            <div>
              <strong>Maquis360 applique ces règles pour vous</strong>
              <p>Code PIN par serveur, annulations avec motif, ardoises plafonnées, clôture à l’aveugle et alertes au patron, sur un simple téléphone, même sans internet.</p>
              <div className="btns" style={{ marginTop: 16 }}>
                <a className="btn btn--sm" style={{ background: '#F2A531', color: '#15120F' }} href={appLink('maquis360.com', 'guide-argent-maquis')} target="_blank" rel="noopener">Essayer 30 jours gratuitement</a>
                <Link className="btn btn--sm btn--line" href="/applications/maquis360">Découvrir Maquis360</Link>
              </div>
            </div>
          </aside>

          <h2>Questions fréquentes</h2>
          <div className="faq" style={{ marginTop: 16 }}>
            {FAQ.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
            <p style={{ marginTop: 0, fontWeight: 700, color: 'var(--navy)' }}>À découvrir aussi</p>
            <p className="muted" style={{ fontSize: 16 }}>
              <Link href="/applications/maquis360">Maquis360, la caisse des maquis, bars et caves</Link> ·{' '}
              <Link href="/applications">toutes les applications Gesconnect</Link> · <Link href="/guides">tous les guides</Link>
            </p>
          </div>
        </div>
      </div>
      <JsonLd data={jsonLd} />
    </article>
  )
}
