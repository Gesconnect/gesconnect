'use client'
import { useState, useEffect, useRef } from 'react'

const SECTORS = [
  { id: 'all',          label: 'Tous' },
  { id: 'commerce',    label: 'Commerce' },
  { id: 'hotellerie',  label: 'Hôtellerie & Tourisme' },
  { id: 'restauration',label: 'Restauration' },
  { id: 'sante',       label: 'Santé' },
  { id: 'education',   label: 'Éducation' },
  { id: 'agriculture', label: 'Agriculture & Élevage' },
  { id: 'artisanat',   label: 'Artisanat & Services' },
  { id: 'bienetre',    label: 'Bien-être & Beauté' },
  { id: 'social',      label: 'Social & Communautaire' },
]

const FLAGSHIP = [
  {
    id: 'commerce',
    name: 'App Commerce',
    sector: 'commerce',
    sectorLabel: 'Commerce & Retail',
    target: 'PME commerce général, quincailleries, poissonneries',
    desc: "Gestion complète de points de vente : stocks, caisse, ventes, fournisseurs et KPI en temps réel.",
    features: ['Caisse & encaissements Mobile Money', 'Gestion stocks & fournisseurs', 'Tableaux de bord KPI'],
    iconBg: 'bg-blue-100', iconColor: 'text-blue-700', bar: 'from-blue-500 to-blue-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'restauration',
    name: 'App Restauration',
    sector: 'restauration',
    sectorLabel: 'Restauration',
    target: 'Maquis, restaurants, fast-food, cantines',
    desc: "Prise de commandes, gestion des tables, cuisine, caisse, stocks et analyse des ventes par plat.",
    features: ['Commandes & gestion tables', 'Cuisine & stocks intégrés', 'Analyse ventes par plat'],
    iconBg: 'bg-orange-100', iconColor: 'text-orange-700', bar: 'from-orange-500 to-red-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    id: 'hotel',
    name: 'App Hôtel',
    sector: 'hotellerie',
    sectorLabel: 'Hôtellerie & Tourisme',
    target: "Hôtels 2–4★, auberges, résidences meublées",
    desc: "Réservations, gestion des chambres, facturation, restauration intégrée et reporting occupation & revenus.",
    features: ['Réservations & état des chambres', 'Facturation & Mobile Money', 'Reporting revenus & occupation'],
    iconBg: 'bg-purple-100', iconColor: 'text-purple-700', bar: 'from-purple-500 to-purple-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'scolaire',
    name: 'App Scolaire',
    sector: 'education',
    sectorLabel: 'Éducation',
    target: 'Écoles primaires & secondaires privées',
    desc: "Gestion administrative et pédagogique : inscriptions, notes, bulletins, paiements et communication parents.",
    features: ['Inscriptions & scolarité', 'Notes, bulletins & absences', 'Paiements & communication parents'],
    iconBg: 'bg-amber-100', iconColor: 'text-amber-700', bar: 'from-amber-400 to-amber-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 'pharmacie',
    name: 'App Pharmacie',
    sector: 'sante',
    sectorLabel: 'Santé',
    target: 'Officines privées',
    desc: "Gestion des médicaments, stocks, ordonnances, ventes, alertes péremption et reporting réglementaire.",
    features: ['Stocks & alertes péremption', 'Ordonnances & ventes', 'Reporting réglementaire'],
    iconBg: 'bg-teal-100', iconColor: 'text-teal-700', bar: 'from-teal-400 to-teal-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 'ferme',
    name: 'App Ferme Avicole',
    sector: 'agriculture',
    sectorLabel: 'Élevage & Agriculture',
    target: "Éleveurs de poulets de chair et pondeuses",
    desc: "Suivi des lots, alimentation, mortalité, production œufs/viande, coûts et rendement par cycle.",
    features: ["Suivi lots & prophylaxie", "Production & mortalité", "Coûts & rentabilité par cycle"],
    iconBg: 'bg-green-100', iconColor: 'text-green-700', bar: 'from-green-500 to-green-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    id: 'supermarche',
    name: 'App Supermarché',
    sector: 'commerce',
    sectorLabel: 'Commerce & Retail',
    target: 'Libre-services de quartier, mini-marchés',
    desc: "Multi-caisses, codes-barres, promotions, programme de fidélité, multi-rayons et gestion des pertes.",
    features: ['Multi-caisses & codes-barres', 'Promotions & fidélité clients', 'Multi-rayons & inventaire'],
    iconBg: 'bg-indigo-100', iconColor: 'text-indigo-700', bar: 'from-indigo-500 to-indigo-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 'boulangerie',
    name: 'App Boulangerie & Pâtisserie',
    sector: 'artisanat',
    sectorLabel: 'Artisanat & Services',
    target: 'Artisans boulangers & pâtissiers',
    desc: "Production journalière, gestion des matières premières, ventes au comptoir, livraisons et rentabilité.",
    features: ['Planning production & recettes', 'Stocks matières & pertes', 'Ventes comptoir & livraisons'],
    iconBg: 'bg-yellow-100', iconColor: 'text-yellow-700', bar: 'from-yellow-400 to-orange-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
  },
]

const ALL_APPS = [
  ...FLAGSHIP,
  { id: 'clinique', name: 'App Clinique Médicale', sector: 'sante', sectorLabel: 'Santé', target: 'Cliniques privées, cabinets médicaux', desc: "Patients, dossiers médicaux, rendez-vous, facturation, stocks consommables et plateau technique.", features: ['Dossiers médicaux patients', 'Agenda & rendez-vous', 'Facturation & stocks'] },
  { id: 'labo', name: 'App Laboratoire', sector: 'sante', sectorLabel: 'Santé', target: "Laboratoires d'analyses médicales", desc: "Prélèvements, analyses, résultats patients, facturation et liaison cliniques & médecins.", features: ['Gestion prélèvements', 'Résultats & compte-rendus', 'Liaison cliniques & médecins'] },
  { id: 'dentaire', name: 'App Cabinet Dentaire', sector: 'sante', sectorLabel: 'Santé', target: 'Dentistes privés', desc: "Patients, rendez-vous, actes dentaires, imagerie, facturation et stock consommables.", features: ['Agenda & fiches patients', 'Actes & devis', 'Facturation & consommables'] },
  { id: 'garage', name: 'App Garage & Atelier', sector: 'artisanat', sectorLabel: 'Artisanat & Services', target: 'Mécaniciens, carrossiers, tôleries', desc: "Interventions, devis, facturation, pièces détachées, suivi clients et planning atelier.", features: ['Ordres de réparation', 'Pièces détachées & stock', 'Planning atelier & devis'] },
  { id: 'transport', name: 'App Transport & Logistique', sector: 'artisanat', sectorLabel: 'Artisanat & Services', target: 'Transporteurs, flottes, livraison B2B', desc: "Gestion de flotte, affectation chauffeurs, carburant, maintenance véhicules et facturation.", features: ['Gestion flotte & chauffeurs', 'Suivi carburant & maintenance', 'Facturation & itinéraires'] },
  { id: 'immobilier', name: 'App Agence Immobilière', sector: 'artisanat', sectorLabel: 'Artisanat & Services', target: 'Agences location & gestion locative', desc: "Biens, locataires, baux, loyers, états des lieux, relances et comptabilité propriétaire.", features: ['Portefeuille de biens', 'Baux, loyers & relances', 'Comptabilité propriétaires'] },
  { id: 'cabinet', name: 'App Cabinet Comptable/Juridique', sector: 'artisanat', sectorLabel: 'Artisanat & Services', target: 'Experts-comptables, cabinets juridiques', desc: "Dossiers clients, missions, temps passés, facturation, GED et collaboration équipe.", features: ['Dossiers & missions clients', 'Suivi temps & facturation', 'GED & collaboration'] },
  { id: 'cooperative', name: 'App Coopérative Agricole', sector: 'agriculture', sectorLabel: 'Agriculture & Élevage', target: 'Coopératives cacao, café, hévéa, cajou', desc: "Producteurs, collecte, pesée, paiements, traçabilité UE déforestation et reporting bailleurs.", features: ['Gestion producteurs & collecte', 'Traçabilité UE déforestation', 'Reporting bailleurs'] },
  { id: 'plantation', name: 'App Plantation', sector: 'agriculture', sectorLabel: 'Agriculture & Élevage', target: 'Planteurs individuels & coopératives', desc: "Suivi parcelles, travaux agricoles, intrants, récolte, ventes et traçabilité certifiée.", features: ['Cartographie parcelles', 'Intrants & récoltes', 'Traçabilité & ventes'] },
  { id: 'elevage', name: "App Élevage Bovin/Ovin/Porcin", sector: 'agriculture', sectorLabel: 'Agriculture & Élevage', target: 'Éleveurs structurés', desc: "Gestion cheptel, reproduction, alimentation, santé animale, ventes et rentabilité.", features: ['Suivi cheptel & reproduction', 'Alimentation & santé animale', 'Ventes & rentabilité'] },
  { id: 'pisciculture', name: 'App Pisciculture', sector: 'agriculture', sectorLabel: 'Agriculture & Élevage', target: 'Pisciculteurs', desc: "Bassins, alevinage, nourriture, croissance, récolte, ventes et analyse des coûts.", features: ['Gestion bassins & alevinage', 'Suivi croissance & récolte', 'Ventes & coûts'] },
  { id: 'maraichage', name: "App Maraîchage & Horticulture", sector: 'agriculture', sectorLabel: 'Agriculture & Élevage', target: 'Producteurs maraîchers', desc: "Parcelles, semences, calendrier cultural, récoltes, ventes et circuits courts.", features: ['Calendrier cultural', 'Récoltes & stocks', 'Ventes & circuits courts'] },
  { id: 'sport', name: 'App Salle de Sport & Fitness', sector: 'bienetre', sectorLabel: 'Bien-être & Beauté', target: 'Salles de sport, coachs indépendants', desc: "Abonnements, accès, cours collectifs, coachs, paiements et programmes personnalisés.", features: ['Abonnements & accès membres', 'Planning cours collectifs', 'Coachs & programmes'] },
  { id: 'spa', name: 'App Spa & Institut de Beauté', sector: 'bienetre', sectorLabel: 'Bien-être & Beauté', target: 'Instituts premium, spas hôteliers', desc: "Rendez-vous, prestations, fiches clientes, produits, cabines et performance thérapeutes.", features: ['Agenda & fiches clientes', 'Prestations & produits', 'Performance thérapeutes'] },
  { id: 'salon', name: 'App Salon de Beauté & Coiffure', sector: 'bienetre', sectorLabel: 'Bien-être & Beauté', target: 'Salons coiffure & beauté', desc: "Rendez-vous, fiches clients, produits utilisés, commissions coiffeurs et programme de fidélité.", features: ['Agenda & fiches clients', 'Commissions coiffeurs', 'Fidélité & promotions'] },
  { id: 'creche', name: 'App Crèche & Garderie', sector: 'education', sectorLabel: 'Éducation', target: "Structures d'accueil petite enfance", desc: "Inscriptions, suivi des enfants, présences, repas, activités, communication parents et paiements.", features: ['Suivi enfants & présences', 'Repas & activités', 'Communication parents'] },
  { id: 'autoecole', name: 'App Auto-École', sector: 'education', sectorLabel: 'Éducation', target: 'Écoles de conduite', desc: "Élèves, cours théoriques, heures de conduite, moniteurs, examens et facturation.", features: ['Dossiers élèves & examens', 'Planning moniteurs', 'Facturation & paiements'] },
  { id: 'pompes', name: 'App Pompes Funèbres', sector: 'social', sectorLabel: 'Social & Communautaire', target: 'Entreprises funéraires', desc: "Obsèques, prestations, transports, familles, facturation et gestion des cérémonies.", features: ['Gestion des obsèques', 'Prestations & cercueils', 'Familles & facturation'] },
  { id: 'ong', name: 'App ONG & Associations', sector: 'social', sectorLabel: 'Social & Communautaire', target: 'ONG locales, associations', desc: "Membres, dons, projets, bénéficiaires, reporting bailleurs et gestion des événements.", features: ['Membres & bénéficiaires', 'Projets & dons', 'Reporting bailleurs'] },
  { id: 'syndic', name: 'App Syndic de Copropriété', sector: 'social', sectorLabel: 'Social & Communautaire', target: 'Résidences, immeubles collectifs', desc: "Copropriétaires, charges, assemblées générales, budgets, travaux et communication résidents.", features: ['Charges & copropriétaires', 'AG & budgets', 'Travaux & communication'] },
  { id: 'paroisse', name: 'App Paroisse & Lieu de Culte', sector: 'social', sectorLabel: 'Social & Communautaire', target: 'Églises, mosquées, communautés religieuses', desc: "Fidèles, offrandes, événements, groupes, communication et comptabilité communautaire.", features: ['Gestion fidèles & groupes', 'Offrandes & comptabilité', 'Événements & communication'] },
  { id: 'menuiserie', name: 'App Menuiserie & Atelier Bois', sector: 'artisanat', sectorLabel: 'Artisanat & Services', target: 'Menuisiers, ébénistes', desc: "Devis, projets clients, matières premières, planning atelier, facturation et suivi livraisons.", features: ['Devis & projets clients', 'Matières premières & stock', 'Planning atelier'] },
  { id: 'imprimerie', name: 'App Imprimerie', sector: 'artisanat', sectorLabel: 'Artisanat & Services', target: 'Imprimeurs & sérigraphes', desc: "Devis, jobs, planning machines, stocks papier & encre, facturation et suivi clients.", features: ['Jobs & planning machines', 'Stocks papier & encre', 'Devis & facturation'] },
  { id: 'tailleur', name: 'App Tailleur & Atelier Couture', sector: 'artisanat', sectorLabel: 'Artisanat & Services', target: 'Tailleurs, créateurs, ateliers couture', desc: "Commandes, prises de mesures, tissus, acomptes, planning livraison et fidélisation clients.", features: ['Fiches mesures & commandes', 'Tissus & acomptes', 'Planning livraisons'] },
  { id: 'blanchisserie', name: 'App Blanchisserie & Pressing', sector: 'artisanat', sectorLabel: 'Artisanat & Services', target: 'Pressings & blanchisseries', desc: "Commandes, étiquetage, facturation, programme de fidélité et planning collaborateurs.", features: ['Suivi commandes & étiquettes', 'Facturation & fidélité', 'Planning collaborateurs'] },
  { id: 'station', name: 'App Station-Service', sector: 'commerce', sectorLabel: 'Commerce & Retail', target: 'Gérants de stations-service', desc: "Carburants, ventes shop, personnel, pompes, stocks, reporting et remontée compagnie.", features: ['Ventes carburant & pompes', 'Shop & stocks', 'Reporting compagnie'] },
  { id: 'agencevoyage', name: 'App Agence de Voyage', sector: 'hotellerie', sectorLabel: 'Hôtellerie & Tourisme', target: 'Agences loisirs & affaires', desc: "Réservations, clients, fournisseurs, billets, facturation et suivi des commissions.", features: ['Réservations & billets', 'Clients & fournisseurs', 'Facturation & commissions'] },
]

const FLAGSHIP_IDS = FLAGSHIP.map(a => a.id)

const SECTOR_COLORS = {
  commerce:    'bg-blue-50 text-blue-700 border-blue-200',
  hotellerie:  'bg-purple-50 text-purple-700 border-purple-200',
  restauration:'bg-orange-50 text-orange-700 border-orange-200',
  sante:       'bg-teal-50 text-teal-700 border-teal-200',
  education:   'bg-amber-50 text-amber-700 border-amber-200',
  agriculture: 'bg-green-50 text-green-700 border-green-200',
  artisanat:   'bg-slate-50 text-slate-700 border-slate-200',
  bienetre:    'bg-pink-50 text-pink-700 border-pink-200',
  social:      'bg-indigo-50 text-indigo-700 border-indigo-200',
}

export default function Products() {
  const [activeSector, setActiveSector] = useState('all')
  const revealRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 80)
          )
      }),
      { threshold: 0.05 }
    )
    if (revealRef.current) observer.observe(revealRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = activeSector === 'all'
    ? ALL_APPS
    : ALL_APPS.filter(a => a.sector === activeSector)

  const scrollToContact = e => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="produits" className="bg-slate-50 py-24 px-6" ref={revealRef}>
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="reveal">
            <span className="section-tag mb-4 justify-center">Nos solutions métier</span>
          </div>
          <h2 className="reveal reveal-d1 font-display font-bold text-navy text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Une application pour <span className="text-brand-green">chaque secteur</span>
          </h2>
        </div>

        {/* ── Mission statement ── */}
        <div className="reveal reveal-d2 bg-navy rounded-2xl px-8 py-6 mb-14 max-w-3xl mx-auto text-center">
          <p className="text-white/90 text-base leading-relaxed">
            <span className="text-brand-accent font-semibold">Notre spécialité : </span>
            développer des <span className="text-white font-semibold">applications de gestion sur mesure</span> pour les{' '}
            <span className="text-brand-accent font-semibold">PME et entreprises informelles</span> d'Afrique francophone — pensées pour votre réalité terrain, pas adaptées d'un modèle occidental.
          </p>
        </div>

        {/* ── 8 Flagship apps ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-1 bg-brand-green rounded-full" />
            <h3 className="font-display font-bold text-navy text-xl">Nos applications phares</h3>
            <span className="ml-2 text-xs font-semibold bg-brand-green/10 text-brand-green border border-brand-green/20 px-3 py-1 rounded-full">Les + demandées</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FLAGSHIP.map((app, i) => (
              <div key={app.id} className={`reveal reveal-d${i % 4 + 1} app-card bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl`}>
                <div className={`h-1.5 w-full bg-gradient-to-r ${app.bar}`} />
                <div className="p-5">
                  <div className={`w-11 h-11 rounded-xl ${app.iconBg} ${app.iconColor} flex items-center justify-center mb-4`}>
                    {app.icon}
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-1">{app.name}</h3>
                  <p className={`text-xs font-semibold mb-3 ${SECTOR_COLORS[app.sector].split(' ')[1]}`}>{app.sectorLabel}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{app.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {app.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-600 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" onClick={scrollToContact} className="flex items-center gap-1 text-brand-green hover:text-brand-green-mid font-semibold text-xs group transition-colors">
                    Parlons de votre projet
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Catalogue complet ── */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-1 bg-navy-mid rounded-full" />
            <h3 className="font-display font-bold text-navy text-xl">Catalogue complet</h3>
            <span className="ml-2 text-xs font-semibold bg-navy/10 text-navy border border-navy/20 px-3 py-1 rounded-full">{ALL_APPS.length} secteurs couverts</span>
          </div>

          {/* Sector filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {SECTORS.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSector(s.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeSector === s.id
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-navy hover:text-navy'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* App grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
            {filtered.map((app, i) => {
              const isFlagship = FLAGSHIP_IDS.includes(app.id)
              return (
                <div
                  key={app.id}
                  className={`bg-white rounded-xl border p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                    isFlagship ? 'border-brand-green/30 bg-brand-green/[0.02]' : 'border-slate-100'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-display font-bold text-navy text-sm leading-tight pr-2">{app.name}</h4>
                    {isFlagship && (
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-green mt-1" />
                    )}
                  </div>
                  <span className={`inline-block text-xs font-medium border px-2 py-0.5 rounded-full mb-2 ${SECTOR_COLORS[app.sector]}`}>
                    {app.sectorLabel}
                  </span>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">{app.target}</p>
                  <a href="#contact" onClick={scrollToContact} className="text-brand-green hover:text-brand-green-mid font-semibold text-xs flex items-center gap-1 group transition-colors">
                    Nous contacter
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )
            })}

            {/* Your sector card */}
            {(activeSector === 'all') && (
              <div
                className="bg-navy rounded-xl border border-navy-mid p-4 cursor-pointer hover:bg-navy-mid transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                onClick={scrollToContact}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-green/15 border border-brand-green/30 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-white text-sm mb-1">Votre secteur ?</h4>
                <p className="text-white/50 text-xs leading-relaxed mb-3">Votre activité ne figure pas dans la liste ? Nous développons sur demande.</p>
                <span className="text-brand-accent text-xs font-semibold">Contactez-nous →</span>
              </div>
            )}
          </div>

          <p className="text-center text-slate-400 text-sm">
            Toutes nos applications intègrent nativement{' '}
            <span className="font-medium text-slate-600">Orange Money · Wave · MTN · Moov</span>{' '}
            et des <span className="font-medium text-slate-600">tableaux de bord KPI</span> en temps réel.
          </p>
        </div>
      </div>
    </section>
  )
}
