import React from 'react'

import { TypePolicy } from './index.page'
import styles from './privacy_policy_content.module.scss'

type Props = {
  item: TypePolicy
}

export const PrivacyPolicyContent = ({ item }: Props) => {
  const isList = item.list
  return (
    <div className="container">
      <h1 className={styles.h1}>{item.h1}</h1>
      <p className={styles.title}>{item.title}</p>
      <p>{item.description}</p>
      <ul className={styles.list}>
        {isList
          ? isList.map((el, index) => (
              <li className={styles.list_item} key={index}>
                {el}
              </li>
            ))
          : null}
      </ul>
      <p>{item.descriptionAdd}</p>
    </div>
  )
}
