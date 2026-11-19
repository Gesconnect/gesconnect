// Informations générales de Gesconnect, utilisées sur tout le site.

export const SITE = {
  url: 'https://gesconnect.com',
  name: 'Gesconnect',
  legalName: 'Gesconnect Consulting SARL',
  city: 'Abidjan',
  country: 'Côte d’Ivoire',
  email: 'contact@gesconnect.com',
  phoneDisplay: '+225 07 13 66 62 59',
  phoneIntl: '+2250713666259',
  whatsapp: '2250713666259',
  facebook: 'https://www.facebook.com/profile.php?id=61579181621462',
  gaId: 'G-FK8E91SHWW',
  formspree: 'https://formspree.io/f/mlgvvwde',
}

// Lien WhatsApp avec un message déjà rempli.
export function waLink(message = 'Bonjour Gesconnect, je souhaite en savoir plus.') {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}

// Lien vers le site d’une application, avec un marqueur pour savoir que le visiteur vient de gesconnect.com.
export function appLink(domain, campaign = 'site') {
  return `https://${domain}/?utm_source=gesconnect.com&utm_medium=referral&utm_campaign=${campaign}`
}

export const NAV = [
  { href: '/applications', label: 'Applications' },
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/services', label: 'Services' },
  { href: '/guides', label: 'Guides' },
  { href: '/a-propos', label: 'À propos' },
]
