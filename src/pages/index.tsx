import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { Carousel } from 'components/carousel/carousel'
import Layout from 'layouts/layout'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <h1>{t('title')}</h1>
      <div className="slider-wrapper">
        <div className="container">
          <Carousel />
        </div>
      </div>
    </Layout>
  )
}

export default Home
