import type { Product } from '@models/products'

export const MOCK_PRODUCT = {
  id: 'dsfs4g4g54g4',
  image:
    'https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg',
  name: 'The Classic Burger',
  stock: 9,
  price: {
    full: 420,
    sale: 20,
    withsale: 320,
  },
  description:
    'Indulge in the ultimate burger experience with our mouthwatering  creation! Sink your teeth into a juicy patty made from the finest cuts  of beef, perfectly seasoned and grilled to perfection. Topped with  fresh, crisp lettuce, ripe tomatoes, and savory pickles, each bite is a  burst of flavor. Drizzled with our signature sauce and nestled in a  soft, toasted bun, this burger is sure to satisfy your cravings. Order  now and treat yourself to a burger like no other!',
} satisfies Product
