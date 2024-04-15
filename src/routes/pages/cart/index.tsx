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
import type { RecipientData } from '@models/order'
import { NAVIGATION_ROUTES } from '@routes/routes'
import {
  addCartProduct,
  removeAll,
  removeProduct,
  subProduct,
} from '@stores/features/cartSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import CartEmptyPage from './CartEmpty'
import { ORDER_ID } from './OrderCheckouted'

const CartPage = () => {
  const navigation = useNavigate()

  const dispatch = useStoreDispatch()
  const { products, totalPrice, discount } = useStoreSelector(
    state => state.cart,
  )

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<RecipientData>({
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      payment: 'cash',
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

  // TODO in progress
  const onSubmitOrder = handleSubmit(data => {
    console.log({ data })

    clearCartOfProducts()
    reset()

    navigation(NAVIGATION_ROUTES.orderCheckouted(ORDER_ID), { replace: true })
  })

  const inputs = [
    {
      ...register('name', { required: true }),
      placeholder: 'Name',
    },
    {
      type: 'tel',
      ...register('phone', { required: true }),
      placeholder: 'Phone number',
    },
    {
      required: true,
      ...register('address.street', { required: true }),
      placeholder: 'Street address',
      containerStyle: 'w-3/5',
    },
    {
      ...register('address.building'),
      placeholder: 'Building',
      containerStyle: 'w-1/5',
    },
    {
      ...register('address.appart'),
      placeholder: 'Appart./Office',
      containerStyle: 'w-1/5',
    },
    {
      ...register('address.floor'),
      placeholder: 'Floor',
      containerStyle: 'w-3/5',
    },
    {
      ...register('address.entrance'),
      placeholder: 'Entrance',
      containerStyle: 'w-1/5',
    },
    {
      ...register('address.intercom'),
      placeholder: 'Intercom',
      containerStyle: 'w-1/5',
    },
    {
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
            right={{
              className:
                'text-transparent bg-clip-text bg-gradient-to-r from-dark_gray to-dark_red',
              title: 'Sign In',
              onPress: () => {},
            }}
          />
          <div className="flex flex-row gap-[30px]">
            {inputs.slice(0, 2).map(input => (
              <Input key={getInputKey(input.name)} {...input} required />
            ))}
          </div>
          <div className="flex grow flex-col mt-[60px] gap-[30px]">
            <div className="flex flex-row gap-[30px] w-full">
              {inputs.slice(2, 5).map(input => (
                <Input key={getInputKey(input.name)} {...input} />
              ))}
            </div>
            <div className="flex flex-row gap-[30px] w-full">
              {inputs.slice(5, 8).map(input => (
                <Input key={getInputKey(input.name)} {...input} />
              ))}
            </div>

            <div className="flex flex-row mt-[60px] gap-[30px] w-full">
              {inputs.slice(8, 9).map(input => (
                <Input key={getInputKey(input.name)} {...input} />
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
