import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Ingredients from './pages/Ingredients'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'
import OurStory from './pages/OurStory'
import ProductDetails from './pages/ProductDetails'
import Shop from './pages/Shop'

export default function App() {
  return <Routes>
    <Route element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="shop/:productId" element={<ProductDetails/>}/>
      <Route path="our-story" element={<OurStory/>}/>
      <Route path="ingredients" element={<Ingredients/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="privacy" element={<Legal title="Privacy Policy"/>}/>
      <Route path="terms" element={<Legal title="Terms & Conditions"/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  </Routes>
}
