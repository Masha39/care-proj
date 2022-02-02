import React from 'react'

import styles from './banner.module.scss'

export const Banner = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.banner__text}>
          <h1 className={styles.banner__title}>{title}</h1>
          <h3 className={styles.banner__description}>{description}</h3>
        </div>
      </div>
    </div>
  )
}
