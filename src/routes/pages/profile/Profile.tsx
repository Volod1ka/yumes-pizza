import { MOCK_USER } from '@mocks'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { AUTH_USER } from '@tools/common'
import { Navigate } from 'react-router-dom'

const ProfilePage = () => {
  if (!AUTH_USER) {
    return <Navigate to={NAVIGATION_ROUTES.signIn} replace />
  }

  return <div>{`Profile Page: ${JSON.stringify(MOCK_USER)}`}</div>
}

export default ProfilePage
