/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const FeaturedWork = ({ title, description, categories, img, link, primaryColor }) => {

    return (
        <>
            <div className="featured">
 
                <div>
                    <img className="featured-img" src={img} alt = {description} />
                </div>
                <div className="featured-description">
                    <div className="featured-group-text">
                        <h2 style={{ color: primaryColor }}>{title}</h2>
                        <h5>{description}</h5>
                        <p>{categories} </p>
                    </div>
                    <a href={link}> <button > Check it out</button> </a>
                </div>
            </div>

        </>
    )
}

export default FeaturedWork
