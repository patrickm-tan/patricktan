/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Gatsby: Adding markdown pages (.md and .mdx)
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const mdxTemplate = path.resolve(`src/components/theme/projects/template.js`)

  /* Query all .mdx */
  const mdxQuery = await graphql(`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            path
          }
        }
      }
    }
  }
`)
  if (mdxQuery.errors) {
    reporter.panicOnBuild(`Error while querying mdx`)
    return
  }

  mdxQuery.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: mdxTemplate,
      context: { id: node.id }, 
    })
  })
}