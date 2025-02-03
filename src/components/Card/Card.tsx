import Image from 'next/image'
import s from './Card.module.scss'
import cn from 'clsx'
import { useState } from 'react'

type CardProps = {
  src: string
  altSrc: string
  alt?: string
}

export default function Card({ src, altSrc, alt = '' }: CardProps) {
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
