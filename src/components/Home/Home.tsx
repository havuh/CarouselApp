import { CENTER_SLIDE_IMAGES } from '@core/mocks/centerSlideImages'
import { APPLE_SLIDE_IMAGES } from '@core/mocks/appleSlideImages'
import { CarouselCard } from '@core/components/ui'
import { AppleCarousel, CenterSlides } from '@/components/common/Carousels'

import s from './Home.module.scss'

export default function Home() {
  return (
    <section className={s.home}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <h1 className={s['header--title']}>Carruseles</h1>
          <p className={s['header--subtitle']}>
            Revisa todos los diseños que hemos creado para ti
          </p>
        </div>
        <CarouselCard imageLength={CENTER_SLIDE_IMAGES.length}>
          <CenterSlides slides={CENTER_SLIDE_IMAGES} />
        </CarouselCard>
        <AppleCarousel slides={APPLE_SLIDE_IMAGES} />
      </div>
    </section>
  )
}
