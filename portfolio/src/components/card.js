/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Img from "gatsby-image"
import { isAbsolute } from "path"
const Card = (props) => {
    // const backgroundImg = {
    //      backgroundSize: "cover", width: "100%", height: "100%",  backgroundPosition: "center"
    // }

    const cardTitle = {
        background: `-webkit-linear-gradient(${props.colorOne}, ${props.colorTwo})`,
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        fontSize: "3.5rem",
        position: "absolute",
        top: 0,
        left: 0,
        padding: "30px",
        zIndex: 1
    }

    const cardDetail = {
        position: "absolute",
        bottom: 0,
        left: 0,
        padding: "30px",
        zIndex: 1
    }

    return (
        <>
            <div className={"col col-md-5 col-sm-12 window"}>
                <Img fluid={props.img} className="windowImg" />
                <div className="windowText" >
                    <h2 style={cardTitle} >{props.name}</h2>
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
