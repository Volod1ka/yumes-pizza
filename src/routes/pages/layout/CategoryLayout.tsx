import { useCategoryQuery } from '@api'
import { CategoryPills } from '@components/organisms'
import type { Category } from '@models/products'
import { NAVIGATION_ROUTES, type CategoryRouteParams } from '@routes/routes'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

const CategoryLayoutPage = () => {
  const navigation = useNavigate()
  const { categoryId } = useParams<CategoryRouteParams>()

  const categoryQuery = useCategoryQuery()

  const onPressCategory = ({ id }: Category) => {
    navigation(NAVIGATION_ROUTES.category(id))
  }

  return (
    <>
      <div className="sticky top-[104px] px-[114px] pb-[30px] max-lg:px-5 from-white from-70% to-transparent bg-gradient-to-b z-50">
        <CategoryPills
          categories={categoryQuery.categories}
          selectedCategoryId={categoryId ?? null}
          onSelect={onPressCategory}
        />
      </div>

      <Outlet />
    </>
  )
}

export default CategoryLayoutPage
