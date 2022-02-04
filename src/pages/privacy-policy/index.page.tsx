import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import Layout from 'layouts/layout'

import styles from './privacy_policy.module.scss'

export type TypePolicy = {
  title: string
  description: string
  descriptionAdd: string
  list: string[]
  h1: string
}

const PrivacyPolicy = () => {
  const { t } = useTranslation('static/privacy_policy')
  const policyData = t<TypePolicy[]>(
    'static/privacy_policy:privacy_policy',
    { count: 1 },
    { returnObjects: true }
  )

  return (
    <Layout>
      <div className="container">
        {policyData.map((item, index) => (
          <div key={index}>
            <h1 className={styles.h1}>{item.h1}</h1>
            <p className={styles.title}>{item.title}</p>
            <p>{item.description}</p>
            <ul className={styles.list}>
              {item.list
                ? item.list.map((el, i) => (
                    <li className={styles.list_item} key={i}>
                      {el}
                    </li>
                  ))
                : null}
            </ul>
            <p>{item.descriptionAdd}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
