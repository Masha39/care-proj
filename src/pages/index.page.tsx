import type { NextPage } from 'next'
import Head from 'next/head'

import { LandingBanner } from 'components/main_page/landing-banner/landing_banner'
import { MainPageContent } from 'components/main_page/main_page_content'
import Layout from 'layouts/layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YouCare+</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <LandingBanner />
        <MainPageContent />
      </Layout>
    </>
  )
}

export default Home
