'use client'

import { AppleSlideImage } from '@/@core/types/mocks'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import MoviesCarouselConfig from './MoviesCarousel.config'
import MoviesCarouselCard from './MoviesCarouselCard'
import cn from 'clsx'

import s from './MoviesCarousel.module.scss'
import { useCarouselControls } from '../context'
import { useEffect, useRef } from 'react'

interface MoviesCarouselProps {
  slides: AppleSlideImage[]
  id?: string
}

export default function MoviesCarousel({
  slides,
  id = 'movies-carousel',
}: MoviesCarouselProps) {
  const { swiperConfig } = MoviesCarouselConfig()
  const swiper = useRef<SwiperRef | null>(null)
  const carouselControlContext = useCarouselControls()

  useEffect(() => {
    if (carouselControlContext) {
      carouselControlContext.registerSwiper(id, swiper.current)
      return () => carouselControlContext.registerSwiper(id, null)
    }
  }, [id, carouselControlContext])

  return (
    <Swiper {...swiperConfig} className={s['apple-swiper']} ref={swiper}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={s['apple-slide']}>
          <MoviesCarouselCard {...slide} />
        </SwiperSlide>
      ))}
      <div className={cn('apple-prev', s.prev)}></div>
      <div className={cn('apple-next', s.next)}></div>
      <div className={cn('apple-pagination', s.pagination)}></div>
    </Swiper>
  )
}
