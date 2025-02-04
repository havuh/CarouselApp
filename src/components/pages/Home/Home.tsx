import { GENSHIN_IMAGES } from '@core/mocks/images'
import { CarouselCard } from '@/@core/components/ui'
import CenterSlides from '@/components/common/Carousels'

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
        <CarouselCard imageLength={GENSHIN_IMAGES.length}>
          <CenterSlides slides={GENSHIN_IMAGES} />
        </CarouselCard>
      </div>
    </section>
  )
}
