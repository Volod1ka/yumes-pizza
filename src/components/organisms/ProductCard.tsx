import { Price, SaleTag } from '@components/atoms'
import type { Product } from '@models/products'
import type { AllHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { CountButton, type CountButtonProps } from '../molecules/buttons'

export type ProductCardProps = Pick<
  AllHTMLAttributes<HTMLDivElement>,
  'className'
> &
  Pick<CountButtonProps, 'onAdd' | 'onSub'> & {
    product: Product
    count: number
    stock: number
  }

const ProductCard = ({
  count,
  product: { description, name, price, image },
  stock,
  onAdd,
  onSub,
  className,
}: ProductCardProps) => {
  return (
    <div className={twMerge('flex flex-col min-w-[230px]', className)}>
      <div className="relative mb-5 rounded-[20px] overflow-hidden">
        <img className="object-cover" src={image} alt={name} />

        {price.discount && (
          <SaleTag
            className="absolute top-[10px] right-[10px]"
            discount={price.discount}
          />
        )}
      </div>

      <p className="mb-5 text-heading6 font-bold line-clamp-2">{name}</p>
      {description?.length && (
        <p className="mb-5 text-description font-medium line-clamp-4">
          {description}
        </p>
      )}

      <div className="flex flex-row mt-auto justify-between items-center">
        <Price
          price={price.selling || price.full}
          crossed={price.selling ? price.full : undefined}
        />
        <CountButton
          count={count}
          label="I want"
          onAdd={onAdd}
          onSub={onSub}
          countMax={stock}
        />
      </div>
    </div>
  )
}

export default ProductCard
