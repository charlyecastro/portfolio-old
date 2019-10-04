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
                    <li>React</li>
                    <li>Github</li>
                    <li>NPM</li>
                    <li>Gatsby</li>
                    <li>Java</li>
                    <li>Javascript</li>
                </ul>
            </div>
        </>
    )
}

export default Tools
