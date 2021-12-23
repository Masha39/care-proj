import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Layout from 'layouts/layout'
import { ArticlePreview } from './types'
import styles from './learn.module.scss'

const Learn = () => {
  const { t } = useTranslation('articles-list')

  const articles = t(
    'articles-list:articles',
    { count: 1 },
    { returnObjects: true }
  ) as ArticlePreview[]

  return (
    <Layout>
      <div className={styles.banner}>
        <h1>{t('static/learn:title')}</h1>
      </div>
      <div className={styles.learn}>
        {articles.map((item: any, index: any) => {
          return (
            <Link href={`/learn/${item.url}`} key={index}>
              <a>{item.title} </a>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default Learn
