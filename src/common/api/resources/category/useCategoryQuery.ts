import type { Category } from '@models/products'
import { useState } from 'react'
import categoriesApi from './actions'

const initValue = await categoriesApi.getCategories()

const useCategoryQuery = () => {
  const [categories] = useState<Category[]>(initValue)

  return { categories }
}

export default useCategoryQuery
