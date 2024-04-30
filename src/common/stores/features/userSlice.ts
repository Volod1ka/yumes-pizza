import type { User } from '@models/user'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserState = {
  user: User | null
}

const initialState: UserState = {
  user: null,
} satisfies UserState

export type SetUserDataAction = {
  user: User
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (
      state,
      { payload: { user } }: PayloadAction<SetUserDataAction>,
    ) => {
      state.user = user

      return state
    },
    logoutUser: () => {
      return { user: null }
    },
  },
})

export const { logoutUser, setUserData } = userSlice.actions

export default userSlice.reducer
