export type PriceProps = {
  price: number
  crossed?: number
  currency?: string
}

const Price = ({ price, crossed, currency = '₴' }: PriceProps) => (
  <div className="flex flex-row">
    {crossed && (
      <p className="mr-2 text-heading6 text-thin_gray font-bold line-through">{`${crossed}`}</p>
    )}
    <p className="text-heading6 text-darkGray font-bold">{`${price} ${currency}`}</p>
  </div>
)

export default Price
