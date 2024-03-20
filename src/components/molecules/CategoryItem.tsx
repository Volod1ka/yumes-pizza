import type { Category } from '@models/products'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

export type CategoryItemProps = {
  category: Category
  selected?: boolean
  onSelect?: (category: Category) => void
}

export const сategoryItemStyle = (selected: boolean): ClassNameValue => [
  'py-[10px] px-3 rounded-[20px] text-dark_gray cursor-pointer list-none',
  selected && 'bg-dark_red text-white shadow-md-red',
]

const CategoryItem = ({
  category,
  selected = false,
  onSelect,
}: CategoryItemProps) => {
  return (
    <li
      className={twMerge(сategoryItemStyle(selected))}
      onClick={() => onSelect?.(category)}
    >
      <p className="text-heading6 text-center font-bold select-none">
        {category.name}
      </p>
    </li>
  )
}

export default CategoryItem
