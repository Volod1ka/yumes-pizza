import CategoryItem, {
  keyOfCategoryItem,
} from '@components/molecules/CategoryItem'
import { IconButton } from '@components/molecules/buttons'
import type { Category } from '@models/products'
import { useEffect, useRef, useState } from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

const TRANSLATE_AMOUNT: number = 200
const START_TRANSLATE_AMOUNT: number = 20

export type ArrowDirection = 'left' | 'right'

export type CategoryPillProps = {
  categories: Category[]
  selectedCategoryId: string | null
  onSelect: (category: Category) => void
}

export const arrowStyle = (arrow: ArrowDirection = 'left'): ClassNameValue => [
  'absolute top-0 flex h-full items-center from-white from-50% to-transparent pointer-events-none',
  arrow === 'left'
    ? 'pr-6 bg-gradient-to-r'
    : 'right-0 pl-6 justify-end  bg-gradient-to-l',
]

const CategoryPills = ({
  categories,
  selectedCategoryId = null,
  onSelect,
}: CategoryPillProps) => {
  const pillListRef = useRef<HTMLUListElement>(null)

  const [prevVisibled, setPrevVisibled] = useState<boolean>(false)
  const [nextVisibled, setNextVisibled] = useState<boolean>(false)

  useEffect(() => {
    if (selectedCategoryId) {
      document
        .querySelector(`#${keyOfCategoryItem(selectedCategoryId)}`)
        ?.scrollIntoView({ inline: 'center' })
    } else {
      pillListRef.current?.scrollTo({ left: 0 })
    }
  }, [selectedCategoryId])

  useEffect(() => {
    updateArrowEnabled()
  }, [])

  const updateArrowEnabled = () => {
    if (!pillListRef.current) {
      return
    }

    const maxScrollValue =
      pillListRef.current.scrollWidth -
      pillListRef.current.clientWidth -
      START_TRANSLATE_AMOUNT

    setPrevVisibled(
      (pillListRef.current.scrollLeft ?? 0) >= START_TRANSLATE_AMOUNT,
    )
    setNextVisibled(pillListRef.current.scrollLeft <= maxScrollValue)
  }

  const onPressArrow = (arrow: ArrowDirection) => {
    if (!pillListRef.current) {
      return
    }

    const direction = arrow === 'left' ? -1 : 1

    pillListRef.current.scrollTo({
      left: pillListRef.current.scrollLeft + TRANSLATE_AMOUNT * direction,
    })

    updateArrowEnabled()
  }

  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      {prevVisibled && (
        <div className={twMerge(arrowStyle('left'))}>
          <IconButton
            icon="PrevIcon"
            border="default"
            className="pointer-events-auto"
            onClick={() => onPressArrow('left')}
          />
        </div>
      )}

      <ul
        ref={pillListRef}
        onScroll={updateArrowEnabled}
        className="flex m-0 py-3 gap-5 overflow-x-scroll scroll-smooth"
      >
        {categories.map(category => (
          <CategoryItem
            category={category}
            selected={selectedCategoryId === category.id}
            key={category.id}
            onSelect={() => onSelect(category)}
          />
        ))}
      </ul>

      {nextVisibled && (
        <div className={twMerge(arrowStyle('right'))}>
          <IconButton
            icon="NextIcon"
            border="default"
            className=" pointer-events-auto"
            onClick={() => onPressArrow('right')}
          />
        </div>
      )}
    </div>
  )
}

export default CategoryPills
