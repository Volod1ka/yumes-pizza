import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import {
  CartPage,
  CategoryLayoutPage,
  CategoryPage,
  ErrorPage,
  HomePage,
  MainLayoutPage,
  NotFoundPage,
  OrderCheckoutedPage,
  SignInPage,
  SignUpPage,
} from './pages'
import { NAVIGATION_ROUTES } from './routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={NAVIGATION_ROUTES.home}
      element={<MainLayoutPage />}
      errorElement={<ErrorPage />}
    >
      <Route element={<CategoryLayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path={NAVIGATION_ROUTES.category()} element={<CategoryPage />} />
      </Route>
      <Route path={NAVIGATION_ROUTES.singIn} element={<SignInPage />} />
      <Route path={NAVIGATION_ROUTES.signUp} element={<SignUpPage />} />
      <Route path={NAVIGATION_ROUTES.cart}>
        <Route index element={<CartPage />} />
        <Route
          path={NAVIGATION_ROUTES.orderCheckouted}
          element={<OrderCheckoutedPage />}
        />
      </Route>
      <Route path={NAVIGATION_ROUTES.notFound} element={<NotFoundPage />} />
    </Route>,
  ),
)

export default router
