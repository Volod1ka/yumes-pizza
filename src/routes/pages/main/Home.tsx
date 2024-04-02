import { CategoryPills, NewsSwiper, ProductList } from '@components/organisms'
import {
  MOCK_FOOD_CATEGORIES,
  MOCK_NEWS,
  MOCK_PRODUCT_WITH_CATEGORIES,
} from '@mocks'
import type { Category } from '@models/products'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { updateCategory } from '@stores/features/categorySlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigation = useNavigate()

  const dispatch = useStoreDispatch()
  const selectedCategory = useStoreSelector(
    state => state.category.selectedCategory,
  )

  const navigateToCategory = (id: string) =>
    navigation(NAVIGATION_ROUTES.category(id))

  const onPressCategory = ({ id }: Category) => {
    dispatch(updateCategory({ selectedCategory: id }))
    // TODO
    // navigateToCategory(id)
  }

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 px-[114px] max-lg:px-0">
        <CategoryPills
          categories={MOCK_FOOD_CATEGORIES}
          selectedCategoryId={selectedCategory}
          onSelect={onPressCategory}
        />
      </div>

      {MOCK_NEWS.length > 0 && (
        <NewsSwiper className="pt-[30px]" news={MOCK_NEWS} />
      )}

      <ProductList
        data={MOCK_PRODUCT_WITH_CATEGORIES}
        onPressMore={navigateToCategory}
        withMore
      />
    </div>
  )
}

export default HomePage
