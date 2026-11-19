import Link from 'next/link'
import { APPS } from '@/lib/apps'
import { SITE, waLink } from '@/lib/site'

// Bandeau « Parlons de votre activité » + pied de page, présents sur toutes les pages.
export default function Footer({ waMessage }) {
  return (
    <footer className="cta">
      <div className="wrap">
        <div className="cta__in">
          <div>
            <h2 className="h2" style={{ fontSize: 'clamp(32px, 4.8vw, 60px)' }}>Parlons de votre activité.</h2>
            <p>Une démonstration sur votre téléphone, en 20 minutes, sur WhatsApp ou dans vos locaux à Abidjan.</p>
          </div>
          <div>
            <a className="btn btn--green" href={waLink(waMessage)} target="_blank" rel="noopener">WhatsApp · {SITE.phoneDisplay}</a>
            <a className="btn btn--ghost" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>

        <div className="ftr">
          <div>
            <Link href="/" className="brand" aria-label="Gesconnect, accueil">
              <img src="/logo-g.webp" alt="" width="26" height="30" loading="lazy" />
              <span style={{ fontSize: 18 }}>Gesconnect</span>
            </Link>
            <p className="ftr__slogan">Connectez votre entreprise, automatisez votre succès.</p>
            <p style={{ marginTop: 10 }}>{SITE.legalName} · Studio tech ivoirien · {SITE.city}, {SITE.country}</p>
          </div>
          <div>
            <strong>Nos applications</strong>
            <ul>
              {APPS.map((a) => (
                <li key={a.slug}><Link href={`/applications/${a.slug}`}>{a.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Gesconnect</strong>
            <ul>
              <li><Link href="/catalogue">Catalogue</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/guides">Guides</Link></li>
              <li><Link href="/a-propos">À propos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <strong>Nous suivre</strong>
            <ul>
              <li><a href={SITE.facebook} target="_blank" rel="noopener">Facebook</a></li>
              <li><a href={waLink()} target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
          </div>
          <p className="ftr__legal">© {new Date().getFullYear()} {SITE.legalName}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
