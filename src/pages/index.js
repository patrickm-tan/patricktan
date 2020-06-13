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
        <p>Hi, I'm <span className="is-green">Patrick</span> — A UX Researcher with a background in computer science, psychology and communication technology. I previously worked at the Royal Bank of Canada as a <span className="is-green">design researcher</span>. Interesed in <span className="is-green">inclusive</span> and <span className="is-green">accessible</span> design.</p>
        <br/>
        <p className="subtitle">previous work</p>
        <ul>
          <li> <Link to = {'./projects/royal-bank-of-canada'}>FCB/SIX</Link></li>
          <li> <Link to = {'./projects/royal-bank-of-canada'}>Royal Bank of Canada</Link></li>
          <li> <Link to = {'./projects/royal-bank-of-canada'}>University of Toronto</Link></li>
          <li> <Link to = {'./projects/royal-bank-of-canada'}>Presto</Link></li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
