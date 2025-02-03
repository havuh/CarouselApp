'use client'

import s from './Home.module.scss'
import { AYAKA_IMAGES, GENSHIN_IMAGES } from '@core/mocks/images'
import { Carousel, ClientOnly } from '@/components'
import { useState } from 'react'

export default function Home() {
  const [genshinImages] = useState(GENSHIN_IMAGES)
  const [ayakaImages] = useState(AYAKA_IMAGES)

  return (
    <section className={s.home}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <h1 className={s['header--title']}>Carousels for everyone</h1>
          <p className={s['header--subtitle']}>
            Upload your images and watch our designs
          </p>
        </div>
        <ClientOnly>
          <Carousel slides={ayakaImages} />
          <Carousel slides={genshinImages} />
        </ClientOnly>
      </div>
    </section>
  )
}
