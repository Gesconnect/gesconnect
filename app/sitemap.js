import { SITE } from '@/lib/site'
import { APPS } from '@/lib/apps'
import { GUIDES } from '@/lib/guides'

export default function sitemap() {
  const now = new Date()
  const pages = ['', '/applications', '/catalogue', '/services', '/guides', '/a-propos', '/contact']
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, lastModified: now, changeFrequency: 'weekly', priority: p === '' ? 1 : 0.7 })),
    ...APPS.map((a) => ({ url: `${SITE.url}/applications/${a.slug}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 })),
    ...GUIDES.filter((g) => g.published).map((g) => ({ url: `${SITE.url}/guides/${g.slug}`, lastModified: new Date(g.date), changeFrequency: 'monthly', priority: 0.8 })),
  ]
}
