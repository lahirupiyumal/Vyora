import { ArrowDown, ArrowRight, Check, CookingPot, Heart, Leaf, Minus, Plus, ShoppingBag, Soup, Sprout } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { faqs } from '../data/faqs'
import { primaryProduct } from '../data/products'
import harvestImage from '../assets/vegetable-harvest.jpg'
import './Home.css'

const principles = [
  { icon: Sprout, title: 'Vegetables at heart', copy: 'Inspired by familiar, real ingredients.' },
  { icon: Soup, title: 'Comfort, made convenient', copy: 'A thoughtful idea for your daily routine.' },
  { icon: Heart, title: 'Rooted in Sri Lanka', copy: 'Local inspiration. Everyday possibilities.' },
]

const preparation = [
  { icon: Soup, title: 'A spoonful of possibility', copy: 'Measure the mix and add water, following the final preparation guide.' },
  { icon: CookingPot, title: 'A moment to slow down', copy: 'Stir and cook. A simple little ritual for the busiest part of your day.' },
  { icon: Heart, title: 'A bowl to come back to', copy: 'Serve warm, take a seat and make a little room for yourself.' },
]

export default function Home() {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  return <div className="home-page">
    <section className="home-hero" aria-labelledby="home-title">
      <div className="site-container home-hero-grid">
        <div className="home-hero-copy">
          <span className="home-kicker"><span className="home-kicker-line"/> A LITTLE CLOSER TO NATURE</span>
          <h1 id="home-title">Goodness,<br/><em>in every bowl.</em></h1>
          <p>A little comfort. A little care. Meet VYORA — a vegetable soup mix concept inspired by Sri Lankan kitchens and the rhythm of everyday life.</p>
          <div className="home-actions">
            <a className="home-button" href="#the-original">Discover VYORA <ArrowRight size={17}/></a>
            <Link className="home-text-link" to="/our-story">Our story <ArrowRight size={16}/></Link>
          </div>
          <div className="home-hero-notes"><span><Leaf size={15}/> Vegetable-based concept</span><span className="home-note-dot"/><span>Thoughtfully developed</span></div>
          <a className="home-scroll-link" href="#the-vyora-way"><span><ArrowDown size={15}/></span> A GOOD IDEA, FROM THE GROUND UP</a>
        </div>
        <div className="home-visual">
          <div className="home-visual-label"><span>THE EVERYDAY ORIGINAL</span><span>01 / VYORA</span></div>
          <div className="home-visual-frame">
            <img src={primaryProduct.image} alt="VYORA vegetable soup mix packaging concept beside a warm bowl of soup, pumpkin and fresh vegetables" width="1672" height="941" fetchPriority="high"/>
            <span className="home-image-caption">Packaging concept</span>
          </div>
          <div className="home-product-note"><span className="home-note-icon"><Leaf size={25} strokeWidth={1.5}/></span><div><small>SMALL MOMENTS. SIMPLE GOODNESS.</small><strong>Your everyday, a little warmer.</strong></div></div>
          <div className="home-visual-foot"><span>INSPIRED BY NATURE. CREATED WITH CARE.</span><span className="home-visual-dots" aria-hidden="true"><i/><i/><i/></span></div>
        </div>
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
          <span className="home-kicker home-kicker-light"><span className="home-kicker-line"/> MEET OUR FIRST CONCEPT</span>
          <h2 id="original-title">Your new pantry idea.<br/><em>A familiar kind of comfort.</em></h2>
          <p>A vegetable soup mix, thoughtfully reimagined for study breaks, busy workdays and quiet evenings at home.</p>
          <ul className="home-product-features"><li><Check size={16}/> Vegetables, herbs and spices under consideration</li><li><Check size={16}/> Designed to simplify everyday preparation</li><li><Check size={16}/> Inspired by the way Sri Lanka eats</li></ul>
          <div className="home-buy-panel">
            <div className="home-product-heading"><h3>Natural Vegetable Soup Mix</h3><span>100 g concept pack</span></div>
            <div className="home-purchase-row"><div className="home-product-price"><strong><span>LKR</span> {primaryProduct.price.toLocaleString()}</strong><small>Illustrative prototype price</small></div><div className="home-quantity" role="group" aria-label="Product quantity"><button type="button" aria-label="Decrease quantity" disabled={quantity === 1} onClick={() => setQuantity(value => Math.max(1, value - 1))}><Minus size={15}/></button><output aria-label="Quantity" aria-live="polite">{quantity}</output><button type="button" aria-label="Increase quantity" onClick={() => setQuantity(value => value + 1)}><Plus size={15}/></button></div></div>
            <button className="home-button home-button-cream" type="button" onClick={() => addItem(primaryProduct, quantity)}><ShoppingBag size={17}/> Add to demo basket <ArrowRight size={17}/></button>
            <p className="home-prototype-note">A product in development. No real orders or payments.</p>
          </div>
          <Link className="home-text-link home-light-link" to="/shop">Explore full product details <ArrowRight size={16}/></Link>
        </div>
        <div className="home-original-visual">
          <div className="home-original-image"><img src={primaryProduct.image} alt="VYORA Natural Vegetable Soup Mix concept pack with a bowl of vegetable soup" width="1672" height="941" loading="lazy"/><span className="home-original-tag"><Leaf size={14}/> THE VYORA ORIGINAL</span></div>
          <div className="home-original-caption"><span>FROM OUR IDEA TO YOUR EVERYDAY.</span><span>VYORA / 01</span></div>
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
