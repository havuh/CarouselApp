import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

import s from './NavbarLogo.module.scss'

interface NavbarLogoProps {
  blackAndWhite?: boolean
}

export default function NavbarLogo({ blackAndWhite = false }: NavbarLogoProps) {
  const prefix = 'navbar-logo'

  return (
    <Link href="/" className={s[`${prefix}`]}>
      <Image
        src={'/logo.png'}
        alt=""
        aria-hidden="true"
        width={40}
        height={40}
        className={cn(s[`${prefix}__image`], {
          [s[`${prefix}__image--black-and-white`]]: blackAndWhite,
        })}
      />
      <span className={s[`${prefix}__caption`]}>
        Rio <br /> Carousels
      </span>
    </Link>
  )
}
