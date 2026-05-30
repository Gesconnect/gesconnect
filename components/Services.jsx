'use client'
import { useState, useEffect, useRef } from 'react'

const GROUPS = [
  {
    id: 'dev',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Développement & Produits',
    color: 'blue',
    accent: 'border-blue-400',
    numColor: 'text-blue-400',
    tagBg: 'bg-blue-50 text-blue-700',
    services: [
      {
        num: '01', title: "Développement d'applications sur-mesure",
        desc: "Votre besoin métier devient une application web complète — conçue à partir de votre réalité terrain, pas d'un modèle générique importé.",
        details: ["Analyse & modélisation de vos processus métier", "Application web responsive & moderne", "Intégration Mobile Money & APIs locales", "Formation & accompagnement au déploiement"],
      },
      {
        num: '02', title: "Développement d'applications mobiles",
        desc: "Applications iOS et Android pensées pour les utilisateurs africains : légères, utilisables en zone de faible connectivité, avec paiement Mobile Money natif.",
        details: ["Apps Flutter multi-plateformes (iOS & Android)", "Mode hors-ligne & synchronisation intelligente", "Interface optimisée pour smartphone d'entrée de gamme", "Déploiement stores & mises à jour"],
      },
      {
        num: '03', title: "Création de sites web & e-commerce",
        desc: "Sites vitrines, catalogues produits ou boutiques e-commerce — professionnels, rapides et optimisés pour le référencement local.",
        details: ["Site vitrine ou e-commerce sur mesure", "SEO local & optimisation Google", "Intégration paiement en ligne & Mobile Money", "Hébergement & nom de domaine inclus"],
      },
      {
        num: '04', title: "Intégration de l'Intelligence Artificielle",
        desc: "Intégrez l'IA dans vos processus : chatbots clients, automatisation des tâches répétitives, analyse prédictive et assistants internes.",
        details: ["Chatbots & assistants virtuels métier", "Automatisation de workflows par IA", "Analyse prédictive de vos données", "Intégration dans vos applications existantes"],
      },
      {
        num: '05', title: "Hébergement & Maintenance SaaS",
        desc: "Nous hébergeons, maintenons et faisons évoluer vos applications — avec des garanties de disponibilité et un support réactif.",
        details: ["Hébergement cloud sécurisé & sauvegardes", "Mises à jour & correctifs réguliers", "Support technique dédié", "Monitoring & alertes 24/7"],
      },
    ],
  },
  {
    id: 'conseil',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Conseil & Transformation',
    color: 'teal',
    accent: 'border-teal-400',
    numColor: 'text-teal-400',
    tagBg: 'bg-teal-50 text-teal-700',
    services: [
      {
        num: '06', title: "Conseil en gestion",
        desc: "Nous analysons vos processus, identifions vos inefficacités et vous proposons un plan d'action concret pour améliorer votre performance opérationnelle.",
        details: ["Diagnostic de vos processus actuels", "Plan d'action priorisé & chiffré", "Accompagnement à la mise en œuvre", "Suivi & évaluation des résultats"],
      },
      {
        num: '07', title: "Audit & diagnostic digital",
        desc: "Évaluation complète de votre maturité numérique, de vos outils actuels et de vos risques informatiques — avec une feuille de route claire.",
        details: ["Cartographie de vos outils & systèmes", "Analyse des risques & points de blocage", "Recommandations priorisées", "Feuille de route de transformation"],
      },
      {
        num: '08', title: "Analyse de données & Business Intelligence",
        desc: "Transformez vos données brutes en décisions stratégiques. Dashboards Power BI, rapports automatisés et indicateurs clés pour piloter par la donnée.",
        details: ["Nettoyage & structuration de vos données", "Dashboards interactifs Power BI / Tableau", "Rapports automatisés & alertes", "Formation de vos équipes à la lecture des KPI"],
      },
      {
        num: '09', title: "Support informatique externalisé",
        desc: "Votre DSI externalisé : support utilisateurs, maintenance des équipements, gestion des accès et veille sur votre infrastructure IT.",
        details: ["Support helpdesk utilisateurs", "Maintenance & parc informatique", "Gestion des sauvegardes & sécurité de base", "Conseil sur les achats matériel & logiciel"],
      },
    ],
  },
  {
    id: 'formation',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'Formation & Marketing',
    color: 'purple',
    accent: 'border-purple-400',
    numColor: 'text-purple-400',
    tagBg: 'bg-purple-50 text-purple-700',
    services: [
      {
        num: '10', title: "Formation professionnelle intra-entreprise",
        desc: "Formations sur site pour vos équipes — Excel avancé, Power BI, SAS, outils de gestion — adaptées à votre secteur et vos données réelles.",
        details: ["Excel débutant → expert", "Power BI & Tableau : dashboards métier", "SAS : analyse statistique & reporting", "Outils de gestion & productivité bureautique"],
      },
      {
        num: '11', title: "Studio de contenu pédagogique",
        desc: "Production de cours e-learning professionnels pour votre entreprise ou votre secteur : vidéos, modules interactifs, quiz et certifications.",
        details: ["Scénarisation & design pédagogique", "Production vidéo & animations", "Modules e-learning interactifs", "Intégration sur Scholio ou votre LMS"],
      },
      {
        num: '12', title: "Digital marketing & Présence en ligne",
        desc: "Construire et gérer votre présence digitale : réseaux sociaux, publicités ciblées, référencement local et stratégie de contenu.",
        details: ["Stratégie de contenu & calendrier éditorial", "Gestion réseaux sociaux (LinkedIn, Facebook)", "Publicités Meta & Google ciblées", "SEO local & Google My Business"],
      },
    ],
  },
]

export default function Services() {
  const [activeGroup, setActiveGroup] = useState('dev')
  const revealRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 100)
          )
      }),
      { threshold: 0.1 }
    )
    if (revealRef.current) observer.observe(revealRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = e => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const current = GROUPS.find(g => g.id === activeGroup)

  return (
    <section id="services" className="bg-navy-dark py-24 px-6" ref={revealRef}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="reveal">
            <span className="section-tag mb-4 justify-center">Nos services</span>
          </div>
          <h2 className="reveal reveal-d1 font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            L'accompagnement <span className="gradient-text">complet</span>
          </h2>
          <p className="reveal reveal-d2 text-white/55 text-lg">
            Du développement à la formation, en passant par le conseil et le marketing — tout ce dont votre entreprise a besoin pour réussir sa transformation digitale.
          </p>
        </div>

        {/* Group tabs */}
        <div className="reveal reveal-d3 flex flex-col sm:flex-row gap-3 mb-12 justify-center">
          {GROUPS.map(g => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-xl border font-semibold text-sm transition-all duration-200 ${
                activeGroup === g.id
                  ? 'bg-white text-navy border-white shadow-lg'
                  : 'bg-white/6 text-white/70 border-white/15 hover:bg-white/12 hover:text-white'
              }`}
            >
              <span className={activeGroup === g.id ? 'text-navy' : 'text-white/60'}>
                {g.icon}
              </span>
              {g.title}
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                activeGroup === g.id ? 'bg-navy/10 text-navy' : 'bg-white/10 text-white/50'
              }`}>
                {g.services.length}
              </span>
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {current.services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-d${i + 1} group bg-white/4 hover:bg-white/7 border border-white/8 hover:border-white/16 rounded-2xl p-7 transition-all duration-300 border-l-2 ${current.accent}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`font-display font-bold text-4xl opacity-30 group-hover:opacity-60 transition-opacity ${current.numColor}`}>
                  {s.num}
                </span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${current.tagBg}`}>
                  {current.title}
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-3">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-white/45 text-sm">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/25 mt-1.5" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={scrollToContact}
                className={`inline-flex items-center gap-1.5 font-medium text-sm group-hover:gap-2.5 transition-all ${
                  current.color === 'blue' ? 'text-blue-400 hover:text-white' :
                  current.color === 'teal' ? 'text-teal-400 hover:text-white' :
                  'text-purple-400 hover:text-white'
                }`}
              >
                Nous contacter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
