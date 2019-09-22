/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const Navbar = () => {
    return (
        <>
        <div className = "contained">
            <div  style={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
                marginTop: "1rem",
                marginBottom: "1rem"

            }}>
                <Link smooth={true} className = "linkStyle" to="/"> CC </Link>
                <div style={{
                    justifyContent: "space-between",
                    alignSelf : "center"

                }}>
                    <Link className = "linkStyle" to="/#about">about </Link>
                    <Link className = "linkStyle" to="/#work">work </Link>
                    <Link className = "linkStyle" to="/resumePM.pdf/">resume </Link>
                </div>
            </div>
            </div>
        </>
    )
}

export default Navbar
