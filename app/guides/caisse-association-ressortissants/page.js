import GuideArticle from '@/components/site/GuideArticle'
import { GUIDES } from '@/lib/guides'
import { og } from '@/lib/site'

const G = GUIDES.find((g) => g.slug === 'caisse-association-ressortissants')

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
      standfirst="Dans une association de ressortissants, l’argent est d’abord une affaire de confiance. Quand les membres ne savent pas où va leur cotisation, ils paient en retard, puis plus du tout. Voici six règles simples pour tenir une caisse que chacun peut vérifier, au pays comme dans la diaspora."
      box={{
        title: 'Le signe qui ne trompe pas',
        text: 'Si un membre doit appeler le trésorier pour savoir s’il est à jour de ses cotisations, la caisse n’est pas encore transparente.',
        bg: '#EAF1FB',
        ink: '#142033',
      }}
      sections={[
        {
          id: 'bareme',
          title: 'Un barème écrit et daté',
          paras: [
            'Beaucoup de disputes naissent d’un montant « que tout le monde connaît » mais que personne n’a écrit. Le barème doit dire combien, à quelle fréquence, avant quelle date, et pour qui.',
          ],
          fix: [
            'Écrire le barème dans les statuts ou le règlement intérieur, et le faire adopter en assemblée.',
            'Dater chaque changement de montant.',
            'Distinguer la cotisation ordinaire des cotisations exceptionnelles (décès, projet, fête).',
          ],
        },
        {
          id: 'recu',
          title: 'Un reçu pour chaque franc',
          paras: [
            'Le reçu protège le membre, qui peut prouver qu’il a payé, et le trésorier, qui peut prouver ce qu’il a encaissé. Sans reçu, chacun n’a que sa parole.',
          ],
          fix: [
            'Un reçu numéroté pour chaque paiement, y compris en espèces.',
            'Le montant en chiffres et en lettres, le motif, la date et le moyen de paiement.',
            'Une numérotation continue sur l’année, sans trou.',
          ],
        },
        {
          id: 'compte',
          title: 'L’argent sur le compte de l’association',
          paras: [
            'Une cotisation envoyée sur le numéro personnel d’un responsable se mélange à son argent, même en toute bonne foi. Le jour où il change de téléphone, part en voyage ou quitte le bureau, l’association est en difficulté.',
          ],
          fix: [
            'Un compte au nom de l’association, dans une banque ou un établissement financier, comme le demande désormais la loi en Côte d’Ivoire.',
            'Pour encaisser par téléphone, un compte Mobile Money marchand au nom de l’association, dont l’argent est reversé sur ce compte.',
            'Les espèces encaissées par le trésorier déposées régulièrement, avec la preuve du dépôt.',
            'Jamais de cotisation sur un numéro personnel.',
          ],
        },
        {
          id: 'caisses',
          title: 'Séparer les caisses',
          paras: [
            'Le fonctionnement, la solidarité et les projets n’ont pas les mêmes règles. Si tout est dans la même caisse, l’argent de la solidarité finit par payer la location de la salle.',
          ],
          fix: [
            'Une clé de répartition écrite : par exemple, une part de chaque cotisation pour la solidarité.',
            'Un solde connu pour chaque caisse.',
          ],
        },
        {
          id: 'signatures',
          title: 'Les dépenses à plusieurs signatures',
          paras: [
            'Une dépense autorisée par une seule personne, c’est une dépense que personne ne peut contester avant qu’elle soit faite.',
          ],
          fix: [
            'Au moins deux signataires pour chaque dépense, par exemple le président et le trésorier.',
            'Une pièce justificative pour chaque sortie d’argent.',
            'Toute dépense hors budget votée par le bureau.',
          ],
        },
        {
          id: 'publier',
          title: 'Publier les comptes régulièrement',
          paras: [
            'La transparence n’est pas un rapport lu une fois par an en assemblée. C’est un solde que chaque membre peut consulter quand il le souhaite.',
            'C’est aussi devenu une obligation : depuis l’ordonnance n° 2024-368 du 12 juin 2024, ratifiée par la loi n° 2025-386 du 11 juin 2025, les associations installées en Côte d’Ivoire doivent tenir un état de leurs ressources et de leurs dépenses, et dresser chaque année un compte financier.',
          ],
          fix: [
            'Un arrêté de caisse chaque mois, cosigné par deux responsables.',
            'Les soldes de chaque caisse communiqués aux membres.',
            'Le bilan complet présenté et voté en assemblée générale.',
          ],
        },
      ]}
      aside={{
        title: 'Et pour les membres de la diaspora ?',
        text: 'Les membres à l’étranger cotisent souvent dans une autre devise et par d’autres canaux. Quelques règles évitent les malentendus :',
        items: [
          'Noter la devise reçue (dollars, euros) et le taux de conversion du jour.',
          'Indiquer le canal utilisé (virement, carte, Zelle) sur le reçu.',
          'Écrire comment une cotisation se répartit entre la section de la diaspora et l’association au pays.',
        ],
      }}
      checklist={{
        title: 'L’arrêté de caisse en 8 points',
        sub: 'Chaque mois, avec deux responsables.',
        items: [
          'Compter les espèces.',
          'Relever le solde du compte en banque ou à la COOPEC.',
          'Relever le solde Mobile Money.',
          'Vérifier que chaque encaissement a son reçu.',
          'Vérifier que chaque dépense a sa pièce et ses signatures.',
          'Calculer le solde de chaque caisse.',
          'Faire signer l’arrêté par deux responsables.',
          'Communiquer les soldes aux membres.',
        ],
      }}
      bookOrApp={[
        'Un cahier bien tenu peut suffire à une petite association qui se réunit souvent. Mais il reste entre les mains du trésorier : les membres ne voient rien sans le demander, les reçus se perdent, et l’arrêté de caisse dépend de la mémoire de chacun.',
        'Une application de gestion d’association donne à chaque membre sa situation et son reçu, garde la trace de chaque dépense et de ses signataires, et publie les soldes. Choisissez-en une qui fonctionne sans réseau, pour encaisser au village comme en ville.',
      ]}
      promo={{
        title: 'Amicalo applique ces règles pour vous',
        text: 'Reçus numérotés, caisses séparées, dépenses à plusieurs signatures et soldes publiés aux membres. En FCFA, en dollars ou en euros, même sans réseau.',
        cta: 'Créer mon association gratuitement',
      }}
      sources={[
        ['Ordonnance n° 2024-368 du 12 juin 2024 relative à l’organisation de la société civile (ministère de l’Intérieur)', 'https://dgat.interieur.gouv.ci/wp-content/uploads/2025/04/ORDONNANCE-n°-2024-368-du-12-juin-2024-relative-a-OSC.pdf'],
      ]}
      faq={[
        ['Comment rendre la caisse d’une association transparente ?', 'Un barème écrit, un reçu numéroté pour chaque paiement, l’argent sur un compte au nom de l’association, des caisses séparées, des dépenses à plusieurs signatures et des soldes publiés chaque mois.'],
        ['Le trésorier peut-il recevoir les cotisations sur son numéro Mobile Money ?', 'C’est à éviter : l’argent se mélange au sien et l’association en dépend. Mieux vaut un compte Mobile Money marchand au nom de l’association, reversé sur son compte en banque ou dans un établissement financier.'],
        ['Une association est-elle obligée de tenir des comptes ?', 'En Côte d’Ivoire, oui : depuis l’ordonnance de 2024 sur les organisations de la société civile, elle doit tenir un état de ses ressources et de ses dépenses, dresser chaque année un compte financier et avoir un compte dans une banque ou un établissement financier national.'],
        ['Comment gérer les cotisations des membres de la diaspora ?', 'En notant la devise, le taux de conversion et le canal de paiement sur le reçu, et en écrivant d’avance comment chaque cotisation se répartit entre la section de la diaspora et l’association au pays.'],
      ]}
    />
  )
}
