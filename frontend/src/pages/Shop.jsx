import { CheckCircle2, Search } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import './Shop.css'

export default function Shop() {
  const { items, subtotal, clearCart } = useCart()
  const [params, setParams] = useSearchParams()
  const [confirmed, setConfirmed] = useState(false)
  const [query, setQuery] = useState('')
  const checkout = params.get('checkout') === 'true'
  const delivery = items.length ? 350 : 0
  const search = query.trim().toLowerCase()
  const visibleProducts = products.filter(product => `${product.name} ${product.shortName || ''} ${product.description}`.toLowerCase().includes(search))

  const returnToShop = () => {
    setConfirmed(false)
    setParams(current => {
      const next = new URLSearchParams(current)
      next.delete('checkout')
      return next
    })
  }
  const submit = event => {
    event.preventDefault()
    setConfirmed(true)
    clearCart()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <>
    <section className="section-space shop-section">
      <h1 className="sr-only">Shop</h1>
      <div className="site-container">
        {confirmed ? <div className="mx-auto max-w-2xl rounded-[2rem] bg-white p-10 text-center shadow-xl">
          <span className="mx-auto grid size-20 place-items-center rounded-full bg-[#A8C3A0]/25 text-[#245C45]"><CheckCircle2 size={40} aria-hidden="true"/></span>
          <h2 className="mt-6 text-3xl font-bold">Demo order confirmed</h2>
          <p className="mt-3 text-[#6B756C]">Thank you for testing the VYORA prototype. No order was transmitted and no payment was processed.</p>
          <button type="button" onClick={returnToShop} className="btn-primary mt-7">Return to products</button>
        </div> : checkout ? <Checkout items={items} subtotal={subtotal} delivery={delivery} onSubmit={submit} onBack={returnToShop}/> : <>
          <div className="shop-toolbar">
            <label className="shop-search"><Search size={18} aria-hidden="true"/><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search products" aria-label="Search products"/></label>
            <span className="shop-product-count" role="status">Showing {visibleProducts.length}{search && ` of ${products.length}`} prototype {products.length === 1 ? 'product' : 'products'}</span>
          </div>
          {visibleProducts.length ?
            <div className="shop-products-grid" aria-label="Products">
              {visibleProducts.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
          : <div className="shop-empty" role="status">
            <Search size={28} aria-hidden="true"/>
            <h2>No products found</h2>
            <p>Try another product name or clear your search.</p>
            {search && <button type="button" className="btn-secondary" onClick={() => setQuery('')}>Clear search</button>}
          </div>}
        </>}
      </div>
    </section>
  </>
}

function Checkout({ items, subtotal, delivery, onSubmit, onBack }) {
  if (!items.length) return <div className="mx-auto max-w-xl rounded-[2rem] bg-white p-10 text-center"><h2 className="text-2xl font-bold">Your basket is empty</h2><p className="mt-2 text-[#6B756C]">Add a prototype product before opening checkout.</p><button type="button" onClick={onBack} className="btn-primary mt-6">Back to shop</button></div>
  return <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
    <form onSubmit={onSubmit} className="form-card">
      <span className="eyebrow">DEMO CHECKOUT</span><h2 className="mt-4 text-3xl font-bold">Delivery details</h2>
      <p className="mt-2 text-sm text-[#9D4E3F]">Prototype only—no payment or real order will be processed.</p>
      <div className="form-grid mt-7"><Field label="Customer name" name="name"/><Field label="Email address" name="email" type="email"/><Field label="Telephone number" name="phone"/><label className="sm:col-span-2">Delivery address<textarea required rows="4"/></label><label className="sm:col-span-2">Payment method<select required defaultValue=""><option value="" disabled>Select demo option</option><option>Cash on delivery — demo</option><option>Card payment — demo only</option></select></label></div>
      <div className="mt-6 flex gap-3"><button type="button" onClick={onBack} className="btn-secondary">Back</button><button type="submit" className="btn-accent flex-1">Place demo order</button></div>
    </form>
    <aside className="h-fit rounded-[2rem] bg-[#183D2E] p-7 text-white"><h2 className="text-2xl font-bold">Order summary</h2>{items.map(item => <div className="mt-5 flex gap-3 border-b border-white/10 pb-5" key={item.id}><img src={item.image} className="size-20 rounded-xl object-cover" alt={item.name}/><div><strong className="text-sm">{item.name}</strong><p className="mt-1 text-xs text-white/60">Qty {item.quantity} · LKR {(item.price * item.quantity).toLocaleString()}</p></div></div>)}<div className="mt-5 space-y-3 text-sm"><p className="flex justify-between"><span>Subtotal</span><strong>LKR {subtotal.toLocaleString()}</strong></p><p className="flex justify-between"><span>Demo delivery fee</span><strong>LKR {delivery.toLocaleString()}</strong></p><p className="flex justify-between border-t border-white/10 pt-4 text-lg"><span>Total</span><strong>LKR {(subtotal + delivery).toLocaleString()}</strong></p></div></aside>
  </div>
}

function Field({ label, name, type = 'text' }) {
  return <label>{label}<input name={name} required type={type}/></label>
}
