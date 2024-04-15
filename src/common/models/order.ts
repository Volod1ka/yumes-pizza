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

export type OrderProducts = {
  id: string
  count: number
  price: number
}

export type Order = RecipientData & {
  id?: string
  products: OrderProducts[]
  totalPrice: number
  discount: number
}
