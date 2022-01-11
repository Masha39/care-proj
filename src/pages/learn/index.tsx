import React, { useCallback } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from 'layouts/layout'
import { Select } from 'components/learn-page/select/select'
import groupBy from 'lodash/groupBy'
import { ContentType } from 'components/content-type/content-type'
import { getTopicsToShow } from 'util/getTopicsToShow'
import { ArticlesGrid } from 'components/learn-page/articles-grid/articles-grid'
import { ArticlesGridType } from 'components/learn-page/articles-grid-type/articles-grid-type'
import { ArticlesGridTopic } from 'components/learn-page/articles-grid-topic/articles-grid-topic'
import styles from './learn.module.scss'
import { useLearnSelect } from '~/hooks/useLearnSelect'
import { useLearnContentType } from '~/hooks/useLearnContentType'

const Learn = () => {
  const { defaultValue, selectedTopic, setSelectedTopic } = useLearnSelect()
  const {
    defaultType,
    contentTypes,
    selectedContentType,
    setSelectedContentType
  } = useLearnContentType()

  const { t } = useTranslation('articles-list')

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
        <h1 className={styles.banner__title}>{t('static/learn:title')}</h1>
        <h3 className={styles.banner__description}>
          {t('static/learn:description')}
        </h3>
      </div>
      <div className={styles.learn}>
        <div className={styles.filters}>
          <div className={styles.select}>
            <div className={styles.select__title}>
              {t('static/learn:topic')}
            </div>
            <Select
              value={selectedTopic}
              options={selectOptions()}
              onChange={(selected: SelectOption) => setSelectedTopic(selected)}
            />
          </div>

          <div className={styles.filters__contentType}>
            <div className={styles.filters__title}>
              {t('static/learn:content_type')}
            </div>
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
            <ArticlesGrid topicsToShow={topicsToShow} />
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
