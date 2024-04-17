import { UpIcon } from '@assets/icons'
import { scrollToTop } from '@hooks/useScrollPageToTop'
import { useEffect, useState } from 'react'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

export const goToTopButtonStyle = (visible: boolean): ClassNameValue => [
  'sticky right-10 bottom-10 float-right mb-5 z-50 p-2 bg-light_gray rounded-full rounded-br-none shadow-md ease-out duration-500 max-lg:right-5',
  !visible && 'opacity-0 pointer-events-none',
]

const START_TRANSLATE_AMOUNT: number = 200

const GoToTopButton = () => {
  const [shown, setShown] = useState<boolean>(false)

  useEffect(() => {
    const event = () => {
      setShown(window.scrollY > window.screenY + START_TRANSLATE_AMOUNT)
    }

    window.addEventListener('scroll', event)

    return () => window.removeEventListener('scroll', event)
  }, [])

  return (
    <button
      type="button"
      className={twMerge(goToTopButtonStyle(shown))}
      onClick={scrollToTop}
    >
      <UpIcon width={34} height={34} />
    </button>
  )
}

export default GoToTopButton
