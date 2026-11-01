import { ArrowRight, ClipboardCheck, CookingPot, Droplets, FlaskConical, Package, PackageCheck } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ingredientCategories, ingredients } from '../data/ingredients'
import './Ingredients.css'

const process = [
  { title: 'Choose thoughtfully', copy: 'Explore suitable vegetables, aromatics and ingredient sources for each formulation.', icon: ClipboardCheck },
  { title: 'Prepare with care', copy: 'Develop preparation and processing steps appropriate to each ingredient and recipe.', icon: Droplets },
  { title: 'Refine the blend', copy: 'Evaluate flavour, texture and preparation through formulation and product testing.', icon: FlaskConical },
  { title: 'Pack with purpose', copy: 'Assess packaging, ingredient information and storage requirements before launch.', icon: PackageCheck },
]

export default function Ingredients() {
  const [category, setCategory] = useState('all')
  const visibleIngredients = ingredients.filter(ingredient => category === 'all' || ingredient.category === category)

  return <div className="ingredients-page">
    <section className="ingredients-collection" aria-labelledby="ingredient-collection-title">
      <div className="site-container">
        <h1 id="ingredient-collection-title" className="sr-only">Ingredients</h1>
        <p className="sr-only" role="status">Showing {visibleIngredients.length} of {ingredients.length} ingredients</p>
        <div className="ingredients-filters" role="group" aria-label="Filter ingredients by category">
          {ingredientCategories.map(({ id, label }) => <button type="button" key={id} className={`ingredients-filter${category === id ? ' is-active' : ''}`} aria-pressed={category === id} aria-controls="ingredients-grid" onClick={() => setCategory(id)}>
            {label}<span>{id === 'all' ? ingredients.length : ingredients.filter(ingredient => ingredient.category === id).length}</span>
          </button>)}
        </div>
        <p className="ingredients-recipe-note">Recipe in development. Final ingredients and quantities are subject to formulation and testing.</p>
        <div id="ingredients-grid" className="ingredients-grid">
          {visibleIngredients.map(ingredient => <IngredientCard key={ingredient.id} ingredient={ingredient} />)}
        </div>
      </div>
    </section>

    <section className="ingredients-process" aria-labelledby="ingredients-process-title">
      <div className="site-container">
        <header className="ingredients-section-heading"><span className="ingredients-eyebrow">THOUGHTFULLY DEVELOPED</span><h2 id="ingredients-process-title">A little care at every stage.</h2><p>Our planned approach, from selecting ingredients to developing a blend that belongs in your everyday.</p></header>
        <ol className="ingredients-process-grid">
          {process.map(({ title, copy, icon: Icon }, index) => <li key={title}>
            <div className="ingredients-process-top"><span>{String(index + 1).padStart(2, '0')}</span><Icon size={24} strokeWidth={1.4} aria-hidden="true" /></div>
            <h3>{title}</h3><p>{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="ingredients-preparation" aria-labelledby="ingredients-preparation-title">
      <div className="site-container ingredients-preparation-grid">
        <div className="ingredients-preparation-copy"><span className="ingredients-eyebrow">YOUR EVERYDAY RITUAL</span><h2 id="ingredients-preparation-title">From pantry<br />to a <em>warm bowl.</em></h2><p>We&apos;re developing a simple preparation guide for each formulation. Final mix quantities, water amounts and cooking times will be confirmed through product testing.</p><Link className="ingredients-button" to="/shop">Explore the VYORA concept <ArrowRight size={16} aria-hidden="true" /></Link></div>
        <aside className="ingredients-storage" aria-labelledby="ingredients-storage-title"><Package size={29} strokeWidth={1.4} aria-hidden="true" /><h3 id="ingredients-storage-title">Prepared with care.<br />Stored with care.</h3><p>Storage instructions and shelf life will be established through packaging assessment and product testing. Follow the information on the finished pack when available.</p><p className="ingredients-final-note">A product concept in development. Ingredient photography is illustrative.</p></aside>
      </div>
    </section>
  </div>
}

function IngredientCard({ ingredient }) {
  const [imageFailed, setImageFailed] = useState(false)

  return <article className="ingredients-card">
    <div className="ingredients-card-image">
      {imageFailed ? <div className="ingredients-card-fallback" role="img" aria-label={`${ingredient.name} image unavailable`}><CookingPot size={42} strokeWidth={1.2} aria-hidden="true" /></div> : <img src={ingredient.image} alt={ingredient.imageAlt} width="640" height="480" loading="lazy" onError={() => setImageFailed(true)} />}
      <span className="ingredients-card-number">{String(ingredients.indexOf(ingredient) + 1).padStart(2, '0')}</span>
    </div>
    <div className="ingredients-card-copy"><span className="ingredients-card-category">{ingredient.categoryLabel}</span><h3>{ingredient.name}</h3><p>{ingredient.description}</p>{ingredient.note && <span className="ingredients-variant-note">{ingredient.note}</span>}</div>
  </article>
}
