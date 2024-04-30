import { NAVIGATION_ROUTES } from '@routes/routes'
import { useStoreSelector } from '@stores/store'
import { Navigate } from 'react-router-dom'

const ProfilePage = () => {
  const user = useStoreSelector(store => store.user.user)

  if (!user) {
    return <Navigate to={NAVIGATION_ROUTES.signIn} replace />
  }

  // TODO to check error handling (ErrorBoundary)
  // throw new Error('h4lo')

  return <div>{`Profile Page: ${JSON.stringify(user)}`}</div>
}

export default ProfilePage
