import React from 'react'

import Facebook from 'svg/facebook.svg'
import Instagram from 'svg/instagram.svg'
import Twitter from 'svg/twitter.svg'
import Youtube from 'svg/youtube.svg'

import styles from './socials.module.scss'

export const Socials = () => {
  return (
    <div className={styles.wrapper}>
      <span>Find us on</span>
      <div className={styles.items}>
        <a href="https://www.youtube.com/channel/UCgi1hj3UIkjI2Gv44-V_oZQ?view_as=subscriber">
          <Youtube />
        </a>
        <a href="https://www.facebook.com/YourCareplus/">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/yourcareplus/">
          <Instagram />
        </a>
        <a href="https://twitter.com/yourcareplus">
          <Twitter />
        </a>
      </div>
    </div>
  )
}
