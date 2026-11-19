import Link from 'next/link'

// Carte d'une application : aperçu d'écran aux couleurs du produit, puis nom, accroche et offre.
export default function AppCard({ app }) {
  const c = app.card
  return (
    <article className="appcard" style={{ '--soft': c.soft, '--brand': c.brand, '--ink2': c.ink }}>
      <div className="appcard__shot" aria-hidden="true">
        <div className="appcard__screen">
          <div className="appcard__screen-head"><i />{c.screen}</div>
          {c.rows.map(([k, v]) => (
            <div className="appcard__row" key={k}><span>{k}</span><strong>{v}</strong></div>
          ))}
        </div>
      </div>
      <div className="appcard__body">
        <div className="appcard__id">
          <img src={app.icon} alt="" width="44" height="44" loading="lazy" />
          <div>
            <h3><Link href={`/applications/${app.slug}`} style={{ textDecoration: 'none' }}>{app.name}</Link></h3>
            <p>{app.sector}</p>
          </div>
        </div>
        <p className="appcard__tag">{app.tagline}</p>
        <div className="appcard__foot">
          <span className="pill pill--ok">{app.offer}</span>
          <Link className="link-arrow" href={`/applications/${app.slug}`}>Découvrir {app.name} →</Link>
        </div>
      </div>
    </article>
  )
}
