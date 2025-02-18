'use client'

import { AppleContinuousSlideImage } from '@/@core/types/mocks'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import AppleContinuousCarouselConfig from './AppleContinuousCarousel.config'
import AppleContinuousCarouselCard from './AppleContinuousCarouselCard'
import cn from 'clsx'

import s from './AppleContinuousCarousel.module.scss'
import { useRef, useState } from 'react'

interface AppleContinuousCarouselProps {
  slides: AppleContinuousSlideImage[]
}

export default function AppleContinuousCarousel({
  slides,
}: AppleContinuousCarouselProps) {
  const prefix = 'apple-continuous'

  const { swiperConfig } = AppleContinuousCarouselConfig()
  const swiper = useRef<SwiperRef | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const onSwitch = () => {
    if (isPlaying) {
      swiper.current?.swiper.autoplay.stop()
    } else {
      swiper.current?.swiper.autoplay.start()
    }
    setIsPlaying((prev) => !prev)
  }

  return (
    <div>
      <Swiper {...swiperConfig} className={s[`${prefix}-swiper`]} ref={swiper}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={s[`${prefix}-slide`]}>
            <AppleContinuousCarouselCard {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s[`${prefix}-controls`]}>
        <button
          className={cn(s[`${prefix}-controls__player`], {
            [s.active]: isPlaying,
          })}
          onClick={onSwitch}
        ></button>
      </div>
    </div>
  )
}
