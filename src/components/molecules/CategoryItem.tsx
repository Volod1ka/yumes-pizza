import { twMerge, type ClassNameValue } from 'tailwind-merge'

export type CategoryItemProps = {
  name: string
  id: string
  selected?: boolean
  onSelect?: (id: string) => void
}

export const сategoryItemStyle = (selected: boolean): ClassNameValue => [
  'py-[10px] px-3 rounded-[20px] text-dark_gray cursor-pointer',
  selected && 'bg-dark_red text-white shadow-md-red',
]

const CategoryItem = ({
  id,
  name,
  selected = false,
  onSelect,
}: CategoryItemProps) => {
  return (
    <div
      className={twMerge(сategoryItemStyle(selected))}
      onClick={() => onSelect?.(id)}
    >
      <p className="text-heading6 text-center font-bold select-none">{name}</p>
    </div>
  )
}

export default CategoryItem
