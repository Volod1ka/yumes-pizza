import { Footer, Header } from '@components/organisms/navigation'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <div className="flex flex-col min-h-svh bg-white overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <div className="max-w-[1440px] mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LayoutPage
