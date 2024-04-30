import { useUserQuery } from '@api'
import { CategoryLine } from '@components/molecules'
import { OrderHistoryList } from '@components/organisms'
import { MOCK_HISTORY_ORDERS } from '@mocks'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { useStoreSelector } from '@stores/store'
import { Navigate } from 'react-router-dom'

const ProfilePage = () => {
  const { logout } = useUserQuery()
  const user = useStoreSelector(store => store.user.user)

  if (!user) {
    return <Navigate to={NAVIGATION_ROUTES.signIn} replace />
  }

  // TODO: to check error handling (ErrorBoundary)
  // throw new Error('h4lo')

  return (
    <div className="w-full max-w-[860px] mx-auto max-lg:px-5">
      <CategoryLine
        title={`${user.name}'s order history`}
        right={{
          className:
            'text-transparent bg-clip-text bg-gradient-to-r from-dark_gray to-dark_red',
          title: 'Logout',
          onPress: logout,
        }}
      />
      // TODO: remove mock
      <OrderHistoryList data={MOCK_HISTORY_ORDERS} />
    </div>
  )
}

export default ProfilePage
