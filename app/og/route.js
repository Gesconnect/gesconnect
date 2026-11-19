import { siteImage } from './_render'

// Image d'aperçu de l'accueil et des pages générales : /og
export const dynamic = 'force-static'

export function GET() {
  return siteImage()
}
