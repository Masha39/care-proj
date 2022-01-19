import React from 'react'

import Basics from './basics_section/basics'
import BottomSection from './bottom_section/bottom_section'
import CaregiverWellness from './caregiver_wellness_section/caregiver_wellness'
import CaregivingEasier from './caregiving_easier_section/caregiving_easier'
import ChronicDiseases from './chronic_diseases_section/chronic_diseases'
import { MainPageCarousel } from './main_page_carousel/main_page_carousel'
import styles from './main_page_content.module.scss'
import Mission from './mission_section/mission'
import Statistic from './statistic_section/statistic'

export const MainPageContent = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.slider_wrapper}>
        <div className="container">
          <MainPageCarousel />
        </div>
      </div>
      <Statistic />
      <Mission />
      <CaregivingEasier />
      <Basics />
      <CaregiverWellness />
      <ChronicDiseases />
      <BottomSection />
    </div>
  )
}
