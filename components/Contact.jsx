'use client'
import { useState, useRef, useEffect } from 'react'

const services = [
  'App Commerce',
  'App Hôtel',
  'App Scolaire',
  'App Restauration',
  'Scholio (Formation)',
  'Conseil & Audit Digital',
  'Analyse de Données & BI',
  'Formation Professionnelle',
  'Développement Sur-mesure',
  'Programme Client Fondateur',
  'Autre',
]

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+225 07 13 66 62 59',
    href: 'https://wa.me/+2250713666259',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@gesconnect.com',
    href: 'mailto:contact@gesconnect.com',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Localisation',
    value: 'Abidjan, Côte d\'Ivoire',
    href: null,
    color: 'bg-amber-50 text-amber-700',
  },
]

export default function Contact() {
  const revealRef = useRef(null)
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const [form, setForm]       = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  })

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
      { threshold: 0.1 }
    )
    if (revealRef.current) observer.observe(revealRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      // 🔧 Remplacez YOUR_FORM_ID par votre identifiant Formspree (formspree.io)
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-white py-24 px-6" ref={revealRef}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal">
            <span className="section-tag mb-4 justify-center">Parlons-en</span>
          </div>
          <h2 className="reveal reveal-d1 font-display font-bold text-navy text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Démarrons votre <span className="text-brand-green">transformation</span>
          </h2>
          <p className="reveal reveal-d2 text-slate-500 text-lg">
            Notre équipe vous répond sous 24h. Décrivez votre projet ou votre secteur d'activité — nous avons sûrement la solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-0.5">{info.label}</p>
                      <p className="text-navy font-semibold text-sm group-hover:text-brand-green transition-colors">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100">
                    <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-0.5">{info.label}</p>
                      <p className="text-navy font-semibold text-sm">{info.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Réponse rapide */}
            <div className="reveal reveal-d4 bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">Réponse rapide garantie</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Nous répondons à toutes les demandes sous 24h ouvrées. Pour une réponse immédiate, contactez-nous sur WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 reveal reveal-d2">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 p-8">

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2">Message envoyé !</h3>
                  <p className="text-slate-500 text-sm">Nous vous répondons sous 24h. En attendant, n'hésitez pas à nous contacter sur WhatsApp.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-brand-green text-sm font-medium hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="form-label">Votre nom *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Jean Kouassi"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="jean@monentreprise.ci"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="form-label">Téléphone / WhatsApp</label>
                      <input
                        id="phone" name="phone" type="tel"
                        value={form.phone} onChange={handleChange}
                        placeholder="+225 07 00 00 00 00"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="form-label">Entreprise</label>
                      <input
                        id="company" name="company" type="text"
                        value={form.company} onChange={handleChange}
                        placeholder="Mon Entreprise SARL"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="form-label">Solution qui vous intéresse</label>
                    <select
                      id="service" name="service"
                      value={form.service} onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Sélectionnez une solution…</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">Votre message *</label>
                    <textarea
                      id="message" name="message" required rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Décrivez votre secteur d'activité, votre besoin ou votre projet…"
                      className="form-input resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      Une erreur est survenue. Veuillez réessayer ou nous contacter directement sur WhatsApp.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-mid disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-slate-400 text-xs text-center">* Champs obligatoires · Vos données restent confidentielles</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
