import React from 'react'
import styles from './main_page_content.module.scss'
import { Carousel } from '../carousel/carousel'
import Statistic from './statistic_section/statistic'
import Mission from './mission_section/mission'
import CaregivingEasier from './caregiving_easier_section/caregiving_easier'
import Basics from './basics_section/basics'
import CaregiverWellness from './caregiver_wellness_section/caregiver_wellness'
import ChronicDiseases from './chronic_diseases_section/chronic_diseases'
import BottomSection from './bottom_section/bottom_section'

const MainPageContent = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.slider_wrapper}>
        <div className="container">
          <Carousel />
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

export default MainPageContent
