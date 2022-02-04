import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import mobileLogo1 from 'public/assets/images/mobile_footer_logo_1.png'
import mobileLogo2 from 'public/assets/images/mobile_footer_logo_2.png'
import mobileLogo3 from 'public/assets/images/mobile_footer_logo_3.png'
import mobileLogo4 from 'public/assets/images/mobile_footer_logo_4.png'
import Logo from 'public/svg/landing_logo.svg'
import LogoMobile from 'public/svg/landing_logo_mobile.svg'
import styles from 'src/components/main_page/landing-banner/landing_banner.module.scss'

export const landingBanner = () => {
  const { t } = useTranslation('static/main_page')
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
            <p className={styles.landing_text}>{t('main_logo')}</p>
            <button className={styles.landing_btn}>
              {t('main_logo_button')}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.banner_footer_wrapper}>
        <div className={styles.mobile_footer_wrapper}>
          <div className={styles.mobile_footer_title}>
            {t('mobile_footer_title')}
          </div>
          <div className={styles.banner_footer_content}>
            <span className={styles.left_footer_content}>
              {t('left_footer_content')}
            </span>
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
            <span className={styles.right_footer_content}>
              {t('right_footer_content')}
            </span>
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

export default landingBanner
