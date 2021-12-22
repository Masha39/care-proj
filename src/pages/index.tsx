import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../layouts/Layout'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <h1>{t('title')}</h1>
    </Layout>
  )
}

export default Home
