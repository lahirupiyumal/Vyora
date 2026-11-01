import { ArrowUpRight, Menu, ShoppingBag, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Logo from './Logo'
import './brand.css'

const links = [['Home', '/'], ['Shop', '/shop'], ['Our Story', '/our-story'], ['Ingredients', '/ingredients'], ['Contact', '/contact'], ['Feedback', '/feedback']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const headerRef = useRef(null)
  const { count, setCartOpen } = useCart()

  useEffect(() => {
    if (!open) return
    const closeOnEscape = event => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const closeOutside = event => {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }
    const desktopQuery = window.matchMedia('(min-width: 921px)')
    const closeOnDesktop = event => {
      if (event.matches) setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktopQuery.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  const openCart = () => {
    setOpen(false)
    setCartOpen(true)
  }

  return <header ref={headerRef} className="brand-header">
      <div className="site-container brand-header-inner">
        <div className="brand-header-identity">
          <Logo onClick={() => setOpen(false)} />
          <div className="brand-header-wordmark" aria-hidden="true">VYORA<span>NATURAL SOUP CUBES</span></div>
        </div>
        <nav className="brand-desktop-nav" aria-label="Primary navigation">
          {links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `brand-nav-link${isActive ? ' is-active' : ''}`}>{label}</NavLink>)}
        </nav>
        <div className="brand-header-actions">
          <button type="button" className="brand-icon-button brand-cart-button" onClick={openCart} aria-label={`Open cart with ${count} ${count === 1 ? 'item' : 'items'}`}>
            <ShoppingBag size={20} strokeWidth={1.6} aria-hidden="true" />
            {count > 0 && <span className="brand-cart-count">{count > 99 ? '99+' : count}</span>}
          </button>
          <NavLink to="/shop" className="brand-shop-link">Shop now <ArrowUpRight size={15} aria-hidden="true" /></NavLink>
          <button ref={toggleRef} type="button" className="brand-icon-button brand-menu-toggle" onClick={() => setOpen(current => !current)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" className="brand-mobile-nav" aria-label="Mobile navigation">
        <div className="site-container">
          <p className="brand-mobile-label">DISCOVER VYORA</p>
          <div className="brand-mobile-links">{links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `brand-mobile-link${isActive ? ' is-active' : ''}`}>{label}<ArrowUpRight size={15} aria-hidden="true" /></NavLink>)}</div>
          <div className="brand-mobile-footer"><span>Find your everyday size.</span><NavLink to="/shop" onClick={() => setOpen(false)} className="brand-mobile-shop">Shop the range <ArrowUpRight size={15} aria-hidden="true"/></NavLink></div>
        </div>
      </nav>}
    </header>
}
