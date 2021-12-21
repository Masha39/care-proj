import React from 'react'
import Layout from '../../layouts/Layout'
import Link from 'next/link'
import articles from '../../config/articles/articlesList.json'

const learn = () => {
  return (
    <>
      <Layout>
        <h1>Learn</h1>
        {articles.map((item: any, index: any) => {
          return (
            <Link href={`/learn/${item.url}`} key={index}>
              <a>{item.title} </a>
            </Link>
          )
        })}
      </Layout>
    </>
  )
}

export default learn
