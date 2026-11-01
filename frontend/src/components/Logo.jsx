import { Link } from 'react-router-dom'

export default function Logo({ light = false, onClick }) {
  return <Link to="/" onClick={onClick} className={`brand-logo${light ? ' brand-logo-light' : ''}`} aria-label="VYORA home">
    <img className="brand-logo-image" src="/vyora-logo.png" alt="" width="800" height="800" decoding="async" />
  </Link>
}
