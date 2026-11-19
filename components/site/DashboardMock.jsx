// Illustration d'un tableau de bord de direction (données fictives, signalées comme telles).
// Dessinée en code : quelques kilo-octets, nette sur tous les écrans.

const MONTHS = ['Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.']
const SALES = [12.1, 13.4, 12.8, 15.2, 16.4, 18.4] // millions de F, fictif
const AGENCES = [['Plateau', 42], ['Cocody', 31], ['Yopougon', 27]]

function chart() {
  const W = 320, H = 120, P = 8
  const max = 20, min = 10
  const x = (i) => P + (i * (W - 2 * P)) / (SALES.length - 1)
  const y = (v) => H - P - ((v - min) / (max - min)) * (H - 2 * P)
  const line = SALES.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
  const area = `${line} L${x(SALES.length - 1).toFixed(1)},${H - P} L${x(0).toFixed(1)},${H - P} Z`
  return { W, H, P, line, area, lx: x(SALES.length - 1), ly: y(SALES[SALES.length - 1]), grid: [12, 15, 18].map(y) }
}

export default function DashboardMock() {
  const c = chart()
  return (
    <figure className="dash" aria-label="Exemple de tableau de bord de direction, avec des données fictives">
      <div className="dash__top">
        <div className="dash__dots" aria-hidden="true"><i /><i /><i /></div>
        <span>tableau-de-bord · Direction</span>
      </div>
      <div className="dash__body">
        <div className="dash__head">
          <div>
            <strong>Tableau de bord</strong>
            <small>Toutes les agences</small>
          </div>
          <span className="dash__period">Novembre</span>
        </div>

        <div className="dash__kpis">
          <div><small>Ventes</small><b>18,4 M F</b><em className="up">▲ 12 %</em></div>
          <div><small>Marge brute</small><b>31 %</b><em className="up">▲ 2 pts</em></div>
          <div><small>Impayés</small><b>2,1 M F</b><em className="down">▼ 8 %</em></div>
        </div>

        <div className="dash__chart">
          <div className="dash__chart-head"><span>Ventes mensuelles</span><span>en millions de F</span></div>
          <svg viewBox={`0 0 ${c.W} ${c.H}`} role="img" aria-label="Courbe des ventes de juin à novembre, en hausse">
            <defs>
              <linearGradient id="dashFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#22C55E" stopOpacity=".28" />
                <stop offset="1" stopColor="#22C55E" stopOpacity="0" />
              </linearGradient>
            </defs>
            {c.grid.map((gy) => <line key={gy} x1={c.P} x2={c.W - c.P} y1={gy} y2={gy} stroke="#E3E8F0" strokeWidth="1" />)}
            <path d={c.area} fill="url(#dashFill)" />
            <path d={c.line} fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            <circle cx={c.lx} cy={c.ly} r="5" fill="#fff" stroke="#16A34A" strokeWidth="2.5" />
          </svg>
          <div className="dash__months" aria-hidden="true">{MONTHS.map((m) => <span key={m}>{m}</span>)}</div>
          <span className="dash__tip">Nov. · 18,4 M</span>
        </div>

        <div className="dash__agences">
          <span className="dash__label">Ventes par agence</span>
          {AGENCES.map(([n, p]) => (
            <div key={n} className="dash__bar">
              <span>{n}</span>
              <i><b style={{ width: `${p}%` }} /></i>
              <em>{p} %</em>
            </div>
          ))}
        </div>
      </div>
      <figcaption>Exemple avec des données fictives. Le vôtre affiche vos vrais chiffres.</figcaption>
    </figure>
  )
}
