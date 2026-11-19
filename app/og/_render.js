import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { getApp } from '@/lib/apps'

// Images d'aperçu (WhatsApp, Facebook, LinkedIn…) générées à partir du contenu de chaque page.
// Format standard : 1200 × 630. Les images sont fabriquées une fois, au moment de la mise en ligne.

export const SIZE = { width: 1200, height: 630 }
const ASSETS = join(process.cwd(), 'app', 'og', '_assets')

const file = (name) => readFile(join(ASSETS, name))
const dataUri = async (name) => `data:image/png;base64,${(await file(name)).toString('base64')}`

async function fonts() {
  const [jakarta, dm500, dm700, sora] = await Promise.all([
    file('plus-jakarta-sans-latin-800-normal.woff'),
    file('dm-sans-latin-500-normal.woff'),
    file('dm-sans-latin-700-normal.woff'),
    file('sora-latin-700-normal.woff'),
  ])
  return [
    { name: 'Jakarta', data: jakarta, weight: 800, style: 'normal' },
    { name: 'DM', data: dm500, weight: 500, style: 'normal' },
    { name: 'DM', data: dm700, weight: 700, style: 'normal' },
    { name: 'Sora', data: sora, weight: 700, style: 'normal' },
  ]
}

async function render(node) {
  return new ImageResponse(node, { ...SIZE, fonts: await fonts() })
}

const frame = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '64px 72px',
  fontFamily: 'DM',
}
const title = { fontFamily: 'Jakarta', fontWeight: 800, letterSpacing: '-0.6px', lineHeight: 1.08 }
const foot = { marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 24, fontWeight: 500 }

function Brand({ logo, color = '#FFFFFF', extra }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Sora', fontWeight: 700, fontSize: 30, color }}>
      <img src={logo} width={41} height={48} style={{ marginRight: 14 }} />
      <span>Gesconnect</span>
      {extra && <span style={{ fontFamily: 'DM', fontWeight: 500, fontSize: 24, color: '#4A5878', marginLeft: 12 }}>{extra}</span>}
    </div>
  )
}

// Accueil et pages générales : fond nuit, slogan, les icônes des applications.
export async function siteImage() {
  const logo = await dataUri('logo-g.png')
  const icons = await Promise.all(['cheptelio', 'maquis360', 'quinca360', 'amicalo', 'monarche'].map((n) => dataUri(`${n}.png`)))
  return render(
    <div style={{ ...frame, color: '#FFFFFF', backgroundColor: '#0A1628', backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(34,197,94,0.24), rgba(10,22,40,0) 55%)' }}>
      <Brand logo={logo} />
      <div style={{ ...title, display: 'flex', flexDirection: 'column', fontSize: 76, marginTop: 56 }}>
        <span>Votre activité, gérée</span>
        <div style={{ display: 'flex' }}>
          <span>depuis</span>
          <span style={{ color: '#86EFAC', marginLeft: 20 }}>votre téléphone.</span>
        </div>
      </div>
      <div style={foot}>
        <div style={{ display: 'flex' }}>
          {icons.map((src) => (
            <img key={src.slice(-24)} src={src} width={76} height={76} style={{ borderRadius: 20, marginRight: 16 }} />
          ))}
        </div>
        <span style={{ color: '#C3CFE2' }}>gesconnect.com</span>
      </div>
    </div>,
  )
}

// Page d'une application : aux couleurs de l'application.
export async function appImage(slug) {
  const app = getApp(slug)
  const t = app.theme
  const light = Boolean(t.light)
  const ink = light ? t.light.ink : '#FFFFFF'
  const [logo, icon] = await Promise.all([dataUri('logo-g.png'), dataUri(`${slug}.png`)])
  return render(
    <div style={{ ...frame, color: ink, backgroundColor: t.hero, backgroundImage: `radial-gradient(circle at 90% 10%, ${t.glow}, rgba(0,0,0,0) 55%)` }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={icon} width={104} height={104} style={{ borderRadius: 26, marginRight: 22 }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: light ? t.kicker : t.accent, fontWeight: 700, fontSize: 24, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 4 }}>{app.short}</span>
          <span style={{ ...title, fontSize: 54 }}>{app.name}</span>
        </div>
      </div>
      <div style={{ ...title, display: 'flex', fontSize: app.tagline.length > 80 ? 54 : 60, marginTop: 48, maxWidth: 1040 }}>{app.tagline}</div>
      <div style={foot}>
        <span style={{ backgroundColor: t.accent, color: t.onAccent, fontWeight: 700, borderRadius: 99, padding: '12px 24px' }}>{app.heroOffer}</span>
        <span style={{ display: 'flex', alignItems: 'center', color: light ? t.muted : '#D8D8D8' }}>
          <img src={logo} width={26} height={30} style={{ marginRight: 10 }} />
          Une application Gesconnect
        </span>
      </div>
    </div>,
  )
}

// Guide : fond clair, bande de la couleur du thème, titre du guide.
export async function guideImage(g) {
  const app = g.app ? getApp(g.app) : null
  const [logo, icon] = await Promise.all([dataUri('logo-g.png'), app ? dataUri(`${app.slug}.png`) : null])
  return render(
    <div style={{ ...frame, color: '#0F1E4A', backgroundColor: '#F3F5F9', borderTop: `14px solid ${g.color}` }}>
      <Brand logo={logo} color="#0F1E4A" extra="· Guides" />
      <span style={{ color: g.ink, fontWeight: 700, fontSize: 26, textTransform: 'uppercase', letterSpacing: '2px', marginTop: 40 }}>{g.theme}</span>
      <div style={{ ...title, display: 'flex', fontSize: g.title.length > 75 ? 56 : 62, marginTop: 18, maxWidth: 1040 }}>{g.title}</div>
      <div style={{ ...foot, color: '#4A5878' }}>
        <span>{g.readingTime}</span>
        {app ? (
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src={icon} width={44} height={44} style={{ borderRadius: 12, marginRight: 12 }} />
            Avec {app.name}
          </span>
        ) : (
          <span>gesconnect.com/guides</span>
        )}
      </div>
    </div>,
  )
}
