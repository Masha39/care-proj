import React from 'react'
import Link from 'next/link'
import Logo1 from 'svg/footer_logo_1.svg'
import Logo2 from 'svg/footer_logo_2.svg'
import Logo3 from 'svg/footer_logo_3.svg'
import Logo4 from 'svg/footer_logo_4.svg'
import styles from './footer.module.scss'
import { Socials } from '../socials/socials'

export const Footer = () => {
  const items = [
    { value: 'Terms of Use', href: '/terms-of-use' },
    { value: 'Privacy Policy', href: '/privacy-policy' }
  ]
  return (
    <div className={styles.footer}>
      <footer className="container">
        <div className={styles.footerTop}>
          <div className={styles.itemWrapperLeft}>
            <span>Presented by</span>
            <div className={styles.logoWrapper}>
              <Logo1 width={79} height={48} className={styles.itemMt} />
              <Logo2 width={90} height={32} className={styles.item} />
            </div>
          </div>
          <div className={styles.itemWrapperRight}>
            <span>Supported by</span>
            <div className={styles.logoWrapper}>
              <Logo3 width={164} height={32} className={styles.item} />
              <Logo4 width={81} height={32} className={styles.item} />
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <nav>
            <ul>
              {items.map((item, i) => (
                <li key={i}>
                  <Link href={item.href}>
                    <a>{item.value}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Socials />
        </div>
      </footer>
    </div>
  )
}
