import { NewsSwiper, ProductList } from '@components/organisms'
import { MOCK_NEWS, MOCK_PRODUCT_WITH_CATEGORIES } from '@mocks'
import type { Product } from '@models/products'
import { NAVIGATION_ROUTES } from '@routes/routes'
import { addProduct, subProduct } from '@stores/features/cartSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigation = useNavigate()

  const dispatch = useStoreDispatch()
  const cartProducts = useStoreSelector(state => state.cart.products)

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
      {MOCK_NEWS.length > 0 && <NewsSwiper news={MOCK_NEWS} />}

      <ProductList
        data={MOCK_PRODUCT_WITH_CATEGORIES}
        selectedData={cartProducts}
        onPressMore={navigateToCategory}
        onAddProduct={onAddProduct}
        onSubProduct={onSubProduct}
        withMore
      />
    </>
  )
}

export default HomePage
