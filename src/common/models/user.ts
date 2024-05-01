import type { Address } from './order'
import type { RequestResultWithSuccess } from './requests'

export type User = {
  id: string
  name: string
  phone: string
  email: string
  address: Address
}

export type LoginResponse = RequestResultWithSuccess & {
  user?: User
}

export type RegistrationResponse = RequestResultWithSuccess
