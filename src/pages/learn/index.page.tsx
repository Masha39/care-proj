import React from 'react'

import groupBy from 'lodash/groupBy'
import useTranslation from 'next-translate/useTranslation'

import { ContentType } from 'components/content_type/content_type'
import { Filters } from 'components/filters/filters'
import Layout from 'layouts/layout'
import { useContentType } from '~/utils/use_content_type'
import { useSelect } from '~/utils/use_select'

import { ArticlesGrid } from './components/articles_grid/articles_grid'
import { ArticlesGridTopic } from './components/articles_grid_topic/articles_grid_topic'
import { ArticlesGridType } from './components/articles_grid_type/articles_grid_type'
import styles from './learn.module.scss'
import { getTopicsToShow } from './utils/get_topics_to_show'

const Learn = () => {
  const { t } = useTranslation('static/learn')

  const types = t<ContentType[]>('content_types', {}, { returnObjects: true })

  const {
    defaultType,
    contentTypes,
    selectedContentType,
    setSelectedContentType
  } = useContentType(types)

  const { defaultValue, selectedTopic, setSelectedTopic } = useSelect()

  const articles = t<ArticlePreview[]>(
    'articles-list:articles',
    {},
    { returnObjects: true }
  )

  const articlesByTopic = groupBy(articles, 'topic')

  const descriptions = t<TopicDescription[]>(
    'topics_description',
    {},
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

  return (
    <Layout>
      <div className={styles.banner}>
        <div className="container">
          <div className={styles.banner_text}>
            <h1 className={styles.banner__title}>{t('title')}</h1>
            <h3 className={styles.banner__description}>{t('description')}</h3>
          </div>
        </div>
      </div>
      <div className={styles.learn}>
        <Filters
          topics={articlesByTopic}
          contentTypes={contentTypes}
          defaultSelectValue={defaultValue}
          selectedTopic={selectedTopic}
          selectedContentType={selectedContentType}
          setSelectedTopic={setSelectedTopic}
          setSelectedContentType={setSelectedContentType}
        />
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
