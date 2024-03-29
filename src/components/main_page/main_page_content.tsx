import React from 'react'

import BottomSection from './bottom_section/bottom_section'
import { MainPageCarousel } from './main_page_carousel/main_page_carousel'
import styles from './main_page_content.module.scss'
import Mission from './mission_section/mission'
import { Sections } from './sections/sections'
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
      <Sections />
      <BottomSection />
    </div>
  )
}
