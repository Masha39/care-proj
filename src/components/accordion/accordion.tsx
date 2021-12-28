import React from 'react'
import styles from 'src/components/accordion/accordion.module.scss'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

const accordion = () => {
  return (
    <div>
      <div className={styles.accordion_title}>
        Choose a region to learn more about specific resources.
      </div>
      <div className={styles.accordion_title_mobile}>
        Choose a region to learn more about
        <br />
        specific resources.
      </div>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              National
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.national_information}>
              <div className={styles.national_information_title}>
                Explore these additional resources:
              </div>
              <div className={styles.national_information_content}>
                <div className={styles.information_content_item}>
                  Canadian Home Care Association
                </div>
                <div className={styles.information_content_item}>
                  Careers Canada
                </div>
                <div className={styles.information_content_item}>
                  Heart and Stroke Foundation of Canada
                </div>
                <div className={styles.information_content_item}>
                  Government of Canada – Caring for Someone Who is Ill
                </div>
                <div className={styles.information_content_item}>
                  CAMH – Care for the Caregiver
                </div>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Alberta
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.alberta_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              British Columbia
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.british_colombia_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Manitoba
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.manitoba_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              New Brunswick
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.new_brunswick_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Labrador and Newfoundland
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.labrador_and_newfoundland_information}>
              #
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Nova Scotia
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.nova_scotia_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Northwest Territories
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.northwest_territories_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Nunavut
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.nunavut_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Ontario
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.ontario_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Prince Edward Island
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.price_edward_island_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Quebec
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.quebec_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Saskatchewan
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.saskatchewan_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion_button}>
              Yukon
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.yukon_information}>#</div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default accordion
