import React, { useState } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Layout from 'layouts/layout'
import { ContentCard } from 'components/learn-page/content-card/content-card'
import { ArticlePreview } from './types'
import styles from './learn.module.scss'

const SELECT_OPTION_ALL = 'ALL'

const Learn = () => {
  const { t } = useTranslation('articles-list')
  const [selectedTopic, setSelectedTopic] = useState(SELECT_OPTION_ALL)

  const articles = t<ArticlePreview[]>(
    'articles-list:articles',
    { count: 1 },
    { returnObjects: true }
  )

  const articlesByTopic = articles.reduce<Record<string, ArticlePreview[]>>(
    (acc, articlePreview) => {
      const { topic } = articlePreview

      if (acc[topic]) {
        acc[topic].push(articlePreview)
      } else {
        acc[topic] = [articlePreview]
      }

      return acc
    },
    {}
  )

  const topicsToShow =
    selectedTopic === SELECT_OPTION_ALL
      ? articlesByTopic
      : { [selectedTopic]: articlesByTopic[selectedTopic] }

  return (
    <Layout>
      <div className={styles.banner}>
        <h1 className={styles.banner__title}>{t('static/learn:title')}</h1>
        <h3 className={styles.banner__description}>
          {t('static/learn:description')}
        </h3>
      </div>
      <div className={styles.learn}>
        <select onChange={(e) => setSelectedTopic(e.target.value)}>
          <option value={SELECT_OPTION_ALL}>All</option>
          <option value="Understanding Home Care">
            Understanding Home Care
          </option>
          <option value="Caregiver Wellness">Caregiver Wellness</option>
        </select>

        {Object.entries(topicsToShow).map(([topicName, topicArticles]) => (
          <div key={topicName} className={styles.learn__wrapper}>
            <div>{topicName}</div>
            {topicArticles.map((item, index) => {
              return (
                <Link href={`/learn/${item.url}`} key={index}>
                  <a>
                    <ContentCard
                      title={item.title}
                      image={item.image}
                      type={item.content_type}
                    />
                  </a>
                </Link>
              )
            })}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Learn
