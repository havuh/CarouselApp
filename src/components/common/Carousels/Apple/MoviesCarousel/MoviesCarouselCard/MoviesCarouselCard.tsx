import { useScreenWidth } from '@core/hooks/useScreenWidth'
import { AppleSlideImage } from '@core/types/mocks'
import { ATV } from '@core/mocks/appleSlideImages'
import { useSwiperSlide } from 'swiper/react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

import s from './MoviesCarouselCard.module.scss'

export default function MoviesCarouselCard({
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
