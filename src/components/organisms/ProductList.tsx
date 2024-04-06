import { CategoryLine } from '@components/molecules'
import type { CategoryListItem } from '@models/products'
import React from 'react'
import ProductCard from './ProductCard'

export const MAX_PRODUCTS_IN_CATEGORY = 8

export type ProductListProps = {
  data: CategoryListItem[]
  withMore?: boolean
  maxRenderProducts?: number
  onPressMore?: (categoryId: string) => void
}

const ProductList = ({
  data,
  withMore = false,
  maxRenderProducts = MAX_PRODUCTS_IN_CATEGORY,
  onPressMore,
}: ProductListProps) => {
  return (
    <div className="flex flex-col pb-36 px-[114px] max-lg:px-5">
      {data.map(({ id, name, products }) => {
        const shownMoreButton =
          withMore &&
          (maxRenderProducts ? products.length > maxRenderProducts : true)

        const renderProducts = shownMoreButton
          ? products.slice(0, maxRenderProducts)
          : products

        return (
          <React.Fragment key={`category-${id}`}>
            <CategoryLine
              className="mt-7 mb-4"
              title={name}
              right={
                shownMoreButton
                  ? {
                      title: 'more...',
                      onPress: () => onPressMore?.(id),
                    }
                  : undefined
              }
            />

            <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-md:grid-cols-2 max-[510px]:grid-cols-1 gap-[30px]">
              {renderProducts.map(product => (
                <ProductCard
                  key={`product-${product.id}`}
                  product={product}
                  count={0}
                  stock={product.stock}
                />
              ))}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default ProductList
