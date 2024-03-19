import type { AllHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type SaleTagProps = Pick<
  AllHTMLAttributes<HTMLDivElement>,
  'className'
> & {
  discount: number
}

const SaleTag = ({ discount, className }: SaleTagProps) => (
  <div
    className={twMerge(
      'px-2 py-[2px] rounded-[20px] bg-dark_red shadow-md',
      className,
    )}
  >
    <p className="text-heading6 text-white font-bold select-none">{`-${discount}%`}</p>
  </div>
)

export default SaleTag
