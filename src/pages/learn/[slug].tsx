import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../layouts/Layout'
import { ArticleJson } from './types'
import { Information } from './components/Information'
import { Picture } from './components/Picture'

type ArticleProps = {
  article: ArticleJson
}

const Article = ({ article }: ArticleProps) => {
  return (
    <Layout>
      <h1>{article.title}</h1>
      <div>
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
  const data = await import(
    `../../../locales/${locale || defaultLocale}/articles/${params?.slug}`
  )

  return {
    props: {
      article: data.default
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
          return import(`../../../locales/${locale}/articles-list.json`)
        })
      : await import(`../../../locales/${defaultLocale}/articles-list.json`)
  )

  const paths = data.flatMap((d) =>
    d.default.articles.flatMap((article: any) =>
      locales?.map((locale) => {
        return { params: { slug: article.url }, locale }
      })
    )
  )

  return { paths, fallback: false }
}

export default Article
