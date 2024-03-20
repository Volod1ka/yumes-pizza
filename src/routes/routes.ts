export const NAVIGATION_ROUTES = {
  home: '/',
  category: (categoryId: string | null = null) =>
    categoryId ? `/category/${categoryId}` : '/category',
  search: '/search',
  // auth
  singIn: '/signIn',
  signUp: '/signUp',
  // cart
  cart: '/cart',
  orderCheckouted: '/cart/:idOrder/success',
  // else
  notFound: '*',
} as const
