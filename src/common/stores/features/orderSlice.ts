import type { HistoryOrder } from '@models/order'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type OrderState = {
  orders: HistoryOrder[]
  checkoutedOrder: HistoryOrder['id'] | null
}

const initialState: OrderState = {
  orders: [],
  checkoutedOrder: null,
} satisfies OrderState

export type SetOrdersDataAction = {
  orders: HistoryOrder[]
}

export type SetCheckoutedOrderDataAction = {
  id: HistoryOrder['id']
}

const orderSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setOrders: (
      state,
      { payload: { orders } }: PayloadAction<SetOrdersDataAction>,
    ) => {
      state.orders = orders
      return state
    },
    setCheckoutedOrder: (
      state,
      { payload: { id } }: PayloadAction<SetCheckoutedOrderDataAction>,
    ) => {
      state.checkoutedOrder = id
      return state
    },
    removeCheckoutedOrder: state => {
      state.checkoutedOrder = null
      return state
    },
    clearAll: () => {
      return { checkoutedOrder: null, orders: [] }
    },
  },
})

export const {
  setOrders,
  removeCheckoutedOrder,
  setCheckoutedOrder,
  clearAll,
} = orderSlice.actions

export default orderSlice.reducer
