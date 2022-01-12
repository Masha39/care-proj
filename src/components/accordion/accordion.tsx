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
    <div className={styles.resources}>
      <div className={styles.resources_wrapper}>
        <div className={styles.resources_logo}>
          <div className={styles.resources_title}>Resources</div>
          <div className={styles.resources_title_text_mobile}>
            Do you have additional <br /> questions about home care <br />
            services? Learn about national <br /> and provincial resources.
          </div>
          <div className={styles.resources_title_text}>
            Do you have additional questions about home care services? Learn
            <br />
            about national and provincial resources.
          </div>
        </div>
      </div>
      <div className={styles.accordion}>
        <div className={styles.accordion_title}>
          Choose a region to learn more about specific resources.
        </div>
        <div className={styles.accordion_title_mobile}>
          Choose a region to learn more about
          <br />
          specific resources.
        </div>
        <Accordion>
          <div className={styles.accordion_content}>
            <div className={styles.accordion_left_content}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    National
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.information_content}>
                      <a className={styles.information_content_item}>
                        Canadian Home Care Association
                      </a>
                      <a className={styles.information_content_item}>
                        Careers Canada
                      </a>
                      <a className={styles.information_content_item}>
                        Heart and Stroke Foundation of Canada
                      </a>
                      <a className={styles.information_content_item}>
                        Government of Canada – Caring for Someone Who is Ill
                      </a>
                      <a className={styles.information_content_item}>
                        CAMH – Care for the Caregiver
                      </a>
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
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.information_content}>
                      <a className={styles.information_content_item}>
                        Alberta Health Services - Home Care
                      </a>
                      <a className={styles.information_content_item}>
                        Alberta 211
                      </a>
                      <a className={styles.information_content_item}>
                        Palliative and End-of-Life Care
                      </a>
                      <a className={styles.information_content_item}>
                        Supports for Seniors
                      </a>
                      <a className={styles.information_content_item}>
                        Learn More About Senior Health
                      </a>
                      <a className={styles.information_content_item}>
                        Family Caregiver Centre
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    British Columbia
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.information_content}>
                      <a className={styles.information_content_item}>
                        Senior BC
                      </a>
                      <a className={styles.information_content_item}>BC 211</a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    Manitoba
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.information_content}>
                      <a className={styles.information_content_item}>
                        Guide to Home Care Service
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    New Brunswick
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a className={styles.information_content_item}>
                        New Brunswick 211
                      </a>
                      <a className={styles.information_content_item}>
                        Caregivers Guide
                      </a>
                      <a className={styles.information_content_item}>
                        Canadian Red Cross Society
                      </a>
                      <a className={styles.information_content_item}>
                        New Brunswick Home Support Association
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    Labrador and Newfoundland
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a className={styles.information_content_item}>
                        Provincial Home Support Program - Client Handbook
                      </a>
                      <a className={styles.information_content_item}>
                        Health and Community Services
                      </a>
                      <a className={styles.information_content_item}>
                        Home Support Program Self-Managed Care Provider Handbook
                      </a>
                      <a className={styles.information_content_item}>
                        Seniors Newfoundland
                      </a>
                    </div>
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
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a className={styles.information_content_item}>
                        Nova Scotia 211
                      </a>
                      <a className={styles.information_content_item}>
                        Continuing Care
                      </a>
                      <a className={styles.information_content_item}>
                        Caregivers Nova Scotia
                      </a>
                      <a className={styles.information_content_item}>
                        The Caregivers Handbook
                      </a>
                      <a className={styles.information_content_item}>
                        Living Well - Continuing Care Services
                      </a>
                      <a className={styles.information_content_item}>
                        Continuing Care Programs Fact Sheets and Forms
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className={styles.accordion_right_content}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    Northwest Territories
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a className={styles.information_content_item}>
                        Who to Contact for Information About Home Care in your
                        Community
                      </a>
                      <a className={styles.information_content_item}>
                        Seniors Information Handbook
                      </a>
                      <a className={styles.information_content_item}>
                        Health Services in the Yellowknife Region
                      </a>
                      <a className={styles.information_content_item}>
                        Public Health Services in the Yellowknife Region
                      </a>
                      <a className={styles.information_content_item}>
                        The Northwest Territories Caregivers Guide
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    Nunavut
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a className={styles.information_content_item}>
                        Nunavut 211
                      </a>
                      <a className={styles.information_content_item}>
                        Home and Continuing Care
                      </a>
                      <a className={styles.information_content_item}>
                        Seniors Information Handbook
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    Ontario
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a className={styles.information_content_item}>
                        Home and Community Care
                      </a>
                      <a className={styles.information_content_item}>
                        Ontario Caregiver Coalition
                      </a>
                      <a className={styles.information_content_item}>
                        Sunshine Centres for Seniors
                      </a>
                      <a className={styles.information_content_item}>
                        211 Ontario
                      </a>
                      <a className={styles.information_content_item}>
                        Home Care Ontario
                      </a>
                      <a className={styles.information_content_item}>
                        Ontario Health Coalition
                      </a>
                      <a className={styles.information_content_item}>
                        Ontario Caregiver Helpline
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    Prince Edward Island
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a className={styles.information_content_item}>PEI 211</a>
                      <a className={styles.information_content_item}>
                        Home Care Program
                      </a>
                      <a className={styles.information_content_item}>
                        Seniors Guide
                      </a>
                      <a className={styles.information_content_item}>
                        Caring for Aging Parents
                      </a>
                      <a className={styles.information_content_item}>
                        Health PEI
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    Quebec
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a className={styles.information_content_item}>
                        Quebec Heart Failure Society
                      </a>
                      <a className={styles.information_content_item}>
                        Lappui Pour Les Proches Aidants DAînés
                      </a>
                      <a className={styles.information_content_item}>
                        Sante Montreal -- Home Care Services
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    Saskatchewan
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a className={styles.information_content_item}>
                        Saskatchewan 211
                      </a>
                      <a className={styles.information_content_item}>
                        Saskatchewan Health Authority
                      </a>
                      <a className={styles.information_content_item}>
                        Individualized Funding for Home Care
                      </a>
                      <a className={styles.information_content_item}>
                        HealthLineOnline
                      </a>
                      <a className={styles.information_content_item}>
                        Caregiver Information and Support - A Program of the
                        Saskatoon Council on Aging
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    Yukon
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a className={styles.information_content_item}>
                        Home Care Program
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  )
}

export default accordion
