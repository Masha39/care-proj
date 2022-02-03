import React from 'react'

import groupBy from 'lodash/groupBy'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import { ContentType } from 'components/content_type/content_type'
import { Filters } from 'components/filters/filters'
import Layout from 'layouts/layout'
import { ToolsGrid } from 'pages/caregiver-toolkit/components/tools_grid/tools_grid'
import BannerImage from 'public/images/toolkit_banner.png'
import { getTopicsToShow } from '~/utils/get_topics_to_show'
import { useContentType } from '~/utils/use_content_type'
import { useSelect } from '~/utils/use_select'

import styles from './caregiver-toolkit.module.scss'

const CaregiverToolkit = () => {
  const { t } = useTranslation('static/caregiver_toolkit')

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

  const filteredArticles = types.flatMap((type) =>
    articles.filter((article) => article.content_type.value === type.value)
  )

  const articlesByTopic = groupBy(filteredArticles, 'topic')

  const descriptions = t<TopicDescription[]>(
    'static/topics_description:topics_description',
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
          <div className={styles.banner__text}>
            <h1 className={styles.banner__title}>{t('title')}</h1>
            <h3 className={styles.banner__description}>{t('description')}</h3>
          </div>
          <div className={styles.banner__image}>
            <Image src={BannerImage} width={270} height={370} />
          </div>
        </div>
      </div>
      <div className={styles.toolkit}>
        <Filters
          topics={articlesByTopic}
          contentTypes={contentTypes}
          defaultSelectValue={defaultValue}
          selectedTopic={selectedTopic}
          selectedContentType={selectedContentType}
          setSelectedTopic={setSelectedTopic}
          setSelectedContentType={setSelectedContentType}
        />

        <ToolsGrid topics={topicsToShow} />
      </div>
    </Layout>
  )
}

export default CaregiverToolkit
