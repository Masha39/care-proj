import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import styles from './mission.module.scss'

const Mission = () => {
  const { t } = useTranslation('static/main_page')
  return (
    <section className={styles.mission}>
      <h3>{t('mission_title')}</h3>
      <div className={styles.mission_description}>
        {t('mission_description')}
      </div>
    </section>
  )
}

export default Mission
