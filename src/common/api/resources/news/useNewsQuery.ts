import type { News } from '@models/news'
import { useState } from 'react'
import { newsApi } from '.'

const initValue = await newsApi.getNews()

const useNewsQuery = () => {
  const [news] = useState<News[]>(initValue)

  return { news }
}

export default useNewsQuery
