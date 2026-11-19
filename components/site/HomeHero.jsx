'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { METIERS, METIER_ORDER } from '@/lib/home'
import { waLink } from '@/lib/site'
import { track } from '@/lib/track'

// Haut de l'accueil : le visiteur choisit son métier (dans la barre du bas ou directement sur un écran),
// et le haut de page prend les couleurs, le message et la démo de l'application.
// Sur grand écran, la même application s'affiche à l'identique sur l'ordinateur, la tablette et le téléphone.
// items : [{ key, name, short, icon }] fourni par la page (évite d'embarquer toutes les données des apps).

function Go({ href, className, children, onClick }) {
  if (href.startsWith('/')) return <Link href={href} className={className} onClick={onClick}>{children}</Link>
  return <a href={href} className={className} onClick={onClick}>{children}</a>
}

function BarIcon({ kind }) {
  return (
    <span className="appsbar__ico" aria-hidden="true">
      {kind === 'building' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" /><path d="M16 9h2a2 2 0 0 1 2 2v10" /><path d="M2 21h20M8 7h4M8 11h4M8 15h4" /></svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
      )}
    </span>
  )
}

export default function HomeHero({ items }) {
  const [key, setKey] = useState('general')
  const [step, setStep] = useState(0)
  const ref = useRef(null)
  const m = METIERS[key]
  const rows = m.rows || []
  const icons = Object.fromEntries(items.map((i) => [i.key, i.icon]))

  // La démo avance toute seule, une ligne toutes les 0,9 s (tout d'un coup si l'appareil demande moins d'animations).
  useEffect(() => {
    if (!rows.length) return undefined
    const calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (calm) { setStep(rows.length + 1); return undefined }
    const id = setInterval(() => setStep((s) => (s > rows.length ? s : s + 1)), 900)
    return () => clearInterval(id)
  }, [key, rows.length])

  function select(next) {
    setKey(next)
    setStep(0)
    track('choix_metier', { metier: next })
    const top = ref.current ? ref.current.getBoundingClientRect().top : 0
    if (top < -40) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const choose = (k) => select(key === k ? 'general' : k)
  const goHome = () => select('general')

  const t = m.t
  const vars = {
    '--hx-bg': t.bg, '--hx-ink': t.ink, '--hx-muted': t.muted, '--hx-kicker': t.kicker,
    '--hx-accent': t.accent, '--hx-on': t.onAccent, '--hx-line': t.line,
  }
  const screen = m.screen || {}
  const shown = rows.slice(0, Math.min(step, rows.length))
  const gridApps = items.filter((i) => i.icon)

  // Le même écran, affiché dans chaque appareil (téléphone, tablette, ordinateur).
  function screenFor(device) {
    if (key === 'general') {
      return (
        <div className={`scr scr--${device} scr--home`}>
          <p className="scr__hello">Bonsoir</p>
          <p className="scr__title">Vos applications</p>
          <div className="scr__apps">
            {gridApps.map((i) => (
              <button key={i.key} type="button" className="scr__app" onClick={() => choose(i.key)} tabIndex={device === 'phone' ? 0 : -1}>
                <img src={i.icon} alt="" width="52" height="52" fetchPriority={device === 'phone' ? 'high' : undefined} />
                <span>{i.name}</span>
              </button>
            ))}
            <button type="button" className="scr__app" onClick={() => choose('autre')} tabIndex={device === 'phone' ? 0 : -1}>
              <span className="scr__plus" aria-hidden="true">+</span>
              <span>Votre métier</span>
            </button>
          </div>
          <p className="scr__hint">Touchez une application pour la voir travailler.</p>
        </div>
      )
    }
    return (
      <div className={`scr scr--${device} scr--demo`} style={{ background: screen.bg, color: screen.ink }}>
        <div className="scr__head">
          <button type="button" className="scr__back" onClick={goHome} aria-label="Revenir à toutes les applications" tabIndex={device === 'phone' ? 0 : -1}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          {icons[key] ? <img src={icons[key]} alt="" width="34" height="34" /> : null}
          <div className="scr__id">
            <small>{screen.sub}</small>
            <strong>{screen.title}</strong>
          </div>
        </div>
        <div className="scr__rows" aria-live={device === 'phone' ? 'polite' : undefined}>
          {shown.map(([k, v]) => (
            <p key={k} className="scr__row" style={{ background: screen.row }}><span>{k}</span><strong>{v}</strong></p>
          ))}
        </div>
        <div className="scr__foot">
          {step > rows.length ? (
            <p className="scr__banner" style={{ background: m.banner.bg, color: m.banner.ink }}><i aria-hidden="true" />{m.banner.text}</p>
          ) : null}
          <button type="button" className="scr__replay" onClick={() => setStep(0)} tabIndex={device === 'phone' ? 0 : -1}>{m.replay}</button>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref}>
      <section className="hx" style={vars}>
        <div className="wrap hx__in">
          <div className="hx__txt">
            {key !== 'general' ? (
              <button type="button" className="hx__back" onClick={goHome}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                Toutes les applications
              </button>
            ) : null}
            <p className="hx__kicker">{m.kicker}</p>
            {m.slogan ? <p className="hx__slogan">{m.slogan}</p> : null}
            <h1 className="h1">{m.title}</h1>
            <p className="lead">{m.lead}</p>
            <div className="btns">
              <Go href={m.ctaHref} className="btn hx__cta">{m.cta}</Go>
              <a className="btn hx__ghost" href={waLink(m.wa)} target="_blank" rel="noopener" onClick={() => track('clic_whatsapp', { section: 'haut', metier: key })}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /></svg>
                Écrire sur WhatsApp
              </a>
            </div>
            <p className="hx__offer">{m.offer}</p>
          </div>

          <div className="hx__vis">
            <div className="trio">
              {/* Ordinateur portable et tablette : grand écran seulement. Ils affichent le même écran que le téléphone. */}
              <div className="mb" aria-hidden="true">
                <div className="mb__lid">
                  <i className="mb__cam" />
                  <div className="mb__screen">{screenFor('laptop')}</div>
                </div>
                <div className="mb__hinge" />
                <div className="mb__base"><i /></div>
              </div>
              <div className="tab" aria-hidden="true">
                <i className="tab__cam" />
                <div className="tab__screen">{screenFor('tablet')}</div>
              </div>
              <div className="ph">
                <i className="ph__island" aria-hidden="true" />
                <div className="ph__screen">{screenFor('phone')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="appsbar" aria-label="Que gérez-vous ?">
        <div className="wrap">
          <p className="appsbar__q">Que gérez-vous ? <span>Touchez votre métier.</span></p>
          <div className="appsbar__in">
            {METIER_ORDER.map((k) => {
              const it = items.find((i) => i.key === k)
              const meta = METIERS[k]
              return (
                <button key={k} type="button" aria-pressed={key === k} onClick={() => choose(k)} style={{ '--bar-accent': meta.t.accent === '#FFFFFF' ? '#0F1E4A' : meta.t.accent }}>
                  {it && it.icon ? <img src={it.icon} alt="" width="36" height="36" /> : <BarIcon kind={meta.icon} />}
                  <span>
                    <strong>{it ? it.name : meta.label}</strong>
                    <small>{it ? it.short : meta.short}</small>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}
