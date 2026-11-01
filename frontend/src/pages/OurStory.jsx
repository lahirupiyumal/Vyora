import { ArrowDown, ArrowRight, Carrot, Clock, HeartHandshake, Leaf, Lightbulb, MapPin, Recycle, ShieldCheck, Soup, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'
import harvestImage from '../assets/vegetable-harvest.jpg'
import { primaryProduct } from '../data/products'
import './OurStory.css'

const journey = [
  {
    label: 'Where it begins',
    title: 'A familiar kind of comfort.',
    copy: 'A warm bowl of vegetable soup. Simple ingredients, a little patience, and a reason to slow down. The everyday comfort that inspired VYORA starts here.',
    icon: Sprout,
  },
  {
    label: 'The everyday challenge',
    title: 'Good food. Not always enough time.',
    copy: 'Shopping, washing, chopping, cooking and cleaning. Between studies, work and everything else, even a simple bowl of soup can ask for more time than we have.',
    icon: Clock,
  },
  {
    label: 'The spark',
    title: 'A little idea with possibility.',
    copy: 'What if familiar vegetables could become a convenient soup mix? We began exploring careful dehydration and blending, with thoughtful sourcing and quality at the centre.',
    icon: Lightbulb,
  },
  {
    label: 'The idea taking shape',
    title: 'Your everyday, a little warmer.',
    copy: 'VYORA is our developing vegetable soup mix concept: an idea for simpler preparation, familiar flavour and additional value around suitable, locally available vegetables.',
    icon: Soup,
  },
]

const sourcing = [
  { title: 'Carrot & pumpkin', copy: 'Exploring suitable seasonal vegetable growers.', icon: Carrot },
  { title: 'Tomato, onion & garlic', copy: 'Planned relationships with trusted local suppliers.', icon: Sprout },
  { title: 'Herbs & spices', copy: 'Ingredient partners to suit our final formulation.', icon: Leaf },
]

const values = [
  { title: 'Simple ingredients', copy: 'Familiar vegetables, herbs and spices guide the recipe we are developing. Good ideas can begin with the things we already know.', icon: Leaf },
  { title: 'Quality first', copy: 'Careful selection, hygienic handling and product testing come before launch. Every step deserves the same attention as the first.', icon: ShieldCheck },
  { title: 'Everyday convenience', copy: 'A soup concept designed around busy routines, simpler preparation and making a little more room for the moments that matter.', icon: Clock },
  { title: 'Local connection', copy: 'Our ambition is to build lasting relationships with Sri Lankan growers and suppliers, and create more value close to home.', icon: MapPin },
  { title: 'Customer trust', copy: 'Clear ingredient information, thoughtful choices and honest answers. We want trust to be part of the story from the beginning.', icon: HeartHandshake },
  { title: 'Responsible growth', copy: 'Exploring the potential of suitable vegetables that may be overlooked, with safety and quality at the heart of every decision.', icon: Recycle },
]

export default function OurStory() {
  return <div className="story-page">
    <section className="story-hero" aria-labelledby="story-title">
      <div className="site-container story-hero-grid">
        <div className="story-hero-copy">
          <span className="story-pill"><Sprout size={14} aria-hidden="true" /> The VYORA story</span>
          <h1 id="story-title">Our story.</h1>
          <blockquote className="story-quote">“Some comforts are worth making room for, even on the busiest days.”</blockquote>
          <p className="story-hero-paragraph">Modern days move quickly. A homemade bowl of vegetable soup asks us to slow down: to shop, wash, chop and cook. Those small rituals can be hard to fit around everything else.</p>
          <p className="story-hero-paragraph">VYORA began with a simple question: could we keep that familiar comfort while making preparation easier? We&apos;re exploring a vegetable soup mix with selected, carefully prepared ingredients, inspired by Sri Lankan kitchens and everyday life.</p>
          <a className="story-text-link" href="#story-journey">Follow our story <ArrowDown size={15} aria-hidden="true" /></a>
        </div>
        <figure className="story-hero-visual">
          <div className="story-hero-photo">
            <img src={primaryProduct.image} alt="VYORA soup mix concept pack with a warm bowl of vegetable soup and fresh ingredients" width="1672" height="941" fetchPriority="high" />
            <span className="story-photo-note">Product concept</span>
          </div>
          <div className="story-origin-badge">
            <span className="story-badge-icon"><Sprout size={23} strokeWidth={1.4} aria-hidden="true" /></span>
            <div><strong>ROOTED IN SRI LANKA</strong><small>A local idea. Everyday possibilities.</small></div>
          </div>
          <span className="story-visual-index">01 / THE VYORA WAY</span>
          <figcaption className="story-photo-caption"><span>A familiar kind of comfort.</span><small>THOUGHTFULLY REIMAGINED</small></figcaption>
        </figure>
      </div>
    </section>

    <section id="story-journey" className="story-section story-journey" aria-labelledby="story-journey-title">
      <div className="site-container">
        <header className="story-section-heading">
          <span className="story-eyebrow">HOW VYORA CAME TO BE</span>
          <h2 id="story-journey-title">From a familiar ritual<br />to an everyday <em>possibility.</em></h2>
          <p>A small idea, inspired by the way we live and the things we love.</p>
        </header>
        <ol className="story-timeline">
          {journey.map(({ label, title, copy, icon: Icon }, index) => <li className="story-timeline-item" key={title}>
            <span className="story-timeline-icon"><Icon size={25} strokeWidth={1.4} aria-hidden="true" /></span>
            <article className="story-timeline-card">
              <div className="story-step-label"><span>{String(index + 1).padStart(2, '0')}</span><i aria-hidden="true" /><span>{label}</span></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="story-section story-sourcing" aria-labelledby="story-sourcing-title">
      <div className="site-container story-sourcing-grid">
        <div className="story-sourcing-copy">
          <span className="story-pill story-pill-dark"><MapPin size={14} aria-hidden="true" /> Rooted in Sri Lanka</span>
          <h2 id="story-sourcing-title">Inspired by the land<br />we call <em>home.</em></h2>
          <p>Good food begins long before the kitchen. Our aim is to build relationships with Sri Lankan growers and trusted suppliers, exploring suitable vegetables that may be overlooked because of appearance or seasonal oversupply. Quality, suitability and careful handling come first.</p>
          <ul className="story-source-list">
            {sourcing.map(({ title, copy, icon: Icon }) => <li key={title}>
              <span className="story-source-icon"><Icon size={22} strokeWidth={1.4} aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </li>)}
          </ul>
          <p className="story-sourcing-note">Sourcing relationships and the final recipe are still in development.</p>
          <Link className="story-text-link" to="/ingredients">Get to know our ingredients <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <figure className="story-sourcing-visual">
          <div className="story-sourcing-photo"><img src={harvestImage} alt="A colourful selection of fresh vegetables at a produce market" width="1200" height="1000" loading="lazy" /></div>
          <div className="story-land-label">
            <span className="story-badge-icon"><MapPin size={24} strokeWidth={1.4} aria-hidden="true" /></span>
            <div><strong>Goodness, close to home.</strong><small>OUR LOCAL SOURCING AMBITION</small></div>
          </div>
          <figcaption className="story-sourcing-caption">FRESH PRODUCE. FAMILIAR POSSIBILITIES.</figcaption>
        </figure>
      </div>
    </section>

    <section className="story-section story-values" aria-labelledby="story-values-title">
      <div className="site-container">
        <header className="story-section-heading">
          <span className="story-pill"><Leaf size={14} aria-hidden="true" /> What we stand for</span>
          <h2 id="story-values-title">Our values.<br /><em>In every little decision.</em></h2>
        </header>
        <div className="story-values-grid">
          {values.map(({ title, copy, icon: Icon }) => <article className="story-value-card" key={title}>
            <span className="story-value-icon"><Icon size={24} strokeWidth={1.4} aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="story-direction" aria-labelledby="story-direction-title">
      <div className="site-container">
        <header className="story-direction-heading"><span className="story-eyebrow">GROWING WITH PURPOSE</span><h2 id="story-direction-title">A thoughtful beginning.<br /><em>A direction worth growing in.</em></h2></header>
        <div className="story-direction-grid">
          <article><span className="story-direction-label">OUR MISSION</span><h3>To develop convenient vegetable-based food products while creating value through responsible sourcing and thoughtful food innovation.</h3></article>
          <article><span className="story-direction-label">OUR VISION</span><h3>To grow into a recognised Sri Lankan brand for convenient vegetable-based products, built around quality, innovation and responsible use of local resources.</h3></article>
        </div>
        <div className="story-direction-bottom"><p>A product concept in development, shaped by thoughtful choices.</p><Link className="story-button" to="/shop">Discover the VYORA concept <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </div>
    </section>
  </div>
}
