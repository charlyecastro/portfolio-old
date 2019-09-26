/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Card = (props) => {
    const backgroundImg = {
        backgroundImage: `url(${props.img})`, backgroundSize: "cover", width: "100%", height: "100%"
    }
    return (
        <>
            <div data-aos="fade-up" className={"col col-md-5 col-sm-12 window"}>
                <div  className="windowText" style={{ display: "flex", flexDirection: "column" }}>
                    <h2 className = "textImg" style={backgroundImg}>Limeade</h2>
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
                <div className="windowImg" style={backgroundImg}>
                </div>

            </div>
        </>
    )
}

export default Card
