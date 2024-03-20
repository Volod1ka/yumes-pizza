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
  withsale: number | null
  sale: number | null
}

export type Category = {
  id: string
  name: string
}
