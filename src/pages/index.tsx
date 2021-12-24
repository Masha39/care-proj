import type { NextPage } from 'next'
import MainPageContent from '../components/main_page_content/main_page_content'

import Layout from '../layouts/Layout'

const Home: NextPage = () => {
  return (
    <>
      {/* <Head>
        <title>YouCare+</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <Layout>
        <MainPageContent />
      </Layout>
    </>
  )
}

export default Home
