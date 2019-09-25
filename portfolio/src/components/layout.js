/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css"
import "../../node_modules/font-awesome/css/font-awesome.min.css"

const container = {
  margin: `0 auto`,
  maxWidth: "960px",
  padding: `0px 1.0875rem 1.45rem`,
  paddingLeft: "3rem",
  paddingRight: "3rem"
}

const test = {
  justifyContent : "center",
  alignItems : "center",
  alignSelf : "center",
  textAlign : "center",
  color : "#ff0000"
}

const workSection = {
  backgroundColor: "#FAFAFA",
  width: "100%",
}

const Layout = ({ children }) => {
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
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div style ={{overflowY:"hidden"}}>
      <Navbar/>
        <main>{children}</main>
      <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
