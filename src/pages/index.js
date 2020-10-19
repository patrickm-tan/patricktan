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
        <h2>junior design researcher</h2>
        <br/>
        <p>Hi, I'm <span className="is-highlight">Patrick</span> — A junior design researcher with a background in computer science, psychology and communication technology. I previously worked at the Royal Bank of Canada as a <span className="is-highlight">design researcher</span>. Interesed in <span className="is-highlight">inclusive</span> and <span className="is-highlight">accessible</span> design.</p>
        <br/>
        <p className="subtitle">previous work</p>
        <ul>
          <li><i>Work in progress! </i>👷🏽</li>
        </ul>
        <br/>
        <p>P.S. I also do <Link to="/photos">photography</Link> and <a href="https://github.com/patrickm-tan?tab=repositories" target="_blank">front-end</a> stuff for fun!</p>
      </div>
    </div>
  </Layout>
)

/* 

          <li> <Link to = {'./projects/fcbsix'}>FCB/SIX</Link></li>
          <li> <Link to = {'./projects/rbc-chab'}>Royal Bank of Canada</Link></li>
          <li> <Link to = {'./projects/uoft'}>University of Toronto</Link></li>
          <li> <Link to = {'./projects/presto'}>Presto</Link></li>

*/

export default IndexPage
