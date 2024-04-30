export type Payment = 'cash' | 'terminal'

export type Address = {
  street: string
  building: string
  appart: string | null
  floor: string | null
  entrance: string | null
  intercom: string | null
}

export type RecipientData = {
  name: string
  phone: string
  address: Address
  details: string | null
  payment: Payment
}

export type OrderProduct = {
  id: string
  count: number
  price: number
}

export type HistoryOrderProduct = {
  id: string
  name: string
  image: string
  count: number
  price: number
}

export type Order = RecipientData & {
  id?: number
  products: OrderProduct[]
  totalPrice: number
  discount: number
}

export type HistoryOrder = Pick<Order, 'totalPrice'> & {
  id: number
  date: string
  products: HistoryOrderProduct[]
}
