import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './header.module.scss'
import Logo from '../../../public/svg/header_logo.svg'
import { Socials } from '../socials/socials'

export const Header = () => {
  const { locales, asPath } = useRouter()

  const [menuActive, setMenuActive] = useState(false)
  const [burgerBtnActive, setBurgerBtnActive] = useState(false)
  const items = [
    { value: 'Learn', href: '/learn' },
    { value: 'Caregiver Toolkit', href: '/caregiver-toolkit' },
    { value: 'Resources', href: '/resources' },
    { value: 'Contact Us', href: '/contact-us' }
  ]

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.headerLogo}>
            <Link href="/">
              <a>
                <Logo width={130} height={23} />
              </a>
            </Link>
          </div>
          <div
            className={
              burgerBtnActive ? styles.burgerBtnActive : styles.burgerBtn
            }
            onClick={() => {
              setMenuActive(!menuActive)
              setBurgerBtnActive(!burgerBtnActive)
            }}
          >
            <span />
          </div>
          <nav className={styles.desktopMenu}>
            <ul className={styles.headerList}>
              {items.map((item, i) => (
                <li key={i}>
                  <Link href={item.href}>
                    <a>{item.value}</a>
                  </Link>
                </li>
              ))}
              {locales?.map((locale) => (
                <li key={locale}>
                  <Link href={asPath} locale={locale}>
                    <a>{locale}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
      <nav className={menuActive ? styles.menuActive : styles.mobileMenu}>
        <ul className={styles.headerList}>
          {items.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>
                <a>{item.value}</a>
              </Link>
            </li>
          ))}
          {locales?.map((locale) => (
            <li key={locale}>
              <Link href={asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Socials />
      </nav>
    </div>
  )
}
