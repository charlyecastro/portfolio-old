/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { gsap, TimelineLite, Power3 } from "gsap";

import Navbar from "./navbar"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.css';
import "./layout.css"
import "../../node_modules/font-awesome/css/font-awesome.min.css"

const Layout = ({ children }) => {

   useEffect(() => {
    gsap.to(".layout-container", 1, { css: { visibility: "visible" } })

    const tl = new TimelineLite()
    tl.from(".layout-container", {
            opacity: 0,
            duration: 1,
            ease: Power3.easeInOut
        })
  }, [])
    
  return (
    <div className = "layout-container">
      <Navbar/>
        <main >{children}</main>
      <Footer/>
    </ div >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
