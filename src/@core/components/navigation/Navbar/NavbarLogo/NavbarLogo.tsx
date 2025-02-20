import Image from 'next/image'
import Link from 'next/link'

import s from './NavbarLogo.module.scss'

export default function NavbarLogo() {
  const prefix = 'navbar-logo'

  return (
    <Link href="/" className={s[`${prefix}`]}>
      <Image
        src={'/logo.png'}
        alt=""
        aria-hidden="true"
        width={40}
        height={40}
        className={s[`${prefix}__image`]}
      />
      <span className={s[`${prefix}__caption`]}>
        Rio <br /> Carousels
      </span>
    </Link>
  )
}
