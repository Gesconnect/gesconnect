import GuideArticle from '@/components/site/GuideArticle'
import { GUIDES } from '@/lib/guides'
import { og } from '@/lib/site'

const G = GUIDES.find((g) => g.slug === 'cahier-excel-ou-application')

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
      standfirst="Le cahier, Excel et l’application de gestion ont chacun leur place. Le bon choix dépend de la taille de votre activité, du nombre de personnes qui vendent ou encaissent, et du temps que vous passez sur place. Voici une comparaison honnête, avec les signes qui montrent qu’il est temps de changer."
      box={{
        title: 'En une phrase',
        text: 'Le cahier suffit quand vous êtes seul et toujours présent ; Excel aide à analyser vos chiffres ; l’application devient utile dès que plusieurs personnes vendent, encaissent ou saisissent à votre place.',
        bg: '#DCFCE7',
        ink: '#14532D',
      }}
      sections={[
        {
          id: 'cahier',
          title: 'Le cahier : simple, mais fragile',
          paras: [
            'Le cahier ne coûte presque rien, ne demande aucun appareil et tout le monde sait s’en servir. Mais il se perd, se mouille, ne calcule rien, ne dit pas qui a écrit quoi, et ne se consulte pas à distance.',
          ],
          fixLabel: 'Il suffit si',
          fix: [
            'Vous êtes seul à vendre et à encaisser.',
            'Vous êtes présent tous les jours.',
            'Vous faites peu de ventes, peu de stock et pas de crédit.',
          ],
        },
        {
          id: 'excel',
          title: 'Excel : puissant, mais pas fait pour le comptoir',
          paras: [
            'Excel calcule, trie et fait des graphiques. C’est un excellent outil pour analyser des chiffres. Mais il demande un ordinateur, se partage mal à plusieurs, multiplie les versions du même fichier, ne délivre pas de reçus et n’est pas pratique sur un téléphone en plein service. Une formule effacée par erreur peut aussi fausser tout un mois.',
          ],
          fixLabel: 'Il convient pour',
          fix: [
            'Le budget et le suivi mensuel, tenus par le gérant.',
            'L’analyse de chiffres déjà collectés.',
          ],
        },
        {
          id: 'application',
          title: 'L’application de gestion : faite pour le terrain',
          paras: [
            'Une application de gestion enregistre chaque vente ou chaque saisie avec le nom de la personne, fait les calculs toute seule, tient le stock à jour, délivre des reçus, intègre le Mobile Money et se consulte à distance. Les données sont sauvegardées automatiquement.',
            'Elle a aussi ses contraintes : un abonnement, un téléphone, un temps de prise en main, et parfois une connexion. Sur ce dernier point, choisissez une application qui continue de fonctionner quand le réseau coupe.',
          ],
          fixLabel: 'Elle devient utile quand',
          fix: [
            'Plusieurs personnes vendent, encaissent ou saisissent.',
            'Vous faites du crédit ou gérez un stock important.',
            'Vous voulez suivre votre activité sans être sur place.',
          ],
        },
        {
          id: 'signes',
          title: 'Les signes qu’il est temps de changer',
          paras: [
            'Si vous vous reconnaissez dans plusieurs de ces situations, votre outil actuel ne suit plus votre activité.',
          ],
          fixLabel: 'Les signes',
          fix: [
            'Vous ne savez pas combien vous avez gagné le mois dernier.',
            'Le stock réel ne correspond jamais au cahier.',
            'Des crédits clients sont oubliés.',
            'Vous devez être sur place pour savoir ce qui se passe.',
            'Les mêmes erreurs de calcul reviennent.',
          ],
        },
        {
          id: 'changer',
          title: 'Changer sans tout casser',
          paras: [
            'Le passage à une application se prépare. Les commerces qui réussissent la transition avancent par étapes.',
          ],
          fix: [
            'Commencer par un seul usage : la caisse, ou le stock.',
            'Garder le cahier en parallèle pendant quelques semaines.',
            'Saisir d’abord les articles et les clients principaux.',
            'Former l’équipe, et désigner une personne de référence.',
            'Profiter de l’essai gratuit pour tester en conditions réelles.',
          ],
        },
      ]}
      checklist={{
        title: 'Prêt à passer à l’application ? 8 questions',
        sub: 'Répondez-y avant de choisir un outil.',
        items: [
          'Combien de personnes vendent ou encaissent ?',
          'Faites-vous du crédit à vos clients ?',
          'Gérez-vous un stock ?',
          'Êtes-vous souvent absent ?',
          'Encaissez-vous en Mobile Money ?',
          'Le réseau coupe-t-il souvent chez vous ?',
          'Qui fera la saisie de départ ?',
          'Quel budget mensuel pouvez-vous y consacrer ?',
        ],
      }}
      bookOrAppTitle="Et pour votre métier ?"
      bookOrApp={[
        'Si vous tenez un maquis, une quincaillerie, un élevage, une association ou une église, une application Gesconnect existe déjà pour votre métier, avec une formule gratuite ou un essai gratuit pour commencer.',
        'Pour les autres activités, nous construisons l’application sur demande, pensée elle aussi pour un téléphone simple et le Mobile Money.',
      ]}
      promo={{
        title: 'Essayez avant de choisir',
        text: 'Regardez les applications prêtes à l’emploi, ou décrivez-nous votre activité sur WhatsApp : nous vous orientons vers la bonne solution.',
        cta: 'Écrire sur WhatsApp',
        waMessage: 'Bonjour Gesconnect, je gère mon activité au cahier ou sur Excel et j’aimerais passer à une application.',
      }}
      faq={[
        ['Excel suffit-il pour gérer un commerce ?', 'Pour analyser des chiffres et suivre un budget, oui. Pour encaisser au comptoir, délivrer des reçus et travailler à plusieurs en même temps, une application de gestion est plus adaptée.'],
        ['Peut-on garder le cahier en plus de l’application ?', 'Oui, pendant quelques semaines : c’est même conseillé pour vérifier que tout est bien enregistré. Ensuite, un seul outil évite les doubles saisies.'],
        ['Une application de gestion fonctionne-t-elle sans internet ?', 'Certaines oui. Cheptelio, Maquis360, Amicalo et MonArche enregistrent les saisies sur le téléphone et les envoient au retour du réseau. Quinca360, en revanche, a besoin d’une connexion internet.'],
      ]}
    />
  )
}
