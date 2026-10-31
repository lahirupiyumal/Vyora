import { Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo({ light = false, onClick }) {
  return <Link to="/" onClick={onClick} className={`brand-logo${light ? ' brand-logo-light' : ''}`} aria-label="VYORA home">
    <span className="brand-logo-mark"><Leaf size={24} strokeWidth={1.5} aria-hidden="true" /></span>
    <span className="brand-logo-wordmark">VYORA<small>NATURAL FOODS</small></span>
  </Link>
}
