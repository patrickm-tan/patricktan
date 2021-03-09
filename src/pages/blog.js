import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/theme/post-links/post-link"
import Layout from "../components/theme/layout/layout"

const BlogPage = ({
    data: {
        allMarkdownRemark: { edges },
      },
    }) => {
      const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

      return (
        <Layout>
            <div className="content-sm project">
                <h1> Recent Blog Posts</h1>
                {Posts}
            </div>

        </Layout>
      )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(posts)/" }} sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
          }
        }
      }
    }
  }
`