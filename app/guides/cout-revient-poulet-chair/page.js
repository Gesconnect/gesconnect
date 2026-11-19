import GuideArticle from '@/components/site/GuideArticle'
import { GUIDES } from '@/lib/guides'
import { og } from '@/lib/site'

const G = GUIDES.find((g) => g.slug === 'cout-revient-poulet-chair')

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
      standfirst="Beaucoup d’éleveurs savent à combien ils vendent un poulet. Beaucoup moins savent combien ce poulet leur a coûté. Sans ce chiffre, impossible de fixer un prix plancher, de négocier avec un acheteur ou de savoir si la bande a vraiment gagné de l’argent. Voici comment le calculer, poste par poste, avec vos propres chiffres."
      box={{
        title: 'La formule',
        text: 'Coût de revient d’un poulet = total des dépenses de la bande ÷ nombre de poulets vendus. On divise par les poulets vendus, pas par les poussins mis en place : c’est là que la plupart des calculs se trompent.',
        bg: '#F1E5D7',
        ink: '#2A1810',
      }}
      sections={[
        {
          id: 'depenses',
          title: 'Lister toutes les dépenses de la bande',
          paras: [
            'Le coût de revient n’est juste que si aucune dépense n’est oubliée. Pour une bande de poulets de chair, les postes habituels sont : les poussins (achat et transport), l’aliment de démarrage, de croissance et de finition, les vaccins, vitamines et médicaments, la litière et les désinfectants, le chauffage et l’éclairage (gaz, charbon, électricité), l’eau, la main-d’œuvre, le transport pour la vente, et une part du bâtiment et du matériel.',
            'Dans la plupart des élevages, l’aliment est la plus grosse dépense. C’est donc là que se jouent les gains et les pertes.',
          ],
          fix: [
            'Noter chaque dépense le jour même, avec le numéro de la bande.',
            'Garder les reçus, même ceux des petits achats.',
            'Répartir les dépenses communes à plusieurs bandes (gaz, salaires) au prorata de leur durée.',
          ],
        },
        {
          id: 'mortalite',
          title: 'La mortalité change tout le calcul',
          paras: [
            'Un poussin mort a coûté son prix d’achat, son aliment et ses soins, mais il ne sera jamais vendu. Toutes les dépenses se répartissent alors sur moins de poulets.',
            'Un exemple simple : si 5 poussins sur 100 meurent, les dépenses de la bande se partagent entre 95 poulets au lieu de 100. Chaque poulet vendu coûte alors environ 5 % plus cher, sans que vous ayez dépensé un franc de plus.',
          ],
          fix: [
            'Noter les morts chaque jour, bâtiment par bâtiment.',
            'Chercher la cause dès qu’un chiffre sort de l’ordinaire : chaleur, eau, maladie, densité.',
            'Respecter le programme de vaccination et noter chaque intervention.',
          ],
        },
        {
          id: 'aliment',
          title: 'L’aliment : suivre l’indice de consommation',
          paras: [
            'L’indice de consommation mesure combien de kilos d’aliment il a fallu pour produire un kilo de poulet vivant. Plus il est bas, mieux l’aliment a été transformé en viande.',
            'Vous n’avez pas besoin de le comparer à une norme pour commencer : comparez-le d’une bande à l’autre. S’il monte, quelque chose a changé (aliment, gaspillage, santé, chaleur).',
          ],
          formula: 'Indice de consommation = kilos d’aliment consommés ÷ kilos de poids vif produits',
          fix: [
            'Noter chaque sac distribué, et le type d’aliment.',
            'Peser un échantillon de poulets chaque semaine.',
            'Chasser le gaspillage : mangeoires trop remplies, aliment mouillé ou renversé, rongeurs.',
          ],
        },
        {
          id: 'oublis',
          title: 'Les dépenses qu’on oublie',
          paras: [
            'Trois postes manquent souvent dans les calculs. La main-d’œuvre familiale : même non payée, elle a une valeur, surtout si vous comparez l’élevage à une autre activité. Le bâtiment et le matériel : un poulailler, des abreuvoirs, des mangeoires s’usent ; il faut en compter une part à chaque bande. Et les poulets consommés à la maison ou offerts : ils sont sortis de la bande sans être vendus.',
          ],
          fix: [
            'Fixer une fois pour toutes la part du bâtiment et du matériel à compter par bande.',
            'Noter les poulets donnés ou consommés comme des sorties, pas comme des ventes.',
          ],
        },
        {
          id: 'prix',
          title: 'Du coût de revient au prix de vente',
          paras: [
            'Une fois le coût de revient connu, la marge par poulet se calcule simplement : prix de vente moins coût de revient. Le coût de revient devient votre prix plancher : en dessous, chaque vente vous fait perdre de l’argent.',
            'Si vous vendez au kilo, faites le même calcul au kilo de poids vif : total des dépenses divisé par le nombre de kilos vendus.',
          ],
          formula: 'Marge par poulet = prix de vente − coût de revient',
        },
      ]}
      checklist={{
        title: 'Le bilan de bande en 8 points',
        sub: 'À remplir à la fin de chaque bande, avant de lancer la suivante.',
        items: [
          'Nombre de poussins mis en place.',
          'Nombre de morts, et leurs causes.',
          'Sacs d’aliment utilisés, par type.',
          'Poids moyen à la vente.',
          'Toutes les dépenses, reçus à l’appui.',
          'Poulets vendus, donnés et consommés.',
          'Recettes totales des ventes.',
          'Coût de revient et marge par poulet.',
        ],
      }}
      bookOrApp={[
        'Un cahier bien tenu permet ce calcul pour une petite bande suivie par le propriétaire lui-même. Dès qu’il y a des employés, plusieurs bâtiments ou un propriétaire souvent absent, les chiffres arrivent en retard, incomplets, et le bilan se fait de mémoire.',
        'Une application d’élevage enregistre la mortalité, l’aliment, les pesées et les dépenses au fil des jours, par lot, et calcule le bilan toute seule. Choisissez-en une qui fonctionne sans réseau : à la ferme, la connexion n’est pas garantie.',
      ]}
      promo={{
        title: 'Cheptelio fait ce calcul pour vous',
        text: 'Mortalité, aliment, pesées, ventes et dépenses suivis par lot, budget prévu contre réalisé, et le rapport du soir sur WhatsApp. Sur un simple téléphone, même sans réseau.',
        cta: 'Essayer 30 jours gratuitement',
      }}
      faq={[
        ['Comment calculer le coût de revient d’un poulet de chair ?', 'Additionnez toutes les dépenses de la bande (poussins, aliment, soins, litière, énergie, main-d’œuvre, transport, part du bâtiment), puis divisez par le nombre de poulets réellement vendus.'],
        ['Faut-il compter la main-d’œuvre familiale ?', 'Oui, si vous voulez savoir si l’élevage rapporte vraiment. Même non payé, le temps passé a une valeur.'],
        ['Comment baisser le coût de revient ?', 'En réduisant la mortalité et le gaspillage d’aliment, deux des postes où l’on perd le plus souvent de l’argent, et en suivant l’indice de consommation d’une bande à l’autre.'],
      ]}
    />
  )
}
