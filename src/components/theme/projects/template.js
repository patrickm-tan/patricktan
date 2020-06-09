import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "/home/patrick/Documents/portfolio/patricktan/src/components/theme/layout/layout.js"



const shortcodes = { Link } // Provide common components here
export default function PageTemplate({ data: { mdx } }) {

  return (
    <Layout>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
