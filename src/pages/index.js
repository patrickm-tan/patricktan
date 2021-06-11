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
        <h2>design researcher</h2>
        <br/>
        <p>Hi, I'm <span className="is-highlight">Patrick</span> — A design researcher with a background in computer science, psychology and communication technology. I currently work at Hothead Games as a <span className="is-highlight">User Researcher</span> and do some volunteer <span className="is-highlight">UX</span> at Hack for LA. Interested in <span className="is-highlight">Games User Research</span> and <span className="is-highlight">Inclusive & Accessible</span> design.</p>
        <br/>
        <p className="subtitle">I previously worked at...</p>
        <ul>
          <li className="work">FCB/SIX Toronto</li>
          <li className="work">Royal Bank of Canada</li>
          <li className="work">University of Toronto</li>
        </ul>
        <br/>
        <p>P.S. I also do <Link to="/photos" className="underline">photography</Link> and <a href="https://github.com/patrickm-tan?tab=repositories" target="_blank" className="underline">front-end</a> stuff for fun!</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
