import { Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return <Link to="/" className={`flex items-center gap-3 font-bold tracking-[.16em] ${light ? 'text-white' : 'text-[#183D2E]'}`} aria-label="VYORA home"><span className={`grid size-11 place-items-center rounded-full ${light ? 'bg-white/10 text-[#E99A45]' : 'bg-[#245C45] text-white'}`}><Leaf size={23}/></span><span className="leading-none">VYORA<small className={`mt-1 block text-[8px] tracking-[.28em] ${light ? 'text-[#A8C3A0]' : 'text-[#6B756C]'}`}>NATURAL FOODS</small></span></Link>
}
