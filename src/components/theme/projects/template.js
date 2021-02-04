import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Img from "gatsby-image"
import "./styles.scss"



const shortcodes = { Link } // Provide common components here
export default function PageTemplate({ data: { mdx } }) {

  return (
    <Layout>
      <div className="content-sm project">
        <h1>{mdx.frontmatter.title}</h1>
        <h2 className="caption">{mdx.frontmatter.caption}</h2>
        <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
        <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title,
        caption,
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
