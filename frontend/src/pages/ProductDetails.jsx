import { ArrowLeft, Info, Minus, PackageSearch, Plus, ShoppingBag, Sprout, CookingPot, Package } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import './ProductDetails.css'

export default function ProductDetails() {
  const { productId } = useParams()
  const product = products.find(item => item.id === productId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [productId])

  return <section className="product-details-page">
    <div className="site-container">
      <div className="product-detail-topbar">
        <nav className="product-detail-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/shop">Shop</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{product?.name || 'Product not found'}</li>
          </ol>
        </nav>
        <Link className="product-detail-back" to="/shop"><ArrowLeft size={15} aria-hidden="true" /> Back to shop</Link>
      </div>
      {product ? <ProductContent key={product.id} product={product} /> : <div className="product-detail-not-found">
        <span className="product-detail-empty-icon"><PackageSearch size={34} strokeWidth={1.4} aria-hidden="true" /></span>
        <span className="product-detail-kicker">PRODUCT NOT FOUND</span>
        <h1>We couldn’t find this product.</h1>
        <p>The product link may have changed. Explore the shop to find the VYORA products currently listed.</p>
        <Link className="product-detail-add" to="/shop"><ArrowLeft size={16} aria-hidden="true" /> Back to shop</Link>
      </div>}
    </div>
  </section>
}

function ProductContent({ product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const information = [
    { title: 'Ingredients', text: product.ingredients, icon: Sprout },
    { title: 'Preparation', text: product.preparation, icon: CookingPot },
    { title: 'Storage', text: product.storage, icon: Package },
  ].filter(item => item.text)

  return <>
    <div className="product-detail-grid">
      <figure className="product-detail-photo">
        <div className="product-detail-photo-frame">
          <img src={product.image} alt={`${product.name} product concept`} />
          <span>PRODUCT CONCEPT</span>
        </div>
        <figcaption>Illustrative product and packaging visual.</figcaption>
      </figure>
      <div className="product-detail-copy">
        <span className="product-detail-kicker"><i aria-hidden="true" /> PRODUCT DETAILS</span>
        <h1>{product.name}</h1>
        {product.description && <p className="product-detail-description">{product.description}</p>}
        {(product.weight || product.availability) && <dl className="product-detail-meta">
          {product.weight && <div><dt>Package size</dt><dd>{product.weight}</dd></div>}
          {product.availability && <div><dt>Availability</dt><dd>{product.availability}</dd></div>}
        </dl>}
        <div className="product-detail-price">
          <span>Illustrative prototype price</span>
          <strong>LKR {product.price.toLocaleString()}</strong>
        </div>
        <div className="product-detail-purchase">
          <div className="product-detail-quantity" role="group" aria-label="Product quantity">
            <button type="button" disabled={quantity === 1} onClick={() => setQuantity(current => Math.max(1, current - 1))} aria-label="Decrease quantity"><Minus size={16} aria-hidden="true" /></button>
            <output aria-live="polite" aria-label="Selected quantity">{quantity}</output>
            <button type="button" onClick={() => setQuantity(current => current + 1)} aria-label="Increase quantity"><Plus size={16} aria-hidden="true" /></button>
          </div>
          <button type="button" className="product-detail-add" onClick={() => addItem(product, quantity)}><ShoppingBag size={17} aria-hidden="true" /> Add to cart</button>
        </div>
        <p className="product-detail-prototype"><Info size={15} aria-hidden="true" /><span>Prototype experience. No real orders or payments are processed.</span></p>
      </div>
    </div>
    {information.length > 0 && <div className="product-detail-information">
      {information.map(({ title, text, icon: Icon }) => <article className="product-detail-info" key={title}>
        <span className="product-detail-info-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>)}
    </div>}
  </>
}
