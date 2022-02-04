import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

import Layout from 'layouts/layout'

import Item from '../../../public/svg/accordion_button_image.svg'
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
              <Accordion allowZeroExpanded className={styles.accordion_left}>
                {firstColumn.map((r) => (
                  <AccordionItem
                    className={styles.accordion__item}
                    key={r.name}
                  >
                    <AccordionItemHeading className={styles.accordion_heading}>
                      <AccordionItemButton className={styles.accordion_button}>
                        {r.name}
                        <Item className={styles.accordion_button_item} />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.information}>
                      <div className={styles.category_information_title}>
                        {t('accordion_information_title')}
                      </div>
                      {r.links.map((l) => (
                        <a
                          className={styles.information_content_item}
                          target="blank"
                          key={l.link}
                          href={l.link}
                        >
                          {l.title}
                        </a>
                      ))}
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
              <Accordion allowZeroExpanded className={styles.accordion_right}>
                {secondColumn.map((r) => (
                  <AccordionItem
                    className={styles.accordion__item}
                    key={r.name}
                  >
                    <AccordionItemHeading className={styles.accordion_heading}>
                      <AccordionItemButton className={styles.accordion_button}>
                        {r.name}
                        <Item className={styles.accordion_button_item} />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.information}>
                      <div className={styles.category_information_title}>
                        {t('accardion_information_title')}
                      </div>
                      {r.links.map((l) => (
                        <a
                          className={styles.information_content_item}
                          target="blank"
                          key={l.link}
                          href={l.link}
                        >
                          {l.title}
                        </a>
                      ))}
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResourcesPage
