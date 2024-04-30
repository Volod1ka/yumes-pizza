import type { HistoryOrder } from '@models/order'
import OrderHistoryItem from './OrderHistoryItem'

export type OrderHistoryListProps = {
  data: HistoryOrder[]
}

const OrderHistoryList = ({ data = [] }: OrderHistoryListProps) => {
  return (
    <div className="flex flex-col gap-[30px] pb-36 pt-5">
      {data.map(order => (
        <OrderHistoryItem key={`order-${order.id}`} order={order} />
      ))}
    </div>
  )
}

export default OrderHistoryList
