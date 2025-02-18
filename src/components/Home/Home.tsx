import { APPLE_SLIDE_IMAGES } from '@core/mocks/appleSlideImages'
import { APPLE_CONTINUOUS_SLIDE_IMAGES } from '@core/mocks/appleContinuousSlideImages'
import {
  AppleCarousel,
  AppleContinuousCarousel,
} from '@/components/common/Carousels'

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
      <AppleCarousel slides={APPLE_SLIDE_IMAGES} />
      <div className={s['continuous-carousel']}>
        <AppleContinuousCarousel slides={APPLE_CONTINUOUS_SLIDE_IMAGES} />
      </div>
    </section>
  )
}
