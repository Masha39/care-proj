import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '~/layouts/layout'
import MainPageContent from '../components/main_page_content/main_page_content'
import Landingbanner from '~/components/landing-banner/landing_banner'
import Accordion from '~/components/accordion/accordion'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YouCare+</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Landingbanner />
        <Accordion />
        <MainPageContent />
      </Layout>
    </>
  )
}

export default Home
