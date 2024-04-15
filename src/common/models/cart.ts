import type { Price } from './products'

export type CartProduct = {
  id: string
  name: string
  image: string
  count: number
  stock: number
  price: Price
}
