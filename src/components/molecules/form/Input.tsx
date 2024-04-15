import type { AllHTMLAttributes, InputHTMLAttributes } from 'react'
import { twJoin, type ClassNameValue } from 'tailwind-merge'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  containerStyle?: AllHTMLAttributes<HTMLDivElement>['className']
}

export const inputStyle: ClassNameValue = [
  'w-full h-full text-description font-medium text-dark_gray px-5 py-[10px] outline-none',
]

const Input = ({
  className,
  containerStyle,
  placeholder,
  required,
  ...props
}: InputProps) => {
  return (
    <div
      className={twJoin(
        'bg-gradient-to-r from-dark_gray to-dark_red pb-[2px] w-full',
        containerStyle,
      )}
    >
      <input
        {...props}
        className={twJoin(inputStyle, className)}
        placeholder={
          placeholder?.length && required ? `${placeholder} *` : placeholder
        }
        required={required}
      />
    </div>
  )
}

export default Input
