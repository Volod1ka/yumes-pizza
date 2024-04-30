import { userApi } from '.'
import type { SignInForm, SignUpForm } from '@hooks/form'
import { useStoreDispatch } from '@stores/store'
import { setUserData, logoutUser } from '@stores/features/userSlice'

const useUserQuery = () => {
  const dispatch = useStoreDispatch()

  const reg = async (user: SignUpForm) => {
    return await userApi.regUser(user)
  }

  const login = async (user: SignInForm) => {
    const result = await userApi.loginUser(user)

    console.log(result.data.user)

    if (result.data.user) {
      dispatch(setUserData({ user: result.data.user }))
    }

    return result
  }

  const logout = () => {
    dispatch(logoutUser())
  }

  return { reg, login, logout }
}

export default useUserQuery
