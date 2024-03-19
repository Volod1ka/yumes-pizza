import { CartButton, IconButton } from '@components/molecules/buttons'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { NavLink } from 'react-router-dom'

export const setNavStateStyle = (isActive: boolean) =>
  isActive ? 'shadow-md-red' : undefined

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex px-10 py-12 max-sm:px-5 items-center bg-white">
        <div className="flex-1 max-sm:hidden" />

        <div className="shrink-0 justify-center">
          <NavLink to={NAVIGATION_ROUTES.home}>
            <h1 className="text-5xl text-dark_gray">Yumes Pizza</h1>
          </NavLink>
        </div>

        <div className="flex flex-1 gap-5 justify-end">
          <NavLink to={NAVIGATION_ROUTES.cart}>
            {({ isActive }) => (
              <CartButton className={setNavStateStyle(isActive)} />
            )}
          </NavLink>

          <NavLink to={NAVIGATION_ROUTES.search}>
            {({ isActive }) => (
              <IconButton
                icon="SearchIcon"
                className={setNavStateStyle(isActive)}
              />
            )}
          </NavLink>

          <IconButton icon="UserIcon" />
        </div>
      </div>
    </header>
  )
}

export default Header
