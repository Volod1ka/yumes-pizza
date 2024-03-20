import { CategoryPills } from '@components/organisms'
import { MOCK_FOOD_CATEGORIES } from '@mocks'
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
    <div className="flex flex-col px-[115px] max-sm:px-5">
      <div className="sticky top-0">
        <CategoryPills
          categories={MOCK_FOOD_CATEGORIES}
          selectedCategoryId={category}
          onSelect={onPressCategory}
        />
      </div>

      {
        // TODO maybe for news carousel
        /* <Slider
        arrows
        adaptiveHeight
        draggable
        slidesToShow={10}
        slidesToScroll={2}
        infinite={false}
        className="bg-darked_red"
      >
        {MOCK_FOOD_CATEGORIES.map(category => (
          <CategoryItem
            category={category}
            selected={categorie === category.id}
            key={category.id}
            onSelect={() => setCategorie(category.id)}
          />
        ))}
      </Slider> */
      }
    </div>
  )
}

export default HomePage
