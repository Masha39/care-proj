import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import ChatIcon from 'public/svg/chat_icon.svg'

import styles from './bottom_section.module.scss'

const BottomSection = () => {
  const { t } = useTranslation('static/main_page')
  return (
    <section className={styles.bottom_section}>
      <div className="container">
        <ChatIcon />
        <p>{t('contact_us_title')}</p>
        <a href="#" className={styles.section_btn}>
          {t('request_demo_button')}
        </a>
      </div>
    </section>
  )
}

export default BottomSection
