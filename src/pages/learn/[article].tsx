import Layout from '../../layouts/Layout'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Article } from './types'

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
                  <div key={index}>
                    <h2>{item.title}</h2>
                    {item.paragraphs.map((el, index) => {
                      return <p key={index}>{el}</p>
                    })}
                  </div>
                )
              case 'image':
                return (
                  <Image
                    alt={article.title}
                    src={item.src}
                    width="100px"
                    height="100px"
                    key={index}
                  />
                )
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
