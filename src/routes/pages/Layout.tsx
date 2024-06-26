import { Footer, Header } from '@components/organisms/navigation'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <div className="flex flex-col min-h-svh bg-white">
      <Header />
      <div className="flex flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default LayoutPage
