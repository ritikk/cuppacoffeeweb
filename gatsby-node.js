/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const templatePath = require.resolve(`./src/templates/category-template.js`)
  return graphql(`
    {
      allStrapiCategory(filter: { store: { id: { eq: 1 } } }) {
        edges {
          node {
            name
            strapiId
            products {
              name
              id
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allStrapiCategory.edges.forEach(edge => {
      console.log(JSON.stringify(edge))

      createPage({
        path: `/category/${edge.node.strapiId}`,
        component: templatePath,
        context: { category: edge.node },
      })
    })
  })
}
