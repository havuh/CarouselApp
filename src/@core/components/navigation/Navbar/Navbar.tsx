'use client'

import { NAVBAR_ITEMS } from '@core/mocks/navbar'
import Link from 'next/link'
import NavbarLogo from './NavbarLogo'
import { useVerticalScroll } from '@core/hooks/useScroll'
import cn from 'clsx'

import s from './Navbar.module.scss'

export default function Navbar() {
  const prefix = 'navbar'

  const { up: visible } = useVerticalScroll({})

  return (
    <header className={cn(s.root, { [s.hidden]: !visible })}>
      <nav className={s[`${prefix}`]}>
        <NavbarLogo />
        <ul className={s[`${prefix}__list`]}>
          {NAVBAR_ITEMS.map((item) => (
            <li key={item.id} className={s[`${prefix}__item`]}>
              <Link href={item.href} className={s[`${prefix}__link`]}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
