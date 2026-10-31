import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function NotFound(){return <section className="grid min-h-[65vh] place-items-center px-6 text-center"><div><span className="text-8xl font-bold text-[#A8C3A0]">404</span><h1 className="mt-3 text-4xl font-bold">This page hasn&apos;t been prepared.</h1><p className="mt-3 text-[#6B756C]">Let&apos;s return to the VYORA home page.</p><Link className="btn-primary mt-7" to="/"><ArrowLeft size={18}/> Back home</Link></div></section>}
