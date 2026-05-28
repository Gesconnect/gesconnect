'use client'
import { useEffect, useRef } from 'react'

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Sur mesure',
    desc: "Chaque solution est conçue à partir des réalités opérationnelles de votre métier — pas copiée d'un modèle générique.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile Money intégré',
    desc: 'Orange Money, Wave, MTN, Moov — intégrés nativement dans chaque application dès la version 1.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Tarifs accessibles',
    desc: "De 5 000 à 75 000 FCFA/mois selon le produit — jusqu'à 10× moins cher que les solutions internationales.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Ancrage local',
    desc: "Équipe ivoirienne, support en français, connaissance terrain des marchés d'Afrique francophone.",
  },
]

export default function Mission() {
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

  return (
    <section id="mission" className="bg-navy-dark py-24 px-6" ref={revealRef}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="reveal">
            <span className="section-tag mb-4">Notre mission</span>
          </div>
          <h2 className="reveal reveal-d1 font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            Sortir les entreprises africaines <br className="hidden md:block" />
            <span className="gradient-text">de la gestion manuelle</span>
          </h2>
          <p className="reveal reveal-d2 text-white/60 text-lg leading-relaxed">
            En Côte d'Ivoire, 82 000 entreprises formelles et plus de 7 millions d'acteurs du secteur informel gèrent encore leur activité à la main — carnets, fichiers Excel dispersés, calculs approximatifs. Les outils existants (Sage, Odoo) ciblent le haut de marché à des prix inaccessibles.
            <span className="text-white"> Gesconnect répond à ce paradoxe.</span>
          </p>
        </div>

        {/* Problem → Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="reveal reveal-d2 bg-white/4 border border-white/8 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-white text-lg">Le problème</h3>
            </div>
            <ul className="space-y-3 text-white/60 text-sm leading-relaxed">
              {[
                'Gestion manuelle — carnets, Excel, calculs à la main',
                'Outils internationaux inadaptés au contexte africain',
                'Prix prohibitifs : 50 000 à 500 000 FCFA/mois',
                "Pas d'intégration Mobile Money native",
                'Support inexistant dans la langue locale',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-d3 bg-brand-green/10 border border-brand-green/25 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-brand-green/25 flex items-center justify-center text-brand-accent">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-white text-lg">La réponse Gesconnect</h3>
            </div>
            <ul className="space-y-3 text-white/70 text-sm leading-relaxed">
              {[
                'Applications métier 100% adaptées au terrain ivoirien',
                'Développées à partir des besoins réels de votre secteur',
                'Tarifs accessibles PME : dès 5 000 FCFA/mois',
                'Mobile Money intégré dès la version 1 (Orange Money, Wave…)',
                'Support local en français, équipe basée à Abidjan',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i + 1} bg-white/4 border border-white/8 hover:border-brand-green/40 rounded-2xl p-6 transition-all duration-300 group`}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-green/15 group-hover:bg-brand-green/25 flex items-center justify-center text-brand-accent mb-4 transition-colors duration-300">
                {v.icon}
              </div>
              <h3 className="font-display font-semibold text-white text-base mb-2">{v.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
