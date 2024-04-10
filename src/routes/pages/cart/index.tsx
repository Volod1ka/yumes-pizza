import { CategoryLine } from '@components/molecules'
import CartEmptyPage from './CartEmpty'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import {
  addCartProduct,
  removeAll,
  removeProduct,
  subProduct,
} from '@stores/features/cartSlice'
import { CartItem } from '@components/organisms'

const CartPage = () => {
  const dispatch = useStoreDispatch()
  const { products, totalPrice } = useStoreSelector(state => state.cart)

  if (products.length === 0) {
    return <CartEmptyPage />
  }

  const clearAll = () => {
    dispatch(removeAll())
  }

  const add = (productId: string) => {
    dispatch(addCartProduct({ productId }))
  }

  const sub = (productId: string) => {
    dispatch(subProduct({ productId }))
  }

  const remove = (productId: string) => {
    dispatch(removeProduct({ productId }))
  }

  return (
    <div>
      <CategoryLine
        title="My order"
        titleAlign="left"
        right={{ title: 'clear all', onPress: clearAll }}
      />
      {products.map(product => (
        <CartItem
          product={product}
          stock={99}
          onAdd={add}
          onSub={sub}
          onRemove={remove}
        />
      ))}
      <hr />
      <p>Total price: {totalPrice}</p>
    </div>
  )
}

export default CartPage
