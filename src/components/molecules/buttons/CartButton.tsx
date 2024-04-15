import { ShoppingBagIcon } from '@assets/icons'
import { Badge, Price } from '@components/atoms'
import type { ButtonHTMLAttributes } from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'
import { iconButtonStyle } from './IconButton'

export type CartButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  count?: number
  totalPrice?: number
}

export const cartButtonStyle: ClassNameValue = [
  'flex-row p-2 gap-1 w-auto ease-out duration-300',
]

const CartButton = ({
  type = 'button',
  className,
  count = 0,
  totalPrice = 0,
  ...props
}: CartButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        iconButtonStyle({ border: 'outline' }),
        cartButtonStyle,
        className,
      )}
      {...props}
    >
      <div className="flex relative">
        <ShoppingBagIcon />
        {count > 0 && (
          <Badge count={count} className="absolute top-[2px] right-0" />
        )}
      </div>
      {totalPrice > 0 && <Price price={totalPrice} />}
    </button>
  )
}

export default CartButton
