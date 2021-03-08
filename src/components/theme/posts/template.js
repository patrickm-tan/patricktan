import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Img from "gatsby-image"
import "./styles.scss"




export default function Template ({
  data,
}) {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="content-sm project">
        <h1>{frontmatter.title}</h1>
        <h2 className="caption">{frontmatter.caption}</h2>
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`

query($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      caption
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
