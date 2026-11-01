import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { addFeedback } from '../data/feedback'
import './ProductFeedback.css'

const ratings = ['Needs work', 'Could be better', 'It was okay', 'Really good', 'Loved it']

export default function ProductFeedback({ product }) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)
  const sectionRef = useRef(null)
  const messageRef = useRef(null)
  const resultRef = useRef(null)
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#product-feedback') sectionRef.current?.scrollIntoView({ block: 'start' })
  }, [hash])

  useEffect(() => {
    if (saved) resultRef.current?.focus()
  }, [saved])

  const submit = event => {
    event.preventDefault()
    setError('')
    if (message.trim().length < 10) {
      setError('Please share at least 10 characters, excluding extra spaces.')
      messageRef.current?.focus()
      return
    }
    const form = new FormData(event.currentTarget)
    try {
      addFeedback({ productId: product.id, name: form.get('name'), rating, message })
      setSaved(true)
    } catch (cause) {
      setError(cause.message)
    }
  }

  return <section ref={sectionRef} id="product-feedback" className="product-feedback" aria-labelledby="product-feedback-title">
    <div className="product-feedback-intro">
      <span className="product-detail-kicker">YOUR EXPERIENCE</span>
      <h2 id="product-feedback-title">Tried it? Tell us<br />what you think.</h2>
      <p>Share your thoughts on {product.shortName || product.name}. Your review will appear on our feedback page.</p>
      <Link to="/feedback" className="product-feedback-all">Read product feedback <ArrowRight size={15} aria-hidden="true" /></Link>
    </div>
    {saved ? <div className="product-feedback-success">
      <CheckCircle2 size={33} strokeWidth={1.5} aria-hidden="true" />
      <h3 ref={resultRef} tabIndex={-1}>Thanks for sharing.</h3>
      <p role="status">Your product review is saved in this browser and is now on the feedback page.</p>
      <Link className="product-feedback-submit" to="/feedback">See your feedback <ArrowRight size={16} aria-hidden="true" /></Link>
    </div> : <form className="product-feedback-form" onSubmit={submit} aria-describedby="product-feedback-note">
      <fieldset className="product-feedback-rating">
        <legend>Your rating <span aria-hidden="true">*</span></legend>
        <div className="product-feedback-stars" onMouseLeave={() => setHoverRating(0)}>
          {ratings.map((label, index) => {
            const value = index + 1
            return <label key={label} className={`product-feedback-star${value <= (hoverRating || rating) ? ' is-filled' : ''}`} onMouseEnter={() => setHoverRating(value)}>
              <input type="radio" name="rating" value={value} required checked={rating === value} onChange={() => setRating(value)} />
              <Star size={23} strokeWidth={1.4} aria-hidden="true" />
              <span className="brand-sr-only">{value} {value === 1 ? 'star' : 'stars'} — {label}</span>
            </label>
          })}
        </div>
      </fieldset>
      <label className="product-feedback-field" htmlFor="product-feedback-name">Your name <span aria-hidden="true">*</span>
        <input id="product-feedback-name" name="name" type="text" autoComplete="name" required maxLength={100} pattern=".*\S.*" title="Please enter a name with at least one non-space character." placeholder="The name shown on your review" />
      </label>
      <label className="product-feedback-field" htmlFor="product-feedback-message">Your feedback <span aria-hidden="true">*</span>
        <textarea id="product-feedback-message" ref={messageRef} name="message" required minLength={10} maxLength={1500} rows={4} value={message} onChange={event => { setMessage(event.target.value); setError('') }} placeholder="Tell us about your experience with this product…" aria-describedby="product-feedback-message-hint" />
      </label>
      <p id="product-feedback-message-hint" className="product-feedback-hint">10–1,500 characters · {message.length.toLocaleString()} / 1,500</p>
      {error && <p className="product-feedback-error" role="alert">{error}</p>}
      <button type="submit" className="product-feedback-submit">Add product feedback <ArrowRight size={16} aria-hidden="true" /></button>
      <p id="product-feedback-note" className="product-feedback-note">All fields are required. Reviews are saved on this browser only.</p>
    </form>}
  </section>
}
