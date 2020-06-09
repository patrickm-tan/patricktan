/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "/home/patrick/Documents/portfolio/patricktan/src/components/theme/header/header.js"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header/>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
