import { Footer, Header } from '@components/organisms/navigation'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <>
      <Header />
      <main className="grow w-full max-w-[1440px] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default LayoutPage
