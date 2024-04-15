import {
  forwardRef,
  type AllHTMLAttributes,
  type InputHTMLAttributes,
} from 'react'
import { twJoin } from 'tailwind-merge'

export type RadioButtonProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: string
  containerStyle?: AllHTMLAttributes<HTMLDivElement>['className']
}

export const getRadioButtonKey = (key: string) => `radio-input-${key}`

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, containerStyle, className, ...props }, ref) => {
    return (
      <div className={twJoin('flex items-center', containerStyle)}>
        <input
          type="radio"
          {...props}
          ref={ref}
          className={twJoin('accent-dark_red w-6 h-6', className)}
        />
        {label?.length && (
          <label className="ml-[14px] text-description text-dark_gray font-medium">
            {label}
          </label>
        )}
      </div>
    )
  },
)

export default RadioButton
