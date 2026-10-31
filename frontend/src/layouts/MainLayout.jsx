import { Outlet } from 'react-router-dom'
import CartDrawer from '../components/CartDrawer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useCart } from '../context/CartContext'

export default function MainLayout(){const{toast}=useCart();return <div className="min-h-screen bg-[#FAF8F0] text-[#252A25]"><Header/><CartDrawer/><main><Outlet/></main><Footer/>{toast&&<div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-[#183D2E] px-5 py-3 text-sm font-semibold text-white shadow-xl" role="status">{toast}</div>}</div>}
