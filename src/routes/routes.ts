export const NAVIGATION_ROUTES = {
  home: '/',
  category: (categoryId?: string) =>
    typeof categoryId === 'string'
      ? `/category/${categoryId}`
      : `/category/:categoryId`,
  // auth
  singIn: '/signIn',
  signUp: '/signUp',
  // cart
  cart: '/cart',
  orderCheckouted: '/cart/:idOrder/success',
  // else
  notFound: '*',
} as const

export type CategoryRouteParams = {
  categoryId: string
}

export type OrderCheckoutedParams = {
  idOrder: string
}
