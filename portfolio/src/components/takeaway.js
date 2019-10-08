/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Takeaways = (props) => {

    return (
        <>
        <div className = "col-md-6 col-sm-12 p-3">
          <h4 style={{ fontWeight: "400", paddingBottom : "10px" }}>{props.title}</h4>
          <p style={{ lineHeight: "2.0" }}>{props.paragraph}</p>
        </div>
        </>
    )
}

export default Takeaways
