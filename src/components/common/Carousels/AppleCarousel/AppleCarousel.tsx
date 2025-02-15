'use client'

import { AppleSlideImage } from '@/@core/types/mocks'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'
import { useScreenWidth } from '@core/hooks/useScreenWidth'
import AppleCarouselConfig from './AppleCarousel.config'
import { ATV } from '@/@core/mocks/appleSlideImages'
import Image from 'next/image'
import cn from 'clsx'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './AppleCarousel.module.scss'
import Link from 'next/link'

interface AppleCarouselProps {
  slides: AppleSlideImage[]
}

export default function AppleCarousel({ slides }: AppleCarouselProps) {
  const { swiperConfig } = AppleCarouselConfig()

  return (
    <Swiper {...swiperConfig}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={s['swiper-slide']}>
          <AppleCarouselCard {...slide} />
        </SwiperSlide>
      ))}
      <div className={cn('apple-prev', s.prev)}></div>
      <div className={cn('apple-next', s.next)}></div>
      <div className={cn('apple-pagination', s.pagination)}></div>
    </Swiper>
  )
}

function AppleCarouselCard({
  src,
  mobileSrc,
  imgTitle,
  title,
  genre,
}: AppleSlideImage) {
  const mediumMobile = useScreenWidth(734)
  const { isPrev, isNext, isActive } = useSwiperSlide()

  const isLat = isPrev || isNext
  const imageSrc = mediumMobile ? src : mobileSrc

  return (
    <div className={s.card}>
      <Image
        src={imageSrc}
        alt={title}
        width={700}
        height={700}
        sizes="100vw"
        className={cn(s['card__image'])}
      />
      <div
        className={cn(s['card__overlay'], { [s['card__overlay--lat']]: isLat })}
      >
        <div className={s['card__overlay--top']}>
          <div className={s['card__overlay--top--header']}>
            <Image
              src={ATV}
              alt=""
              aria-hidden="true"
              width={300}
              height={50}
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </div>
          <div className={s['card__overlay--top--title']}>
            <Image
              src={imgTitle}
              alt=""
              aria-hidden="true"
              width={220}
              height={54}
              className={s['card__overlay--top--title__img']}
            />
          </div>
        </div>
        <div
          className={cn(s['card__overlay__bottom'], {
            [s['card__overlay__bottom--active']]: isActive,
          })}
        >
          <p className={s['card__overlay__bottom--content']}>
            <span className={s['card__overlay__bottom--content__genre']}>
              {genre}
            </span>
            <span
              className={s['card__overlay__bottom--content__dot']}
              aria-hidden="true"
            >
              ·
            </span>
            <span
              className={s['card__overlay__bottom--content__title']}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </p>
          <Link className={s['card__overlay__bottom--cta']} href="/">
            Stream now
          </Link>
        </div>
      </div>
    </div>
  )
}
