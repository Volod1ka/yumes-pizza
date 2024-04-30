import httpClient from '@api/httpClient'
import type { SignInForm, SignUpForm } from '@hooks/form'
import type { User } from '@models/user'

export type RegRequestResult = {
  success: boolean
  message: string
}

export type LoginResultRequest = RegRequestResult & {
  user?: User
}

export const regUser = async (user: SignUpForm) => {
  return await httpClient.post<RegRequestResult>('user-reg', { ...user })
}

export const loginUser = async (user: SignInForm) => {
  return await httpClient.post<LoginResultRequest>('user-login', { ...user })
}
