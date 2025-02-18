'use client'

import cn from 'clsx'
import s from './CarouselControlButton.module.scss'
import { useCarouselControls } from '../../context/CarouselControlsContext'

export default function CarouselControlButton() {
  const prefix = 'controls'
  const carouselControlContext = useCarouselControls()

  return (
    <div className={s[`${prefix}`]}>
      <button
        className={cn(s[`${prefix}__player`], {
          [s.active]: carouselControlContext?.isPlaying,
        })}
        onClick={carouselControlContext?.togglePlay}
      ></button>
    </div>
  )
}
