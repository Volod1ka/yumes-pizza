import { Animation } from '@components/atoms'
import { Button } from '@components/molecules/buttons'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

// TODO remove
const ORDER_ID: string = '1234'

const OrderCheckoutedPage = () => {
  const navigation = useNavigate()
  const { idOrder } = useParams<{ idOrder: string }>()

  if (idOrder !== ORDER_ID) {
    return <Navigate to={NAVIGATION_ROUTES.cart} replace />
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col pb-3 mb-20 items-center">
        <Animation name="CartDoneLottie" height={125} loop={false} />

        <div className="flex flex-col py-14 gap-4">
          <p className="text-heading6 text-dark_gray text-center font-bold">
            Thank you for your purchase!
          </p>
          <p className="text-heading6 text-dark_gray text-center font-medium">
            Your order # is: {idOrder}
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
