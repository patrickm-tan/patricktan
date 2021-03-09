
/*

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const mdxTemplate = path.resolve(`./src/components/theme/projects/template.js`)

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

const temp = require(`path`)


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const mdxTemplate = temp.resolve(`./src/components/theme/blog/template.js`)

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

*/

const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (_.get(node, "internal.type") === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(_.get(node, "parent"));

    createNodeField({
      node,
      name: "collection",
      value: _.get(parent, "sourceInstanceName")
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                collection
              }
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `).then(results => {
      const allEdges = results.data.allMarkdownRemark.edges;

      const blogEdges = allEdges.filter(
        edge => edge.node.fields.collection === `posts`
      );
      const pageEdges = allEdges.filter(
        edge => edge.node.fields.collection === `projects`
      );

      _.each(blogEdges, (edge, index) => {
        const previous =
          index === blogEdges.length - 1 ? null : blogEdges[index + 1].node;
        const next = index === 0 ? null : blogEdges[index - 1].node;

        createPage({
          path: `/blog/posts/${edge.node.frontmatter.slug}`,
          component: path.resolve("./src/components/theme/posts/template.js"),
          context: {
            slug: edge.node.frontmatter.slug,
            previous,
            next
          }
        });
      });

      _.each(pageEdges, (edge, index) => {
        createPage({
          path: `/projects/${edge.node.frontmatter.slug}`,
          component: path.resolve("./src/components/theme/projects/template.js"),
          context: {
            slug: edge.node.frontmatter.slug
          }
        });
      });

      resolve();
    });
  });
};