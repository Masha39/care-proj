import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Layout from 'layouts/layout'
import { ContentCard } from 'components/learn-page/content-card/content-card'
import { Select } from 'components/article/select/select'
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

  const selectOptions = useCallback(() => {
    const arr: SelectOption[] = [
      { value: SELECT_OPTION_ALL, label: t('static/learn:topics') }
    ]
    Object.entries(articlesByTopic).map(([topic]) =>
      arr.push({ value: topic, label: topic })
    )
    return arr
  }, [articlesByTopic, t])

  return (
    <Layout>
      <div className={styles.banner}>
        <h1 className={styles.banner__title}>{t('static/learn:title')}</h1>
        <h3 className={styles.banner__description}>
          {t('static/learn:description')}
        </h3>
      </div>
      <div className={styles.learn}>
        <div className={styles.learn__select}>
          Topic
          <Select
            options={selectOptions()}
            onChange={(selected: SelectOption) =>
              setSelectedTopic(selected.value)
            }
            defaultValue={selectOptions()[0]}
          />
        </div>

        {Object.entries(topicsToShow).map(([topicName, topicArticles]) => (
          <div key={topicName} className={styles.learn__wrapper}>
            <div>{topicName}</div>
            {topicArticles?.map((item, index) => {
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
