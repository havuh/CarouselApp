'use client'

import { useScreenWidth } from '@/@core/hooks/useScreenWidth'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './CenterSlides.module.scss'
import { SlideImage } from '@/@core/types/mocks'
import CenterSlideCard from './CenterSlideCard'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const coverflowEffect = {
  rotate: 0,
  stretch: -100,
  depth: 200,
  modifier: 1,
  slideShadows: false,
}

const autoplayEffect = {
  delay: 5000,
  disableOnInteraction: false,
}

interface CenterSlidesProps {
  slides: SlideImage[]
}

export default function CenterSlides({ slides }: CenterSlidesProps) {
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
        {slides.map((i) => (
          <SwiperSlide key={i.id}>
            <CenterSlideCard src={i.src} altSrc={i.altSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
