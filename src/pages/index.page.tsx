import type { NextPage } from 'next'
import Head from 'next/head'

import { Button } from 'components/button/button'
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
        <Button
          buttonStyle="primary_blue"
          title="primary_blue"
          onClick={() => {}}
        />
        <Button
          buttonStyle="primary_orange"
          size="big"
          title="primary_orange big"
          onClick={() => {}}
        />
        <Button buttonStyle="secondary" title="secondary" onClick={() => {}} />
        <Button
          buttonStyle="destructive"
          title="destructive"
          onClick={() => {}}
        />
        <Button buttonStyle="tertiary" title="tertiary" onClick={() => {}} />
        <Button
          buttonStyle="destructive_small"
          title="destructive_small"
          onClick={() => {}}
        />
        <Button buttonStyle="add" title="add" onClick={() => {}} />
        <Button buttonStyle="add_small" title="add_small" onClick={() => {}} />
        <Button buttonStyle="icon" title="icon" onClick={() => {}} />
        <Button
          buttonStyle="icon_filled"
          title="icon_filled"
          onClick={() => {}}
        />
      </Layout>
    </>
  )
}

export default Home
