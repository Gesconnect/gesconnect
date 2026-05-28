'use client'
import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const stepValue = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += stepValue
            if (current >= target) { current = target; clearInterval(timer) }
            setCount(Math.floor(current))
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-6 text-center">

      {/* Background elements */}
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-green/10 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-navy-mid/60 blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* Badge */}
      <div className="reveal visible inline-flex items-center gap-2 bg-white/8 border border-white/15 text-brand-accent text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-dot" />
        🇨🇮 Studio Tech Ivoirien · Abidjan, Côte d'Ivoire
      </div>

      {/* Headline */}
      <h1 className="reveal reveal-d1 visible font-display font-extrabold text-white leading-[1.05] mb-6 max-w-4xl">
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Connectez votre Entreprise,
        </span>
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl gradient-text mt-1">
          Automatisez votre Succès.
        </span>
      </h1>

      {/* Subheadline */}
      <p className="reveal reveal-d2 visible text-white/65 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-body">
        Gesconnect conçoit des applications de gestion sur mesure pour les{' '}
        <span className="text-white font-medium">PME et entreprises</span> d'Afrique francophone — pensées pour votre réalité terrain, pas adaptées d'un modèle occidental.
      </p>

      {/* CTAs */}
      <div className="reveal reveal-d3 visible flex flex-col sm:flex-row gap-4 mb-16">
        <a
          href="#produits"
          onClick={e => { e.preventDefault(); document.querySelector('#produits')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-mid text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-[0_0_32px_rgba(22,163,74,0.5)] group"
        >
          Découvrir nos solutions
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#fondateurs"
          onClick={e => { e.preventDefault(); document.querySelector('#fondateurs')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 backdrop-blur-sm"
        >
          Devenir Client Fondateur
        </a>
      </div>

      {/* Stats */}
      <div className="reveal reveal-d4 visible flex flex-col sm:flex-row items-center gap-8 sm:gap-12 bg-white/6 border border-white/12 backdrop-blur-sm px-10 py-6 rounded-2xl">
        <div className="text-center">
          <div className="font-display font-bold text-3xl text-white">
            <Counter target={35} suffix="+" />
          </div>
          <p className="text-white/55 text-sm mt-1">Secteurs d'activité</p>
        </div>
        <div className="hidden sm:block w-px h-10 bg-white/15" />
        <div className="text-center">
          <div className="font-display font-bold text-3xl text-white">
            <Counter target={82} suffix=" 000+" />
          </div>
          <p className="text-white/55 text-sm mt-1">PME en Côte d'Ivoire</p>
        </div>
        <div className="hidden sm:block w-px h-10 bg-white/15" />
        <div className="text-center">
          <div className="font-display font-bold text-3xl text-white">
            <Counter target={7} suffix="M+" />
          </div>
          <p className="text-white/55 text-sm mt-1">Acteurs du secteur informel</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs tracking-widest uppercase">Défiler</span>
        <div className="w-px h-8 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[float_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
