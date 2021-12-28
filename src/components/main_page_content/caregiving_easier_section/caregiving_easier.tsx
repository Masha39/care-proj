import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import styles from './caregiving_easier.module.scss'

const CaregivingEasier = () => {
  const { t } = useTranslation('main_page')
  return (
    <section className={styles.caregiving_easier}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.block_text}>
            <h2>{t('static/main_page:caregiving_easier_title')}</h2>
            <p>{t('static/main_page:caregiving_easier_description')}</p>
            <a href="#" className={styles.section_btn}>
              {t('static/main_page:caregiver_toolkit_button')}
            </a>
          </div>
          <div className={styles.block_image}>
            <Image src="/phone.png" width={490} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaregivingEasier
