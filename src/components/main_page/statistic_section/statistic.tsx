import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import CircleDiagram from '../../../assets/main_page/circle_diagram.svg'
import MenIcon from '../../../assets/main_page/men_icon.svg'
import styles from './statistic.module.scss'

const Statistic = () => {
  const { t } = useTranslation('static/main_page')
  return (
    <section className={styles.statistic}>
      <h2>{t('statistic_title')}</h2>
      <div className={styles.circle_wrapper}>
        <div className={styles.items}>
          <div className={styles.statistic_left}>
            <div className={styles.left_header}>
              <span>1 in 4</span>
              <MenIcon />
            </div>
            <p className={styles.description}>{t('statistic_left')}</p>
          </div>
          <div className={styles.devider} />
          <div className={styles.statistic_right}>
            <div className={styles.right_header}>
              <span>
                <sup>1</sup>/<sub>3</sub>
              </span>
              <CircleDiagram />
            </div>
            <p className={styles.description}>{t('statistic_right')}</p>
          </div>
        </div>
        <p className={styles.label}>{t('statistic_label')}</p>
      </div>
    </section>
  )
}

export default Statistic
