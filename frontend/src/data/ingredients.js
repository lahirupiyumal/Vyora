import garlicImage from '../assets/ingredients/garlic.jpg'
import gingerImage from '../assets/ingredients/ginger.jpg'
import tomatoImage from '../assets/ingredients/tomato.jpg'
import onionImage from '../assets/ingredients/onion.jpg'
import carrotImage from '../assets/ingredients/carrot.jpg'
import curryLeavesImage from '../assets/ingredients/curry-leaves.jpg'
import pumpkinImage from '../assets/ingredients/pumpkin.jpg'
import spicesImage from '../assets/ingredients/spices.jpg'

export const ingredientCategories = [
  { id: 'all', label: 'All ingredients' },
  { id: 'vegetables', label: 'Vegetables' },
  { id: 'aromatics', label: 'Herbs & aromatics' },
  { id: 'spices', label: 'Spices' },
]

export const ingredients = [
  {
    id: 'garlic',
    name: 'Garlic',
    category: 'aromatics',
    categoryLabel: 'AROMATIC',
    image: garlicImage,
    imageAlt: 'Fresh peeled garlic cloves',
    description: 'A familiar savoury aroma that brings the other flavours together and adds depth to the blend.',
  },
  {
    id: 'ginger',
    name: 'Ginger',
    category: 'aromatics',
    categoryLabel: 'AROMATIC',
    image: gingerImage,
    imageAlt: 'Fresh ginger roots',
    description: 'A gently warming note with a fresh, fragrant character. A little brightness for a comforting bowl.',
  },
  {
    id: 'tomato',
    name: 'Tomato',
    category: 'vegetables',
    categoryLabel: 'VEGETABLE',
    image: tomatoImage,
    imageAlt: 'Ripe red tomatoes',
    description: 'A little colour and tang to balance the savoury flavours and give the soup a rounded character.',
  },
  {
    id: 'onion',
    name: 'Onion',
    category: 'vegetables',
    categoryLabel: 'VEGETABLE',
    image: onionImage,
    imageAlt: 'Fresh onions',
    description: 'A familiar savoury base with a touch of natural sweetness. One of the simple building blocks of soup.',
  },
  {
    id: 'carrot',
    name: 'Carrot',
    category: 'vegetables',
    categoryLabel: 'VEGETABLE',
    image: carrotImage,
    imageAlt: 'Fresh orange carrots',
    description: 'Gentle sweetness and a warm orange colour, bringing a familiar vegetable flavour to the mix.',
  },
  {
    id: 'curry-leaves',
    name: 'Curry leaves',
    category: 'aromatics',
    categoryLabel: 'HERB',
    image: curryLeavesImage,
    imageAlt: 'Fresh curry leaf sprigs growing outdoors',
    description: 'A distinctive aroma, familiar in Sri Lankan kitchens, being explored as a fragrant finishing touch.',
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    category: 'vegetables',
    categoryLabel: 'VEGETABLE',
    image: pumpkinImage,
    imageAlt: 'A whole pumpkin at a produce market',
    description: 'A mellow flavour and smooth body, being considered as part of our vegetable soup formulation.',
  },
  {
    id: 'spices',
    name: 'Spices',
    category: 'spices',
    categoryLabel: 'SPICES',
    image: spicesImage,
    imageAlt: 'Assorted ground spices and dried herbs in terracotta bowls',
    description: 'A considered blend of spices adds warmth, aroma and balance to the soup. The final selection and quantities are still in development.',
  },
]
