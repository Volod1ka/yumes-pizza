import type { CartProduct } from '@models/cart'
import type { Product } from '@models/products'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type CartState = {
  products: CartProduct[]
  totalPrice: number
  discount: number
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
  discount: 0,
} satisfies CartState

export type AddProductAction = {
  product: Product
}

export type IdProductAction = {
  productId: string
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartProduct: (
      state,
      { payload: { productId } }: PayloadAction<IdProductAction>,
    ) => {
      const existingProductIndex = state.products.findIndex(
        item => item.id === productId,
      )

      if (existingProductIndex === -1) {
        return state
      }

      const existingProduct = state.products[existingProductIndex]

      existingProduct.count = existingProduct.count + 1

      if (existingProduct.price.selling) {
        state.discount +=
          existingProduct.price.full - existingProduct.price.selling
      }

      state.totalPrice +=
        existingProduct.price.selling ?? existingProduct.price.full

      return state
    },
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
          stock: product.stock,
          count: 1,
        })
      } else {
        const existingProduct = state.products[existingProductIndex]

        existingProduct.count = existingProduct.count + 1
      }

      if (product.price.selling) {
        state.discount += product.price.full - product.price.selling
      }

      state.totalPrice += product.price.selling ?? product.price.full

      return state
    },
    subProduct: (
      state,
      { payload: { productId } }: PayloadAction<IdProductAction>,
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

        if (product.price.selling) {
          state.discount -= product.price.full - product.price.selling
        }

        state.totalPrice -= product.price.selling ?? product.price.full
      }

      return state
    },
    removeProduct: (
      state,
      { payload: { productId } }: PayloadAction<IdProductAction>,
    ) => {
      const existingProductIndex = state.products.findIndex(
        product => product.id === productId,
      )

      if (existingProductIndex === -1) {
        return state
      }

      const existingProduct = state.products.splice(existingProductIndex, 1)[0]

      if (existingProduct.price.selling) {
        state.discount -=
          (existingProduct.price.full - existingProduct.price.selling) *
          existingProduct.count
      }

      state.totalPrice -=
        (existingProduct.price.selling ?? existingProduct.price.full) *
        existingProduct.count

      return state
    },
    removeAll: () => {
      return { products: [], totalPrice: 0, discount: 0 }
    },
  },
})

export const {
  addProduct,
  addCartProduct,
  subProduct,
  removeProduct,
  removeAll,
} = cartSlice.actions

export default cartSlice.reducer
