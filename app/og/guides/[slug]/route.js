import { GUIDES } from '@/lib/guides'
import { guideImage } from '../../_render'

// Image d'aperçu de chaque guide publié : /og/guides/argent-maquis, etc.
// Un nouveau guide marqué « published: true » dans lib/guides.js a automatiquement la sienne.
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return GUIDES.filter((g) => g.published).map((g) => ({ slug: g.slug }))
}

export function GET(_request, { params }) {
  return guideImage(GUIDES.find((g) => g.slug === params.slug))
}
