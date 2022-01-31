import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

import Item from 'public/svg/accordion_button_image.svg'

import styles from './resources.module.scss'

export const Resources = () => {
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
            {/* {t('static/contact_page:firstName')} */}
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
        <Accordion allowZeroExpanded>
          <div className={styles.accordion_content}>
            <div className={styles.accordion_left_content}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    National
                    <Item className={styles.accordion_item} />
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.information_content}>
                      <a
                        target="blank"
                        href="https://www.albertahealthservices.ca/cc/Page15488.aspx"
                        className={styles.information_content_item}
                      >
                        Alberta Health Services - Home Care
                      </a>
                      <a
                        target="blank"
                        href="https://ab.211.ca/"
                        className={styles.information_content_item}
                      >
                        Alberta 211
                      </a>
                      <a
                        target="blank"
                        href="https://myhealth.alberta.ca/palliative-care/what-is-it/"
                        className={styles.information_content_item}
                      >
                        Palliative and End-of-Life Care
                      </a>
                      <a
                        target="blank"
                        href="https://www.alberta.ca/supports-for-seniors.aspx"
                        className={styles.information_content_item}
                      >
                        Supports for Seniors
                      </a>
                      <a
                        target="blank"
                        href="https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=center1031"
                        className={styles.information_content_item}
                      >
                        Learn More About Senior Health
                      </a>
                      <a
                        target="blank"
                        href="https://www.albertahealthservices.ca/services/Page13155.aspx"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.information_content}>
                      <a
                        target="blank"
                        href="https://www.gov.mb.ca/health/homecare/guide.pdf"
                        className={styles.information_content_item}
                      >
                        Senior BC
                      </a>
                      <a
                        target="blank"
                        href="https://bc211.ca/"
                        className={styles.information_content_item}
                      >
                        BC 211
                      </a>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    Manitoba
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.information_content}>
                      <a
                        target="blank"
                        href="https://www.gov.mb.ca/health/homecare/guide.pdf"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a
                        target="blank"
                        href="https://sk.211.ca/services/211-new-brunswick/"
                        className={styles.information_content_item}
                      >
                        New Brunswick 211
                      </a>
                      <a
                        target="blank"
                        href="https://www2.gnb.ca/content/dam/gnb/Departments/sd-ds/pdf/Seniors/CaregiversGuide.pdf"
                        className={styles.information_content_item}
                      >
                        Caregivers Guide
                      </a>
                      <a
                        target="blank"
                        href="https://www.redcross.ca/in-your-community/new-brunswick/"
                        className={styles.information_content_item}
                      >
                        Canadian Red Cross Society
                      </a>
                      <a
                        target="blank"
                        href="http://nbhsa.ca/english/"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a
                        target="blank"
                        href="https://westernhealth.nl.ca/uploads/CSI%20Media/Home-%20Support-%20Program-%20Client-Handbook.pdf"
                        className={styles.information_content_item}
                      >
                        Provincial Home Support Program - Client Handbook
                      </a>
                      <a
                        target="blank"
                        href="https://www.gov.nl.ca/hcs/personsdisabilities/fundingprograms-hcs/"
                        className={styles.information_content_item}
                      >
                        Health and Community Services
                      </a>
                      <a
                        target="blank"
                        href="https://www.gov.nl.ca/hcs/files/personsdisabilities-pdf-home-support-self-managed-care.pdf"
                        className={styles.information_content_item}
                      >
                        Home Support Program Self-Managed Care Provider Handbook
                      </a>
                      <a
                        target="blank"
                        href="http://seniorsnl.ca/"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a
                        target="blank"
                        href="https://ns.211.ca/"
                        className={styles.information_content_item}
                      >
                        Nova Scotia 211
                      </a>
                      <a
                        target="blank"
                        href="https://novascotia.ca/dhw/ccs/home-care.asp"
                        className={styles.information_content_item}
                      >
                        Continuing Care
                      </a>
                      <a
                        target="blank"
                        href="https://www.caregiversns.org/"
                        className={styles.information_content_item}
                      >
                        Caregivers Nova Scotia
                      </a>
                      <a
                        target="blank"
                        href="https://caregiversns.org/images/uploads/all/Caregivers_Handbook_April_2018_Web.pdf"
                        className={styles.information_content_item}
                      >
                        The Caregivers Handbook
                      </a>
                      <a
                        target="blank"
                        href="https://novascotia.ca/dhw/ccs/documents/Living-Wel-%20Continuing-Care-Services.pdf"
                        className={styles.information_content_item}
                      >
                        Living Well - Continuing Care Services
                      </a>
                      <a
                        target="blank"
                        href="https://novascotia.ca/dhw/ccs/fact_sheets.asp"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a
                        target="blank"
                        href="https://www.hss.gov.nt.ca/en/services/continuing-care-services/contact-information-home-care"
                        className={styles.information_content_item}
                      >
                        Who to Contact for Information About Home Care in your
                        Community
                      </a>
                      <a
                        target="blank"
                        href="https://www.hss.gov.nt.ca/sites/hsHealth Services in the Yellowknife Region

s/files/seniors_information_handbook.pdf"
                        className={styles.information_content_item}
                      >
                        Seniors Information Handbook
                      </a>
                      <a
                        target="blank"
                        href="https://www.nthssa.ca/en/public-health-services-yellowknife-region"
                        className={styles.information_content_item}
                      >
                        Health Services in the Yellowknife Region
                      </a>
                      <a
                        target="blank"
                        href="https://www.nthssa.ca/en/public-health-services-yellowknife-region"
                        className={styles.information_content_item}
                      >
                        Public Health Services in the Yellowknife Region
                      </a>
                      <a
                        target="blank"
                        href="https://www.hss.gov.nt.ca/sites/hss/files/nwt-caregivers-guide.pdf"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a
                        target="blank"
                        href="http://www.nu.211.ca/"
                        className={styles.information_content_item}
                      >
                        Nunavut 211
                      </a>
                      <a
                        target="blank"
                        href="https://www.gov.nu.ca/health/information/home-and-continuing-care/"
                        className={styles.information_content_item}
                      >
                        Home and Continuing Care
                      </a>
                      <a
                        target="blank"
                        href="https://www.gov.nu.ca/sites/default/files/default_images/nunavutseniorhandbook_eng.pdf"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a
                        target="blank"
                        href="https://www.ontario.ca/page/home-community-care?_ga=2.115900934.1427165055.1546807729-1000326796.1541518313"
                        className={styles.information_content_item}
                      >
                        Home and Community Care
                      </a>
                      <a
                        target="blank"
                        href="https://www.ontariocaregivercoalition.ca/"
                        className={styles.information_content_item}
                      >
                        Ontario Caregiver Coalition
                      </a>
                      <a
                        target="blank"
                        href="https://sunshinecentres.com/"
                        className={styles.information_content_item}
                      >
                        Sunshine Centres for Seniors
                      </a>
                      <a
                        target="blank"
                        href="https://211ontario.ca/"
                        className={styles.information_content_item}
                      >
                        211 Ontario
                      </a>
                      <a
                        target="blank"
                        href="https://www.homecareontario.ca/about-us/overview/"
                        className={styles.information_content_item}
                      >
                        Home Care Ontario
                      </a>
                      <a
                        target="blank"
                        href="https://www.ontariohealthcoalition.ca/index.php/category/key-issues/home-care/"
                        className={styles.information_content_item}
                      >
                        Ontario Health Coalition
                      </a>
                      <a
                        target="blank"
                        href="https://ontariocaregiver.ca/find-support/helpline/"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a
                        target="blank"
                        href="https://peiunitedway.com/211pei/"
                        className={styles.information_content_item}
                      >
                        PEI 211
                      </a>
                      <a
                        target="blank"
                        href="https://www.princeedwardisland.ca/en/information/health-pei/home-care-program/"
                        className={styles.information_content_item}
                      >
                        Home Care Program
                      </a>
                      <a
                        target="blank"
                        href="http://www.gov.pe.ca/photos/original/Seniors_Guide09.pdf"
                        className={styles.information_content_item}
                      >
                        Seniors Guide
                      </a>
                      <a
                        target="blank"
                        href="https://www.princeedwardisland.ca/en/topic/caring-aging-parents/"
                        className={styles.information_content_item}
                      >
                        Caring for Aging Parents
                      </a>
                      <a
                        target="blank"
                        href="https://www.princeedwardisland.ca/en/topic/health-pei/"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a
                        target="blank"
                        href="https://transformhf.com/SQIC/"
                        className={styles.information_content_item}
                      >
                        Quebec Heart Failure Society
                      </a>
                      <a
                        target="blank"
                        href="https://www.lappui.org/en/"
                        className={styles.information_content_item}
                      >
                        Lappui Pour Les Proches Aidants DAînés
                      </a>
                      <a
                        target="blank"
                        href="https://santemontreal.qc.ca/en/"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a
                        target="blank"
                        href="https://sk.211.ca/"
                        className={styles.information_content_item}
                      >
                        Saskatchewan 211
                      </a>
                      <a
                        target="blank"
                        href="https://www.saskhealthauthority.ca/"
                        className={styles.information_content_item}
                      >
                        Saskatchewan Health Authority
                      </a>
                      <a
                        target="blank"
                        href="https://www.saskatchewan.ca/residents/health/accessing-health-care-services/care-at-home-and-outside-the-hospital/individualized-funding-for-home-care/#step-1"
                        className={styles.information_content_item}
                      >
                        Individualized Funding for Home Care
                      </a>
                      <a
                        target="blank"
                        href="https://www.rqhealth.ca/service-lines/master/files/9050552_8_Home%20Care%20brochure%20revised%20may%202017_FINAL.pdf"
                        className={styles.information_content_item}
                      >
                        HealthLineOnline
                      </a>
                      <a
                        target="blank"
                        href="http://www.saskatooncaregiver.ca/"
                        className={styles.information_content_item}
                      >
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
                    <Item className={styles.accordion_item} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.information}>
                    <div className={styles.category_information_title}>
                      Explore these additional resources:
                    </div>
                    <div className={styles.alberta_information_content}>
                      <a
                        target="blank"
                        href="https://yukon.ca/en/health-and-wellness/care-services/learn-about-home-care-program"
                        className={styles.information_content_item}
                      >
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
