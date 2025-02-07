'use client'

import { AppleSlideImage } from '@/@core/types/mocks'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react'
import Image from 'next/image'

import s from './AppleCarousel.module.scss'

interface AppleCarouselProps {
  slides: AppleSlideImage[]
}

export default function AppleCarousel({ slides }: AppleCarouselProps) {
  return (
    <Swiper>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <AppleCarouselCard {...slide} />
        </SwiperSlide>
      ))}
      <span slot="container-start">Container Start</span>
      <span slot="container-end">Container End</span>
      <span slot="wrapper-start">Wrapper Start</span>
      <span slot="wrapper-end">Wrapper End</span>
    </Swiper>
  )
}

function AppleCarouselCard({ src, title }: AppleSlideImage) {
  const swiper = useSwiper()
  const swiperSlide = useSwiperSlide()

  console.log('Swiper: ', swiper)
  console.log('Swiper Slide: ', swiperSlide)

  return (
    <div>
      <Image
        src={src}
        alt={title}
        width={700}
        height={700}
        className={s['image-card']}
      />
    </div>
  )
}
