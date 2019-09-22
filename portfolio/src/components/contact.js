/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

const Contact = () => {
    return (
        <>
            <section className = "contact " style = {{justifyContent : "center", alignItems : "center", alignSelf : "center"}}>
                <div className = "contained" style ={{maxWidth: "900px", borderRadius : "2%"}}>
                <div  style = {{ backgroundColor : "#FFFFFF", }}>
                <h2 className = "contactTitle">Let's Talk</h2>
                </div>
                </div>
            </section>
        </>
    )
}

export default Contact