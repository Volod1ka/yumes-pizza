import { useOrderQuery } from '@api'
import { Price } from '@components/atoms'
import { CategoryLine } from '@components/molecules'
import { Button } from '@components/molecules/buttons'
import {
  Input,
  RadioButton,
  type InputProps,
  type RadioButtonProps,
} from '@components/molecules/form'
import { getInputKey } from '@components/molecules/form/Input'
import { getRadioButtonKey } from '@components/molecules/form/RadioButton'
import { CartItem } from '@components/organisms'
import { useCartForm } from '@hooks/form'
import type { Order, OrderProduct } from '@models/order'
import { NAVIGATION_ROUTES } from '@routes/routes'
import {
  addCartProduct,
  removeAll,
  removeProduct,
  subProduct,
} from '@stores/features/cartSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import { useNavigate } from 'react-router-dom'
import CartEmptyPage from './CartEmpty'

const CartPage = () => {
  const navigation = useNavigate()

  const dispatch = useStoreDispatch()
  const { user, products, totalPrice, discount } = useStoreSelector(
    ({ cart, user: { user } }) => ({ ...cart, user }),
  )

  const orderQuery = useOrderQuery()

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
    hasInvalideField,
  } = useCartForm({
    name: user?.name,
    phone: user?.phone,
    address: {
      street: user?.address?.street,
      building: user?.address?.building,
      appart: user?.address?.appart ?? undefined,
      entrance: user?.address?.entrance ?? undefined,
      floor: user?.address?.floor ?? undefined,
      intercom: user?.address?.intercom ?? undefined,
    },
  })

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

  const onSubmitOrder = handleSubmit(
    async ({ address, details, name, payment, phone }) => {
      if (!isValid) {
        return
      }

      const orderProducts: OrderProduct[] = products.map(
        ({ id, count, price }) => ({
          id,
          count,
          price: (price.selling ?? price.full) * count,
        }),
      ) satisfies OrderProduct[]

      const newOrder: Order = {
        products: orderProducts,
        totalPrice,
        discount,
        id_user: user?.id ?? null,
        name,
        phone,
        details: details || null,
        address: {
          appart: address.appart || null,
          building: address.building,
          entrance: address.entrance || null,
          floor: address.floor || null,
          intercom: address.intercom || null,
          street: address.street,
        },
        payment,
      }

      const request = await orderQuery.createOrder(newOrder)

      if (!request.id) {
        alert(request.message)
        return
      }

      await orderQuery.checkoutOrder(request.id)

      clearCartOfProducts()
      reset()

      await navigation(NAVIGATION_ROUTES.orderCheckouted, { replace: true })
    },
  )

  const inputs = [
    {
      maxLength: 50,
      ...register('name', { required: true }),
      placeholder: 'Name',
    },
    {
      maxLength: 11,
      type: 'tel',
      ...register('phone', { required: true }),
      placeholder: 'Phone number',
    },
    {
      maxLength: 60,
      required: true,
      ...register('address.street', { required: true }),
      placeholder: 'Street address',
      containerStyle: 'w-3/4',
    },
    {
      maxLength: 10,
      required: true,
      ...register('address.building', { required: true }),
      placeholder: 'Building',
      containerStyle: 'w-1/4',
    },
    {
      maxLength: 5,
      ...register('address.appart'),
      placeholder: 'Appart./Office',
    },
    {
      maxLength: 2,
      ...register('address.floor'),
      placeholder: 'Floor',
    },
    {
      maxLength: 5,
      ...register('address.entrance'),
      placeholder: 'Entrance',
    },
    {
      maxLength: 10,
      ...register('address.intercom'),
      placeholder: 'Intercom',
    },
    {
      maxLength: 150,
      multiple: true,
      ...register('details'),
      placeholder: 'Details to order',
    },
  ] satisfies InputProps[]

  const radioButtons = [
    {
      value: 'cash',
      ...register('payment', { required: true }),
      label: 'Payment in cash',
    },
    {
      value: 'terminal',
      ...register('payment', { required: true }),
      label: 'Payment by the terminal',
    },
  ] satisfies RadioButtonProps[]

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
        <form onSubmit={onSubmitOrder}>
          <CategoryLine
            title="Recipient data"
            titleAlign="left"
            right={
              user
                ? undefined
                : {
                    className:
                      'text-transparent bg-clip-text bg-gradient-to-r from-dark_gray to-dark_red',
                    title: 'Sign In',
                    onPress: () => {
                      navigation(NAVIGATION_ROUTES.signIn)
                    },
                  }
            }
          />
          <div className="flex flex-row gap-[30px]">
            {inputs.slice(0, 2).map(input => (
              <Input
                key={getInputKey(input.name)}
                {...input}
                required
                invalid={hasInvalideField(input.name)}
              />
            ))}
          </div>
          <div className="flex grow flex-col mt-[60px] gap-[30px]">
            <div className="flex flex-row gap-[30px] w-full">
              {inputs.slice(2, 4).map(input => (
                <Input
                  key={getInputKey(input.name)}
                  {...input}
                  invalid={hasInvalideField(input.name)}
                />
              ))}
            </div>
            <div className="flex flex-row gap-[30px] w-full">
              {inputs.slice(4, 8).map(input => (
                <Input
                  key={getInputKey(input.name)}
                  {...input}
                  invalid={hasInvalideField(input.name)}
                  containerStyle="w-1/4"
                />
              ))}
            </div>

            <div className="flex flex-row mt-[60px] gap-[30px] w-full">
              {inputs.slice(8, 9).map(input => (
                <Input
                  key={getInputKey(input.name)}
                  {...input}
                  invalid={hasInvalideField(input.name)}
                />
              ))}
            </div>
          </div>

          <CategoryLine
            className="mt-14"
            title="Terms of payment"
            titleAlign="left"
          />
          <div className="flex flex-col mt-[30px] gap-[30px]">
            {radioButtons.slice(0, 2).map(radioButton => (
              <RadioButton
                key={getRadioButtonKey(radioButton.value)}
                radioGroup="payment"
                {...radioButton}
              />
            ))}
          </div>

          <div className="flex flex-row justify-end">
            <Button type="submit" label="Make order" disabled={!isValid} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CartPage
