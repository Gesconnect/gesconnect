'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SECTORS, CATALOGUE } from '@/lib/catalogue'

export default function CatalogueFilter() {
  const [sector, setSector] = useState('Tous')
  const shown = CATALOGUE.filter((a) => sector === 'Tous' || a.sector === sector)
  const live = shown.filter((a) => a.status === 'Disponible')
  const next = shown.filter((a) => a.status !== 'Disponible')

  return (
    <>
      <div className="chips-filter" role="group" aria-label="Filtrer par secteur">
        {SECTORS.map((s) => (
          <button key={s} type="button" className="chip" aria-pressed={s === sector} onClick={() => setSector(s)}>{s}</button>
        ))}
      </div>

      <div style={{ paddingTop: 32 }}>
        {live.length > 0 && (
          <>
            <h2 className="eyebrow sub-label" style={{ color: 'var(--green-ink)' }}>Disponibles maintenant</h2>
            <div className="grid" style={{ '--min': '280px', gap: 14, marginBottom: 40 }}>
              {live.map((a) => (
                <Link key={a.slug} href={`/applications/${a.slug}`} className="cat-live">
                  <img src={`/apps/${a.slug}.webp`} alt="" width="52" height="52" loading="lazy" />
                  <span><strong>{a.name}</strong><small>{a.metier}</small></span>
                  <span className="pill pill--ok" style={{ flex: 'none', fontSize: 12 }}>Disponible</span>
                </Link>
              ))}
            </div>
          </>
        )}
        {next.length > 0 && (
          <>
            <h2 className="eyebrow sub-label" style={{ color: 'var(--muted)' }}>Bientôt et sur demande</h2>
            <div className="grid" style={{ '--min': '240px', gap: 10 }}>
              {next.map((a) => (
                <div key={a.name} className="cat-next">
                  <span><strong>{a.name}</strong><small>{a.sector}</small></span>
                  <span className={`pill ${a.status === 'Bientôt' ? 'pill--soon' : 'pill--ask'}`} style={{ flex: 'none', fontSize: 12 }}>{a.status}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
