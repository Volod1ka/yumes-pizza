import { CartButton, IconButton } from '@components/molecules/buttons'
import { MOCK_USER } from '@mocks'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { useStoreSelector } from '@stores/store'
import { AUTH_USER } from '@tools/common'
import { NavLink } from 'react-router-dom'

export const setNavStateStyle = (isActive: boolean) =>
  isActive ? 'shadow-md-red' : undefined

const Header = () => {
  const { products, totalPrice } = useStoreSelector(state => state.cart)

  return (
    <header className="sticky top-0 z-50">
      <div className="flex px-10 py-7 max-lg:px-5 items-center bg-white max-w-[1440px] mx-auto">
        <div className="flex-1 max-lg:hidden" />

        <div className="shrink-0 justify-center">
          <NavLink to={NAVIGATION_ROUTES.home}>
            <h1 className="text-5xl text-dark_gray ease-out duration-300 hover:scale-110">
              Yumes Pizza
            </h1>
          </NavLink>
        </div>

        <div className="flex flex-1 gap-5 justify-end">
          <NavLink to={NAVIGATION_ROUTES.cart}>
            {({ isActive }) => (
              <CartButton
                className={setNavStateStyle(isActive)}
                totalPrice={totalPrice}
                count={products.length}
              />
            )}
          </NavLink>

          <NavLink to={NAVIGATION_ROUTES.profile}>
            {({ isActive }) => (
              <IconButton
                icon="UserIcon"
                className={setNavStateStyle(isActive)}
                // TODO
                label={AUTH_USER ? MOCK_USER.name : undefined}
              />
            )}
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
