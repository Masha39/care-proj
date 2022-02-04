import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import Layout from 'layouts/layout'

import { Accordion } from './accordion'
import styles from './resources_page.module.scss'

type Regions = {
  name: string
  links: {
    link: string
    title: string
  }[]
  title: string
}[]

const ResourcesPage = () => {
  const { t } = useTranslation('static/resources_page')
  const regions = t<Regions>(
    'regions',
    {},
    {
      returnObjects: true
    }
  )

  const getColumns = () => {
    const firstLength = Math.floor(regions.length / 2)
    const firstColumn = regions.slice(0, firstLength)
    const secondColumn = regions.slice(firstLength, regions.length)
    return { firstColumn, secondColumn }
  }

  const { firstColumn, secondColumn } = getColumns()

  return (
    <Layout>
      <div className={styles.resources}>
        <div className={styles.accordion_header}>
          <div className={styles.resourses_banner}>
            <div className={styles.resources_banner_text}>
              <div className={styles.resources_title}>
                {t('resources_title')}
              </div>
              <div className={styles.resources_title_text_mobile}>
                {t('resources_title_text')}
              </div>
              <div className={styles.resources_title_text}>
                {t('resources_title_text')}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.accordion_title}>
            {t('accordion_main_text')}
          </div>
          <div className={styles.accordion_title_mobile}>
            {t('accordion_main_text')}
          </div>
          <div className={styles.accordion_wrapper}>
            <section className={styles.section}>
              <Accordion column={firstColumn} />
              <Accordion column={secondColumn} />
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResourcesPage
