import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/site/JsonLd'
import { APPS, getApp } from '@/lib/apps'
import { SITE, appLink, waLink } from '@/lib/site'

export function generateStaticParams() {
  return APPS.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }) {
  const app = getApp(params.slug)
  if (!app) return {}
  return {
    title: { absolute: app.metaTitle },
    description: app.metaDescription,
    alternates: { canonical: `/applications/${app.slug}` },
    openGraph: { title: app.metaTitle, description: app.metaDescription, url: `${SITE.url}/applications/${app.slug}` },
  }
}

export default function ProductPage({ params }) {
  const app = getApp(params.slug)
  if (!app) notFound()
  const t = app.theme
  const p = app.phone
  const others = APPS.filter((a) => a.slug !== app.slug)
  const vars = {
    '--hero': t.hero, '--glow': t.glow, '--accent': t.accent, '--on-accent': t.onAccent, '--kicker': t.kicker,
    '--muted-c': t.muted, '--crumb': t.crumb, '--chip-hi': t.chipHi, '--tint': t.tint, '--tile-ink': t.tileInk,
    '--label-ink': t.labelInk, '--deep': t.deep,
  }
  const url = `${SITE.url}/applications/${app.slug}`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: app.name,
      url: `https://${app.domain}`,
      mainEntityOfPage: url,
      description: app.metaDescription,
      applicationCategory: 'BusinessApplication',
      operatingSystem: app.offline ? 'Android, navigateur web' : 'Navigateur web (téléphone, tablette, ordinateur)',
      inLanguage: 'fr',
      image: `${SITE.url}${app.icon}`,
      publisher: { '@id': `${SITE.url}/#organisation` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: app.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Applications', item: `${SITE.url}/applications` },
        { '@type': 'ListItem', position: 3, name: app.name, item: url },
      ],
    },
  ]

  return (
    <div style={vars}>
      <section className="p-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link><span aria-hidden="true">›</span>
            <Link href="/applications">Applications</Link><span aria-hidden="true">›</span>
            <span style={{ color: '#fff' }}>{app.name}</span>
          </nav>
          <div className="p-hero__in">
            <div className="p-hero__txt">
              <p className="p-hero__by">
                <img src={app.icon} alt={`Logo ${app.name}`} width="60" height="60" fetchPriority="high" />
                Une application conçue par Gesconnect
              </p>
              <h1 className="title">{app.h1}</h1>
              <p className="lead">{app.lead}</p>
              <div className="btns">
                <a className="btn btn--accent" href={appLink(app.domain, 'page-produit')} target="_blank" rel="noopener">Essayer sur {app.domain} ↗</a>
                <a className="btn btn--ghost" href={waLink(`Bonjour Gesconnect, je souhaite une démonstration de ${app.name}.`)} target="_blank" rel="noopener">Démo sur WhatsApp</a>
              </div>
              <ul className="chips">
                {app.chips.map((c) => <li key={c}>{c}</li>)}
                <li className="hi">{app.heroOffer}</li>
              </ul>
            </div>
            <div className="p-hero__vis" aria-hidden="true">
              <div className="phone" style={{ width: 260 }}>
                <div className="phone__screen" style={{ background: p.bg, color: p.ink }}>
                  <div className="mock__head" style={{ background: p.head }}>
                    <small>{p.sub}</small><strong>{p.title}</strong>
                  </div>
                  <div className="mock">
                    {p.rows.map(([k, v]) => (
                      <div key={k} className="mock__row" style={{ background: p.row }}><span>{k}</span><strong>{v}</strong></div>
                    ))}
                    <div className="mock__alert" style={{ background: p.alertBg, color: p.alertInk }}>{p.alert}</div>
                    <span className="mock__btn">{p.btn}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div><h2 className="h2">{app.problem.title}</h2></div>
          <div style={{ fontSize: 17, color: 'var(--text)' }}>
            <p>{app.problem.p1}</p>
            <p style={{ marginTop: 16 }}>{app.problem.p2}</p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: 28 }}>Ce que {app.name} fait pour vous</h2>
          <div className="grid">
            {app.features.map((f, i) => (
              <div className="feat" key={f.t}><b>{i + 1}</b><h3>{f.t}</h3><p>{f.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <h2 className="h2">{app.dayTitle}</h2>
          <p className="muted" style={{ margin: '8px 0 32px', fontSize: 17 }}>{app.daySub}</p>
          <div className="steps">
            {app.day.map((d) => (
              <div key={d.t}><p>{d.w}</p><h3>{d.t}</h3><p>{d.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <h2 className="h2">Questions fréquentes</h2>
            <p className="muted" style={{ marginTop: 14 }}>Tarifs détaillés et inscription sur le site de {app.name}.</p>
            <a className="btn btn--deep btn--sm" style={{ marginTop: 16 }} href={appLink(app.domain, 'tarifs')} target="_blank" rel="noopener">Voir les tarifs sur {app.domain} ↗</a>
          </div>
          <div className="faq">
            {app.faq.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="h3" style={{ marginBottom: 20 }}>Les autres applications Gesconnect</h2>
          <div className="grid" style={{ '--min': '230px', gap: 12 }}>
            {others.map((o) => (
              <Link key={o.slug} href={`/applications/${o.slug}`} className="mini-app">
                <img src={o.icon} alt="" width="40" height="40" loading="lazy" />
                <span><strong>{o.name}</strong><small>{o.short}</small></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={jsonLd} />
    </div>
  )
}
