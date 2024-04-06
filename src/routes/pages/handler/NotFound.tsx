import { Animation } from '@components/atoms'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { Navigate, useLocation } from 'react-router-dom'

const NotFoundPage = () => {
  const { pathname } = useLocation()

  if (NAVIGATION_ROUTES.category().includes(pathname)) {
    return <Navigate to={NAVIGATION_ROUTES.home} replace />
  }

  return (
    <div className="flex h-full items-center justify-center">
      <Animation name="PageNoFoundLottie" width="49%" />
    </div>
  )
}

export default NotFoundPage
