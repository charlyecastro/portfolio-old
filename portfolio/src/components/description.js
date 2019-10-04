/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Description = (props) => {

    return (
        <>
        <div className = "contained section-spacing">
            <h2> {props.title} </h2>
            <h3 style={{ fontWeight: "300", paddingTop : "2rem" }}>{props.date}</h3>
            <h3 style={{ fontWeight: "400", paddingTop : "1rem" }}>{props.position}</h3>
        </div>
        </>
    )
}

export default Description
