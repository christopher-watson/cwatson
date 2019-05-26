/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Body from "./body" 
import "../styles/layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className='wrapper'>
        <div className="header">
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>
        <div className='body'>
          <Body/>
          {/* <main>{children}</main> */}
        </div>
        <footer>
          <div className="footer-text">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
