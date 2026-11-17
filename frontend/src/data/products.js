import soupKitImage from '../assets/vyora-vegetable-soup-kit.jpg'

const sharedProductDetails = {
  availability: 'Prototype — future availability',
  image: soupKitImage,
  ingredients: 'Ingredient candidates: carrot, pumpkin, tomato, onion, garlic, ginger, curry leaves and selected spices. Chicken is being explored for a separate chicken soup option. Final recipes are subject to formulation and testing.',
  preparation: 'Measure the mix, add the specified amount of water, stir and cook. Final quantities and cooking time will be confirmed after product testing.',
  storage: 'Final storage instructions and shelf life will be established through packaging assessment and product testing.',
}

export const products = [
  {
    ...sharedProductDetails,
    id: 'vyora-original',
    variant: 'Original',
    name: 'VYORA Original Vegetable Soup Mix',
    shortName: 'VYORA Original',
    description: 'The balanced everyday VYORA soup mix concept, designed for convenient, warm and wholesome-tasting bowls at home.',
    price: 380,
    weight: '60 g prototype pack',
  },
  {
    ...sharedProductDetails,
    id: 'vyora-large',
    variant: 'Large',
    name: 'VYORA Large Vegetable Soup Mix',
    shortName: 'VYORA Large',
    description: 'A larger VYORA soup mix concept for families, shared meals and anyone who likes to keep more comforting bowls ready.',
    price: 1440,
    weight: '200 g prototype pack',
  },
]

export const primaryProduct = products[0]
