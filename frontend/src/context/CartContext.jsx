import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const CART_KEY = 'vyora-prototype-cart'

const loadCart = () => {
  try {
    const value = JSON.parse(localStorage.getItem(CART_KEY) || '[]')
    return Array.isArray(value) ? value.filter(item => item?.id && Number.isFinite(item.quantity) && item.quantity > 0) : []
  } catch { return [] }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [isCartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState('')
  useEffect(() => { localStorage.setItem(CART_KEY, JSON.stringify(items)) }, [items])

  const addItem = (product, quantity = 1) => {
    setItems(current => current.some(item => item.id === product.id)
      ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      : [...current, { id: product.id, name: product.name, price: Number(product.price), image: product.image, weight: product.weight, quantity }])
    setToast(`${product.shortName || product.name} added to cart`)
    window.setTimeout(() => setToast(''), 2600)
  }
  const updateQuantity = (id, quantity) => setItems(current => quantity < 1 ? current.filter(item => item.id !== id) : current.map(item => item.id === id ? { ...item, quantity } : item))
  const removeItem = id => setItems(current => current.filter(item => item.id !== id))
  const clearCart = () => setItems([])
  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const value = useMemo(() => ({ items, addItem, updateQuantity, removeItem, clearCart, count, subtotal, isCartOpen, setCartOpen, toast }), [items, count, subtotal, isCartOpen, toast])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Cart provider and hook intentionally live together as one small context module.
// eslint-disable-next-line react/only-export-components
export const useCart = () => useContext(CartContext)
