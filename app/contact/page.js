import Link from 'next/link'
import ContactForm from '@/components/site/ContactForm'
import { SITE, waLink, og } from '@/lib/site'
import { APPS } from '@/lib/apps'

export const metadata = {
  title: 'Contact et démonstration gratuite',
  description:
    'Demandez une démonstration gratuite de Cheptelio, Maquis360, Quinca360, Amicalo ou MonArche, ou parlez-nous de votre projet. Réponse rapide sur WhatsApp.',
  alternates: { canonical: '/contact' },
  openGraph: og({ title: 'Contact et démonstration gratuite', description: 'Demandez une démonstration gratuite de Cheptelio, Maquis360, Quinca360, Amicalo ou MonArche, ou parlez-nous de votre projet. Réponse rapide sur WhatsApp.', path: '/contact' }),
}

const SUBJECTS = [
  ...APPS.map((a) => `${a.name} (${a.short})`),
  'Application sur mesure',
  'Analyse de données',
  'Conseil et audit digital',
  'Formation',
  'Programme Client Fondateur',
  'Autre',
]

const PERKS = [
  ['Jusqu’à 40 % de réduction', 'Sur votre abonnement, à vie.'],
  ['Vos besoins comptent', 'Vos retours façonnent directement le produit.'],
  ['En avant-première', 'Les nouvelles fonctions avant tout le monde.'],
  ['Accès direct aux fondateurs', 'Pour tout besoin de support.'],
]

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">›</span><span>Contact</span></nav>
          <h1 className="h1">Parlons de votre activité</h1>
          <p className="lead">Une démonstration sur votre téléphone, en 20 minutes, sur WhatsApp ou dans vos locaux à Abidjan. Le plus rapide : WhatsApp.</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 36 }}>
        <div className="wrap split">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a className="contact-line" href={waLink()} target="_blank" rel="noopener">
              <b aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 20l1.3-5.2A8.4 8.4 0 1 1 21 11.5z" /></svg></b><span><small>WhatsApp</small><strong>{SITE.phoneDisplay}</strong></span>
            </a>
            <a className="contact-line" href={`mailto:${SITE.email}`}>
              <b aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg></b><span><small>E-mail</small><strong>{SITE.email}</strong></span>
            </a>
            <div className="contact-line">
              <b aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></b><span><small>Adresse</small><strong>{SITE.city}, {SITE.country}</strong></span>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 'var(--radius)', padding: 'clamp(20px, 3vw, 32px)' }}>
            <h2 className="h3" style={{ marginBottom: 18 }}>Écrivez-nous</h2>
            <ContactForm subjects={SUBJECTS} />
          </div>
        </div>
      </section>

      <section className="sec sec--white" id="client-fondateur">
        <div className="wrap split">
          <div>
            <p className="eyebrow" style={{ color: 'var(--green-ink)' }}>Places limitées à 10 entreprises</p>
            <h2 className="h2" style={{ marginTop: 10 }}>Devenez Client Fondateur</h2>
            <p className="muted" style={{ marginTop: 14, fontSize: 17 }}>
              En contrepartie de votre confiance de la première heure, vous bénéficiez de conditions exceptionnelles, et vos retours
              du terrain façonnent nos applications.
            </p>
            <a className="btn btn--green" style={{ marginTop: 20 }} href={waLink('Bonjour Gesconnect, je souhaite devenir Client Fondateur.')} target="_blank" rel="noopener">
              Je veux devenir Client Fondateur
            </a>
          </div>
          <div className="grid" style={{ '--min': '240px', gap: 14 }}>
            {PERKS.map(([t, d]) => (
              <div key={t} className="tile" style={{ background: 'var(--bg)' }}><strong>{t}</strong><span>{d}</span></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
