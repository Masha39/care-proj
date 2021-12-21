import Layout from '../../layouts/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Article } from './types'
import { Information } from './components/information'
import { Picture } from './components/picture'

type ArticleProps = {
  article: Article
}

const Article = ({ article }: ArticleProps) => {
  return (
    <>
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
            }
          })}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params
}) => {
  let data = await import(`../../config/articles/${params?.article}.json`)

  return {
    props: {
      article: data.default
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data = await import('../../config/articles/articlesList.json')

  const paths = data.default.map((article) => ({
    params: { article: article.url }
  }))

  return { paths, fallback: false }
}

export default Article
