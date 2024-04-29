import { useGroupedProductsQuery } from '@api'
import { ProductList } from '@components/organisms'
import type { Product } from '@models/products'
import { NAVIGATION_ROUTES, type CategoryRouteParams } from '@routes/routes'
import { addProduct, subProduct } from '@stores/features/cartSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const CategoryPage = () => {
  const navigation = useNavigate()
  const { categoryId } = useParams<CategoryRouteParams>()

  const dispatch = useStoreDispatch()
  const cartProducts = useStoreSelector(state => state.cart.products)

  const groupedProductsQuery = useGroupedProductsQuery()

  const products = useMemo(() => {
    const category = groupedProductsQuery.groupedProducts.find(
      category => category.id === categoryId,
    )

    return category ?? null
  }, [categoryId])

  if (!categoryId || !products) {
    return <Navigate to={NAVIGATION_ROUTES.home} replace />
  }

  const navigateToCategory = (id: string) =>
    navigation(NAVIGATION_ROUTES.category(id))

  const onAddProduct = (product: Product) => {
    dispatch(addProduct({ product }))
  }

  const onSubProduct = (product: Product) => {
    dispatch(subProduct({ productId: product.id }))
  }

  return (
    <>
      <ProductList
        data={[products]}
        selectedData={cartProducts}
        onPressMore={navigateToCategory}
        onAddProduct={onAddProduct}
        onSubProduct={onSubProduct}
      />
    </>
  )
}

export default CategoryPage
