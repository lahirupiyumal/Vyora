import { products } from './products'

export const FEEDBACK_STORAGE_KEY = 'vyora-product-feedback'

const productIds = new Set(products.map(product => product.id))

function validFeedback(entry) {
  return entry && typeof entry === 'object'
    && typeof entry.id === 'string' && entry.id.length > 0 && entry.id.length <= 120
    && productIds.has(entry.productId)
    && typeof entry.name === 'string' && entry.name.trim().length > 0 && entry.name.length <= 100
    && Number.isInteger(entry.rating) && entry.rating >= 1 && entry.rating <= 5
    && typeof entry.message === 'string' && entry.message.trim().length >= 10 && entry.message.length <= 1500
    && typeof entry.createdAt === 'string' && Number.isFinite(Date.parse(entry.createdAt))
    && new Date(entry.createdAt).toISOString() === entry.createdAt
}

export function readFeedback() {
  try {
    if (typeof window === 'undefined') return []
    const stored = JSON.parse(window.localStorage.getItem(FEEDBACK_STORAGE_KEY) || '[]')
    if (!Array.isArray(stored)) return []
    const ids = new Set()
    return stored.filter(entry => {
      if (!validFeedback(entry) || ids.has(entry.id)) return false
      ids.add(entry.id)
      return true
    }).map(({ id, productId, name, rating, message, createdAt }) => ({
      id, productId, name: name.trim(), rating, message: message.trim(), createdAt,
    })).sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
  } catch {
    return []
  }
}

export function addFeedback({ productId, name, rating, message }) {
  if (!productIds.has(productId)) throw new Error('Please choose a listed VYORA product.')
  if (typeof name !== 'string' || !name.trim() || name.trim().length > 100) {
    throw new Error('Please enter your name using 1 to 100 characters.')
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new Error('Please choose a rating from 1 to 5 stars.')
  }
  if (typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 1500) {
    throw new Error('Please write 10 to 1,500 characters of feedback, excluding extra spaces.')
  }
  if (typeof window === 'undefined') throw new Error('Please open the product page in your browser to add feedback.')

  const entry = {
    id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    productId,
    name: name.trim(),
    rating,
    message: message.trim(),
    createdAt: new Date().toISOString(),
  }
  try {
    window.localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify([entry, ...readFeedback()]))
  } catch {
    throw new Error('Your feedback could not be saved in this browser. Please allow browser storage or free up some space and try again.')
  }
  return entry
}
