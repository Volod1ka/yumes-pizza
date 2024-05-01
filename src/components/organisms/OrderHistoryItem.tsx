import { Price } from '@components/atoms'
import type { HistoryOrder } from '@models/order'
import { format } from 'date-fns'
import type { AllHTMLAttributes } from 'react'
import Collapsible from 'react-collapsible'
import { twMerge } from 'tailwind-merge'

export type OrderHistoryItemProps = Pick<
  AllHTMLAttributes<HTMLDivElement>,
  'className'
> & {
  order: HistoryOrder
}

export type OrderHistoryItemHeaderProps = Pick<
  HistoryOrder,
  'date' | 'id' | 'totalPrice'
>

export const OrderHistoryItemHeader = ({
  id,
  date,
  totalPrice,
}: OrderHistoryItemHeaderProps) => {
  return (
    <div className="flex flex-row p-[30px] justify-between items-center max-md:flex-col">
      <div className="flex flex-col">
        <p className="text-description text-dark_gray font-medium line-clamp-1">
          {format(date, 'dd.MM.yyyy')}
        </p>
        <p className="text-heading6 text-dark_gray font-bold line-clamp-2">{`Order №${id}`}</p>
      </div>

      <Price label="Total price: " price={totalPrice} />
    </div>
  )
}

const OrderHistoryItem = ({
  className,
  order: { id, products, date, totalPrice },
}: OrderHistoryItemProps) => {
  return (
    <div
      className={twMerge('rounded-[20px] overflow-hidden shadow-md', className)}
    >
      <Collapsible
        trigger={
          <OrderHistoryItemHeader date={date} id={id} totalPrice={totalPrice} />
        }
      >
        <div className="flex flex-col gap-5 px-[30px] pb-[30px]">
          {products.map(({ id, image, name, count, price }) => (
            <div
              key={`order-product-${id}`}
              className="flex flex-1 flex-row h-24 items-center"
            >
              <div className="min-w-24 rounded-[20px] overflow-hidden">
                <img
                  className="h-24 w-24 object-cover"
                  src={image}
                  alt={name}
                />
              </div>

              <div className="flex flex-col px-[30px]">
                <p className="text-heading6 text-dark_gray font-bold line-clamp-2">
                  {name}
                </p>
                <Price label={`x${count} `} price={price} />
              </div>
            </div>
          ))}
        </div>
      </Collapsible>
    </div>
  )
}

export default OrderHistoryItem
