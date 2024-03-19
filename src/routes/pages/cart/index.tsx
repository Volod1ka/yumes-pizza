import CartEmptyPage from './CartEmpty'

// TODO remove
const IS_EMPTY_PAGE: boolean = !true

const CartPage = () => {
  if (IS_EMPTY_PAGE) {
    return <CartEmptyPage />
  }

  return <div>Cart Page</div>
}

export default CartPage
