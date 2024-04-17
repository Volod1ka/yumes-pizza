export const NAVIGATION_ROUTES = {
  // main
  home: '/',
  category: (categoryId?: string) =>
    typeof categoryId === 'string'
      ? `/category/${categoryId}`
      : `/category/:categoryId`,
  // auth
  signIn: '/profile/signIn',
  signUp: '/profile/signUp',
  // cart
  cart: '/cart',
  orderCheckouted: (idOrder?: string) =>
    typeof idOrder === 'string'
      ? `/cart/${idOrder}/success`
      : '/cart/:idOrder/success',
  // profile
  profile: '/profile',
  // orderHistory: '/profile/history',
  // else
  notFound: '*',
} as const

export type CategoryRouteParams = {
  categoryId: string
}

export type OrderCheckoutedParams = {
  idOrder: string
}
