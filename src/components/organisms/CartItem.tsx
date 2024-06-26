import { Price } from '@components/atoms'
import { CountButton, IconButton } from '@components/molecules/buttons'
import type { CartProduct } from '@models/cart'
import type { AllHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type CartItemProps = Pick<
  AllHTMLAttributes<HTMLDivElement>,
  'className'
> & {
  product: CartProduct
  stock: number
  onAdd?: (id: string) => void
  onSub?: (id: string) => void
  onDelete?: (id: string) => void
}

const CartItem = ({
  className,
  product: { image, name, price, count, id },
  stock,
  onAdd,
  onSub,
  onDelete,
}: CartItemProps) => {
  return (
    <div
      className={twMerge(
        'flex h-[160px] items-center justify-center',
        className,
      )}
    >
      <div className="min-w-[160px] rounded-[20px] overflow-hidden">
        <img
          className="h-[160px] w-[160px] object-cover"
          src={image}
          alt={name}
        />
      </div>

      <div className="flex flex-1 px-[30px]">
        <p className="text-heading6 text-dark_gray font-bold line-clamp-3">
          {name}
        </p>
      </div>

      <div className="flex flex-row gap-10 items-center">
        <Price
          price={price.withsale || price.full}
          crossed={price.withsale ? price.full : undefined}
        />
        <CountButton
          count={count}
          label="I want"
          onAdd={() => onAdd?.(id)}
          onSub={() => onSub?.(id)}
          countMax={stock}
        />
        <IconButton
          border="default"
          icon="TrashBinIcon"
          onClick={() => onDelete?.(id)}
        />
      </div>
    </div>
  )
}

export default CartItem
