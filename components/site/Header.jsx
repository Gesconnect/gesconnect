'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV } from '@/lib/site'

export default function Header() {
  const path = usePathname() || '/'
  return (
    <header className="hdr">
      <a className="skip" href="#contenu">Aller au contenu</a>
      <div className="wrap hdr__in">
        <Link href="/" className="brand" aria-label="Gesconnect, accueil">
          <img src="/logo-g.webp" alt="" width="30" height="35" />
          <span>Gesconnect</span>
        </Link>
        <nav className="nav" aria-label="Navigation principale">
          {NAV.map((item) => {
            const on = path === item.href || path.startsWith(item.href + '/')
            return (
              <Link key={item.href} href={item.href} aria-current={on ? 'page' : undefined}>
                {item.label}
              </Link>
            )
          })}
        </nav>
        <Link href="/contact" className="btn btn--white btn--sm hdr__cta">Démo gratuite</Link>
      </div>
    </header>
  )
}
