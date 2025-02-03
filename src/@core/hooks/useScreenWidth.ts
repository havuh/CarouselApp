import { useEffect, useState } from 'react'

function isScreenWidthGreaterThan(width: number) {
  return window.innerWidth > width
}

export function useScreenWidth(width: number) {
  const [isScreenWidth, setIsScreenWidth] = useState(false)

  useEffect(() => {
    function handleScreenResize() {
      setIsScreenWidth(isScreenWidthGreaterThan(width))
    }

    handleScreenResize()
    window.addEventListener('resize', handleScreenResize)

    return () => {
      window.removeEventListener('resize', handleScreenResize)
    }
  }, [width])

  return isScreenWidth
}
