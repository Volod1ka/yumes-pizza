import { Price } from '@components/atoms'
import { CategoryLine } from '@components/molecules'
import { CartItem } from '@components/organisms'
import {
  addCartProduct,
  removeAll,
  removeProduct,
  subProduct,
} from '@stores/features/cartSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import CartEmptyPage from './CartEmpty'

const CartPage = () => {
  const dispatch = useStoreDispatch()
  const { products, totalPrice, discount } = useStoreSelector(
    state => state.cart,
  )

  if (products.length === 0) {
    return <CartEmptyPage />
  }

  const clearCartOfProducts = () => {
    dispatch(removeAll())
  }

  const addProductToList = (productId: string) => {
    dispatch(addCartProduct({ productId }))
  }

  const subProductFromList = (productId: string) => {
    dispatch(subProduct({ productId }))
  }

  const removeProductFromList = (productId: string) => {
    dispatch(removeProduct({ productId }))
  }

  return (
    <div className="px-[114px] max-lg:px-5">
      <CategoryLine
        className="mb-[15px]"
        title="My order"
        titleAlign="left"
        right={{ title: 'clear all', onPress: clearCartOfProducts }}
      />
      <div className="flex flex-col gap-5">
        {products.map(product => (
          <CartItem
            product={product}
            onAdd={addProductToList}
            onSub={subProductFromList}
            onRemove={removeProductFromList}
          />
        ))}
      </div>

      <hr className="mt-24 border-light_gray border-t-2" />
      <div className="flex flex-row gap-5 py-6 justify-end">
        {discount > 0 && <Price label="Discount: " price={discount} />}
        <Price label="Total price: " price={totalPrice} />
      </div>
    </div>
  )
}

export default CartPage
