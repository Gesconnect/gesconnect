'use client'
import { useEffect, useRef } from 'react'

const perks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Tarif fondateur',
    desc: "Jusqu'à 40% de réduction sur votre abonnement, à vie.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Co-construction',
    desc: "Vos besoins façonnent directement le produit final.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Accès prioritaire',
    desc: "Nouvelles fonctionnalités en avant-première, avant tout le monde.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Support direct',
    desc: "Accès direct aux fondateurs pour tout besoin de support.",
  },
]

export default function FoundingClients() {
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
      { threshold: 0.15 }
    )
    if (revealRef.current) observer.observe(revealRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = e => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="fondateurs" className="relative py-24 px-6 overflow-hidden bg-hero-gradient" ref={revealRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-green/15 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <div>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 bg-brand-green/15 border border-brand-green/30 text-brand-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-dot" />
                Places limitées · 10 entreprises
              </span>
            </div>
            <h2 className="reveal reveal-d1 font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
              Devenez<br />
              <span className="gradient-text">Client Fondateur</span>
            </h2>
            <p className="reveal reveal-d2 text-white/60 text-lg leading-relaxed mb-8">
              Rejoignez les <strong className="text-white">10 premières entreprises</strong> à transformer leur gestion avec Gesconnect. En contrepartie de votre confiance pionnière, vous bénéficiez de conditions exceptionnelles — et vos retours terrain façonnent directement nos produits.
            </p>
            <div className="reveal reveal-d3 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_28px_rgba(22,163,74,0.45)] group"
              >
                Je veux devenir Client Fondateur
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Spots counter */}
            <div className="reveal reveal-d4 mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['EC', 'AK', 'MB'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-navy-mid border-2 border-navy-dark flex items-center justify-center text-white text-xs font-bold"
                  >
                    {initials}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-brand-green/20 border-2 border-navy-dark border-dashed flex items-center justify-center text-brand-accent text-xs font-bold">
                  +7
                </div>
              </div>
              <p className="text-white/50 text-sm">
                <span className="text-white font-medium">7 places</span> encore disponibles
              </p>
            </div>
          </div>

          {/* Right — perks */}
          <div className="grid sm:grid-cols-2 gap-4">
            {perks.map((p, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1} bg-white/6 hover:bg-white/10 border border-white/10 hover:border-brand-green/30 rounded-2xl p-6 transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/15 flex items-center justify-center text-brand-accent mb-4">
                  {p.icon}
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
