/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Img from "gatsby-image"

const Overview = (props) => {

    return (
        <>
            <div className="contained section-spacing">
                <h2 style={{ fontWeight: "300" }}>Overview</h2>
                <div className="row">
                    <div id="test" className="col-md-6 col-sm-12 col content-spacing">
                        <p style={{ lineHeight: "2.0" }}>{props.paragraph}</p>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12 ">
                        <Img className="picture" fluid={props.img} alt={props.alt} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview
