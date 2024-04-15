import type { AllHTMLAttributes, InputHTMLAttributes } from 'react'
import { twJoin } from 'tailwind-merge'

export type RadioButtonProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: string
  containerStyle?: AllHTMLAttributes<HTMLDivElement>['className']
}

const RadioButton = ({
  label,
  containerStyle,
  className,
  ...props
}: RadioButtonProps) => {
  return (
    <div className={twJoin('flex items-center', containerStyle)}>
      <input
        type="radio"
        {...props}
        className={twJoin('accent-dark_red w-6 h-6', className)}
      />
      {label?.length && (
        <label className="ml-[14px] text-description text-dark_gray font-medium">
          {label}
        </label>
      )}
    </div>
  )
}

export default RadioButton
