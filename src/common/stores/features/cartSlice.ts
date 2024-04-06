import type { CartProduct } from '@models/cart'
import type { Product } from '@models/products'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type CartState = {
  products: CartProduct[]
  totalPrice: number
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
} satisfies CartState

export type AddProductAction = {
  product: Product
}

export type SubProductAction = {
  productId: string
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (
      state,
      { payload: { product } }: PayloadAction<AddProductAction>,
    ) => {
      const existingProductIndex = state.products.findIndex(
        item => item.id === product.id,
      )

      if (existingProductIndex === -1) {
        state.products.push({
          id: product.id,
          image: product.image,
          name: product.name,
          price: product.price,
          count: 1,
        })
      } else {
        const existingProduct = state.products[existingProductIndex]

        existingProduct.count = existingProduct.count + 1
      }

      state.totalPrice += product.price.withsale ?? product.price.full

      return state
    },
    subProduct: (
      state,
      { payload: { productId } }: PayloadAction<SubProductAction>,
    ) => {
      const existingProductIndex = state.products.findIndex(
        product => product.id === productId,
      )

      if (existingProductIndex !== -1) {
        const product = state.products[existingProductIndex]

        if (product.count > 1) {
          product.count = product.count - 1
        } else {
          state.products.splice(existingProductIndex, 1)
        }

        state.totalPrice -= product.price.withsale ?? product.price.full
      }

      return state
    },
    removeAll: () => {
      return { products: [], totalPrice: 0 }
    },
  },
})

export const { addProduct, subProduct, removeAll } = cartSlice.actions

export default cartSlice.reducer
