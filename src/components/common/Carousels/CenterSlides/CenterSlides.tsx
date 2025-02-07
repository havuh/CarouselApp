'use client'

import { useScreenWidth } from '@core/hooks/useScreenWidth'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SlideImage } from '@core/types/mocks'
import CenterSlideCard from './CenterSlideCard'
import CenterSlideConfig from './centerSlide.config'

import s from './CenterSlides.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

interface CenterSlidesProps {
  slides: SlideImage[]
}

export default function CenterSlides({ slides }: CenterSlidesProps) {
  const { coverflowEffect, autoplayEffect } = CenterSlideConfig()
  const isLargeScreen = useScreenWidth(1440)

  return (
    <div className={s.swiper}>
      <Swiper
        effect={'coverflow'}
        slidesPerView={isLargeScreen ? 5 : 3}
        spaceBetween={-12}
        speed={2000}
        autoplay={autoplayEffect}
        coverflowEffect={coverflowEffect}
        modules={[EffectCoverflow, Autoplay]}
        centeredSlides
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <CenterSlideCard src={slide.src} altSrc={slide.altSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
