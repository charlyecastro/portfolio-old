/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css"
import Card from "../components/card"
import "../../node_modules/font-awesome/css/font-awesome.min.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

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
      <Navbar/>
        <main>{children}</main>

      {/* <section id= "work" style={{...workSection,}}>
        <div style={container}>
          <h4>Work</h4>
          <div className = "row" style ={{justifyContent : "center"}}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section> */}

      <div
        style={container}
      >
        <footer style={{textAlign: "center" }}>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          <p>Designed and built by Charlye Castro</p>
          <Link to = "https://github.com/charlyecastro"> 
          <i className = "fa fa-linkedin linkStyle"/>
          </Link> 
          <Link to = "https://github.com/charlyecastro"> 
          <i className = "fa fa-github linkStyle"/>
          </Link> 
          <Link to = "https://github.com/charlyecastro"> 
          <i className = "fa fa-envelope linkStyle"/>
          </Link> 
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
