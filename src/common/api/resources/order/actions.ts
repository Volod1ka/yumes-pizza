import httpClient from '@api/httpClient'
import { MOCK_HISTORY_ORDERS, MOCK_ORDER_ID } from '@mocks'
import type { HistoryOrder, Order } from '@models/order'
import type { User } from '@models/user'
import { requestWithMock } from '@tools/common'

export const getOrder = async (userId: User['id']) =>
  requestWithMock(async () => {
    const { data } = await httpClient.get<HistoryOrder[]>('order', {
      params: { id_client: userId },
    })

    return data
  }, MOCK_HISTORY_ORDERS)

export const createOrder = async (order: Order) =>
  requestWithMock(async () => {
    const { data } = await httpClient.post<HistoryOrder['id']>('order', {
      ...order,
    })

    return data ?? null
  }, MOCK_ORDER_ID)
