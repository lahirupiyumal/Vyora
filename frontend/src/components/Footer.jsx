import { Camera, Leaf, Mail, MapPin, Phone, Users } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  const [sent, setSent] = useState(false)
  const submit = event => { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return <footer className="bg-[#183D2E] text-white"><div className="site-container py-16">
    <div className="mb-14 grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-7 md:grid-cols-2 md:p-10"><div><span className="eyebrow text-[#A8C3A0]"><Leaf size={15}/> THE VYORA LETTER</span><h2 className="mt-3 text-2xl font-bold md:text-3xl">Follow our product journey.</h2><p className="mt-2 text-sm text-white/60">A demo signup for future product and prototype updates.</p></div><form onSubmit={submit} className="flex flex-col gap-3 self-center sm:flex-row"><label className="sr-only" htmlFor="footer-email">Email address</label><input id="footer-email" required type="email" placeholder="Enter your email address" className="input-dark"/><button className="btn-accent" type="submit">{sent?'Demo saved':'Join updates'}</button></form></div>
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div><Logo light/><p className="mt-6 max-w-xs text-sm leading-7 text-white/60">Natural Goodness, Made Easy. A proposed Sri Lankan vegetable soup mix concept built around convenience and responsible sourcing.</p><div className="mt-5 flex gap-3"><a className="social" href="https://instagram.com" aria-label="Instagram"><Camera size={18}/></a><a className="social" href="https://facebook.com" aria-label="Facebook"><Users size={18}/></a></div></div><FooterLinks title="Explore" links={[['Home','/'],['Shop','/shop'],['Our Story','/our-story'],['Ingredients','/ingredients']]}/><FooterLinks title="Information" links={[['Contact','/contact'],['Privacy Policy','/privacy'],['Terms & Conditions','/terms']]}/><div><h3 className="footer-title">Get in touch</h3><div className="space-y-4 text-sm text-white/60"><p className="flex gap-3"><Mail size={18}/> hello@vyora.example</p><p className="flex gap-3"><Phone size={18}/> +94 XX XXX XXXX</p><p className="flex gap-3"><MapPin size={18}/> Sri Lanka · Location to be confirmed</p></div></div></div>
    <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row"><span>© 2026 VYORA prototype. University entrepreneurship project.</span><span>No real orders or payments are processed.</span></div>
  </div></footer>
}
function FooterLinks({title,links}){return <div><h3 className="footer-title">{title}</h3><div className="grid gap-3">{links.map(([label,to])=><Link className="text-sm text-white/60 transition hover:text-white" to={to} key={to}>{label}</Link>)}</div></div>}
