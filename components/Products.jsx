'use client'
import { useEffect, useRef } from 'react'

const apps = [
  {
    id: 'commerce',
    name: 'App Commerce',
    sector: 'Commerce & Retail',
    color: 'from-blue-600 to-blue-800',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: ['Gestion stocks & caisse', 'Suivi ventes & fournisseurs', 'KPI temps réel & rapports'],
    targets: ['Quincailleries', 'Poissonneries', 'Commerce général'],
  },
  {
    id: 'hotel',
    name: 'App Hôtel',
    sector: 'Hôtellerie & Tourisme',
    color: 'from-purple-600 to-purple-800',
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['Réservations & chambres', 'Facturation automatisée', 'Reporting occupation & revenus'],
    targets: ['Hôtels 2–4★', 'Auberges', 'Résidences meublées'],
  },
  {
    id: 'scolaire',
    name: 'App Scolaire',
    sector: 'Éducation',
    color: 'from-amber-500 to-amber-700',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    features: ['Inscriptions & scolarité', 'Notes, bulletins, absences', 'Paiements & communication parents'],
    targets: ['Écoles primaires', 'Collèges & lycées privés', 'Institutions'],
  },
  {
    id: 'restauration',
    name: 'App Restauration',
    sector: 'Restauration & Food',
    color: 'from-orange-500 to-red-600',
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    features: ['Prise de commandes tables', 'Gestion cuisine & stocks', 'Caisse & analyse par plat'],
    targets: ['Maquis', 'Restaurants', 'Fast-food & cantines'],
  },
  {
    id: 'scholio',
    name: 'Scholio',
    sector: 'Formation en ligne',
    color: 'from-teal-500 to-emerald-700',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Cours en ligne Afrique francophone', 'Certifications professionnelles', 'Format entreprise & grand public'],
    targets: ['Professionnel', 'Entreprises', 'Grand public'],
    badge: 'Produit phare',
  },
]

export default function Products() {
  const revealRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (revealRef.current) observer.observe(revealRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = e => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="produits" className="bg-slate-50 py-24 px-6" ref={revealRef}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal">
            <span className="section-tag mb-4 justify-center">Nos solutions métier</span>
          </div>
          <h2 className="reveal reveal-d1 font-display font-bold text-navy text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Une app pour <span className="text-brand-green">chaque secteur</span>
          </h2>
          <p className="reveal reveal-d2 text-slate-500 text-lg leading-relaxed">
            Nos applications sont développées à partir de l'analyse des besoins réels de votre secteur. Votre métier n'est pas encore couvert ? Contactez-nous — nous construisons à la demande.
          </p>
        </div>

        {/* Apps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {apps.map((app, i) => (
            <div
              key={app.id}
              className={`reveal reveal-d${i + 1} app-card bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl`}
            >
              {/* Card top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${app.color}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${app.iconBg} ${app.iconColor} flex items-center justify-center`}>
                    {app.icon}
                  </div>
                  {app.badge && (
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                      {app.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-navy text-xl mb-1">{app.name}</h3>
                <p className="text-brand-green text-sm font-medium mb-4">{app.sector}</p>

                <ul className="space-y-2 mb-5">
                  {app.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-slate-600 text-sm">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {app.targets.map((t, j) => (
                    <span key={j} className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="flex items-center gap-1.5 text-brand-green hover:text-brand-green-mid font-semibold text-sm group transition-colors"
                >
                  Parlons de votre projet
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* "Your sector" card */}
          <div className="reveal reveal-d5 app-card bg-navy rounded-2xl border border-navy-mid overflow-hidden shadow-sm hover:shadow-xl cursor-pointer group" onClick={scrollToContact}>
            <div className="h-1.5 w-full bg-green-gradient" />
            <div className="p-6 h-full flex flex-col justify-center text-center min-h-[280px]">
              <div className="w-14 h-14 rounded-2xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-green/25 transition-colors">
                <svg className="w-7 h-7 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2">Votre secteur ?</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">
                30+ autres secteurs couverts — Pharmacie, Garage, Coopérative agricole, ONG et bien plus. Nous développons sur demande.
              </p>
              <span className="inline-flex items-center justify-center gap-2 bg-brand-green text-white text-sm font-semibold px-6 py-2.5 rounded-full group-hover:bg-brand-green-mid transition-colors">
                Contactez-nous
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="reveal text-center text-slate-400 text-sm">
          Toutes nos applications intègrent nativement{' '}
          <span className="font-medium text-slate-600">Orange Money · Wave · MTN · Moov</span>{' '}
          et des <span className="font-medium text-slate-600">tableaux de bord KPI</span> en temps réel.
        </p>
      </div>
    </section>
  )
}
