import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import ChatIcon from '../../../../public/chat_icon.svg'
import styles from './bottom_section.module.scss'

const BottomSection = () => {
  const { t } = useTranslation('main_page')
  return (
    <section className={styles.bottom_section}>
      <div className="container">
        <ChatIcon />
        <p>{t('static/main_page:contact_us_title')}</p>
        <a href="#" className={styles.section_btn}>
          {t('static/main_page:request_demo_button')}
        </a>
      </div>
    </section>
  )
}

export default BottomSection
