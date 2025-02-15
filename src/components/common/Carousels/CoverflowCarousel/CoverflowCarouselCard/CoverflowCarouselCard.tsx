import Image from 'next/image'
import cn from 'clsx'
import { useState } from 'react'
import { SlideImage } from '@/@core/types/mocks'

import s from './CoverflowCarouselCard.module.scss'

type CoverflowCarouselCardProps = Omit<SlideImage, 'id' | 'alt'> & {
  alt?: string
}

export default function CoverflowCarouselCard({
  src,
  altSrc,
  alt = '',
}: CoverflowCarouselCardProps) {
  const [imageSrc, setImageSrc] = useState(src)

  const handleImageError = (e: any) => {
    e.preventDefault()
    setImageSrc(altSrc)
  }

  return (
    <div className={s.card}>
      <Image
        src={imageSrc}
        alt={alt}
        sizes="(min-width: 0px) 600px"
        onError={handleImageError}
        fill
        priority
        className={cn(s['image-card'])}
      />
    </div>
  )
}
