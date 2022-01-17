import React from 'react'

import Image from 'next/image'

import styles from 'components/main_page/landing-banner/landing_banner.module.scss'
import mobileLogo1 from 'public/assets/images/mobile_footer_logo_1.png'
import mobileLogo2 from 'public/assets/images/mobile_footer_logo_2.png'
import mobileLogo3 from 'public/assets/images/mobile_footer_logo_3.png'
import mobileLogo4 from 'public/assets/images/mobile_footer_logo_4.png'
import Logo from 'public/svg/landing_logo.svg'
import LogoMobile from 'public/svg/landing_logo_mobile.svg'

export const LandingBanner = () => {
  return (
    <div className={styles.landingBannerWrapper}>
      <div className={styles.banner_content}>
        <div className={styles.landing_banner}>
          <div className={styles.landing_logo_wrapper}>
            <div className={styles.landing_logo}>
              <Logo />
            </div>
            <div className={styles.landing_logo_mobile}>
              <LogoMobile />
            </div>
            <p className={styles.landing_text}>
              An online platform helping caregivers care <br /> for themselves
              and others.
            </p>

            <button className={styles.landing_btn}>
              Explore Caregiver Tookit
            </button>
          </div>
        </div>
      </div>
      <div className={styles.banner_footer_wrapper}>
        <div className={styles.mobile_footer_wrapper}>
          <div className={styles.mobile_footer_title}>
            Presented and supported by
          </div>
          <div className={styles.banner_footer_content}>
            <span className={styles.left_footer_content}>Presented by</span>
            <div className={styles.mobile_logo_1}>
              <Image
                src={mobileLogo1}
                alt="Picture"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.mobile_logo_2}>
              <Image
                src={mobileLogo2}
                alt="Picture"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className={styles.right_footer_content}>Supported by</span>
            <div className={styles.mobile_logo_3}>
              <Image
                src={mobileLogo3}
                alt="Picture"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.mobile_logo_4}>
              <Image
                src={mobileLogo4}
                alt="Picture"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
