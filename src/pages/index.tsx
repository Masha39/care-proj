import type { NextPage } from 'next'
import Slider from '../components/Carousel/Carousel'
import Layout from '../layouts/Layout'

const Home: NextPage = () => {
  return (
    <>
      {/* <Head>
        <title>YouCare+</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <Layout>
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
