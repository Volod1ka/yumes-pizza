import { Price } from '@components/atoms'
import { CategoryLine } from '@components/molecules'
import { Button } from '@components/molecules/buttons'
import { Input, RadioButton } from '@components/molecules/form'
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
    <div className="flex flex-row pb-20 px-5 gap-[30px] max-lg:flex-col max-lg:gap-0">
      <div className="w-1/2 max-lg:w-auto">
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
      </div>

      <div className="w-1/2 mb-auto p-[30px] shadow-md rounded-[20px] max-lg:mt-2 max-lg:w-auto ">
        <form>
          <CategoryLine
            title="Recipient data"
            titleAlign="left"
            right={{
              className:
                'text-transparent bg-clip-text bg-gradient-to-r from-dark_gray to-dark_red',
              title: 'Sign In',
              onPress: () => {},
            }}
          />

          <div className="flex flex-row gap-[30px]">
            <Input required id="name" name="name" placeholder="Name" />
            <Input
              required
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
            />
          </div>

          <div className="flex grow flex-col mt-[60px] gap-[30px]">
            <div className="flex flex-row gap-[30px] w-full">
              <Input
                required
                placeholder="Street address"
                containerStyle="w-3/5"
              />
              <Input required placeholder="Building" containerStyle="w-1/5" />
              <Input placeholder="Appart./Office" containerStyle="w-1/5" />
            </div>
            <div className="flex flex-row gap-[30px] w-full">
              <Input placeholder="Floor" containerStyle="w-3/5" />
              <Input placeholder="Entrance" containerStyle="w-1/5" />
              <Input placeholder="Intercom" containerStyle="w-1/5" />
            </div>

            <div className="flex flex-row mt-[60px] gap-[30px] w-full">
              <Input placeholder="Details to order" />
            </div>
          </div>

          <CategoryLine
            className="mt-14"
            title="Terms of payment"
            titleAlign="left"
          />

          <div className="flex flex-col mt-[30px] gap-[30px]">
            <RadioButton
              checked
              radioGroup="payment"
              name="payment"
              value="cash"
              label="Payment in cash"
            />
            <RadioButton
              radioGroup="payment"
              name="payment"
              value="terminal"
              label="Payment by the terminal"
            />
          </div>

          <div className="flex flex-row justify-end">
            <Button label="Make order" disabled />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CartPage
