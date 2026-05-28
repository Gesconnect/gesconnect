'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    title: 'Conseil & Audit Digital',
    desc: 'Évaluation de votre maturité numérique, identification des blocages opérationnels et feuille de route chiffrée vers la digitalisation. Mission de 2 à 4 semaines.',
    details: ['Diagnostic complet de vos processus', "Plan d'action priorisé et chiffré", 'Recommandations adaptées à votre budget'],
    accent: 'border-blue-400',
    numColor: 'text-blue-400',
  },
  {
    num: '02',
    title: 'Analyse de Données & BI',
    desc: "Collecte, nettoyage, analyse et visualisation de vos données. Dashboards Power BI et tableaux de bord stratégiques pour piloter par la donnée, pas à l'instinct.",
    details: ['Nettoyage & structuration de vos données', 'Dashboards interactifs Power BI / Tableau', 'Formation de vos équipes à la lecture des KPI'],
    accent: 'border-teal-400',
    numColor: 'text-teal-400',
  },
  {
    num: '03',
    title: 'Formation Professionnelle',
    desc: 'Excel, Power BI, SAS, outils de gestion — des formations concrètes, dispensées en présentiel ou en ligne, calibrées sur les besoins réels de vos équipes.',
    details: ['Excel débutant → expert', 'Power BI & Tableau : dashboards avancés', 'SAS : analyse statistique & data management'],
    accent: 'border-amber-400',
    numColor: 'text-amber-400',
  },
  {
    num: '04',
    title: 'Développement Sur-mesure',
    desc: 'Votre besoin ne correspond à aucune de nos apps existantes ? Nous concevons et développons une solution entièrement adaptée à votre organisation.',
    details: ['Applications web & mobile sur mesure', 'Extensions de nos applications existantes', 'Intégrations API & automatisation des workflows'],
    accent: 'border-brand-green',
    numColor: 'text-brand-accent',
  },
]

export default function Services() {
  const revealRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (revealRef.current) observer.observe(revealRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = e => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="bg-navy-dark py-24 px-6" ref={revealRef}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal">
            <span className="section-tag mb-4 justify-center">Ce que nous faisons</span>
          </div>
          <h2 className="reveal reveal-d1 font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="reveal reveal-d2 text-white/55 text-lg">
            Conseil, formation, data et développement — un accompagnement complet pour votre transformation numérique.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i + 1} group bg-white/4 hover:bg-white/7 border border-white/8 hover:border-white/16 rounded-2xl p-8 transition-all duration-300 border-l-2 ${s.accent}`}
            >
              <div className="flex items-start justify-between mb-5">
                <span className={`font-display font-bold text-4xl ${s.numColor} opacity-40 group-hover:opacity-70 transition-opacity`}>
                  {s.num}
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.details.map((d, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-white/50 text-sm">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/30" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-1.5 text-brand-accent hover:text-white font-medium text-sm group-hover:gap-2.5 transition-all"
              >
                En savoir plus
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
