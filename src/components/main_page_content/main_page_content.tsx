import React from 'react'
import Image from 'next/image'
import styles from './main_page_content.module.scss'
import MenIcon from '../../assets/main_page/men_icon.svg'
import CircleDiagram from '../../assets/main_page/circle_diagram.svg'
import { Carousel } from '../carousel/carousel'
import ChatIcon from '../../../public/chat_icon.svg'

const MainPageContent = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.slider_wrapper}>
        <div className="container">
          <Carousel />
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
              <a href="#" className={styles.section_btn}>
                Caregiver Toolkit
              </a>
            </div>
            <div className={styles.block_image}>
              <Image src="/phone.png" width={490} height={400} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.basics}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.block_text}>
              <h2>Navigate home care </h2>
              <p>
                Learn about the basics of home care and the roles of home care
                providers.
              </p>
              <a href="#" className={styles.section_btn}>
                The Basics
              </a>
            </div>
            <div className={styles.block_image}>
              <Image src="/people.png" width={490} height={276} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.caregiver_wellness}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.block_text}>
              <h2>Improve caregiver wellness</h2>
              <p>
                Learn how to protect personal health and wellness to prevent
                stress and burnout.
              </p>
              <a href="#" className={styles.section_btn}>
                Caregiver Wellness
              </a>
            </div>
            <div className={styles.block_image}>
              <Image src="/girl.png" width={490} height={276} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.chronic_diseases}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.block_text}>
              <h2>Manage chronic diseases</h2>
              <p>
                Learn how to manage COPD and Heart Failure symptoms in the home.
              </p>
              <a href="#" className={styles.section_btn}>
                Managing Symptoms
              </a>
            </div>
            <div className={styles.block_image}>
              <Image src="/girls.png" width={490} height={276} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.bottom_section}>
        <div className="container">
          <ChatIcon />
          <p>
            Contact us to see how YourCare+ can be customized for your
            organization.
          </p>
          <a href="#" className={styles.section_btn}>
            Request a demo
          </a>
        </div>
      </section>
    </div>
  )
}

export default MainPageContent
