import type { NextPage } from 'next'
import Layout from 'layouts/layout'
import MainPageContent from '../components/main_page_content/main_page_content'
// import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  // const { t } = useTranslation('common')

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
