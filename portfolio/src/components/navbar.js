/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <>
            <div style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-between",
                marginTop: "1rem",
                marginBottom: "1rem"

            }}>
                <Link className = "linkStyle" style = {{color : "#000000", textDecoration : "none"}} to="/page-2/"> CC </Link> 
                <div style = {{
                    justifyContent: "space-between"
    
                }}>
                    <Link style = {{color : "#000000", textDecoration : "none"}} to="/page-2/">about </Link>
                    <Link style = {{color : "#000000", textDecoration : "none"}} to="/page-2/">work </Link>
                    <Link style = {{color : "#000000", textDecoration : "none"}} to="/page-2/">resume </Link>
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
