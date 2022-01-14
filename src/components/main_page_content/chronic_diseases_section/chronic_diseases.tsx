import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import styles from './chronic_diseases.module.scss'

const ChronicDiseases = () => {
  const { t } = useTranslation('main_page')
  return (
    <section className={styles.chronic_diseases}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.block_text}>
            <h2>{t('static/main_page:chronic_diseases_title')}</h2>
            <p>{t('static/main_page:chronic_diseases_description')}</p>
            <a href="#" className={styles.section_btn}>
              {t('static/main_page:managing_symptoms_button')}
            </a>
          </div>
          <div className={styles.block_image}>
            <Image src="/girls.png" width={490} height={276} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChronicDiseases
