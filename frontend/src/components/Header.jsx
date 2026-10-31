import { Menu, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Logo from './Logo'

const links = [['Home','/'],['Shop','/shop'],['Our Story','/our-story'],['Ingredients','/ingredients'],['Contact','/contact']]
export default function Header() {
  const [open, setOpen] = useState(false)
  const { count, setCartOpen } = useCart()
  return <><div className="bg-[#183D2E] px-4 py-2 text-center text-xs font-medium text-[#E4EDE5]">Prototype website · Product formulation, price and availability are illustrative</div><header className="sticky top-0 z-40 border-b border-[#245C45]/10 bg-[#FAF8F0]/95 backdrop-blur"><div className="site-container flex h-20 items-center justify-between"><Logo/><nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{links.map(([label,to])=><NavLink key={to} to={to} className={({isActive})=>`nav-link ${isActive?'active':''}`}>{label}</NavLink>)}</nav><div className="flex items-center gap-2"><button className="icon-btn relative" onClick={()=>setCartOpen(true)} aria-label={`Open cart with ${count} items`}><ShoppingBag size={21}/>{count>0&&<span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#E99A45] text-[10px] font-bold text-white">{count}</span>}</button><NavLink to="/shop" className="btn-primary hidden min-h-11 px-5 lg:inline-flex">Shop Now</NavLink><button className="icon-btn lg:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></div>{open&&<nav className="border-t border-[#245C45]/10 bg-white p-4 lg:hidden">{links.map(([label,to])=><NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive})=>`block rounded-xl px-4 py-3 font-semibold ${isActive?'bg-[#245C45] text-white':'text-[#252A25]'}`}>{label}</NavLink>)}</nav>}</header></>
}
