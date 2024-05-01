import { faker } from '@faker-js/faker'
import type { News } from '@models/news'
import type { Address, HistoryOrder } from '@models/order'
import type {
  Category,
  GroupedProducts,
  Price,
  Product,
} from '@models/products'
import type { User } from '@models/user'
import { subMonths } from 'date-fns'

export const createMockProduct = (): Product => {
  const isSale = !faker.number.int({ min: 0, max: 5 })

  let price: Price = {
    full: Number(faker.commerce.price({ min: 80, max: 1000, dec: 0 })),
    discount: null,
    selling: null,
  }

  if (isSale) {
    const discount = faker.number.int({ min: 5, max: 70 })
    const selling = Math.round(price.full * ((100 - discount) / 100))

    price = { ...price, selling, discount }
  }

  return {
    id: faker.string.uuid(),
    image:
      'https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg',
    name: 'The Classic Burger',
    stock: faker.number.int({ min: 1, max: 30 }),
    price,
    description: faker.lorem.lines({ min: 1, max: 7 }),
  }
}

export const createMockAddress = (): Address => {
  return {
    appart: null,
    building: faker.location.buildingNumber(),
    entrance: null,
    floor: null,
    intercom: null,
    street: faker.location.street(),
  }
}

export const createMockOrder = (): HistoryOrder => {
  const products = faker.helpers.multiple(createMockProduct, {
    count: faker.number.int({ min: 1, max: 8 }),
  })
  const totalPrice = products.reduce((accumulator, { price }) => {
    return accumulator + (price.selling ?? price.full)
  }, 0)

  return {
    id: faker.string.uuid(),
    date: faker.date
      .between({
        from: subMonths(new Date(), faker.number.int({ min: 1, max: 12 })),
        to: new Date(),
      })
      .toISOString(),
    products: products.map(({ id, image, name, price }) => ({
      count: faker.number.int({ min: 1, max: 12 }),
      id,
      image,
      name,
      price: price.selling ?? price.full,
    })),
    totalPrice,
  }
}

export const MOCK_FOOD_CATEGORIES = [
  { id: '1', name: 'Burgers' },
  { id: '2', name: 'Pizza' },
  { id: '3', name: 'Fried Chicken' },
  { id: '4', name: 'Tacos' },
  { id: '5', name: 'Hot Dogs' },
  { id: '6', name: 'Sandwiches' },
  { id: '7', name: 'French Fries' },
  { id: '8', name: 'Burritos' },
  { id: '9', name: 'Chicken Nuggets' },
  { id: '10', name: 'Wraps' },
  { id: '11', name: 'Subs' },
  { id: '12', name: 'Salads' },
  { id: '13', name: 'Fish and Chips' },
  { id: '14', name: 'Onion Rings' },
  { id: '15', name: 'Nachos' },
  { id: '16', name: 'Sushi Rolls' },
  { id: '17', name: 'Mozzarella Sticks' },
  { id: '18', name: 'Quesadillas' },
  { id: '19', name: 'Chili Dogs' },
  { id: '20', name: 'Gyros' },
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

export const MOCK_PRODUCT_WITH_CATEGORIES = MOCK_FOOD_CATEGORIES.map(
  category => ({
    ...category,
    products: faker.helpers.multiple(createMockProduct, {
      count: faker.number.int({ min: 2, max: 12 }),
    }),
  }),
) satisfies GroupedProducts[]

export const MOCK_USER = {
  id: faker.string.uuid(),
  address: createMockAddress(),
  email: faker.internet.email(),
  name: faker.person.firstName(),
  phone: faker.string.numeric({ length: { min: 10, max: 11 } }),
} satisfies User

export const MOCK_HISTORY_ORDERS = faker.helpers.multiple(createMockOrder, {
  count: faker.number.int({ min: 1, max: 10 }),
}) satisfies HistoryOrder[]

export const MOCK_ORDER_ID: HistoryOrder['id'] = faker.string.uuid()
