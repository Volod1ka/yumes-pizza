import { useUserQuery } from '@api'
import { CategoryLine } from '@components/molecules'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { useStoreSelector } from '@stores/store'
import { Navigate } from 'react-router-dom'

const ProfilePage = () => {
  const { logout } = useUserQuery()
  const user = useStoreSelector(store => store.user.user)

  if (!user) {
    return <Navigate to={NAVIGATION_ROUTES.signIn} replace />
  }

  // TODO to check error handling (ErrorBoundary)
  // throw new Error('h4lo')

  return (
    <div className="px-5">
      <CategoryLine
        title={`${user.name}'s oreder history`}
        right={{
          className:
            'text-transparent bg-clip-text bg-gradient-to-r from-dark_gray to-dark_red',
          title: 'Logout',
          onPress: logout,
        }}
      />
    </div>
  )
}

export default ProfilePage
