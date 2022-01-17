import React, { useCallback } from 'react'

import groupBy from 'lodash/groupBy'
import useTranslation from 'next-translate/useTranslation'

import { ContentType } from 'components/content-type/content-type'
import { Select } from 'components/select/select'
import Layout from 'layouts/layout'

import { ArticlesGridTopic } from './components/articles-grid-topic/articles-grid-topic'
import { ArticlesGridType } from './components/articles-grid-type/articles-grid-type'
import { ArticlesGrid } from './components/articles-grid/articles-grid'
import { useLearnContentType } from './hooks/useLearnContentType'
import { useLearnSelect } from './hooks/useLearnSelect'
import styles from './learn.module.scss'
import { getTopicsToShow } from './utils/getTopicsToShow'

const Learn = () => {
  const { defaultValue, selectedTopic, setSelectedTopic } = useLearnSelect()
  const {
    defaultType,
    contentTypes,
    selectedContentType,
    setSelectedContentType
  } = useLearnContentType()

  const { t } = useTranslation('static/learn')

  const articles = t<ArticlePreview[]>(
    'articles-list:articles',
    { count: 1 },
    { returnObjects: true }
  )

  const articlesByTopic = groupBy(articles, 'topic')

  const descriptions = t<TopicDescription[]>(
    'static/learn:topics_description',
    { count: 1 },
    { returnObjects: true }
  )

  const topicsToShow = getTopicsToShow(
    articlesByTopic,
    selectedTopic.value,
    defaultValue.value,
    selectedContentType.value,
    defaultType.value,
    descriptions
  )

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
        <h1 className={styles.banner__title}>{t('title')}</h1>
        <h3 className={styles.banner__description}>{t('description')}</h3>
      </div>
      <div className={styles.learn}>
        <div className={styles.filters}>
          <div className={styles.select}>
            <div className={styles.select__title}>{t('topic')}</div>
            <Select
              value={selectedTopic}
              options={selectOptions()}
              onChange={(selected: SelectOption) => setSelectedTopic(selected)}
            />
          </div>

          <div className={styles.filters__contentType}>
            <div className={styles.filters__title}>{t('content_type')}</div>
            {contentTypes.map((type, index) => (
              <div className={styles.filters__tag} key={index}>
                <ContentType
                  icon={type.icon}
                  type={type.label}
                  isClickable
                  isActive={selectedContentType?.label === type.label}
                  onClick={() =>
                    setSelectedContentType({
                      label: type.label,
                      value: type.value,
                      icon: type.icon
                    })
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {selectedContentType.value === defaultType.value &&
          selectedTopic.value === defaultValue.value && (
            <ArticlesGrid
              topicsToShow={topicsToShow}
              setTopic={setSelectedTopic}
            />
          )}

        {selectedTopic.value === defaultValue.value &&
          selectedContentType.value !== defaultType.value && (
            <ArticlesGridType topicsToShow={topicsToShow} />
          )}

        {selectedTopic.value !== defaultValue.value && (
          <ArticlesGridTopic topicsToShow={topicsToShow} />
        )}
      </div>
    </Layout>
  )
}

export default Learn
