'use client'

import {
  createContext,
  useContext,
  useState,
  useRef,
  useMemo,
  useEffect,
} from 'react'
import { SwiperRef } from 'swiper/react'

interface CarouselControlsContextType {
  isPlaying: boolean
  togglePlay: () => void
  registerSwiper: (id: string, swiper: SwiperRef | null) => void
}

const CarouselControlsContext =
  createContext<CarouselControlsContextType | null>(null)

export function CarouselControlsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const swipersRef = useRef<Map<string, SwiperRef | null>>(new Map())

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  useEffect(() => {
    swipersRef.current.forEach((swiper) => {
      if (!swiper) return

      if (isPlaying) {
        swiper.swiper.autoplay.start()
        swiper.swiper.slideNext()
      } else {
        // const currentTranslate = swiper.swiper.translate
        // swiper.swiper.setTranslate(currentTranslate)
        swiper.swiper.autoplay.stop()
      }
    })
  }, [isPlaying])

  const registerSwiper = (id: string, swiper: SwiperRef | null) => {
    if (swiper) {
      swipersRef.current.set(id, swiper)
    } else {
      swipersRef.current.delete(id)
    }
  }

  const state = useMemo(
    () => ({ isPlaying, togglePlay, registerSwiper }),
    [isPlaying],
  )

  return (
    <CarouselControlsContext.Provider value={state}>
      {children}
    </CarouselControlsContext.Provider>
  )
}

export function useCarouselControls() {
  return useContext(CarouselControlsContext)
}
