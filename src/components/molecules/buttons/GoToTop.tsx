import { UpIcon } from '@assets/icons'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

export type GoToTopProps = ButtonHTMLAttributes<HTMLButtonElement> & object

export const goToTopStyle: ClassNameValue = [
  'p-2 bg-light_gray rounded-full rounded-br-none shadow-md',
]

const GoToTop = forwardRef<HTMLButtonElement, GoToTopProps>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={twMerge(goToTopStyle, className)} {...props}>
      <UpIcon width={34} height={34} />
    </button>
  ),
)

export default GoToTop
