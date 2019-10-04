/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Intro = (props) => {

    return (
        <>
            <div className="contained section-spacing">
                <h2 style={{ fontWeight: "300" }}>Intro</h2>
                <p className="content-spacing" style={{ lineHeight: "2.0" }}>{props.paragraph}</p>
            </div>
        </>
    )
}

export default Intro
