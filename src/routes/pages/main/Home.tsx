import { CategoryPills, NewsSwiper } from '@components/organisms'
import { MOCK_FOOD_CATEGORIES, MOCK_NEWS } from '@mocks'
import type { Category } from '@models/products'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigation = useNavigate()

  // TODO move it to redux
  const [category, setCategory] = useState<string | null>(null)

  const onPressCategory = ({ id }: Category) => {
    setCategory(id)
    navigation(NAVIGATION_ROUTES.category(id))
  }

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 px-5 max-lg:px-0">
        <CategoryPills
          categories={MOCK_FOOD_CATEGORIES}
          selectedCategoryId={category}
          onSelect={onPressCategory}
        />
      </div>

      {MOCK_NEWS.length > 0 && (
        <NewsSwiper className="pt-[30px]" news={MOCK_NEWS} />
      )}
    </div>
  )
}

export default HomePage
