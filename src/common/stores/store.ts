import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'
import categorySlice from './features/categorySlice'

const store = configureStore({
  reducer: combineReducers({
    category: categorySlice,
  }),
})

export const useStoreDispatch: () => typeof store.dispatch = useDispatch
export const useStoreSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector

export default store
