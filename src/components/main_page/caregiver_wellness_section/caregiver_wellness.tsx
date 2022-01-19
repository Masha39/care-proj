import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import styles from './caregiver_wellness.module.scss'

const CaregiverWellness = () => {
  const { t } = useTranslation('static/main_page')
  return (
    <section className={styles.caregiver_wellness}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.block_text}>
            <h2>{t('caregiver_wellness_title')}</h2>
            <p>{t('caregiver_wellness_description')}</p>
            <a href="#" className={styles.section_btn}>
              {t('caregiver_wellness_button')}
            </a>
          </div>
          <div className={styles.block_image}>
            <Image src="/girl.png" width={490} height={276} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaregiverWellness
