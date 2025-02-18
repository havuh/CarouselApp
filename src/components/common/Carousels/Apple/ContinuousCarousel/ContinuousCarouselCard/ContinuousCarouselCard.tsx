'use client'

import { ContinuousSlideImage } from '@core/types/mocks'
import Image from 'next/image'
import { useSwiper } from 'swiper/react'

import s from './ContinuousCarouselCard.module.scss'

interface ContinuousCarouselCardProps extends ContinuousSlideImage {}

export default function ContinuousCarouselCard({
  title,
  src,
}: ContinuousCarouselCardProps) {
  const prefix = 'continuous-slide'

  const swiper = useSwiper()

  const handleMouseOver = () => {
    swiper.params.speed = 15000
    swiper.update()
  }

  const handleMouseLeave = () => {
    swiper.params.speed = 8000
    swiper.update()
  }

  return (
    <div
      className={s[prefix]}
      onMouseOver={() => handleMouseOver()}
      onFocus={handleMouseOver}
      onMouseLeave={() => handleMouseLeave()}
      onBlur={handleMouseLeave}
    >
      <div className={s[`${prefix}__image-container`]}>
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          sizes="100vw"
          className={s[`${prefix}__image`]}
        />
        <div className={s[`${prefix}__overlay`]}>
          <button className={s[`${prefix}__overlay--cta`]}>Play now</button>
        </div>
      </div>
      <div className={s[`${prefix}__copy`]}>
        <p className={s[`${prefix}__copy--title`]}>{title}</p>
      </div>
    </div>
  )
}
