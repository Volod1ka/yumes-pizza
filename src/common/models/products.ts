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

// TODO maybe another type of list category with products (for example: products has only list of ids)
export type CategoryListItem = Category & {
  products: Product[]
}
