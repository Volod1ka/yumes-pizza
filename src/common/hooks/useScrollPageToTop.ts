import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const scrollToTop = () => window.scrollTo(0, 0)

const useScrollPageToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop()
  }, [pathname])
}

export default useScrollPageToTop
