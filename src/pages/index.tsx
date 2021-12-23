import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Slider from '../components/carousel/carousel'
import Layout from '../layouts/layout'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      {/* <Head>
        <title>YouCare+</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <Layout>
        <h1>{t('title')}</h1>
        <div className="slider-wrapper">
          <div className="container">
            <Slider />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
