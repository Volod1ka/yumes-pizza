import type { HistoryOrder, Order } from '@models/order'
import { setCheckoutedOrder, setOrders } from '@stores/features/orderSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import { useEffect } from 'react'
import { orderApi } from '.'

const createOrder = async (order: Order) => {
  return orderApi.createOrder(order)
}

const useOrderQuery = (update: boolean = true) => {
  const dispatch = useStoreDispatch()
  const { user, orders } = useStoreSelector(store => ({
    user: store.user.user,
    orders: store.order.orders,
  }))

  useEffect(() => {
    if (update) {
      updateOrders()
    }
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

  return { createOrder, updateOrders, checkoutOrder, orders }
}

export default useOrderQuery
