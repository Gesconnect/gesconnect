import GuideArticle from '@/components/site/GuideArticle'
import { GUIDES } from '@/lib/guides'
import { og } from '@/lib/site'

const G = GUIDES.find((g) => g.slug === 'comptes-eglise-loi-2024')

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
      standfirst="Depuis l’ordonnance n° 2024-368 du 12 juin 2024, ratifiée par la loi n° 2025-386 du 11 juin 2025, les églises sont des « organisations cultuelles », l’une des catégories d’organisations de la société civile, aux côtés des associations, des ONG et des fondations. Ce texte leur demande de tenir des comptes et de remettre des documents à des dates fixes. Voici ce qu’il prévoit, et comment s’organiser sans y passer ses semaines."
      box={{
        title: 'À retenir',
        text: 'Un état des ressources et des dépenses tenu au fil de l’année, un compte financier chaque année, un compte dans une banque ou un établissement financier national, un rapport d’activités au plus tard le 31 mars, et tout changement de dirigeants déclaré dans le mois.',
        bg: '#E6F5F4',
        ink: '#12343B',
      }}
      sections={[
        {
          id: 'texte',
          title: 'Ce que prévoit le texte',
          paras: [
            'L’ordonnance s’applique à toutes les organisations de la société civile, et donc aux églises. Plusieurs articles concernent directement la gestion de l’argent et l’administration.',
          ],
          fixLabel: 'Les articles à connaître',
          fix: [
            'Article 33 : tenir un état des ressources et des dépenses, dresser chaque année le compte financier de l’année écoulée, faire ses déclarations aux impôts et avoir un compte dans une banque ou un établissement financier national.',
            'Article 31 : se doter d’un manuel de procédures administratives, financières et comptables.',
            'Article 48 : présenter chaque année à l’autorité compétente un rapport sur les activités de l’année écoulée, au plus tard le 31 mars de l’année suivante.',
            'Article 17 : déclarer dans le mois tout changement dans l’administration ou la direction.',
            'Article 75 : les organisations cultuelles peuvent recevoir des dons et legs.', 'Article 76 : le responsable de l’église informe la direction en charge des Cultes de toute « mobilisation de ressources extérieures » pour financer un projet ; au-delà d’un seuil fixé par règlement, il faut une autorisation de levée de fonds du ministre chargé de l’Administration du territoire.',
            'Article 53 : certains manquements, notamment aux obligations de déclaration de l’article 17, sont punis d’une amende de 36 000 à 720 000 francs CFA ; la même peine vise les dirigeants qui refusent de fournir les registres et pièces de comptabilité à l’autorité qui les demande.',
          ],
        },
        {
          id: 'semaine',
          title: 'Tenir les comptes au fil des semaines',
          paras: [
            'L’état des ressources et des dépenses n’a rien de compliqué s’il est tenu chaque semaine. Il devient un casse-tête quand on essaie de le reconstituer en fin d’année à partir de souvenirs et de bouts de papier.',
          ],
          fix: [
            'Noter chaque recette (dîmes, offrandes, quêtes, dons) et chaque dépense le jour même.',
            'Séparer les fonds : fonctionnement, construction, mission, action sociale.',
            'Garder une pièce justificative pour chaque dépense.',
          ],
        },
        {
          id: 'quetes',
          title: 'Les quêtes en espèces',
          paras: [
            'Les quêtes du culte sont souvent comptées vite, par une seule personne, à la fin d’une longue journée. C’est là que naissent les doutes, même quand tout le monde est honnête.',
          ],
          fix: [
            'Deux compteurs, qui comptent chacun de leur côté.',
            'Un procès-verbal de quête signé, avec le détail par type de don.',
            'Un dépôt régulier à la banque, avec la preuve du dépôt.',
          ],
        },
        {
          id: 'dons',
          title: 'Les dons par Mobile Money',
          paras: [
            'Beaucoup de fidèles donnent désormais par téléphone. Si ces dons arrivent sur le numéro personnel d’un responsable, ils sont difficiles à justifier et se mélangent à son argent.',
          ],
          fix: [
            'Un compte Mobile Money marchand au nom de l’église, jamais un numéro personnel.',
            'Un reçu pour chaque don, que le fidèle peut garder.',
            'Chaque mois, les dons reçus comparés au relevé du compte.',
          ],
        },
        {
          id: 'echeances',
          title: 'Les échéances à ne pas manquer',
          paras: [
            'Trois rendez-vous reviennent avec le nouveau texte. Les noter dès maintenant dans le calendrier de l’église évite les oublis.',
          ],
          fixLabel: 'Les rendez-vous à retenir',
          fix: [
            'Avant le 31 mars : le rapport d’activités de l’année précédente.',
            'Dans le mois : la déclaration de tout changement de dirigeants.',
            'Pour tout projet financé par des ressources extérieures : informer la direction en charge des Cultes, ou demander l’autorisation au-delà du seuil.',
          ],
        },
      ]}
      aside={{
        title: 'Ce guide ne remplace pas un conseil juridique',
        text: 'Il résume le texte de l’ordonnance pour aider les églises à s’organiser. Pour un cas précis, demandez l’avis d’un juriste ou d’un comptable, ou les précisions de la direction en charge des Cultes.',
      }}
      checklist={{
        title: 'L’année de l’église en 8 points',
        sub: 'Une routine simple pour être prêt le jour où les comptes sont demandés.',
        items: [
          'Chaque dimanche : compter les quêtes à deux et signer le procès-verbal.',
          'Chaque semaine : enregistrer les recettes et les dépenses par fonds.',
          'Chaque mois : comparer les dons Mobile Money au relevé du compte.',
          'Chaque mois : faire un arrêté de caisse signé par deux responsables.',
          'Dès qu’un responsable change : déclarer le changement dans le mois.',
          'Pour un projet financé par des ressources extérieures : informer la direction des Cultes.',
          'En début d’année : clôturer l’année et dresser le compte financier.',
          'Avant le 31 mars : remettre le rapport d’activités.',
        ],
      }}
      bookOrApp={[
        'Des cahiers bien tenus peuvent suffire à une petite assemblée. Mais quand les quêtes, les dîmes, les dons Mobile Money et les dépenses de plusieurs départements se mélangent, reconstituer les comptes en fin d’année devient un travail de plusieurs jours.',
        'Une application de gestion d’église enregistre chaque recette et chaque dépense au moment où elle a lieu, par fonds, et prépare les documents à partir de ce qui a déjà été saisi.',
      ]}
      promo={{
        title: 'MonArche tient ces comptes au fil de la semaine',
        text: 'Recettes et dépenses par fonds, quêtes comptées à deux avec procès-verbal, dons Mobile Money avec reçus et rapport financier annuel. Sur un téléphone simple, même sans réseau.',
        cta: 'Créer mon église gratuitement',
      }}
      sources={[
        ['Ordonnance n° 2024-368 du 12 juin 2024 relative à l’organisation de la société civile (ministère de l’Intérieur)', 'https://dgat.interieur.gouv.ci/wp-content/uploads/2025/04/ORDONNANCE-n°-2024-368-du-12-juin-2024-relative-a-OSC.pdf'],
        ['Loi n° 2025-386 du 11 juin 2025 portant ratification de l’ordonnance (Fraternité Matin)', 'https://www.fratmat.info/article/2640738/societe/renforcement-des-capacites-des-acteurs-de-la-societe-civile-formes-sur-la-nouvelle-loi-encadrant-le-secteur'],
      ]}
      faq={[
        ['Une église doit-elle tenir une comptabilité en Côte d’Ivoire ?', 'Oui. L’article 33 de l’ordonnance de 2024 demande de tenir un état des ressources et des dépenses, de dresser chaque année le compte financier et d’avoir un compte dans une banque ou un établissement financier national.'],
        ['Quelle est la date limite du rapport annuel ?', 'Le 31 mars de l’année suivante, selon l’article 48 de l’ordonnance : le rapport porte sur les activités de l’année écoulée et se remet à l’autorité compétente.'],
        ['Une église peut-elle recevoir des dons ?', 'Oui, dans les conditions prévues par l’ordonnance (article 75). Pour financer un projet avec des ressources extérieures, son responsable doit informer la direction en charge des Cultes, et au-delà d’un seuil fixé par règlement, obtenir une autorisation de levée de fonds (article 76).'],
      ]}
    />
  )
}
