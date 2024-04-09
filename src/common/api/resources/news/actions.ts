import httpClient from '@api/httpClient'
import { MOCK_NEWS } from '@mocks'
import type { News } from '@models/news'
import { requestWithMock } from '@tools/common'

export const getNews = async (): Promise<News[]> =>
  requestWithMock(async () => {
    const { data } = await httpClient.get<News[]>('news')

    return data
  }, MOCK_NEWS)
