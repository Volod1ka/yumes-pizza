import { Button } from '@components/molecules/buttons'
import { NAVIGATION_ROUTES } from '@routes/routes'
import {
  isRouteErrorResponse,
  useAsyncError,
  useNavigate,
  useRouteError,
} from 'react-router-dom'

const ErrorPage = () => {
  const routeError = useRouteError()
  const asyncError = useAsyncError()
  const navigation = useNavigate()

  const error = routeError ?? asyncError

  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : JSON.stringify(error)

  return (
    <div className="flex flex-1 p-5 h-svh items-center justify-center">
      <div className="flex flex-col gap-5 px-10 py-5 items-center justify-center rounded-[20px] shadow-md overflow-hidden text-center text-dark_gray">
        <h1 className="text-heading1 font-bold">
          Oops! You have found the lost store!
        </h1>
        <h6 className="text-heading6 font-bold">
          Sorry, something went wrong. We'll clean up and try again.
        </h6>
        <p className="mt-4 text-description text-thin_gray font-medium">
          {message}
        </p>

        <Button
          label="Go to home"
          onClick={() => navigation(NAVIGATION_ROUTES.home)}
        />
      </div>
    </div>
  )
}

export default ErrorPage
