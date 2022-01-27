import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

import styles from 'src/components/accordion/accordion.module.scss'

import Item from '../../../public/svg/accardion_button_image.svg'
import { regions } from './resources.json'

const ResourcesPage = () => {
  const { t } = useTranslation('resources_page')

  const getColumns = () => {
    const firstLength = Math.floor(regions.length / 2)
    const firstColumn = regions.slice(0, firstLength)
    const secondColumn = regions.slice(firstLength, regions.length)
    return { firstColumn, secondColumn }
  }

  const { firstColumn, secondColumn } = getColumns()
  return (
    <div className={styles.resources}>
      <div className={styles.accardion_header}>
        <div className={styles.resourses_banner}>
          <div className={styles.resources_banner_text}>
            <div className={styles.resources_title}>
              {t('static/resources_page:resources_title')}
            </div>
            <div className={styles.resources_title_text_mobile}>
              {t('static/resources_page:resources_title_text')}
            </div>
            <div className={styles.resources_title_text}>
              {t('static/resources_page:resources_title_text')}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.accordion_title}>
          {t('static/resources_page:accardion_main_text')}
        </div>
        <div className={styles.accordion_title_mobile}>
          {t('static/resources_page:accardion_main_text')}
        </div>
        <div className={styles.accordion_wrapper}>
          <section className={styles.section}>
            <Accordion allowZeroExpanded className={styles.accordion_left}>
              {firstColumn.map((r) => (
                <AccordionItem className={styles.accordion__item} key={r.name}>
                  <AccordionItemHeading className={styles.accordion_heading}>
                    <AccordionItemButton className={styles.accordion_button}>
                      {r.name}
                      <Item className={styles.accordion_button_item} />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={styles.information}>
                    <div className={styles.category_information_title}>
                      {t('static/resources_page:accardion_information_title')}
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
                <AccordionItem className={styles.accordion__item} key={r.name}>
                  <AccordionItemHeading className={styles.accordion_heading}>
                    <AccordionItemButton className={styles.accordion_button}>
                      {r.name}
                      <Item className={styles.accordion_button_item} />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={styles.information}>
                    <div className={styles.category_information_title}>
                      {t('static/resources_page:accardion_information_title')}
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
  )
}

export default ResourcesPage
