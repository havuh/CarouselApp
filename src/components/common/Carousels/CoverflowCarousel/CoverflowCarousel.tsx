'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { SlideImage } from '@core/types/mocks'
import CoverflowCarouselCard from './CoverflowCarouselCard'
import CoverflowCarouselConfig from './CoverflowCarousel.config'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

interface CoverflowCarouselProps {
  slides: SlideImage[]
}

export default function CoverflowCarousel({ slides }: CoverflowCarouselProps) {
  const { swiperConfig } = CoverflowCarouselConfig()

  return (
    <Swiper {...swiperConfig}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <CoverflowCarouselCard src={slide.src} altSrc={slide.altSrc} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
