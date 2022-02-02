import groupBy from 'lodash/groupBy'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from 'layouts/layout'
import { List } from 'pages/[slug]/components/list/list'
import { TextWithImage } from 'pages/[slug]/components/text_with_image/text_with_image'
import { ToolPreview } from 'pages/[slug]/components/tool_preview/tool_preview'
import { Zone } from 'pages/[slug]/components/zone/zone'
import { fetchJson } from '~/utils/fetch_json'

import styles from './article.module.scss'
import { Banner } from './components/banner/banner'
import { Information } from './components/information/information'
import { Navigation } from './components/navigation/navigation'
import { Picture } from './components/picture/picture'
import { Sidebar } from './components/sidebar/sidebar'
import { Tips } from './components/tips/tips'
import { Video } from './components/video/video'
import { getNextOrPreviousArticle } from './utils/get_next_or_previous_article'
import { getNextTopicArticles } from './utils/get_next_topic_articles'

type ArticleProps = {
  article: ArticleJson
  preview: ArticlePreview
  articles: ArticlePreview[]
}

const Article = ({ article, preview, articles }: ArticleProps) => {
  const filteredArticles = articles.filter((el) => el.topic === preview?.topic)
  const articlesByTopic = groupBy(articles, 'topic')

  const { nextArticle, prevArticle } = getNextOrPreviousArticle(
    filteredArticles,
    article.title
  )

  const { nextTopicArticles, nextTopic } = getNextTopicArticles(
    articlesByTopic,
    preview.topic
  )

  return (
    <Layout>
      <Banner
        title={article.title}
        type={preview?.content_type.label}
        icon={preview?.content_type.icon}
        image={preview?.image}
        topic={preview?.topic}
        url={preview?.url}
        readTime={preview?.read_time}
      />
      <div className={styles.container}>
        <div className={styles.article}>
          {article.content.map((item, index) => {
            switch (item.type) {
              case 'information':
                return (
                  <Information
                    key={index}
                    title={item?.title}
                    paragraphs={item.paragraphs}
                  />
                )
              case 'image':
                return (
                  <Picture src={item.src} alt={article.title} key={index} />
                )
              case 'tips':
                return (
                  <Tips
                    title={item.title}
                    boldText={item.bold_text}
                    tips={item.tips}
                    icon={item.icon}
                    key={index}
                  />
                )
              case 'video':
                return <Video src={item.src} key={index} text={item.text} />
              case 'text_with_image':
                return (
                  <TextWithImage
                    content={item.content}
                    background={item.background}
                    key={index}
                  />
                )
              case 'list':
                return (
                  <List title={item.title} content={item.content} key={index} />
                )
              case 'zone':
                return (
                  <Zone label={item.label} content={item.content} key={index} />
                )
              case 'tool_preview':
                return (
                  <ToolPreview
                    images={item.images}
                    title={item.title}
                    key={index}
                  />
                )
              default:
                return null
            }
          })}
          <Navigation
            currentTopic={preview.topic}
            nextArticle={nextArticle}
            prevArticle={prevArticle}
            previewText={nextArticle?.preview_text}
            nextTopicArticles={nextTopicArticles}
            nextTopic={nextTopic}
          />
        </div>
        <Sidebar
          topic={preview?.topic}
          articles={filteredArticles}
          title={article.title}
        />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
  locale,
  defaultLocale
}) => {
  let data: any

  try {
    data = await fetchJson(`${locale}/articles/${params?.slug}`)
  } catch (e) {
    data = await fetchJson(`${defaultLocale}/articles/${params?.slug}`)
  }

  const dataPreview = await fetchJson(`${locale}/articles-list.json`)

  const [preview] = dataPreview.articles
    .flatMap((item: ArticlePreview) => {
      return item.url === data.default.url && item
    })
    .filter((a: ArticlePreview) => a)

  return {
    props: {
      article: data.default,
      preview: preview || null,
      articles: dataPreview.articles
    }
  }
}

export const getStaticPaths: GetStaticPaths = async ({
  locales,
  defaultLocale
}) => {
  const data = await Promise.all(
    locales
      ? locales.map(async (locale) => {
          return fetchJson(`${locale}/articles-list.json`)
        })
      : await fetchJson(`${defaultLocale}/articles-list.json`)
  )

  const paths = data.flatMap((d) =>
    d.default.articles.flatMap((article: any) =>
      locales?.map((locale) => {
        return {
          params: { slug: article.url },
          locale
        }
      })
    )
  )

  return { paths, fallback: false }
}

export default Article
