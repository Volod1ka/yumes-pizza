import { Price } from '@components/atoms'
import { CategoryLine } from '@components/molecules'
import { Button } from '@components/molecules/buttons'
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
    <div className="pb-20 max-lg:px-5">
      <CategoryLine
        className="mb-[15px]"
        title="My order"
        titleAlign="left"
        right={{ title: 'clear all', onPress: clearCartOfProducts }}
      />
      <div className="flex flex-col gap-5">
        {products.map(product => (
          <CartItem
            key={`cart-producr-${product.id}`}
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

      <div className="mt-2 p-[30px] shadow-md rounded-[20px]">
        <CategoryLine
          className=""
          title="Recipient data"
          titleAlign="left"
          right={{
            className:
              'text-transparent bg-clip-text bg-gradient-to-r from-dark_gray to-dark_red',
            title: 'Sign In',
            onPress: () => {},
          }}
        />

        <form>
          <div />
        </form>

        <CategoryLine
          className="mt-14"
          title="Terms of payment"
          titleAlign="left"
        />

        <div className="flex flex-row justify-end">
          <Button label="Make order" disabled />
        </div>
      </div>
    </div>
  )
}

export default CartPage
