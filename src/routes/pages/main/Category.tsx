import { ProductList } from '@components/organisms'
import { MOCK_PRODUCT_WITH_CATEGORIES } from '@mocks'
import { NAVIGATION_ROUTES, type CategoryRouteParams } from '@routes/routes'
import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const CategoryPage = () => {
  const navigation = useNavigate()
  const { categoryId } = useParams<CategoryRouteParams>()

  const products = useMemo(() => {
    const category = MOCK_PRODUCT_WITH_CATEGORIES.find(
      category => category.id === categoryId,
    )

    return category ?? null
  }, [categoryId])

  if (!categoryId || !products) {
    return <Navigate to={NAVIGATION_ROUTES.home} replace />
  }

  const navigateToCategory = (id: string) =>
    navigation(NAVIGATION_ROUTES.category(id))

  return (
    <>
      <ProductList data={[products]} onPressMore={navigateToCategory} />
    </>
  )
}

export default CategoryPage
