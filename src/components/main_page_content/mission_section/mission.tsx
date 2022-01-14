import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import styles from './mission.module.scss'

const Mission = () => {
  const { t } = useTranslation('main_page')
  return (
    <section className={styles.mission}>
      <h3>{t('static/main_page:mission_title')}</h3>
      <div className={styles.mission_description}>
        {t('static/main_page:mission_description')}
      </div>
    </section>
  )
}

export default Mission
