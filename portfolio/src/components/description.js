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
            <h1> {props.title} </h1>
            <h5 style={{ fontWeight: "300", paddingTop : "1rem" }}>{props.date}</h5>
            <h5 style={{ fontWeight: "400",  }}>{props.position}</h5>
        </div>
        </>
    )
}

export default Description
