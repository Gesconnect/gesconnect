import GuideArticle from '@/components/site/GuideArticle'
import { GUIDES } from '@/lib/guides'
import { og } from '@/lib/site'

const G = GUIDES.find((g) => g.slug === 'credit-chantier-quincaillerie')

export const metadata = {
  title: G.metaTitle,
  description: G.metaDescription,
  alternates: { canonical: `/guides/${G.slug}` },
  openGraph: og({ type: 'article', title: G.title, description: G.metaDescription, path: `/guides/${G.slug}`, image: `/og/guides/${G.slug}`, publishedTime: G.date }),
}

export default function Page() {
  return (
    <GuideArticle
      g={G}
      standfirst="Les artisans et les entreprises du bâtiment achètent volontiers à crédit, et c’est souvent ce qui les fait revenir. Mais une quincaillerie qui fait crédit sans règles finance les chantiers des autres avec son propre stock. Voici comment vendre à crédit tout en gardant le contrôle de votre trésorerie."
      box={{
        title: 'La question à se poser chaque soir',
        text: 'Combien mes clients me doivent-ils, au total et client par client ? Si la réponse prend plus d’une minute à trouver, le crédit n’est pas encore sous contrôle.',
        bg: '#EAF4FD',
        ink: '#0B2545',
      }}
      sections={[
        {
          id: 'qui',
          title: 'Choisir à qui faire crédit',
          paras: [
            'Le crédit n’est pas un droit, c’est une confiance qui se construit. Un client qui paie régulièrement au comptant depuis des mois n’a pas le même profil qu’un artisan rencontré la veille.',
          ],
          fix: [
            'Tenir une liste écrite des clients autorisés à acheter à crédit.',
            'Commencer petit avec un nouveau client, puis augmenter avec le temps.',
            'Noter le téléphone, l’adresse et le chantier en cours de chaque client à crédit.',
          ],
        },
        {
          id: 'plafond',
          title: 'Fixer un plafond par client',
          paras: [
            'Sans plafond, une dette grossit d’achat en achat sans que personne ne s’en rende compte. Le plafond fixe la somme au-delà de laquelle on ne sert plus à crédit.',
          ],
          fix: [
            'Un plafond écrit pour chaque client, connu du vendeur et du caissier.',
            'Au-delà du plafond : paiement comptant, ou accord du gérant.',
            'Revoir le plafond selon la régularité des paiements.',
          ],
        },
        {
          id: 'chantier',
          title: 'Un compte par chantier',
          paras: [
            'Un même artisan travaille souvent sur plusieurs chantiers, pour différents propriétaires. Si tous ses achats sont mélangés, il devient impossible de savoir ce que chaque chantier doit, et donc de réclamer le bon montant.',
          ],
          fix: [
            'Ouvrir un compte par chantier, rattaché au client.',
            'Inscrire le nom du chantier sur chaque bon de sortie.',
            'Faire signer le bon de livraison par la personne qui retire la marchandise.',
          ],
        },
        {
          id: 'acompte',
          title: 'Demander un acompte sur les grosses commandes',
          paras: [
            'Pour une grosse commande, l’acompte engage le client et réduit votre risque. Il permet aussi de réserver la marchandise sans immobiliser votre stock pour rien.',
          ],
          fix: [
            'Un acompte à la commande, noté sur le devis.',
            'La marchandise réservée tant que la commande est en cours.',
            'Les livraisons partielles facturées au fur et à mesure.',
          ],
        },
        {
          id: 'relance',
          title: 'Relancer tôt, et poliment',
          paras: [
            'Plus une dette est ancienne, plus elle est difficile à récupérer. Une relance polie le lendemain de l’échéance passe beaucoup mieux qu’une réclamation tendue trois mois plus tard.',
          ],
          fix: [
            'Une date de paiement convenue à chaque vente à crédit.',
            'Une relance dès le lendemain de l’échéance, par message.',
            'Un relevé de compte envoyé régulièrement au client.',
            'Aucun nouveau crédit tant que l’échéance n’est pas réglée.',
          ],
        },
        {
          id: 'memoire',
          title: 'Ne jamais faire crédit de mémoire',
          paras: [
            '« Je l’ai noté dans ma tête », « il passera régler demain » : chaque crédit qui n’est pas écrit au moment de la vente est un crédit qui risque d’être perdu. Et le vendeur ne doit pas pouvoir dépasser seul le plafond d’un client.',
          ],
          fix: [
            'Chaque vente à crédit enregistrée tout de suite, au nom du client.',
            'Les dépassements de plafond réservés au gérant.',
          ],
        },
      ]}
      checklist={{
        title: 'Le point crédit de la semaine en 8 points',
        sub: 'Chaque semaine, avec le gérant.',
        items: [
          'Le total dû par l’ensemble des clients.',
          'Les clients au-dessus de leur plafond.',
          'Les échéances dépassées.',
          'Les relances envoyées, et les réponses.',
          'Les acomptes reçus.',
          'Les livraisons partielles restant à facturer.',
          'Les clients à bloquer jusqu’au paiement.',
          'Les plafonds à revoir.',
        ],
      }}
      bookOrApp={[
        'Un cahier de crédit peut suffire avec quelques clients fidèles et un seul vendeur. Mais il ne bloque jamais une vente au-dessus du plafond, ne calcule pas le total dû et ne prévient pas quand une échéance passe.',
        'Un logiciel de quincaillerie rattache chaque vente à crédit au compte du client et du chantier, refuse les dépassements sans l’accord du gérant et montre en un coup d’œil ce que chacun doit.',
      ]}
      promo={{
        title: 'Quinca360 applique ces règles pour vous',
        text: 'Plafond par client, comptes chantier, acomptes, devis transformés en commande et livraisons partielles. Sur téléphone ou ordinateur, sans rien installer.',
        cta: 'Essayer 14 jours gratuitement',
      }}
      faq={[
        ['Comment gérer le crédit client dans une quincaillerie ?', 'Avec une liste de clients autorisés, un plafond par client, un compte par chantier, une date de paiement pour chaque vente et des relances dès l’échéance passée.'],
        ['Faut-il faire crédit aux artisans ?', 'Le crédit fidélise les artisans et les entreprises du bâtiment, à condition de le limiter et de le suivre. Commencez petit et augmentez le plafond avec la régularité des paiements.'],
        ['Comment relancer un client qui ne paie pas ?', 'Tôt et poliment : un message le lendemain de l’échéance, un relevé de compte clair, puis l’arrêt de tout nouveau crédit tant que la dette n’est pas réglée. Un échéancier écrit peut aider à débloquer la situation.'],
      ]}
    />
  )
}
