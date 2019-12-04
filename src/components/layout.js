/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css"
import "../../node_modules/font-awesome/css/font-awesome.min.css"
// import AOS from 'aos'
// import 'aos/dist/aos.css';

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

  // AOS.init(
  //   {once: true,
  //     duration: 800
  //     }
  // )

    
  return (
    <>
      <Navbar/>
        <main >{children}</main>
      <Footer/>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
