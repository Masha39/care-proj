import React from 'react'

import groupBy from 'lodash/groupBy'
import useTranslation from 'next-translate/useTranslation'

import { Banner } from 'components/banner/banner'
import { ContentType } from 'components/content_type/content_type'
import { Filters } from 'components/filters/filters'
import Layout from 'layouts/layout'
import { useContentType } from '~/utils/use_content_type'
import { useSelect } from '~/utils/use_select'

const CaregiverToolkit = () => {
  const { t } = useTranslation('static/caregiver_toolkit')

  const types = t<ContentType[]>('content_types', {}, { returnObjects: true })

  const { contentTypes, selectedContentType, setSelectedContentType } =
    useContentType(types)

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

  console.log(filteredArticles)

  return (
    <Layout>
      <Banner title="title" description="descr" />
      <Filters
        topics={articlesByTopic}
        contentTypes={contentTypes}
        defaultSelectValue={defaultValue}
        selectedTopic={selectedTopic}
        selectedContentType={selectedContentType}
        setSelectedTopic={setSelectedTopic}
        setSelectedContentType={setSelectedContentType}
      />
    </Layout>
  )
}

export default CaregiverToolkit
