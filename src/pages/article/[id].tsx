import Layout from '../../layouts/Layout'
import whatIsHomeCare from '../../config/articles/whatIsHomeCare.json'

const Article = () => {
  const content = whatIsHomeCare

  return (
    <>
      <Layout>
        <h2>{content[0].title}</h2>
      </Layout>
    </>
  )
}

export default Article
