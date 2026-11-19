import { APPS } from '@/lib/apps'
import { appImage } from '../../_render'

// Image d'aperçu de chaque application : /og/applications/maquis360, etc.
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return APPS.map((a) => ({ slug: a.slug }))
}

export function GET(_request, { params }) {
  return appImage(params.slug)
}
