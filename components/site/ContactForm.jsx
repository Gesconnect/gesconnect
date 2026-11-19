'use client'
import { useState } from 'react'
import { SITE } from '@/lib/site'

const EMPTY = { name: '', phone: '', email: '', company: '', service: '', message: '' }

export default function ContactForm({ subjects = [] }) {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | ok | error
  const [sentName, setSentName] = useState('')

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(SITE.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _replyto: form.email || undefined,
          _subject: `Nouveau contact Gesconnect — ${form.service || form.name}`,
        }),
      })
      if (!res.ok) throw new Error('envoi')
      setSentName(form.name)
      setForm(EMPTY)
      setStatus('ok')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <p className="notice" role="status">
        Merci {sentName} ! Votre message est bien arrivé. Nous vous répondons rapidement, par WhatsApp ou par e-mail.
      </p>
    )
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="two">
        <div>
          <label htmlFor="f-name">Nom et prénom</label>
          <input id="f-name" name="name" required autoComplete="name" value={form.name} onChange={change} />
        </div>
        <div>
          <label htmlFor="f-phone">Numéro WhatsApp</label>
          <input id="f-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="+225 …" value={form.phone} onChange={change} />
        </div>
      </div>
      <div className="two">
        <div>
          <label htmlFor="f-email">E-mail (facultatif)</label>
          <input id="f-email" name="email" type="email" autoComplete="email" value={form.email} onChange={change} />
        </div>
        <div>
          <label htmlFor="f-company">Entreprise ou organisation</label>
          <input id="f-company" name="company" autoComplete="organization" value={form.company} onChange={change} />
        </div>
      </div>
      <div>
        <label htmlFor="f-service">Vous êtes intéressé par</label>
        <select id="f-service" name="service" value={form.service} onChange={change}>
          <option value="">Choisir…</option>
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="f-message">Votre message</label>
        <textarea id="f-message" name="message" required value={form.message} onChange={change} placeholder="Votre activité, votre ville, ce que vous voulez améliorer…" />
      </div>
      {status === 'error' && (
        <p className="notice notice--err" role="alert">
          L’envoi n’a pas fonctionné. Réessayez, ou écrivez-nous directement sur WhatsApp au {SITE.phoneDisplay}.
        </p>
      )}
      <button className="btn btn--navy" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
      </button>
    </form>
  )
}
