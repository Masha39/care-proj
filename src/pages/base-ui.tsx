import type { NextPage } from 'next'

import Layout from 'layouts/layout'
import { UIButton } from '~/components/base-ui/UIButton/UIButton'

const Home: NextPage = () => {
  return (
    <Layout>
      <UIButton
        buttonStyle="primary_blue"
        title="primary_blue"
        clickButton={() => {}}
      />
      <UIButton
        buttonStyle="primary_orange"
        size="big"
        title="primary_orange big"
        clickButton={() => {}}
      />
      <UIButton
        buttonStyle="secondary"
        title="secondary"
        clickButton={() => {}}
      />
      <UIButton
        buttonStyle="destructive"
        title="destructive"
        clickButton={() => {}}
      />
      <UIButton
        buttonStyle="tertiary"
        title="tertiary"
        clickButton={() => {}}
      />
      <UIButton
        buttonStyle="destructive_small"
        title="destructive_small"
        clickButton={() => {}}
      />
      <UIButton buttonStyle="add" title="add" clickButton={() => {}} />
      <UIButton
        buttonStyle="add_small"
        title="add_small"
        clickButton={() => {}}
      />
      <UIButton buttonStyle="icon" title="icon" clickButton={() => {}} />
      <UIButton
        buttonStyle="icon_filled"
        title="icon_filled"
        clickButton={() => {}}
      />
    </Layout>
  )
}

export default Home
