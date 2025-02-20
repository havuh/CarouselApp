import { APPLE_SLIDE_IMAGES } from '@core/mocks/carousels/appleSlideImages'
import { APPLE_CONTINUOUS_SLIDE_IMAGES } from '@core/mocks/carousels/appleContinuousSlideImages'
import {
  MoviesCarousel,
  ContinuousCarousel,
} from '@/components/common/Carousels/Apple'
import { CarouselControlButton } from '@/components/common/Carousels/Apple/Controls'
import { CarouselControlsProvider } from '@/components/common/Carousels/Apple/context'

import s from './Home.module.scss'

export default function Home() {
  return (
    <section className={s.home}>
      <div className={s.header}>
        <h1 className={s['header--title']}>Carruseles</h1>
        <p className={s['header--subtitle']}>
          Revisa los diseños que hemos creado para ti
        </p>
      </div>
      <CarouselControlsProvider>
        <MoviesCarousel slides={APPLE_SLIDE_IMAGES} />
        <div className={s['continuous-carousel']}>
          <ContinuousCarousel slides={APPLE_CONTINUOUS_SLIDE_IMAGES} />
          <CarouselControlButton />
        </div>
      </CarouselControlsProvider>
    </section>
  )
}
