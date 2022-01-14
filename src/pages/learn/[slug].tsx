import { GetStaticPaths, GetStaticProps } from 'next'

import { Banner } from 'components/article/banner/banner'
import { Information } from 'components/article/information/information'
import { Navigation } from 'components/article/navigation/navigation'
import { Picture } from 'components/article/picture/picture'
import { Sidebar } from 'components/article/sidebar/sidebar'
import { Tips } from 'components/article/tips/tips'
import { Video } from 'components/article/video/video'
import Layout from 'layouts/layout'
import { fetchJson } from 'util/fetchJson'

import styles from './article.module.scss'

type ArticleProps = {
  article: ArticleJson
  preview: ArticlePreview
  articles: ArticlePreview[]
}

const Article = ({ article, preview, articles }: ArticleProps) => {
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
                    tips={item.tips}
                    icon={item.icon}
                    key={index}
                  />
                )
              case 'video':
                return <Video src={item.src} key={index} text={item.text} />
              default:
                return null
            }
          })}
          <Navigation />
        </div>
        <Sidebar
          topic={preview?.topic}
          articles={articles.filter((el) => el.topic === preview?.topic)}
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
