'use client'
import { useState } from 'react'
import { waLink } from '@/lib/site'
import { track } from '@/lib/track'

// « Combien vous perdez sans le savoir ? » : le visiteur entre ses propres chiffres.
// Rien n'est enregistré ; le résultat peut être envoyé sur WhatsApp.

const fmt = (n) => `${Math.round(Math.max(0, n || 0)).toLocaleString('fr-FR').replace(/\s/g, '\u00a0')}\u00a0F`

export default function LossCalculator() {
  const [tab, setTab] = useState('maquis')
  const [raw, setRaw] = useState({ ecart: '700', soirs: '30', sujets: '500', morts: '2', prix: '2500' })
  const set = (k) => (e) => setRaw({ ...raw, [k]: e.target.value })
  // Valeurs utilisées pour le calcul : vide ou négatif = 0, virgule acceptée.
  const v = Object.fromEntries(Object.entries(raw).map(([k, x]) => [k, Math.max(0, Number(String(x).replace(',', '.')) || 0)]))

  let fields, label, result, line, compare, msg
  if (tab === 'maquis') {
    fields = [
      ['ecart', 'Écart de caisse ou de stock par soir (F)'],
      ['soirs', 'Soirs ouverts par mois'],
    ]
    const mois = v.ecart * v.soirs
    label = 'Ce qui part chaque mois'
    result = fmt(mois)
    line = `Soit ${fmt(mois * 12)} sur un an.`
    compare = 'Maquis360 commence à 5 000 F par mois, après 30 jours d’essai gratuit.'
    msg = `Bonjour Gesconnect, j’ai fait le calcul sur votre site : environ ${fmt(mois)} d’écarts par mois dans mon maquis. J’aimerais voir Maquis360.`
  } else {
    fields = [
      ['sujets', 'Poulets par bande'],
      ['morts', 'Mortalité que vous pourriez éviter (%)'],
      ['prix', 'Coût de revient d’un poulet (F)'],
    ]
    const bande = v.sujets * (v.morts / 100) * v.prix
    label = 'Ce que coûte cette mortalité, par bande'
    result = fmt(bande)
    line = `Pour ${Math.round((v.sujets * v.morts) / 100)} poulets perdus.`
    compare = 'Cheptelio : 30 jours d’accès complet offerts, puis le premier lot de chaque ferme gratuit.'
    msg = `Bonjour Gesconnect, j’ai fait le calcul sur votre site : environ ${fmt(bande)} de pertes par bande dans mon élevage. J’aimerais voir Cheptelio.`
  }

  return (
    <div className="calc">
      <div className="calc__form">
        <p className="eyebrow" style={{ color: 'var(--green-ink)' }}>Calculateur</p>
        <h2 className="h2" style={{ marginTop: 8, fontSize: 'clamp(26px, 3.4vw, 40px)' }}>Combien vous perdez sans le savoir ?</h2>
        <p className="muted" style={{ marginTop: 12 }}>Entrez vos propres chiffres. Rien n’est enregistré.</p>
        <div className="calc__tabs" role="group" aria-label="Métier du calcul">
          <button type="button" aria-pressed={tab === 'maquis'} onClick={() => setTab('maquis')}>Maquis ou bar</button>
          <button type="button" aria-pressed={tab === 'elevage'} onClick={() => setTab('elevage')}>Élevage de poulets</button>
        </div>
        <div className="calc__fields">
          {fields.map(([k, l]) => (
            <label key={k}>
              {l}
              <input type="text" inputMode="decimal" value={raw[k]} onChange={set(k)} />
            </label>
          ))}
        </div>
      </div>
      <div className="calc__out" aria-live="polite">
        <p className="calc__label">{label}</p>
        <p className="calc__result">{result}</p>
        <p className="calc__label">{line}</p>
        <p className="calc__compare">{compare}</p>
        <a className="btn btn--green" href={waLink(msg)} target="_blank" rel="noopener" onClick={() => track('calculateur_envoye', { metier: tab })}>
          Recevoir ce calcul sur WhatsApp
        </a>
      </div>
    </div>
  )
}
