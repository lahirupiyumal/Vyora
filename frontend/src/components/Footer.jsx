import { ArrowRight, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  const [sent, setSent] = useState(false)
  const submit = event => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return <footer className="brand-footer">
    <div className="site-container">
      <div className="brand-footer-grid">
        <div className="brand-footer-about">
          <Logo light />
          <p>A thoughtful vegetable soup concept.<br />Rooted in nature. Inspired by everyday life.</p>
          <span className="brand-footer-location"><MapPin size={14} aria-hidden="true" /> Inspired by Sri Lanka</span>
        </div>
        <FooterLinks title="Discover" links={[["Home", "/"], ["The product", "/shop"], ["Our story", "/our-story"], ["Ingredients", "/ingredients"]]} />
        <FooterLinks title="A little more" links={[["Get in touch", "/contact"], ["Privacy policy", "/privacy"], ["Terms & conditions", "/terms"]]} />
        <div className="brand-footer-newsletter">
          <span className="brand-footer-label">THE VYORA LETTER</span>
          <h2>Good things take root.</h2>
          <p>A glimpse of future product updates.<br />Try our prototype signup below.</p>
          <form onSubmit={submit} className="brand-newsletter-form">
            <label htmlFor="footer-email" className="brand-sr-only">Email address</label>
            <input id="footer-email" type="email" required autoComplete="email" placeholder="Your email address" onChange={() => sent && setSent(false)} />
            <button type="submit" aria-label="Try the demo newsletter signup"><ArrowRight size={20} aria-hidden="true" /></button>
          </form>
          <p className="brand-newsletter-status" role="status">{sent ? 'Demo complete — no email was stored or submitted.' : 'Demo only. No subscription or email is sent.'}</p>
        </div>
      </div>
      <div className="brand-footer-bottom">
        <span>© 2026 VYORA. A university entrepreneurship project.</span>
        <span>Prototype experience · No real orders or payments</span>
      </div>
    </div>
  </footer>
}

function FooterLinks({ title, links }) {
  return <div className="brand-footer-link-group">
    <h2 className="brand-footer-label">{title}</h2>
    <div className="brand-footer-links">{links.map(([label, to]) => <Link to={to} key={to}>{label}</Link>)}</div>
  </div>
}
