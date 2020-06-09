import React from "react"

import Layout from "../components/theme/layout/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="content">
        <h1>Patrick Tan</h1>
        <h2>user experience researcher</h2>
        <br/>
        <p>Hi, I'm <span className="is-green">Patrick</span> — A UX Researcher with a background in computer science, psychology and communication technology. I previously worked at the Royal Bank of Canada as a design researcher. Interesed in inclusivity & accessibility, social connectivity, & the form and complexity of eggs.</p>
        <br/>
        <p className="subtitle">previous work</p>
        <ul>
          <li> <Link to = {'./projects/royal-bank-of-canada'}>
          FCB/SIX
          </Link>
          </li>
          <li>Royal Bank of Canada</li>
          <li>University of Toronto</li>
          <li>Presto</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
