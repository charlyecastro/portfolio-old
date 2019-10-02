/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Img from "gatsby-image"

const Card = (props) => {

    const cardTitle = {
        background: `linear-gradient(${props.colorOne}, ${props.colorTwo})`,
    }

    const cardDetail = {
        position: "absolute",
        bottom: 0,
        left: 0,
        padding: "30px",
        zIndex: 1
    }

    return (
        //
        <>
            <div className={"col-md-5 col-sm-12 window"}>
                <Img fluid={props.img} className="windowImg" />
                <div className="windowText" >
                    <h2 className = "clip" style={cardTitle} >{props.name}</h2>
                    <div style={cardDetail}>
                        <h6>{props.date}</h6>
                        <p>{props.position}</p>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Card
