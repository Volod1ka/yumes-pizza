import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
}

export const buttonStyle: ClassNameValue = [
  'px-5 py-[10px] rounded-[20px] text-heading6 text-dark_gray font-bold bg-light_gray shadow-md ease-out duration-300',
  'disabled:bg-light_gray disabled:text-thin_gray disabled:shadow-md',
  'hover:bg-dark_red hover:text-white hover:shadow-md-red',
]

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, label, ...props }, ref) => (
    <button ref={ref} className={twMerge(buttonStyle, className)} {...props}>
      {label}
    </button>
  ),
)

export default Button
