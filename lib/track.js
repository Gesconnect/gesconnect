// Envoie un événement à Google Analytics (si GA est chargé). Sans effet sinon.
export function track(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}
