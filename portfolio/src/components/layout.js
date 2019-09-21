/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css"
import Card from "../components/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const container = {
  margin: `0 auto`,
  maxWidth: 960,
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
      <div style={container}>
        <main>{children}</main>
      </div>

      <section id= "work" style={{...workSection,}}>
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

      </section>

      <div
        style={container}
      >
        <footer style={{textAlign: "center" }}>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          <p>Designed and built by Charlye Castro</p>
          <FontAwesomeIcon icon={"falinkedin"} />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
