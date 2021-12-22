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
  locale
}) => {
  const data = await import(`../../config/articles/${params?.slug}.json`)

  return {
    props: {
      article: data.default,
      locale
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await import('../../../locales/en/articles-list.json')

  const paths = data.default.articles.map((article) => ({
    params: { slug: article.url }
  }))

  return { paths, fallback: false }
}

export default Article
