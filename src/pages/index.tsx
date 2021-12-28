import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '~/layouts/layout'
import MainPageContent from '../components/main_page_content/main_page_content'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YouCare+</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <MainPageContent />
      </Layout>
    </>
  )
}

export default Home
