import { ArrowRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FEEDBACK_STORAGE_KEY, readFeedback } from '../data/feedback'
import { products } from '../data/products'
import { sampleFeedback } from '../data/sampleFeedback'
import './Feedback.css'

export default function Feedback() {
  const [feedback, setFeedback] = useState(readFeedback)

  useEffect(() => {
    const refresh = event => {
      if (event.key === FEEDBACK_STORAGE_KEY || event.key === null) setFeedback(readFeedback())
    }
    window.addEventListener('storage', refresh)
    return () => window.removeEventListener('storage', refresh)
  }, [])

  const displayedFeedback = [...feedback, ...sampleFeedback]

  return <div className="feedback-page">
    <section className="feedback-section" aria-labelledby="feedback-title">
      <div className="site-container">
        <h1 id="feedback-title" className="sr-only">Product feedback</h1>
        <div className="feedback-grid" aria-label="Product reviews">
          {displayedFeedback.map(entry => <FeedbackCard key={entry.id} entry={entry} />)}
        </div>
      </div>
    </section>
  </div>
}

function FeedbackCard({ entry }) {
  const product = products.find(item => item.id === entry.productId)
  const initials = entry.name.split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase()
  const date = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(entry.createdAt))

  return <article className="feedback-card">
    <div className="feedback-card-person">
      <span className="feedback-avatar" aria-hidden="true">{initials}</span>
      <div><h2>{entry.name}</h2><time dateTime={entry.createdAt}>{date}</time></div>
    </div>
    <div className="feedback-card-rating-row">
      <div className="feedback-card-rating" role="img" aria-label={`${entry.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} className={index < entry.rating ? 'is-filled' : ''} aria-hidden="true" />)}
      </div>
      {entry.isSample && <span className="feedback-sample-label">Sample feedback</span>}
    </div>
    <p className="feedback-card-message">{entry.message}</p>
    <Link className="feedback-card-product" to={`/shop/${product.id}`}>{product.shortName || product.name}<ArrowRight size={13} aria-hidden="true" /></Link>
  </article>
}
