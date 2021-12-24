import React from 'react'
import Image from 'next/image'
import Slider from '../carousel/carousel'
import styles from './main_page_content.module.scss'
import MenIcon from '../../../public/svg/main_page/men_icon.svg'
import CircleDiagram from '../../../public/svg/main_page/circle_diagram.svg'

const MainPageContent = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.slider_wrapper}>
        <div className="container">
          <Slider />
        </div>
      </div>
      <section className={styles.statistic}>
        <h2>Did you know that...</h2>
        <div className={styles.circle_wrapper}>
          <div className={styles.items}>
            <div className={styles.statistic_left}>
              <div className={styles.left_header}>
                <span>1 in 4</span>
                <MenIcon />
              </div>
              <p className={styles.description}>
                In 2018, 1 in 4 Canadians provided unpaid caregiving to a family
                member or friend.
              </p>
            </div>
            <div className={styles.devider} />
            <div className={styles.statistic_right}>
              <div className={styles.right_header}>
                <span>
                  <sup>1</sup>/<sub>3</sub>
                </span>
                <CircleDiagram />
              </div>
              <p className={styles.description}>
                One-third of these caregivers said they had unmet needs.
              </p>
            </div>
          </div>
          <p className={styles.label}>Statistics Canada, 2018</p>
        </div>
      </section>
      <section className={styles.mission}>
        <h3>Our Mission</h3>
        <div className={styles.mission_description}>
          YourCare+ provides free information and tools to make caregiving
          easier.
        </div>
      </section>
      <section className={styles.caregiving_easier}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.block_text}>
              <h2>Make caregiving easier </h2>
              <p>
                YourCare+ provides tools to use in the home, send to a family
                member or friend, or share with health care professionals.
              </p>
              <button>Caregiver Toolkit</button>
            </div>
            <div className={styles.block_image}>
              <Image
                src="/src/assets/images/phone.jpg"
                width={490}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPageContent
