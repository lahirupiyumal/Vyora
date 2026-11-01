import { ArrowRight, Check, CookingPot, Heart, Leaf, Minus, Plus, ShoppingBag, Soup, Sprout } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { faqs } from '../data/faqs'
import { primaryProduct, products } from '../data/products'
import harvestImage from '../assets/vegetable-harvest.jpg'
import floatingSoupImage from '../assets/vyora-floating-soup.png'
import './Home.css'

const principles = [
  { icon: Sprout, title: 'Vegetable-led', copy: 'A concept shaped around familiar ingredients.' },
  { icon: Soup, title: 'Made for real life', copy: 'One simple cube for busy everyday moments.' },
  { icon: Heart, title: 'Rooted in Sri Lanka', copy: 'Local inspiration with everyday possibilities.' },
]

const preparation = [
  { icon: Soup, title: 'Start with one cube', copy: 'A neatly portioned beginning designed to make preparation feel effortless.' },
  { icon: CookingPot, title: 'Stir into your pot', copy: 'Add to simmering water and follow the final preparation guide.' },
  { icon: Heart, title: 'Serve something warm', copy: 'Pour, pause and enjoy a comforting bowl made for everyday life.' },
]

export default function Home() {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedProductId, setSelectedProductId] = useState(primaryProduct.id)
  const selectedProduct = products.find(product => product.id === selectedProductId) || primaryProduct

  const selectProduct = productId => {
    setSelectedProductId(productId)
    setQuantity(1)
  }

  return <div className="home-page">
    <section className="home-hero" aria-labelledby="home-title">
      <div className="site-container home-hero-shell">
        <div className="home-hero-content">
          <span className="home-hero-eyebrow"><span aria-hidden="true"/> WELCOME TO VYORA</span>
          <h1 id="home-title">A little cube.<br/><em>A lot of comfort.</em></h1>
          <p className="home-hero-description">Familiar vegetables. Fragrant herbs. A comforting soup cube concept inspired by Sri Lankan kitchens and made for the way you live.</p>
          <div className="home-hero-actions">
            <Link className="home-hero-shop" to="/shop">Explore our cubes <ArrowRight size={16} aria-hidden="true"/></Link>
            <Link className="home-hero-secondary" to="/ingredients">Our ingredients</Link>
          </div>
        </div>
        <figure className="home-hero-food">
          <img src={floatingSoupImage} alt="Vegetable soup cubes, fresh carrots, pumpkin, tomato and herbs floating above a warm bowl of soup" width="995" height="1200" fetchPriority="high" decoding="async"/>
          <figcaption>THE VYORA SOUP CUBE CONCEPT</figcaption>
        </figure>
      </div>
    </section>
    <section className="home-principles" aria-label="The VYORA approach">
      <div className="site-container home-principles-grid">{principles.map(({ icon: Icon, title, copy }) => <div className="home-principle" key={title}><Icon size={28} strokeWidth={1.35} aria-hidden="true"/><div><h2>{title}</h2><p>{copy}</p></div></div>)}</div>
    </section>
    <section className="home-ingredients home-section" id="the-vyora-way" aria-labelledby="ingredients-title">
      <div className="site-container home-ingredients-grid">
        <div className="home-harvest">
          <img src={harvestImage} alt="An abundant selection of fresh, colourful vegetables at a produce market" width="1200" height="1000" loading="lazy"/>
          <div className="home-harvest-label"><Sprout size={23} strokeWidth={1.5} aria-hidden="true"/><span>Good things begin<br/><strong>with simple ingredients.</strong></span></div>
          <span className="home-photo-index">01 — THE VYORA WAY</span>
        </div>
        <div className="home-ingredient-copy">
          <span className="home-kicker">THOUGHTFUL BY NATURE</span>
          <h2 id="ingredients-title">The simple things.<br/><em>They mean everything.</em></h2>
          <p>Familiar vegetables. Fragrant herbs. The comfort of something warm. We believe the best everyday ideas begin with the things we already love.</p>
          <p>That is where VYORA starts: exploring a convenient soup mix with selected vegetable ingredients and a considered approach to sourcing.</p>
          <div className="home-ingredient-list"><span>Carrot</span><span>Pumpkin</span><span>Tomato</span><span>Herbs & spices</span></div>
          <small className="home-ingredient-disclosure">Ingredient candidates. Our final recipe is still in development.</small>
          <Link className="home-text-link home-underlined-link" to="/ingredients">Get to know our ingredients <ArrowRight size={17}/></Link>
        </div>
      </div>
    </section>
    <section className="home-original" id="the-original" aria-labelledby="original-title">
      <div className="site-container home-original-grid">
        <div className="home-original-copy">
          <span className="home-kicker home-kicker-light"><span className="home-kicker-line"/> FIND YOUR EVERYDAY SIZE</span>
          <h2 id="original-title">Three sizes.<br/><em>One comforting idea.</em></h2>
          <p>From a first taste to a family pantry pack, choose the VYORA size that fits the way you live.</p>
          <ul className="home-product-features"><li><Check size={16}/> Original, Large and Mini concepts</li><li><Check size={16}/> Designed to simplify everyday preparation</li><li><Check size={16}/> Inspired by Sri Lankan ingredients and routines</li></ul>
          <div className="home-variant-options" role="group" aria-label="Choose a VYORA pack size">
            {products.map(product => <button key={product.id} type="button" className={`home-variant-option${selectedProduct.id === product.id ? ' is-active' : ''}`} onClick={() => selectProduct(product.id)} aria-pressed={selectedProduct.id === product.id}>
              <strong>{product.variant}</strong><span>{product.weight.replace(' prototype pack', '')}</span>
            </button>)}
          </div>
          <div className="home-buy-panel">
            <div className="home-product-heading"><h3>{selectedProduct.shortName}</h3><span>{selectedProduct.weight}</span></div>
            <div className="home-purchase-row"><div className="home-product-price"><strong><span>LKR</span> {selectedProduct.price.toLocaleString()}</strong><small>Illustrative prototype price</small></div><div className="home-quantity" role="group" aria-label="Product quantity"><button type="button" aria-label="Decrease quantity" disabled={quantity === 1} onClick={() => setQuantity(value => Math.max(1, value - 1))}><Minus size={15}/></button><output aria-label="Quantity" aria-live="polite">{quantity}</output><button type="button" aria-label="Increase quantity" onClick={() => setQuantity(value => value + 1)}><Plus size={15}/></button></div></div>
            <button className="home-button home-button-cream" type="button" onClick={() => addItem(selectedProduct, quantity)}><ShoppingBag size={17}/> Add to demo basket <ArrowRight size={17}/></button>
            <p className="home-prototype-note">A product in development. No real orders or payments.</p>
          </div>
          <Link className="home-text-link home-light-link" to={`/shop/${encodeURIComponent(selectedProduct.id)}`}>Explore {selectedProduct.variant.toLowerCase()} pack details <ArrowRight size={16}/></Link>
        </div>
        <div className="home-original-visual">
          <div className="home-original-image"><img src={selectedProduct.image} alt="VYORA Natural Vegetable Soup Cube promotional banner" width="1942" height="809" loading="lazy"/><span className="home-original-tag"><Leaf size={14}/> THE VYORA {selectedProduct.variant.toUpperCase()}</span></div>
          <div className="home-original-caption"><span>CHOOSE YOUR EVERYDAY SIZE.</span><span>VYORA / {selectedProduct.variant.toUpperCase()}</span></div>
        </div>
      </div>
    </section>
    <section className="home-ritual home-section" aria-labelledby="ritual-title">
      <div className="site-container">
        <div className="home-section-heading"><span className="home-kicker">A SIMPLER EVERYDAY</span><h2 id="ritual-title">Less preparation.<br/><em>More little moments.</em></h2><p>The preparation experience we are working towards.</p></div>
        <div className="home-ritual-grid">{preparation.map(({ icon: Icon, title, copy }, index) => <article className="home-ritual-step" key={title}><div className="home-step-top"><span className="home-step-number">0{index + 1}</span><Icon size={30} strokeWidth={1.25} aria-hidden="true"/></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <p className="home-preparation-note">Final quantities, cooking time and serving guidance will be confirmed through product testing.</p>
      </div>
    </section>
    <section className="home-faq home-section" aria-labelledby="faq-title">
      <div className="site-container home-faq-grid">
        <div className="home-faq-intro"><span className="home-kicker">A LITTLE MORE TO KNOW</span><h2 id="faq-title">Good questions.<br/><em>Thoughtful answers.</em></h2><p>Curious about the idea behind your next bowl? Start here.</p><Link className="home-text-link home-underlined-link" to="/contact">Let’s talk <ArrowRight size={17}/></Link></div>
        <div className="home-faq-list">{[faqs[0], faqs[2], faqs[1], faqs[4]].map(([question, answer]) => <details className="home-faq-item" name="vyora-questions" key={question}><summary>{question}<span><Plus size={17} aria-hidden="true"/></span></summary><p>{answer}</p></details>)}</div>
      </div>
    </section>
  </div>
}

// Shared by the other product and information pages.
export function SectionHead({ eyebrow, title, copy, light = false }) {
  return <div className="mx-auto mb-12 max-w-3xl text-center"><span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</span><h2 className={`mt-5 text-4xl font-bold leading-tight md:text-5xl ${light ? 'text-white' : ''}`}>{title}</h2>{copy && <p className={`mt-4 text-base leading-7 md:text-lg ${light ? 'text-white/60' : 'text-[#6B756C]'}`}>{copy}</p>}</div>
}
