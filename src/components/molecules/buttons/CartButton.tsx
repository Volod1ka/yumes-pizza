import { ShoppingBagIcon } from '@assets/icons'
import { Badge, Price } from '@components/atoms'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'
import { iconButtonStyle } from './IconButton'

export type CartButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  count?: number
  totalPrice?: number
}

export const cartButtonStyle: ClassNameValue = ['flex-row p-2 gap-1 w-auto']

const CartButton = forwardRef<HTMLButtonElement, CartButtonProps>(
  ({ className, count, totalPrice, ...props }, ref) => (
    <button
      ref={ref}
      className={twMerge(
        iconButtonStyle({ border: 'outline' }),
        cartButtonStyle,
        className,
      )}
      {...props}
    >
      <div className="flex relative">
        <ShoppingBagIcon />
        {!!count && (
          <Badge count={count} className="absolute top-[2px] right-0" />
        )}
      </div>
      {totalPrice && <Price price={totalPrice} />}
    </button>
  ),
)

export default CartButton
