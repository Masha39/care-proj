import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import styles from './main_page_content.module.scss'
import MenIcon from '../../assets/main_page/men_icon.svg'
import CircleDiagram from '../../assets/main_page/circle_diagram.svg'
import { Carousel } from '../carousel/carousel'
import ChatIcon from '../../../public/chat_icon.svg'

const MainPageContent = () => {
  const { t } = useTranslation('main_page')

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.slider_wrapper}>
        <div className="container">
          <Carousel />
        </div>
      </div>
      <section className={styles.statistic}>
        <h2>{t('static/main_page:statistic_title')}</h2>
        <div className={styles.circle_wrapper}>
          <div className={styles.items}>
            <div className={styles.statistic_left}>
              <div className={styles.left_header}>
                <span>1 in 4</span>
                <MenIcon />
              </div>
              <p className={styles.description}>
                {t('static/main_page:statistic_left')}
              </p>
            </div>
            <div className={styles.devider} />
            <div className={styles.statistic_right}>
              <div className={styles.right_header}>
                <span>
                  <sup>1</sup>/<sub>3</sub>
                </span>
                <CircleDiagram />
              </div>
              <p className={styles.description}>
                {t('static/main_page:statistic_right')}
              </p>
            </div>
          </div>
          <p className={styles.label}>
            {t('static/main_page:statistic_label')}
          </p>
        </div>
      </section>
      <section className={styles.mission}>
        <h3>{t('static/main_page:mission_title')}</h3>
        <div className={styles.mission_description}>
          {t('static/main_page:mission_description')}
        </div>
      </section>
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
      <section className={styles.caregiver_wellness}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.block_text}>
              <h2>{t('static/main_page:caregiver_wellness_title')}</h2>
              <p>{t('static/main_page:caregiver_wellness_description')}</p>
              <a href="#" className={styles.section_btn}>
                {t('static/main_page:caregiver_wellness_button')}
              </a>
            </div>
            <div className={styles.block_image}>
              <Image src="/girl.png" width={490} height={276} />
            </div>
          </div>
        </div>
      </section>
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
      <section className={styles.bottom_section}>
        <div className="container">
          <ChatIcon />
          <p>{t('static/main_page:contact_us_title')}</p>
          <a href="#" className={styles.section_btn}>
            {t('static/main_page:request_demo_button')}
          </a>
        </div>
      </section>
    </div>
  )
}

export default MainPageContent
