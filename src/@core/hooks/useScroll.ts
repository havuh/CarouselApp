import { useEffect, useState } from 'react'

interface UseVerticalScrollProps {
  minScroll?: number
}

export function useVerticalScroll({ minScroll = 100 }: UseVerticalScrollProps) {
  const [prevScroll, setPrevScroll] = useState(0)
  const [up, setUp] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setUp(prevScroll > currentScroll || currentScroll < minScroll)
      setPrevScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScroll, minScroll])

  return {
    up,
  }
}
