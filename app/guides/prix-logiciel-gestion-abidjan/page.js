import GuideArticle from '@/components/site/GuideArticle'
import { GUIDES } from '@/lib/guides'
import { og } from '@/lib/site'

const G = GUIDES.find((g) => g.slug === 'prix-logiciel-gestion-abidjan')

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
      standfirst="La question revient dans chaque commerce, chaque ferme et chaque association : combien faut-il prévoir pour un logiciel de gestion ? La réponse dépend d’abord d’un choix : faire développer un logiciel sur mesure, ou s’abonner à une application déjà prête pour votre métier. Voici comment comparer, sans oublier les coûts qu’on ne voit pas sur le devis."
      box={{
        title: 'Le bon calcul',
        text: 'Comparez le coût sur trois ans, pas le prix du premier mois : abonnement ou achat, installation, formation, téléphones, data et maintenance compris.',
        bg: '#DCFCE7',
        ink: '#14532D',
      }}
      sections={[
        {
          id: 'choix',
          title: 'Sur mesure ou abonnement',
          paras: [
            'Un logiciel sur mesure est construit pour vous seul. Il épouse exactement votre façon de travailler, mais il coûte cher au départ : le prix dépend du nombre de modules, il faut compter plusieurs semaines ou plusieurs mois de développement, puis payer la maintenance et l’hébergement.',
            'Une application par abonnement est déjà construite pour votre métier. Vous payez au mois ou à l’année, l’hébergement, les sauvegardes et les mises à jour sont compris, et vous pouvez commencer le jour même.',
          ],
          fixLabel: 'Comment choisir',
          fix: [
            'L’abonnement si votre métier est courant (commerce, maquis, élevage, association) et que vous voulez démarrer vite.',
            'Le sur-mesure si vos processus sont très particuliers, ou si le logiciel doit se brancher sur d’autres outils de l’entreprise.',
          ],
        },
        {
          id: 'inclus',
          title: 'Ce que comprend vraiment le prix',
          paras: [
            'Deux offres au même prix ne donnent pas forcément la même chose. Avant de comparer, vérifiez ce qui est inclus.',
          ],
          fixLabel: 'À vérifier',
          fix: [
            'L’hébergement et les sauvegardes.',
            'Les mises à jour et les nouvelles fonctions.',
            'Le nombre d’utilisateurs ou de téléphones autorisés.',
            'L’assistance : par qui, comment, et à quelles heures.',
            'La formation de vos équipes.',
          ],
        },
        {
          id: 'caches',
          title: 'Les coûts qu’on ne voit pas sur le devis',
          paras: [
            'Le prix du logiciel n’est qu’une partie de la dépense. D’autres coûts arrivent avec la mise en route.',
          ],
          fixLabel: 'À prévoir',
          fix: [
            'Les téléphones ou ordinateurs des employés.',
            'La data mobile, surtout si le logiciel consomme beaucoup.',
            'Les frais des opérateurs sur les paiements Mobile Money.',
            'Le temps de saisie de départ : articles, clients, membres.',
            'Le matériel éventuel : imprimante de tickets, lecteur de codes-barres.',
          ],
        },
        {
          id: 'questions',
          title: 'Les questions à poser avant de signer',
          paras: [
            'Ces questions évitent la plupart des mauvaises surprises, quel que soit le fournisseur.',
          ],
          fixLabel: 'Les questions',
          fix: [
            'Le logiciel fonctionne-t-il quand le réseau coupe ?',
            'Puis-je l’essayer gratuitement avant de payer ?',
            'Puis-je récupérer toutes mes données si j’arrête ?',
            'Le prix augmente-t-il avec le nombre d’utilisateurs ?',
            'Qui m’aide en cas de problème, et comment : WhatsApp, téléphone, sur place ?',
            'Où sont hébergées mes données, et qui peut les voir ?',
          ],
        },
        {
          id: 'exemples',
          title: 'Des exemples de prix d’abonnement',
          paras: [
            'Pour donner un ordre d’idée, voici les formules publiées par les applications Gesconnect en novembre 2026. Les prix peuvent évoluer : les tarifs à jour sont sur le site de chaque application.',
          ],
          fixLabel: 'Tarifs publiés en novembre 2026',
          fix: [
            'Maquis360 (maquis, bars, caves) : de 5 000 F par mois (formule Solo) à 25 000 F par mois (formule Pro), après 30 jours d’essai gratuit.',
            'Quinca360 (quincailleries) : formule Starter gratuite, Business à 15 000 F par mois et Premium à 30 000 F par mois, hors taxes, avec 14 jours de Premium offerts au départ.',
            'Amicalo (associations) : gratuit jusqu’à 10 membres, puis formules sur demande.',
            'MonArche (églises) : gratuit jusqu’à 50 membres, avec 30 jours de la formule Croissance offerts ; des formules existent pour les grandes églises et les réseaux d’églises.',
            'Cheptelio (élevage) : 30 jours d’accès complet offerts, puis le premier lot de chaque ferme gratuit ; ensuite, pass par lot ou abonnement annuel par espèce.',
          ],
        },
      ]}
      checklist={{
        title: 'Comparer deux offres en 8 points',
        sub: 'Mettez les deux offres côte à côte et cochez.',
        items: [
          'Le coût total sur trois ans.',
          'L’essai gratuit.',
          'Le fonctionnement quand le réseau coupe.',
          'Le paiement Mobile Money intégré.',
          'Le nombre d’utilisateurs inclus.',
          'L’export de vos données.',
          'L’assistance en français, près de chez vous.',
          'La formation de vos équipes.',
        ],
      }}
      bookOrAppTitle="Et Gesconnect ?"
      bookOrApp={[
        'Gesconnect propose les deux approches : des applications prêtes à l’emploi pour plusieurs métiers, et le développement sur mesure quand aucune application existante ne convient.',
        'Si vous hésitez, décrivez-nous votre activité : nous vous disons honnêtement si une application existante suffit, ou s’il vaut mieux construire autre chose.',
      ]}
      promo={{
        title: 'Besoin d’un avis avant de choisir ?',
        text: 'Décrivez votre activité sur WhatsApp : nous vous disons quelle solution convient, et à quel prix. Sans engagement.',
        cta: 'Écrire sur WhatsApp',
        waMessage: 'Bonjour Gesconnect, je cherche un logiciel de gestion pour mon activité et j’aimerais un conseil.',
      }}
      faq={[
        ['Combien coûte un logiciel de gestion pour une PME à Abidjan ?', 'Cela dépend surtout du choix entre abonnement et sur-mesure. Les applications par abonnement vont de formules gratuites limitées à environ 30 000 F CFA par mois pour les formules citées dans ce guide. Un logiciel sur mesure se chiffre sur devis, selon les modules, et coûte beaucoup plus cher au départ.'],
        ['Vaut-il mieux acheter un logiciel ou s’abonner ?', 'Pour un métier courant, l’abonnement est souvent plus simple : pas de gros investissement, hébergement et mises à jour compris. Le sur-mesure se justifie quand vos besoins sont vraiment particuliers.'],
        ['Existe-t-il des logiciels de gestion gratuits ?', 'Oui, avec des limites. Par exemple, Quinca360 propose une formule Starter gratuite, Amicalo est gratuit jusqu’à 10 membres et MonArche jusqu’à 50 membres.'],
      ]}
    />
  )
}
