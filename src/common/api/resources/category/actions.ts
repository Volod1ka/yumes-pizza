import httpClient from '@api/httpClient'
import { MOCK_FOOD_CATEGORIES } from '@mocks'
import type { Category } from '@models/products'
import { requestWithMock } from '@tools/common'

const getCategories = async (): Promise<Category[]> =>
  requestWithMock(async () => {
    const { data } = await httpClient.get<Category[]>('categories')

    return data
  }, MOCK_FOOD_CATEGORIES)

export default {
  getCategories,
}
