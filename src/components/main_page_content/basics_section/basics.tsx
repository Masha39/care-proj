import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import styles from './basics.module.scss'

const Basics = () => {
  const { t } = useTranslation('main_page')
  return (
    <section className={styles.basics}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.block_text}>
            <h2>{t('static/main_page:home_care_title')} </h2>
            <p>{t('static/main_page:home_care_description')}</p>
            <a href="#" className={styles.section_btn}>
              {t('static/main_page:basic_button')}
            </a>
          </div>
          <div className={styles.block_image}>
            <Image src="/people.png" width={490} height={276} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Basics
