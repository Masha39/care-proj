import React, { useState } from 'react'

import cn from 'classnames'
import Image from 'next/image'

import styles from './section.module.scss'

export const Section = () => {
  const [sections] = useState([
    {
      title: 'Make caregiving easier',
      description:
        'YourCare+ provides tools to use in the home, send to a family member or friend, or share with health care professionals.',
      btn: 'Caregiver Toolkit',
      img: <Image src="/phone.png" width={490} height={400} />
    },
    {
      title: 'Navigate home care',
      description:
        'Learn about the basics of home care and the roles of home care providers.',
      btn: 'The Basics',
      img: <Image src="/people.png" width={490} height={276} />
    },
    {
      title: 'Improve caregiver wellness',
      description:
        'Learn how to protect personal health and wellness to prevent stress and burnout.',
      btn: 'Caregiver Wellness',
      img: <Image src="/girl.png" width={490} height={276} />
    },
    {
      title: 'Manage chronic diseases',
      description:
        'Learn how to manage COPD and Heart Failure symptoms in the home.',
      btn: 'Managing Symptoms',
      img: <Image src="/girls.png" width={490} height={276} />
    }
  ])
  return (
    <div className={styles.sections_wrapper}>
      {sections.map((item, index) => (
        <section
          className={cn(styles.section, {
            [styles.section_white]: index % 2
          })}
          key={index}
        >
          <div className="container">
            <div
              className={cn(styles.wrapper, {
                [styles.wrapper_reverse]: index % 2
              })}
            >
              <div className={styles.block_text}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href="#" className={styles.section_btn}>
                  {item.btn}
                </a>
              </div>
              <div className={styles.block_image}>{item.img}</div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
