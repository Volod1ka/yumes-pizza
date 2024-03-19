import type { AllHTMLAttributes } from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

export type BadgeProps = Pick<AllHTMLAttributes<HTMLElement>, 'className'> & {
  count: number
}

export const badgeStyle: ClassNameValue = [
  'w-4 h-4 text-caption_small text-center text-white font-bold bg-dark_red rounded-full shadow-sm-red',
]

const Badge = ({ count, className }: BadgeProps) => (
  <p className={twMerge(badgeStyle, className)}>{count}</p>
)

export default Badge
