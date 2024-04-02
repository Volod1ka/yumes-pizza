import router from '@routes'
import store from '@stores/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
