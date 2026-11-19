// Liste des guides. Seuls ceux marqués « published: true » apparaissent sur le site ;
// les autres sont des sujets prévus, invisibles tant qu'ils ne sont pas écrits.

export const GUIDES = [
  {
    slug: 'argent-maquis',
    published: true,
    theme: 'Maquis et bars',
    color: '#F2A531',
    ink: '#8A5300',
    app: 'maquis360',
    title: 'Bouteilles manquantes, ardoises oubliées : où part l’argent d’un maquis ?',
    excerpt: 'Les six fuites les plus courantes, comment les repérer et comment les fermer, avec ou sans logiciel.',
    metaTitle: 'Où part l’argent d’un maquis ? 6 fuites à fermer',
    metaDescription: 'Bouteilles manquantes, notes annulées, ardoises oubliées : les 6 fuites d’argent les plus courantes dans un maquis, et comment les fermer. Avec une liste de clôture en 8 points.',
    date: '2026-11-19',
    dateLabel: 'Novembre 2026',
    readingTime: '7 min de lecture',
  },
  { slug: 'credit-chantier-quincaillerie', theme: 'Quincaillerie', color: '#F26B1D', ink: '#C74A08', title: 'Vendre à crédit aux chantiers sans mettre sa quincaillerie en danger' },
  { slug: 'caisse-association-ressortissants', theme: 'Associations', color: '#1B3F8B', ink: '#1B3F8B', title: 'Cotisations de ressortissants : rendre la caisse transparente pour tous' },
  { slug: 'cout-revient-poulet-chair', theme: 'Élevage', color: '#EB6C2D', ink: '#A9481A', title: 'Calculer le coût de revient d’une bande de poulets de chair' },
  { slug: 'comptes-eglise-loi-2024', theme: 'Églises', color: '#0F9D9A', ink: '#0B7F7C', title: 'Églises en Côte d’Ivoire : quels comptes tenir depuis la loi de 2024 ?' },
  { slug: 'prix-logiciel-gestion-abidjan', theme: 'Gestion de PME', color: '#16A34A', ink: '#15803D', title: 'Combien coûte un logiciel de gestion à Abidjan ?' },
  { slug: 'cahier-excel-ou-application', theme: 'Gestion de PME', color: '#16A34A', ink: '#15803D', title: 'Cahier, Excel ou application : que choisir pour gérer son commerce ?' },
]
