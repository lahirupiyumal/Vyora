import { ArrowUpRight, Leaf, Menu, ShoppingBag, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Logo from './Logo'
import './brand.css'

const links = [['Home', '/'], ['Shop', '/shop'], ['Our Story', '/our-story'], ['Ingredients', '/ingredients'], ['Contact', '/contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const { count, setCartOpen } = useCart()

  useEffect(() => {
    if (!open) return
    const closeOnEscape = event => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  const openCart = () => {
    setOpen(false)
    setCartOpen(true)
  }

  return <>
    <div className="brand-announcement">
      <Leaf size={12} aria-hidden="true" />
      <span>A little closer to nature. A little simpler every day.</span>
      <span className="brand-announcement-divider" aria-hidden="true" />
      <span className="brand-announcement-note">A product concept in development</span>
    </div>
    <header className="brand-header">
      <div className="site-container brand-header-inner">
        <Logo onClick={() => setOpen(false)} />
        <nav className="brand-desktop-nav" aria-label="Primary navigation">
          {links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `brand-nav-link${isActive ? ' is-active' : ''}`}>{label}</NavLink>)}
        </nav>
        <div className="brand-header-actions">
          <button type="button" className="brand-icon-button brand-cart-button" onClick={openCart} aria-label={`Open cart with ${count} ${count === 1 ? 'item' : 'items'}`}>
            <ShoppingBag size={20} strokeWidth={1.6} aria-hidden="true" />
            {count > 0 && <span className="brand-cart-count">{count}</span>}
          </button>
          <NavLink to="/shop" className="brand-shop-link">Explore the shop <ArrowUpRight size={15} aria-hidden="true" /></NavLink>
          <button ref={toggleRef} type="button" className="brand-icon-button brand-menu-toggle" onClick={() => setOpen(current => !current)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" className="brand-mobile-nav" aria-label="Mobile navigation">
        <div className="site-container">
          {links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `brand-mobile-link${isActive ? ' is-active' : ''}`}>{label}<ArrowUpRight size={17} aria-hidden="true" /></NavLink>)}
        </div>
      </nav>}
    </header>
  </>
}
