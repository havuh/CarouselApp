import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Image } from '@core/types/common'
import { Card, Motion } from '@/components'
import s from './Carousel.module.scss'
import { useScreenWidth } from '@core/hooks/useScreenWidth'
import { GridAltIcon, MinusIcon, PlusIcon } from '@core/components/icons'
import { useState } from 'react'

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

interface CarouselProps {
  slides: Image[]
}

export default function Carousel({ slides }: CarouselProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isLargeScreen = useScreenWidth(1440)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={s.carousel}>
      <button onClick={toggle} className={s['header-btn']}>
        <div className={s.actions}>
          {isOpen ? (
            <MinusIcon color="#ffd859" size={20} className={s.icon} />
          ) : (
            <PlusIcon color="#ffd859" size={20} className={s.icon} />
          )}
          <span>{isOpen ? 'See less' : 'See more'}</span>
        </div>
        <div className={s.title}>
          <GridAltIcon color="#ffd859" size={20} className={s.icon} />
          <span>{slides.length} Photos</span>
        </div>
      </button>
      <Motion isOpen={isOpen}>
        <div className={s.swiper}>
          <Swiper
            effect={'coverflow'}
            className={s.swiper}
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
                <Card src={i.src} altSrc={i.altSrc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Motion>
    </div>
  )
}
