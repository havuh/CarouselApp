'use client'

import { Motion } from '@core/components/ui'
import { GridAltIcon, MinusIcon, PlusIcon } from '@core/components/icons'
import { PropsWithChildren, useState } from 'react'

import s from './CarouselCard.module.scss'

interface CarouselContainerProps extends PropsWithChildren {
  imageLength: number
}

export default function CarouselContainer({
  children,
  imageLength,
}: CarouselContainerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const ToggleIcon = isOpen ? MinusIcon : PlusIcon
  const ToggleText = isOpen ? 'Ver menos' : 'Ver más'

  const onToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const iconProps = {
    color: 'var(--color-secondary)',
    size: 20,
    className: s.icon,
  }

  return (
    <div className={s.carousel}>
      <button type="button" onClick={onToggle} className={s['header-btn']}>
        <div className={s.actions}>
          <ToggleIcon {...iconProps} />
          <span>{ToggleText}</span>
        </div>
        <div className={s.title}>
          <GridAltIcon {...iconProps} />
          <span>{imageLength} imágenes</span>
        </div>
      </button>
      <Motion isOpen={isOpen}>{children}</Motion>
    </div>
  )
}
