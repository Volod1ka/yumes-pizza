import type { News } from '@models/news'
import type { Category, Product } from '@models/products'

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

export const MOCK_FOOD_CATEGORIES = [
  { id: '1', name: 'Fruits' },
  { id: '2', name: 'Vegetables' },
  { id: '3', name: 'Meat & Poultry' },
  { id: '4', name: 'Seafood' },
  { id: '5', name: 'Dairy Products' },
  { id: '6', name: 'Grains & Cereals' },
  { id: '7', name: 'Beverages' },
  { id: '8', name: 'Snacks & Sweets' },
  { id: '9', name: 'Condiments & Sauces' },
  { id: '10', name: 'Bread & Bakery' },
  { id: '11', name: 'Frozen Foods' },
  { id: '12', name: 'Canned Goods' },
  { id: '13', name: 'Spices & Herbs' },
  { id: '14', name: 'Nuts & Seeds' },
  { id: '15', name: 'Oils & Vinegars' },
  { id: '16', name: 'Desserts' },
  { id: '17', name: 'Ethnic Foods' },
  { id: '18', name: 'Organic Products' },
  { id: '19', name: 'Baby Food' },
  { id: '20', name: 'Gluten-Free Products' },
] satisfies Category[]

export const MOCK_NEWS = [
  {
    id: '1',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/fd44dfca7a35b0d9f54130014e2a9bbe/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg',
  },
  {
    id: '2',
    image: 'https://images.snapwi.re/9094/5e6c556415775eda1283b5a2.w800.jpg',
  },
  {
    id: '3',
    image:
      'https://loveincorporated.blob.core.windows.net/contentimages/gallery/6be480af-37e7-45d2-b08a-ff0597585897-5-tacos.jpg',
  },
  {
    id: '4',
    image:
      'https://media.istockphoto.com/id/542331706/photo/homemade-spicy-shrimp-tacos.webp?b=1&s=170667a&w=0&k=20&c=WUZHzzMAuQur3xuh4NVWUWZ77_PQqf3yCkoZ5Ftsfnk=',
  },
  {
    id: '5',
    image:
      'https://i.pinimg.com/736x/c7/f3/96/c7f3967dba35413afa8edc4132f9f47c.jpg',
  },
  {
    id: '6',
    image:
      'https://d1ralsognjng37.cloudfront.net/3f10e514-9d44-40c0-b98c-7604c6f477e0.jpeg',
  },
  {
    id: '7',
    image:
      'https://png.pngtree.com/background/20230524/original/pngtree-lot-of-food-sitting-on-a-table-picture-image_2706274.jpg',
  },
  {
    id: '8',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
  },
] satisfies News[]
