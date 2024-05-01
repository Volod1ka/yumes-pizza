import type { HistoryOrder, Order } from '@models/order'
import { setCheckoutedOrder, setOrders } from '@stores/features/orderSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import { useEffect } from 'react'
import { orderApi } from '.'

const createOrder = async (order: Order) => {
  return orderApi.createOrder(order)
}

const useOrderQuery = () => {
  const dispatch = useStoreDispatch()
  const { user } = useStoreSelector(store => ({
    user: store.user.user,
  }))

  useEffect(() => {
    updateOrders()
  }, [JSON.stringify(user)])

  const updateOrders = async () => {
    if (!user) {
      return
    }

    const historyOrders = await orderApi.getOrder(user.id)

    if (historyOrders) {
      await dispatch(setOrders({ orders: historyOrders }))
    }
  }

  const checkoutOrder = async (id: HistoryOrder['id']) => {
    await dispatch(setCheckoutedOrder({ id }))
  }

  return { createOrder, updateOrders, checkoutOrder }
}

export default useOrderQuery
