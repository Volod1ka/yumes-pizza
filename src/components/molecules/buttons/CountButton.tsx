import { MinusIcon, PlusIcon } from '@assets/icons'
import type { HTMLAttributes, MouseEvent } from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

export type CountButtonProps = HTMLAttributes<HTMLDivElement> & {
  label: string
  count: number
  countMax?: number
  onAdd?: () => void
  onSub?: () => void
}

export type CountButtonStyleProps = { counted: boolean }

export const countButtonStyle = ({
  counted,
}: CountButtonStyleProps): ClassNameValue => [
  'flex flex-row px-[10px] py-[10px] w-[104px] rounded-[20px] items-center justify-center text-heading6 text-dark_gray font-bold bg-light_gray shadow-md cursor-pointer ease-out duration-300',
  counted &&
    'justify-between bg-dark_red text-white shadow-md-red cursor-default',
  !counted && 'hover:bg-dark_red hover:text-white hover:shadow-md-red',
]

const CountButton = ({
  className,
  label,
  count = 0,
  countMax = 99,
  onAdd,
  onSub,
  onClick: onClickBase,
  ...props
}: CountButtonProps) => {
  const onClick = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    onClickBase?.(event)

    if (count <= 0 && onAdd) {
      onAdd()
    }
  }

  const counted = count > 0
  const isMax = count >= countMax

  return (
    <div
      className={twMerge(countButtonStyle({ counted }), className)}
      {...props}
      onClick={onClick}
    >
      {counted && (
        <MinusIcon
          className="mr-[10px] stroke-white cursor-pointer"
          onClick={onSub}
          width={16}
          height={16}
        />
      )}

      <p className="text-center select-none">{counted ? count : label}</p>

      {counted && (
        <PlusIcon
          className={twMerge(
            'ml-[10px] stroke-white cursor-pointer',
            isMax && 'stroke-thin_gray',
          )}
          onClick={isMax ? undefined : onAdd}
          width={16}
          height={16}
        />
      )}
    </div>
  )
}

export default CountButton
