import type { SignInForm, SignUpForm } from '@hooks/form'
import type { User } from '@models/user'
import { clearAll } from '@stores/features/orderSlice'
import { logoutUser, setUserData } from '@stores/features/userSlice'
import { useStoreDispatch } from '@stores/store'
import { useEffect } from 'react'
import { userApi } from '.'

export const STORAGE_KEY_USER = 'user_storage'

const reg = async (user: SignUpForm) => {
  return userApi.regUser(user)
}

const useUserQuery = () => {
  const dispatch = useStoreDispatch()

  useEffect(() => {
    const localUser = localStorage.getItem(STORAGE_KEY_USER)

    if (localUser) {
      try {
        const user = JSON.parse(localUser) as User

        dispatch(setUserData({ user }))
      } catch {}
    }
  }, [])

  const login = async (user: SignInForm) => {
    const result = await userApi.loginUser(user)

    if (result.data.user) {
      dispatch(setUserData({ user: result.data.user }))
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(result.data.user))
    }

    return result
  }

  const logout = () => {
    dispatch(logoutUser())
    dispatch(clearAll())
    localStorage.removeItem(STORAGE_KEY_USER)
  }

  return { reg, login, logout }
}

export default useUserQuery
