import {
  forwardRef,
  type AllHTMLAttributes,
  type InputHTMLAttributes,
} from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
  containerStyle?: AllHTMLAttributes<HTMLDivElement>['className']
}

export const inputStyle = (invalid?: boolean): ClassNameValue => [
  'w-full h-full text-description font-medium text-dark_gray py-[10px] outline-none',
  invalid && 'text-dark_red font-bold',
]

export const getInputKey = (key: string) => `input-${key}`

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, containerStyle, placeholder, invalid, ...props }, ref) => {
    return (
      <div className={twMerge('w-full', containerStyle)}>
        <input
          {...props}
          ref={ref}
          className={twMerge(inputStyle(invalid), className)}
          placeholder={
            placeholder?.length && props.required
              ? `${placeholder} *`
              : placeholder
          }
        />
        <div className="bg-gradient-to-r from-dark_gray to-dark_red h-[2px] w-full" />
      </div>
    )
  },
)

export default Input
