import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import { TypePolicy } from './index.page'
import styles from './privacy_policy_content.module.scss'

type Props = {
  item: TypePolicy
}

export const PrivacyPolicyContent = ({ item }: Props) => {
  const { t } = useTranslation('static/privacy_policy')
  return (
    <div className="container">
      {'h1' ? <h1>{t('h1')}</h1> : null}
      <p className={styles.title}>{item.title}</p>
      <p>{item.description}</p>
      {console.log(item.list, 'item_list')}
      <ul className={styles.list}>
        <li className={styles.list_item}>{item.list}</li>
      </ul>
      <p>{item.descriptionAdd}</p>
    </div>
  )
}
