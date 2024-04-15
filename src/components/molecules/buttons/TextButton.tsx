import type { ButtonHTMLAttributes } from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

export type TextButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
}

export const textButtonStyle: ClassNameValue = [
  'py-[10px] text-description text-dark_gray font-medium ease-out duration-500',
  'disabled:text-thin_gray',
  'hover:text-dark_red',
]

const TextButton = ({
  type = 'button',
  className,
  label,
  ...props
}: TextButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(textButtonStyle, className)}
      {...props}
    >
      {label}
    </button>
  )
}

export default TextButton
