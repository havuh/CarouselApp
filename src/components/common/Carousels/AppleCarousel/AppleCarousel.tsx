'use client'

import { AppleSlideImage } from '@/@core/types/mocks'
import { Swiper, SwiperSlide } from 'swiper/react'
import AppleCarouselConfig from './AppleCarousel.config'
import cn from 'clsx'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './AppleCarousel.module.scss'
import AppleCarouselCard from './AppleCarouselCard'

interface AppleCarouselProps {
  slides: AppleSlideImage[]
}

export default function AppleCarousel({ slides }: AppleCarouselProps) {
  const { swiperConfig } = AppleCarouselConfig()

  return (
    <Swiper {...swiperConfig} className={s['apple-swiper']}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={s['apple-slide']}>
          <AppleCarouselCard {...slide} />
        </SwiperSlide>
      ))}
      <div className={cn('apple-prev', s.prev)}></div>
      <div className={cn('apple-next', s.next)}></div>
      <div className={cn('apple-pagination', s.pagination)}></div>
    </Swiper>
  )
}
