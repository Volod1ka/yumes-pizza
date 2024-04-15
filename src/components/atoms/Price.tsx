export type PriceProps = {
  label?: string
  price: number
  crossed?: number
  currency?: string
}

const Price = ({ price, crossed, label, currency = '₴' }: PriceProps) => (
  <div className="flex flex-row">
    {label?.length && (
      <p className="mr-2 text-heading6 text-dark_gray font-bold">{`${label}`}</p>
    )}
    {crossed && (
      <p className="mr-2 text-heading6 text-thin_gray font-bold line-through">{`${crossed}`}</p>
    )}
    <p className="text-heading6 text-darkGray font-bold">{`${price} ${currency}`}</p>
  </div>
)

export default Price
