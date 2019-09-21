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
            <div style={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
                marginTop: "1rem",
                marginBottom: "1rem"

            }}>
                <Link className="linkStyle" style={{ color: "#000000", textDecoration: "none", padding: ".5rem" }} to="/"> CC </Link>
                <div style={{
                    justifyContent: "space-between"

                }}>
                    <Link style={{ color: "#000000", textDecoration: "none", padding: ".5rem" }} to="/#about">about </Link>
                    <Link style={{ color: "#000000", textDecoration: "none", padding: ".5rem" }} to="/#work">work </Link>
                    <Link style={{ color: "#000000", textDecoration: "none", padding: ".5rem" }} to="/page-2/">resume </Link>
                </div>
            </div>
        </>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         maxWidth: 1024,
//         display: "flex",
//         flex: 1,
//         justifyContent: "space-between"

//     },
//     title: {
//         fontSize: 19,
//         fontWeight: 'bold',
//     },
//     activeTitle: {
//         color: 'red',
//     },
// });

export default Navbar
