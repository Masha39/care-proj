import React, { useCallback } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Layout from 'layouts/layout'
import { ContentCard } from 'components/learn-page/content-card/content-card'
import { Select } from 'components/article/select/select'
import groupBy from 'lodash/groupBy'
import styles from './learn.module.scss'
import { useLearnSelect } from '~/hooks/useLearnSelect'

const Learn = () => {
  const { defaultValue, selectedTopic, setSelectedTopic } = useLearnSelect()

  const { t } = useTranslation('articles-list')

  const articles = t<ArticlePreview[]>(
    'articles-list:articles',
    { count: 1 },
    { returnObjects: true }
  )

  const articlesByTopic = groupBy(articles, 'topic')

  const articlesByContentType = groupBy(articles, 'content_type')

  console.log(articlesByContentType)

  const topicsToShow =
    selectedTopic.value === defaultValue.value
      ? articlesByTopic
      : { [selectedTopic.value]: articlesByTopic[selectedTopic.value] }

  const selectOptions = useCallback(() => {
    const arr: SelectOption[] = [defaultValue]
    Object.entries(articlesByTopic).map(([topic]) =>
      arr.push({ value: topic, label: topic })
    )
    return arr
  }, [articlesByTopic, defaultValue])

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
          <div className={styles.learn__select__title}>
            {t('static/learn:topic')}
          </div>
          <Select
            value={selectedTopic}
            options={selectOptions()}
            onChange={(selected: SelectOption) => setSelectedTopic(selected)}
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
