import * as Icons from '@assets/icons'
import type { IconsName } from '@tools/types'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

export type BorderType = 'default' | 'outline'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  border?: BorderType
  label?: string
  icon: IconsName
}

export const iconButtonStyle = ({
  border,
}: Pick<IconButtonProps, 'border'>): ClassNameValue => [
  'flex h-12 w-12 rounded-[20px] text-dark_gray text-heading1 font-normal justify-center items-center',
  'disabled:opacity-40',
  border === 'outline' &&
    'border-[1px] border-dark_gray disabled:border-thin_gray',
]

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, border = 'outline', label, icon, ...props }, ref) => {
    const SVG = Icons[icon]

    return (
      <button
        ref={ref}
        className={twMerge(iconButtonStyle({ border }), className)}
        {...props}
      >
        {label?.length ? label[0] : <SVG />}
      </button>
    )
  },
)

export default IconButton
