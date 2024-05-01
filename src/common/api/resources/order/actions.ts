import httpClient from '@api/httpClient'
import type { HistoryOrder, Order } from '@models/order'
import type { User } from '@models/user'

export const getOrder = async (userId: User['id']) => {
  const { data } = await httpClient.get<HistoryOrder[]>('order', {
    params: { id_client: userId },
  })

  return data
}

export const createOrder = async (order: Order) => {
  const { data } = await httpClient.post<HistoryOrder['id']>('order', {
    ...order,
  })

  return data ?? null
}
