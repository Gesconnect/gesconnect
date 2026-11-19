'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { METIERS, METIER_ORDER } from '@/lib/home'
import { waLink } from '@/lib/site'
import { track } from '@/lib/track'

// Haut de l'accueil : le visiteur choisit son métier dans la barre du bas,
// et le haut de page prend les couleurs, le message et la démo de l'application.
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

  function choose(k) {
    const next = key === k ? 'general' : k
    setKey(next)
    setStep(0)
    track('choix_metier', { metier: next })
    const top = ref.current ? ref.current.getBoundingClientRect().top : 0
    if (top < -40) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const t = m.t
  const vars = {
    '--hx-bg': t.bg, '--hx-ink': t.ink, '--hx-muted': t.muted, '--hx-kicker': t.kicker,
    '--hx-accent': t.accent, '--hx-on': t.onAccent, '--hx-line': t.line,
  }
  const screen = m.screen || {}
  const chartOn = t.accent === '#FFFFFF' ? '#3B82F6' : t.accent
  const chartOff = '#DCE3EE'
  // Couleur de la barre latérale et icône de l'application affichée sur l'ordinateur et la tablette
  const sideBg = key === 'quinca360' ? '#0B2545' : ['general', 'entreprise', 'autre'].includes(key) ? '#0F1E4A' : t.bg.split('), ').pop()
  const appIcon = icons[key] || '/logo-g.webp'
  const shown = rows.slice(0, Math.min(step, rows.length))

  return (
    <div ref={ref}>
      <section className="hx" style={vars}>
        <div className="wrap hx__in">
          <div className="hx__txt">
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
            <div className="devices">
            {/* Ordinateur portable et tablette dessinés comme de vrais appareils (grand écran seulement) */}
            <div className="mb" aria-hidden="true">
              <div className="mb__lid">
                <i className="mb__cam" />
                <div className="mb__screen">
                  <div className="ui">
                    <div className="ui__side" style={{ background: sideBg }}>
                      <img src={appIcon} alt="" width="26" height="26" />
                      <span className="on" /><span /><span /><span />
                    </div>
                    <div className="ui__main">
                      <div className="ui__bar">
                        <strong>{m.screens.laptop.title}</strong>
                        <em>Aujourd’hui</em>
                        <i className="ui__avatar" />
                      </div>
                      <div className="ui__kpis">
                        {m.screens.laptop.kpis.map(([k, v]) => <p key={k}><small>{k}</small><b>{v}</b></p>)}
                      </div>
                      <div className="ui__chart">
                        <div className="ui__grid"><i /><i /><i /></div>
                        <div className="ui__bars">
                          {[38, 52, 46, 64, 58, 80, 72, 92].map((h, i) => <b key={i} style={{ height: `${h}%`, background: i === 7 ? chartOn : chartOff }} />)}
                        </div>
                        <div className="ui__x"><span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span><span>Auj.</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb__hinge" />
              <div className="mb__base"><i /></div>
            </div>
            <div className="tab" aria-hidden="true">
              <i className="tab__cam" />
              <div className="tab__screen">
                <div className="tab__bar" style={{ background: sideBg }}>
                  <img src={appIcon} alt="" width="18" height="18" />
                  <strong>{m.screens.tablet.title}</strong>
                </div>
                <div className="tab__list">
                  {m.screens.tablet.rows.map(([k, v]) => <p key={k}><span>{k}</span><b>{v}</b></p>)}
                </div>
              </div>
            </div>
            <div className={m.laptop ? 'device device--laptop' : 'device'}>
              {key === 'general' ? (
                <div className="device__screen home-screen">
                  <p style={{ fontSize: 12, color: '#9FB0C8' }}>Bonsoir</p>
                  <p className="title" style={{ fontSize: 18, marginTop: 2 }}>Vos applications</p>
                  <div className="home-screen__grid">
                    {items.filter((i) => i.icon).map((i) => (
                      <button key={i.key} type="button" className="home-screen__app" onClick={() => choose(i.key)}>
                        <img src={i.icon} alt="" width="52" height="52" fetchPriority="high" />
                        {i.name}
                      </button>
                    ))}
                    <button type="button" className="home-screen__app" onClick={() => choose('autre')}>
                      <span className="home-screen__plus" aria-hidden="true">+</span>
                      Votre métier
                    </button>
                  </div>
                  <p className="home-screen__notif">Touchez une application pour la voir travailler.</p>
                </div>
              ) : (
                <div className="device__screen demo" style={{ background: screen.bg, color: screen.ink }}>
                  <div className="demo__head">
                    {icons[key] ? <img src={icons[key]} alt="" width="34" height="34" /> : null}
                    <div>
                      <small>{screen.sub}</small>
                      <strong>{screen.title}</strong>
                    </div>
                  </div>
                  <div className="demo__rows" aria-live="polite">
                    {shown.map(([k, v]) => (
                      <p key={k} className="demo__row" style={{ background: screen.row }}><span>{k}</span><strong>{v}</strong></p>
                    ))}
                  </div>
                  {step > rows.length ? (
                    <p className="demo__banner" style={{ background: m.banner.bg, color: m.banner.ink }}><i aria-hidden="true" />{m.banner.text}</p>
                  ) : null}
                  <button type="button" className="demo__replay" onClick={() => setStep(0)}>{m.replay}</button>
                </div>
              )}
            </div>
            </div>
            {m.laptop ? <div className="device__base" aria-hidden="true" /> : null}
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
