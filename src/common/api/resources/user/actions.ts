import httpClient from '@api/httpClient'
import type { SignInForm, SignUpForm } from '@hooks/form'
import type { LoginResponse, RegistrationResponse } from '@models/user'

export const registrationUser = async (user: SignUpForm) => {
  return httpClient.post<RegistrationResponse>('user-reg', { ...user })
}

export const loginUser = async (user: SignInForm) => {
  return httpClient.post<LoginResponse>('user-login', { ...user })
}
