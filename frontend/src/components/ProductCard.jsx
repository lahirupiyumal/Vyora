import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return <article className="product-card catalog-product-card">
    <div className="catalog-product-image">
      <img src={product.image} alt={`${product.name} product concept`} loading="lazy" decoding="async" />
      <span className="catalog-product-badge">Product concept</span>
    </div>
    <div className="catalog-product-body">
      <p className="catalog-product-weight">{product.weight}</p>
      <h3>{product.name}</h3>
      <p className="catalog-product-description">{product.description}</p>
      <div className="catalog-product-purchase">
        <div className="catalog-product-price">
          <span>Illustrative price</span>
          <strong>LKR {product.price.toLocaleString()}</strong>
        </div>
        <p className="catalog-product-availability">{product.availability}</p>
        <div className="catalog-product-actions">
          <Link to={`/shop/${encodeURIComponent(product.id)}`} className="catalog-product-details" aria-label={`View details for ${product.name}`}>
            Details <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <button type="button" className="catalog-product-add" onClick={() => addItem(product)} aria-label={`Add ${product.name} to cart`}>
            <ShoppingBag size={15} aria-hidden="true" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  </article>
}
