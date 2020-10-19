import React from "react"

import Layout from "../components/theme/layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const PhotosPage = ({ data }) => (
  
  <Layout>
    <SEO title="Home" />

    <div className="hero">
      <div className="content">
        {data.allFile.edges.map(edge => {
        return <Img fluid={edge.node.childImageSharp.fluid} />
        })}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
    query {
        allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "photography"}}) {
            edges {
                node {
                id
                childImageSharp {
                    fluid(maxWidth: 3080, quality: 100) {
                        aspectRatio
                        base64
                        src
                        sizes
                        srcSet
                        }
                    }
                }
            }
        }
    }
  
`
  

export default PhotosPage