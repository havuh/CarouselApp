'use client'

import { ContinuousSlideImage } from '@core/types/mocks'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import ContinuousCarouselConfig from './ContinuousCarousel.config'
import ContinuousCarouselCard from './ContinuousCarouselCard'

import s from './ContinuousCarousel.module.scss'
import { useEffect, useRef } from 'react'
import { useCarouselControls } from '../context/CarouselControlsContext'

interface ContinuousCarouselProps {
  slides: ContinuousSlideImage[]
  id?: string
}

export default function ContinuousCarousel({
  slides,
  id = 'continuous-carousel',
}: ContinuousCarouselProps) {
  const prefix = 'continuous'

  const { swiperConfig } = ContinuousCarouselConfig()
  const swiper = useRef<SwiperRef | null>(null)
  const carouselControlContext = useCarouselControls()

  useEffect(() => {
    if (carouselControlContext) {
      carouselControlContext.registerSwiper(id, swiper.current)
      return () => carouselControlContext.registerSwiper(id, null)
    }
  }, [id, carouselControlContext])

  return (
    <Swiper {...swiperConfig} className={s[`${prefix}-swiper`]} ref={swiper}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={s[`${prefix}-slide`]}>
          <ContinuousCarouselCard {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
