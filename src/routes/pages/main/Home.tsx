import { NewsSwiper, ProductList } from '@components/organisms'
import { MOCK_NEWS, MOCK_PRODUCT_WITH_CATEGORIES } from '@mocks'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigation = useNavigate()

  const navigateToCategory = (id: string) =>
    navigation(NAVIGATION_ROUTES.category(id))

  return (
    <>
      {MOCK_NEWS.length > 0 && <NewsSwiper news={MOCK_NEWS} />}

      <ProductList
        data={MOCK_PRODUCT_WITH_CATEGORIES}
        onPressMore={navigateToCategory}
        withMore
      />
    </>
  )
}

export default HomePage
