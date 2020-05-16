/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Img from "gatsby-image"
import { Link } from "gatsby"

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

    const dateStyle = {
        fontWeight : "300",
    }
    const posStyle = {
        fontWeight : "400",
        marginTop : "10px"
    }

    const cardLink = {
        color : "#000000"
    }

    return (
        <>
                <Link to= {props.link} className="window" style = {cardLink}>
                    <Img fluid={props.img} className="windowImg" alt = {props.name} />
                    <div className="windowText" >
                        <h2 className="clip" style={cardTitle} >{props.name}</h2>
                        <div style={cardDetail}>
                            <h3 style= {dateStyle}>{props.date}</h3>
                            <h6 style = {posStyle}>{props.position}</h6>
                        </div>
                    </div>
            </Link>
        </>
    )
}

export default Card
