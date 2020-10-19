import { Link } from "gatsby"
import React from "react"
import { useStaticQuery } from "gatsby"

import resumeDownload from "../../../assets/resume/PatrickTanResume.pdf"

import "./styles.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
    <div className="inner-header">
      <div className="logo">
        <h1>
          <Link
            to="/"
          >
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/">home</Link>
          <Link to="/">blog</Link>
          <a href={resumeDownload} download>resume</a>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header
