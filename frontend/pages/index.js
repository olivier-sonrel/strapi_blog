import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-animation-toggle uk-container uk-container-large">
          <div className="uk-card uk-card-default uk-card-body uk-animation-shake">
            <h1>{homepage.hero.title}</h1>
          </div>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home
