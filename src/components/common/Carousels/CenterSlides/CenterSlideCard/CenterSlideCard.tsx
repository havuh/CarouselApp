import Image from 'next/image'
import cn from 'clsx'
import { useState } from 'react'
import { SlideImage } from '@/@core/types/mocks'

import s from './CenterSlideCard.module.scss'

type CenterSlideCardProps = Omit<SlideImage, 'id' | 'alt'> & {
  alt?: string
}

export default function CenterSlideCard({
  src,
  altSrc,
  alt = '',
}: CenterSlideCardProps) {
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
