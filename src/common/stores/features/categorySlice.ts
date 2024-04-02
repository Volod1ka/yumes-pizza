import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type CategoryState = {
  selectedCategory: string | null
}

const initialState: CategoryState = {
  selectedCategory: null,
}

export type UpdateCategoryAction = Pick<CategoryState, 'selectedCategory'>

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateCategory: (state, action: PayloadAction<UpdateCategoryAction>) => {
      state.selectedCategory = action.payload.selectedCategory
    },
  },
})

export const { updateCategory } = categorySlice.actions

export default categorySlice.reducer
