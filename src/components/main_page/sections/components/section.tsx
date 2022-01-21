import React from 'react'

import cn from 'classnames'
import Image from 'next/image'

import { TypeSections } from '../sections'
import styles from './section.module.scss'

type Props = {
  item: TypeSections
  isLeft: boolean | number
  isWhite: boolean | number
}

export const Section = ({ item, isLeft, isWhite }: Props) => {
  return (
    <section
      className={cn(styles.section, {
        [styles.section_white]: isWhite
      })}
    >
      <div className="container">
        <div
          className={cn(styles.wrapper, {
            [styles.wrapper_reverse]: isLeft
          })}
        >
          <div className={styles.block_text}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href="#" className={styles.section_btn}>
              {item.btn}
            </a>
          </div>
          <div className={styles.block_image}>
            <Image
              src={item.img.src}
              width={item.img.width}
              height={item.img.height}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
