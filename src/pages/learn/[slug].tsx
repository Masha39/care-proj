import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from 'layouts/layout'
import { fetchJson } from 'util/fetchJson'
import { Information } from 'components/learn-page/information/information'
import { Picture } from 'components/learn-page/picture/picture'
import { Banner } from 'components/learn-page/banner/banner'
import { ArticleJson, ArticlePreview } from './types'
import styles from './article.module.scss'

type ArticleProps = {
  article: ArticleJson
  preview: ArticlePreview
}

const Article = ({ article, preview }: ArticleProps) => {
  return (
    <Layout>
      <Banner title={article.title} contentType={preview.content_type} />
      <div className={styles.article}>
        {article.content.map((item, index) => {
          switch (item.type) {
            case 'information':
              return (
                <Information
                  key={index}
                  title={item.title}
                  paragraphs={item.paragraphs}
                />
              )
            case 'image':
              return <Picture src={item.src} alt={article.title} key={index} />
            default:
              return null
          }
        })}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
  locale,
  defaultLocale
}) => {
  const data = await fetchJson(
    `${locale || defaultLocale}/articles/${params?.slug}`
  )
  const dataPreview = await fetchJson(
    `${locale || defaultLocale}/articles-list.json`
  )

  const [preview] = dataPreview.articles
    .flatMap((item: ArticlePreview) => {
      return item.url === data.default.url && item
    })
    .filter((a: ArticlePreview) => a)

  return {
    props: {
      article: data.default,
      preview
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
