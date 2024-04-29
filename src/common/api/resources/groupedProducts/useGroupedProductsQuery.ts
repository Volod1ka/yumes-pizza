import type { GroupedProducts } from '@models/products'
import { useState } from 'react'
import { groupedProductsApi } from '.'

const initValue = await groupedProductsApi.getGroupedProducts()

const useGroupedProductsQuery = () => {
  const [groupedProducts] = useState<GroupedProducts[]>(initValue)

  return { groupedProducts }
}

export default useGroupedProductsQuery
