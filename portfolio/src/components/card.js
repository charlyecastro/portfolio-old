/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

const cardShadow = {
    boxShadow: "4px 14px 32px 6px rgba(0,0,0,0.21)"
}

const Card = () => {
    return (
        <>
            {/* maxWidth : "100%", */}
            <div className={"col col-md-5 col-sm-12"} style={{
                boxShadow: "4px 14px 25px 6px rgba(0,0,0,0.05)", padding: "30px", backgroundColor: "#FFFFFF", borderRadius: "2%", margin: "1rem", width: "50vw", height: "50vh", position: "relative",
                minHeight: "150px"
            }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2 >Limeade</h2>
                    <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        padding: "30px"
                    }}>
                        <h6>Summer 2019</h6>
                        <p>Mobile Developer Intern</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
