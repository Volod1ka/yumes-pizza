import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import {
  CartPage,
  CategoryPage,
  HomePage,
  LayoutPage,
  OrderCheckoutedPage,
  SignInPage,
  SignUpPage,
} from './pages'
import { NAVIGATION_ROUTES } from './routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={NAVIGATION_ROUTES.home} element={<LayoutPage />}>
      <Route index element={<HomePage />} />
      <Route path={NAVIGATION_ROUTES.singIn} element={<SignInPage />} />
      <Route path={NAVIGATION_ROUTES.signUp} element={<SignUpPage />} />
      <Route path={NAVIGATION_ROUTES.category()} element={<CategoryPage />} />
      <Route path={NAVIGATION_ROUTES.cart}>
        <Route index element={<CartPage />} />
        <Route
          path={NAVIGATION_ROUTES.orderCheckouted}
          element={<OrderCheckoutedPage />}
        />
      </Route>
      // TODO: create not found page
      <Route
        path={NAVIGATION_ROUTES.notFound}
        element={<div>Not found page</div>}
      />
    </Route>,
  ),
)

// TODO
//  <NotFoundPage />
export default router
