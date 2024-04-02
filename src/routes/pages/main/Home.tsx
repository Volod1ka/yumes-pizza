import { CategoryPills, NewsSwiper } from '@components/organisms'
import { MOCK_FOOD_CATEGORIES, MOCK_NEWS } from '@mocks'
import type { Category } from '@models/products'
import { updateCategory } from '@stores/features/categorySlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
// import { NAVIGATION_ROUTES } from '@routes/routes'
// import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  // const navigation = useNavigate()
  const selectedCategory = useStoreSelector(
    state => state.category.selectedCategory,
  )
  const dispatch = useStoreDispatch()

  const onPressCategory = ({ id }: Category) => {
    dispatch(updateCategory({ selectedCategory: id }))
    // TODO
    // navigation(NAVIGATION_ROUTES.category(id))
  }

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 px-5 max-lg:px-0">
        <CategoryPills
          categories={MOCK_FOOD_CATEGORIES}
          selectedCategoryId={selectedCategory}
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
