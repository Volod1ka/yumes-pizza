import router from '@routes'
import { RouterProvider } from 'react-router-dom'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

// TODO remove (now it's for checking of elements render)
const SHOWN_COMPONENTS = false

// TODO remove
const Components = () => {
  return (
    <div className="flex flex-col px-10 w-screen h-screen items-center justify-center gap-3">
      <div />
    </div>
  )
}

const App = () => {
  return SHOWN_COMPONENTS ? <Components /> : <RouterProvider router={router} />
}

export default App
