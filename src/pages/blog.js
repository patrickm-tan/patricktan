import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import SEO from "../components/seo"
import Layout from "../components/theme/layout/layout"


const BlogPage = () => (

    <Layout>
        <SEO title="Home"/>
        <h1> Hello World Blogs here </h1>
    </Layout>
)

export default BlogPage
