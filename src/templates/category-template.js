import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { category } }) => {
  return (
    <Layout>
      <SEO title={category.name} />
      <h1>{category.name}</h1>
      Size: {`${category.products.length}`}
    </Layout>
  )
}
