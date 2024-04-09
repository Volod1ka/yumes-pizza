export type Product = {
  id: string
  name: string
  image: string
  stock: number
  description: string | null
  price: Price
}

export type Price = {
  full: number
  selling: number | null
  discount: number | null
}

export type Category = {
  id: string
  name: string
}

export type GroupedProducts = Category & {
  products: Product[]
}
