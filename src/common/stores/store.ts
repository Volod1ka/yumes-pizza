import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'
import cartSlice from './features/cartSlice'
import userSlice from './features/userSlice'

const store = configureStore({
  reducer: combineReducers({
    cart: cartSlice,
    user: userSlice,
  }),
})

export const useStoreDispatch: () => typeof store.dispatch = useDispatch
export const useStoreSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector

export default store
