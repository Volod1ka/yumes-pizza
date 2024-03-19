import * as Icons from '@assets/icons'
import type { IconsName } from '@tools/types'
import type { AllHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type ContactDetailsProps = Pick<
  AllHTMLAttributes<HTMLElement>,
  'className'
> & {
  icon: IconsName
  title: string
  description: string | string[]
}

const descriptionRender = ({
  description,
}: Pick<ContactDetailsProps, 'description'>) => {
  if (typeof description === 'string') {
    return description
  }

  return description.map(line => <span className="block">{line}</span>)
}

const ContactDetails = ({
  icon,
  description,
  title,
  className,
}: ContactDetailsProps) => {
  const SVG = Icons[icon]

  return (
    <div className={twMerge('flex flex-col items-center', className)}>
      <SVG width={48} height={48} />

      <p className="mt-6 mb-3 text-heading6 text-dark_gray text-center font-bold">
        {title}
      </p>
      <p className="text-description text-dark_gray text-center font-medium">
        {descriptionRender({ description })}
      </p>
    </div>
  )
}

export default ContactDetails
