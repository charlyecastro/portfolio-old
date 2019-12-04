/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Footer = () => {
    return (
        <>
            <div className="contained" style={{ padding: "30px" }}>
                <footer style={{ textAlign: "center", }}>
                    <p>Designed and built by Charlye Castro</p>
                    <a href="https://www.linkedin.com/in/charlyecastro/">
                        <i className="fa fa-linkedin linkStyle" />
                    </a>
                    <a href="https://github.com/charlyecastro">
                        <i className="fa fa-github linkStyle" />
                    </a>
                    <a href="mailto:charlyecastro@gmail.com?Subject=Hi%20Charlye!">
                        <i className="fa fa-envelope linkStyle" />
                    </a>
                </footer>
            </div>
        </>
    )
}

export default Footer
