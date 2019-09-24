/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

import PDF from "../files/resume.pdf"

const Navbar = () => {
    return (
        <>
            <div className="contained">
                <div style={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "space-between",
                    marginTop: "1rem",
                    marginBottom: "1rem"
                }}>
                    <Link className="linkStyle" to="/"> CC </Link>
                    <div style={{
                        justifyContent: "space-between",
                        alignSelf: "center"
                    }}>
                        <Link className="linkStyle" to="/#about">about </Link>
                        <Link className="linkStyle" to="/#work">work </Link>
                        <Link className="linkStyle" to="/#contact">contact </Link>
                        <a className="linkStyle" href = {PDF} target = "_blank">resume </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
