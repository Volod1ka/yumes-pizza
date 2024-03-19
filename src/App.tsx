import { CategoryItem } from '@components/molecules'
import router from '@routes'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

// TODO remove (now it's for checking of elements render)
const SHOWN_COMPONENTS = false

// TODO remove
const Components = () => {
  const [selected, setSelect] = useState<boolean>(false)

  return (
    <div className="flex flex-col px-10 w-screen h-screen items-center justify-center gap-3">
      <CategoryItem
        id="dadas"
        name="Category item"
        selected={selected}
        onSelect={() => setSelect(prev => !prev)}
      />
    </div>
  )
}

const App = () => {
  return SHOWN_COMPONENTS ? <Components /> : <RouterProvider router={router} />
}

export default App
