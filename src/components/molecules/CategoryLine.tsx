import type { AllHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { TextButton } from './buttons'

export type TitleAlign = 'left' | 'center'

export type CategoryLineProps = Pick<
  AllHTMLAttributes<HTMLDivElement>,
  'className'
> & {
  title: string
  titleAlign?: TitleAlign
  right?: {
    title: string
    onPress: () => void
  }
}

const CategoryLine = ({
  className,
  title,
  titleAlign = 'center',
  right,
}: CategoryLineProps) => {
  return (
    <div className={twMerge('flex flex-row items-center', className)}>
      {titleAlign !== 'left' && <div className="flex-1" />}

      <div className="shrink-0 py-5">
        <p className="text-heading2 text-dark_gray font-bold line-clamp-1">
          {title}
        </p>
      </div>

      <div className="flex flex-1 flex-row justify-end">
        {right && <TextButton label={right.title} onClick={right.onPress} />}
      </div>
    </div>
  )
}

export default CategoryLine
