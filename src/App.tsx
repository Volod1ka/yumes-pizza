import { useUserQuery } from '@api'
import router from '@routes'
import store from '@stores/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

const Root = () => {
  useUserQuery()

  return <RouterProvider router={router} />
}

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

export default App
