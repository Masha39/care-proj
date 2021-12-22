import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../layouts/Layout'
import { ArticleJson } from './types'
import { Information } from './components/information'
import { Picture } from './components/picture'

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
              return <Picture src={item.src} alt={article.title} />
            default:
              return null
          }
        })}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params
}) => {
  const data = await import(`../../config/articles/${params?.article}.json`)

  return {
    props: {
      article: data.default
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await import('../../config/articles/articlesList.json')

  const paths = data.default.map((article) => ({
    params: { article: article.url }
  }))

  return { paths, fallback: false }
}

export default Article
