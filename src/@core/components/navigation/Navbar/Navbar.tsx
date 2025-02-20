import { NAVBAR_ITEMS } from '@core/mocks/navbar'
import Link from 'next/link'
import NavbarLogo from './NavbarLogo'
import s from './Navbar.module.scss'

export default function Navbar() {
  const prefix = 'navbar'

  return (
    <header className={s.root}>
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
