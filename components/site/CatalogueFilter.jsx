'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SECTORS, CATALOGUE } from '@/lib/catalogue'
import { waLink } from '@/lib/site'

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
            <h2 className="eyebrow sub-label" style={{ color: 'var(--green-ink)' }}>Prêtes à l’emploi</h2>
            <div className="grid" style={{ '--min': '280px', gap: 14, marginBottom: 40 }}>
              {live.map((a) => (
                <Link key={a.slug} href={`/applications/${a.slug}`} className="cat-live">
                  <img src={`/apps/${a.slug}.webp`} alt="" width="52" height="52" />
                  <span>
                    <strong>{a.name}</strong>
                    <small>{a.metier}</small>
                    <em className="pill pill--ok" style={{ marginTop: 8, fontSize: 12, fontStyle: 'normal' }}>{a.offer}</em>
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}
        {next.length > 0 && (
          <>
            <h2 className="eyebrow" style={{ color: 'var(--muted)' }}>Sur demande pour votre métier</h2>
            <p className="muted" style={{ margin: '6px 0 16px', maxWidth: 640 }}>
              Nous construisons l’application sur la même base que nos applications en service. Dites-nous que votre métier vous
              intéresse : nous vous recontactons pour en parler.
            </p>
            <div className="grid" style={{ '--min': '240px', gap: 10 }}>
              {next.map((a) => (
                <div key={a.name} className="cat-next">
                  <span><strong>{a.name}</strong><small>{a.sector}</small></span>
                  <a
                    className="pill pill--soon"
                    style={{ flex: 'none', fontSize: 12, textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}
                    href={waLink(`Bonjour Gesconnect, je suis intéressé par une application de gestion pour : ${a.name}.`)}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${a.name} : ça m’intéresse, écrire sur WhatsApp`}
                  >
                    Ça m’intéresse
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
