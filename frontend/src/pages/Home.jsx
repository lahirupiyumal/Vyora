import { ArrowRight, BriefcaseBusiness, Check, Clock3, Droplets, GraduationCap, HeartHandshake, Home as HomeIcon, Leaf, PackageCheck, ShieldCheck, ShoppingBag, Sparkles, Sprout, Timer, Tractor, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { primaryProduct } from '../data/products'

const benefits = [
  { icon: Clock3, number: '01', title: 'Convenience, considered', copy: 'A developing soup mix concept designed to reduce the everyday steps involved in preparing vegetable soup.' },
  { icon: Tractor, number: '02', title: 'Locally inspired', copy: 'Focused on selected vegetables from local suppliers where quality, suitability and availability allow.' },
  { icon: HeartHandshake, number: '03', title: 'Responsible by design', copy: 'Exploring useful value from suitable vegetable surplus without ever compromising food-safety requirements.' },
]

const process = [
  ['01', Sprout, 'Select', 'Suitable vegetables that meet quality and food-safety requirements.'],
  ['02', Droplets, 'Prepare', 'Wash, trim and prepare using appropriate hygienic procedures.'],
  ['03', Timer, 'Transform', 'Dehydrate under controlled conditions, then grind and sieve.'],
  ['04', PackageCheck, 'Finish', 'Blend, quality-check and package for further product validation.'],
]

const audiences = [
  [GraduationCap, 'Students', 'A simple warm option for busy study days and shared accommodation.'],
  [BriefcaseBusiness, 'Office workers', 'Designed for days when time is limited but a warm meal still matters.'],
  [Users, 'Busy families', 'A convenient pantry concept for full schedules and everyday routines.'],
  [HomeIcon, 'Convenience seekers', 'For anyone looking to reduce preparation steps without losing vegetable character.'],
]

export default function Home() {
  const { addItem } = useCart()
  return <>
    <section className="home-hero">
      <div className="home-orb home-orb-one"/><div className="home-orb home-orb-two"/>
      <div className="site-container home-hero-grid">
        <div className="home-hero-copy">
          <span className="eyebrow"><Leaf size={15}/> INTRODUCING VYORA</span>
          <h1>Natural goodness,<br/><em>made beautifully simple.</em></h1>
          <p>VYORA is developing a premium vegetable-based soup mix for modern Sri Lankan life—bringing selected vegetables, herbs and spices into one thoughtfully convenient format.</p>
          <div className="home-actions"><Link className="btn-accent" to="/shop">Explore the product <ArrowRight size={18}/></Link><Link className="home-text-link" to="/our-story">Our thinking <ArrowRight size={17}/></Link></div>
          <div className="home-hero-notes"><span><Check/>Vegetable-based concept</span><span><Check/>Locally inspired</span><span><Check/>Prototype stage</span></div>
        </div>
        <div className="home-visual">
          <div className="home-visual-frame"><img src={primaryProduct.image} alt="VYORA Natural Vegetable Soup Mix concept pouch with fresh vegetables and a warm bowl of soup"/><div className="home-image-shade"/></div>
          <div className="home-product-note"><span className="home-note-icon"><Sparkles size={19}/></span><div><small>PRODUCT CONCEPT</small><strong>Warm comfort, thoughtfully reimagined.</strong></div></div>
          <div className="home-visual-index"><span>01</span><i/><span>VYORA ORIGINAL</span></div>
        </div>
      </div>
    </section>

    <section className="home-proof"><div className="site-container home-proof-grid"><div><strong>One focused concept</strong><span>A vegetable soup mix in development</span></div><div><strong>Made for real routines</strong><span>Students, professionals and families</span></div><div><strong>Safety-led thinking</strong><span>Testing required before commercial launch</span></div></div></section>

    <section className="section-space home-intro"><div className="site-container"><div className="home-section-intro"><div><span className="home-kicker">WHY VYORA</span><h2>Good food should fit<br/>the rhythm of real life.</h2></div><p>VYORA starts with a simple observation: vegetable soup can be comforting and familiar, but preparing it from scratch takes time. Our developing concept explores a more convenient path—without treating quality, hygiene or responsible sourcing as afterthoughts.</p></div><div className="home-benefit-grid">{benefits.map(({icon:Icon,number,title,copy})=><article className="home-benefit" key={number}><div className="home-benefit-top"><span>{number}</span><Icon/></div><h3>{title}</h3><p>{copy}</p><i/></article>)}</div></div></section>

    <section className="home-product-section"><div className="site-container home-product-grid"><div className="home-product-image"><img src={primaryProduct.image} alt="Premium VYORA soup mix product concept"/><span>Visual packaging concept</span></div><div className="home-product-copy"><span className="eyebrow eyebrow-light"><Leaf size={15}/> THE FIRST VYORA CONCEPT</span><h2>Vegetable soup,<br/>without the long prep.</h2><p>{primaryProduct.description}</p><ul><li><ShieldCheck/>Quality and safety validation planned</li><li><Sprout/>Vegetable, herb and spice candidates</li><li><Clock3/>Preparation details pending product testing</li></ul><div className="home-price-row"><div><small>Illustrative prototype price</small><strong>LKR {primaryProduct.price.toLocaleString()}</strong></div><span>{primaryProduct.weight}</span></div><div className="home-product-actions"><button className="btn-accent" onClick={()=>addItem(primaryProduct)}><ShoppingBag size={18}/> Add prototype item</button><Link className="home-light-link" to="/shop">View full details <ArrowRight size={17}/></Link></div></div></div></section>

    <section className="section-space home-process"><div className="site-container"><SectionHead eyebrow="A THOUGHTFUL PROCESS" title="Designed carefully, step by step." copy="This is the planned development path. Commercial production would require validated food-safety controls, appropriate facilities and product testing."/><div className="home-timeline">{process.map(([number,Icon,title,copy],index)=><article key={number}><div className="home-step-marker"><span>{number}</span><Icon/></div>{index<process.length-1&&<i/>}<h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section-space home-sourcing"><div className="site-container home-sourcing-card"><div className="home-sourcing-copy"><span className="eyebrow eyebrow-light"><Sprout size={15}/> RESPONSIBLE SOURCING</span><h2>Turning suitable vegetables into greater value.</h2><p>VYORA aims to explore the responsible use of vegetables that remain safe and suitable for consumption but may have lower commercial value because of their size, shape or temporary oversupply.</p><div className="home-safety"><ShieldCheck/><p><strong>Our non-negotiable:</strong> spoiled, rotten, mould-contaminated or otherwise unsafe vegetables are always excluded.</p></div><Link className="btn-accent" to="/our-story">Read our story <ArrowRight size={18}/></Link></div><div className="home-sourcing-image" role="img" aria-label="A colourful display of fresh vegetables"><span>Suitable produce</span><span>Thoughtful selection</span></div></div></section>

    <section className="section-space home-audience"><div className="site-container"><div className="home-section-intro home-section-intro-light"><div><span className="home-kicker">DESIGNED AROUND PEOPLE</span><h2>A warm idea for<br/>busy everyday moments.</h2></div><p>The VYORA concept is built for people who value convenience but still want food to feel considered, familiar and connected to real vegetable ingredients.</p></div><div className="home-audience-grid">{audiences.map(([Icon,title,copy])=><article key={title}><span><Icon/></span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section-space home-prep"><div className="site-container"><div className="home-prep-card"><div><span className="home-kicker">PREPARATION PREVIEW</span><h2>Measure. Stir.<br/>Warm. Enjoy.</h2><p>Final water quantity, mix quantity, cooking time and serving size will be confirmed after formulation and product testing.</p><Link className="btn-secondary" to="/ingredients">Explore ingredients <ArrowRight size={18}/></Link></div><div className="home-prep-steps">{[['01','Measure','Use the confirmed amount'],['02','Add','Pour in specified water'],['03','Cook','Stir for the tested time'],['04','Serve','Enjoy when ready']].map(([n,title,copy])=><article key={n}><span>{n}</span><div><strong>{title}</strong><p>{copy}</p></div></article>)}</div></div></div></section>

    <section className="home-final"><div className="site-container"><div><span><Leaf size={16}/> NATURAL GOODNESS, MADE EASY.</span><h2>Ready to explore<br/>the VYORA idea?</h2><p>Discover the product concept, planned ingredients and the thinking behind a more convenient bowl of vegetable soup.</p><div><Link className="btn-accent" to="/shop">Explore VYORA <ArrowRight size={18}/></Link><Link className="home-light-link" to="/contact">Talk to us <ArrowRight size={17}/></Link></div></div><img src={primaryProduct.image} alt="VYORA product concept"/></div></section>
  </>
}

export function SectionHead({ eyebrow, title, copy, light = false }) { return <div className="mx-auto mb-12 max-w-3xl text-center"><span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</span><h2 className={`mt-5 text-4xl font-bold leading-tight md:text-5xl ${light ? 'text-white' : ''}`}>{title}</h2>{copy && <p className={`mt-4 text-base leading-7 md:text-lg ${light ? 'text-white/60' : 'text-[#6B756C]'}`}>{copy}</p>}</div> }
