import type { NextPage } from 'next'
import Layout from 'layouts/layout'
import { UIButton } from '~/components/base-ui/UIButton/UIButton'

const Home: NextPage = () => {
  return (
    <Layout>
      <UIButton buttonStyle="primary_blue" />
      <UIButton buttonStyle="primary_orange" size="big" />
      <UIButton buttonStyle="secondary" />
      <UIButton buttonStyle="destructive" />
      <UIButton buttonStyle="tertiary" />
      <UIButton buttonStyle="destructive_small" />
      <UIButton buttonStyle="add" />
      <UIButton buttonStyle="add_small" />
    </Layout>
  )
}

export default Home
