import router from '@routes'
import store from '@stores/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
