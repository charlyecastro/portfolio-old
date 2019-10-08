/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Tools = (props) => {

    return (
        <>
            <div className="contained ">
                <h2 style={{ fontWeight: "300" }}> Tools </h2>
                <ul className="content-spacing" style={{ columns: "2" }}>
                    {props.test.map((item,i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        </>
    )
}

export default Tools
