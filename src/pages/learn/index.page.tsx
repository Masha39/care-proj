import React, { useCallback } from 'react'

import groupBy from 'lodash/groupBy'
import useTranslation from 'next-translate/useTranslation'

import { ContentType } from 'components/content_type/content_type'
import { Select } from 'components/select/select'
import Layout from 'layouts/layout'

import { ArticlesGrid } from './components/articles_grid/articles_grid'
import { ArticlesGridTopic } from './components/articles_grid_topic/articles_grid_topic'
import { ArticlesGridType } from './components/articles_grid_type/articles_grid_type'
import { useLearnContentType } from './hooks/use_learn_content_type'
import { useLearnSelect } from './hooks/use_learn_select'
import styles from './learn.module.scss'
import { getTopicsToShow } from './utils/get_topics_to_show'

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
        <div className="container">
          <div className={styles.banner_text}>
            <h1 className={styles.banner__title}>{t('title')}</h1>
            <h3 className={styles.banner__description}>{t('description')}</h3>
          </div>
        </div>
      </div>
      <div className={styles.learn}>
        <div className="container">
          <div className={styles.filters}>
            <div className={styles.select}>
              <div className={styles.select__title}>{t('topic')}</div>
              <Select
                value={selectedTopic}
                options={selectOptions()}
                onChange={(selected: SelectOption) =>
                  setSelectedTopic(selected)
                }
              />
            </div>
            <div className={styles.filters_scroll_wrapper}>
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
