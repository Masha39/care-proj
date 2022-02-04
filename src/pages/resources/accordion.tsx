import React from 'react'

import useTranslation from 'next-translate/useTranslation'
import * as ReactAccordion from 'react-accessible-accordion'

import Item from 'public/svg/accordion_button_image.svg'

import styles from './accordion.module.scss'

export const Accordion = ({ column }: { column: Column[] }) => {
  const { t } = useTranslation('static/resources_page')
  return (
    <ReactAccordion.Accordion
      allowZeroExpanded
      className={styles.accordion_left}
    >
      {column.map((r) => (
        <ReactAccordion.AccordionItem
          className={styles.accordion__item}
          key={r.name}
        >
          <ReactAccordion.AccordionItemHeading
            className={styles.accordion_heading}
          >
            <ReactAccordion.AccordionItemButton
              className={styles.accordion_button}
            >
              {r.name}
              <Item className={styles.accordion_button_item} />
            </ReactAccordion.AccordionItemButton>
          </ReactAccordion.AccordionItemHeading>
          <ReactAccordion.AccordionItemPanel className={styles.information}>
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
          </ReactAccordion.AccordionItemPanel>
        </ReactAccordion.AccordionItem>
      ))}
    </ReactAccordion.Accordion>
  )
}
