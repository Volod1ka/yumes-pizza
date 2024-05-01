import { Animation } from '@components/atoms'
import { Button } from '@components/molecules/buttons'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { useStoreSelector } from '@stores/store'
import { Navigate, useNavigate } from 'react-router-dom'

const OrderCheckoutedPage = () => {
  const navigation = useNavigate()

  const orderId = useStoreSelector(store => store.order.checkoutedOrder)

  if (!orderId) {
    return <Navigate to={NAVIGATION_ROUTES.cart} replace />
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col my-auto pb-3 items-center">
        <Animation name="CartDoneLottie" style={{ height: 125 }} loop={false} />

        <div className="flex flex-col py-14 gap-4">
          <p className="text-heading6 text-dark_gray text-center font-bold">
            Thank you for your purchase!
          </p>
          <p className="text-heading6 text-dark_gray text-center font-medium">
            Your order # is: {orderId}
          </p>
        </div>

        <Button
          label="Start shopping"
          onClick={() => navigation(NAVIGATION_ROUTES.home, { replace: true })}
        />
      </div>
    </div>
  )
}

export default OrderCheckoutedPage
