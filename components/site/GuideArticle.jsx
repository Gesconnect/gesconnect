import Link from 'next/link'
import JsonLd from '@/components/site/JsonLd'
import { SITE, appLink, waLink } from '@/lib/site'
import { getApp } from '@/lib/apps'

// Modèle commun des guides : chapô, encadré, sommaire, sections, liste à cocher, conclusion,
// encadré produit (aux couleurs de l'application, ou de Gesconnect), FAQ, sources et données pour Google.
export default function GuideArticle({
  g, standfirst, box, sections, aside, checklist, bookOrApp, bookOrAppTitle = 'Cahier ou application ?', promo, faq, sources,
}) {
  const url = `${SITE.url}/guides/${g.slug}`
  const app = g.app ? getApp(g.app) : null
  const t = app ? app.theme : null
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: g.title,
      description: g.metaDescription,
      datePublished: g.date,
      dateModified: g.date,
      inLanguage: 'fr',
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: 'L’équipe Gesconnect', url: SITE.url },
      publisher: { '@id': `${SITE.url}/#organisation` },
      image: `${SITE.url}/og_image.jpg`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE.url}/guides` },
        { '@type': 'ListItem', position: 3, name: g.title, item: url },
      ],
    },
  ]
  const promoStyle = t
    ? { '--promo-bg': t.light ? t.light.ink : t.hero, '--promo-glow': t.glow, '--promo-ink': '#FFFFFF', '--promo-muted': t.light ? '#D3E4F4' : t.muted }
    : { '--promo-bg': '#0F1E4A', '--promo-glow': 'rgba(34, 197, 94, .28)', '--promo-ink': '#FFFFFF', '--promo-muted': '#C3CFE2' }

  return (
    <article className="article sec" style={{ paddingTop: 'clamp(32px, 5vw, 64px)' }}>
      <div className="wrap">
        <div className="prose">
          <nav className="crumbs" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link><span aria-hidden="true">›</span>
            <Link href="/guides">Guides</Link><span aria-hidden="true">›</span>
            <span>{g.theme}</span>
          </nav>
          <p className="eyebrow" style={{ marginTop: 24, color: g.ink }}>{g.theme}</p>
          <h1 className="title" style={{ color: 'var(--navy)' }}>{g.title}</h1>
          <p className="muted" style={{ fontSize: 14 }}>Par l’équipe Gesconnect · <time dateTime={g.date}>{g.dateLabel}</time> · {g.readingTime}</p>

          <p className="standfirst">{standfirst}</p>

          {box && (
            <aside className="box" style={{ background: box.bg, color: box.ink }} aria-label={box.title}>
              <p style={{ marginTop: 0, fontWeight: 800 }}>{box.title}</p>
              <p style={{ marginTop: 8, fontSize: 17 }}>{box.text}</p>
            </aside>
          )}

          <nav className="box box--line" aria-label="Sommaire">
            <p style={{ marginTop: 0, fontWeight: 700, color: 'var(--navy)' }}>Dans ce guide</p>
            <ol style={{ marginTop: 8, fontSize: 16, lineHeight: 1.9 }}>
              {sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
              <li><a href="#liste">{checklist.title}</a></li>
            </ol>
          </nav>

          {sections.map((s, i) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2 id={s.id}>{i + 1}. {s.title}</h2>
              {s.paras.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
              {s.formula && (
                <p className="box box--line" style={{ marginTop: 16, fontWeight: 700, color: 'var(--navy)', fontSize: 17 }}>{s.formula}</p>
              )}
              {s.fix && (
                <>
                  <p className="what">{s.fixLabel || 'Ce qui marche'}</p>
                  <ul>{s.fix.map((x) => <li key={x}>{x}</li>)}</ul>
                </>
              )}
            </section>
          ))}

          {aside && (
            <aside className="box" style={{ background: 'var(--bg)', marginTop: 40 }} aria-label={aside.title}>
              <p style={{ marginTop: 0, fontWeight: 800, color: 'var(--navy)' }}>{aside.title}</p>
              <p style={{ marginTop: 8, fontSize: 17 }}>{aside.text}</p>
              {aside.items && <ul style={{ marginTop: 10, fontSize: 17 }}>{aside.items.map((x) => <li key={x}>{x}</li>)}</ul>}
            </aside>
          )}

          <section id="liste" className="box box--navy" aria-labelledby="liste-titre" style={{ marginTop: 48 }}>
            <h2 id="liste-titre">{checklist.title}</h2>
            <p style={{ marginTop: 6, color: '#C3CFE2', fontSize: 16 }}>{checklist.sub}</p>
            <ol style={{ marginTop: 14, fontSize: 17 }}>{checklist.items.map((c) => <li key={c}>{c}</li>)}</ol>
          </section>

          <h2>{bookOrAppTitle}</h2>
          {bookOrApp.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}

          <aside className="promo" style={promoStyle} aria-label={app ? app.name : 'Gesconnect'}>
            <img src={app ? app.icon : '/logo-g.webp'} alt={app ? `Logo ${app.name}` : 'Logo Gesconnect'} width="64" height="64" loading="lazy" style={app ? undefined : { objectFit: 'contain', background: '#0A1628', padding: 6 }} />
            <div>
              <strong>{promo.title}</strong>
              <p>{promo.text}</p>
              <div className="btns" style={{ marginTop: 16 }}>
                {app ? (
                  <>
                    <a className="btn btn--sm" style={{ background: t.accent, color: t.onAccent }} href={appLink(app.domain, `guide-${g.slug}`)} target="_blank" rel="noopener">{promo.cta}</a>
                    <Link className="btn btn--sm btn--line" href={`/applications/${app.slug}`}>Découvrir {app.name}</Link>
                  </>
                ) : (
                  <>
                    <a className="btn btn--sm btn--green" href={waLink(promo.waMessage)} target="_blank" rel="noopener">{promo.cta}</a>
                    <Link className="btn btn--sm btn--line" href="/applications">Voir les applications</Link>
                  </>
                )}
              </div>
            </div>
          </aside>

          <h2>Questions fréquentes</h2>
          <div className="faq" style={{ marginTop: 16 }}>
            {faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>

          {sources && (
            <div style={{ marginTop: 40 }}>
              <p style={{ marginTop: 0, fontWeight: 700, color: 'var(--navy)' }}>Sources</p>
              <ul style={{ fontSize: 15, marginTop: 6 }}>
                {sources.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noopener">{label}</a></li>)}
              </ul>
            </div>
          )}

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
            <p style={{ marginTop: 0, fontWeight: 700, color: 'var(--navy)' }}>À découvrir aussi</p>
            <p className="muted" style={{ fontSize: 16 }}>
              {app && <><Link href={`/applications/${app.slug}`}>{app.name}, {app.short.toLowerCase()}</Link> ·{' '}</>}
              <Link href="/applications">toutes les applications Gesconnect</Link> · <Link href="/guides">tous les guides</Link>
            </p>
          </div>
        </div>
      </div>
      <JsonLd data={jsonLd} />
    </article>
  )
}
