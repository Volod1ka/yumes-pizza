import httpClient from '@api/httpClient'
import { MOCK_PRODUCT_WITH_CATEGORIES } from '@mocks'
import type { GroupedProducts } from '@models/products'
import { requestWithMock } from '@tools/common'

export const getGroupedProducts = async (): Promise<GroupedProducts[]> =>
  requestWithMock(async () => {
    const { data } = await httpClient.get<GroupedProducts[]>('grouped-products')

    return data
  }, MOCK_PRODUCT_WITH_CATEGORIES)
