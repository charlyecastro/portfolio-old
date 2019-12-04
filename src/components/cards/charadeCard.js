/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Card from "../card"
import { graphql } from "gatsby"
import PropTypes from "prop-types"


const CharadeCard = ({data}) => {

    return (
        <>
            <Card link="/charade" name="Charade" position="Full Stack Developer" date="Fall 2018" img={data.videocharadeCard.childImageSharp.fluid} colorOne="#53A59C" colorTwo="#8BD1CB" />
        </>
    )
}

CharadeCard.propTypes = {
    data : PropTypes.object.isRequired,
  };
  
  export const query = graphql`
  {
    videocharadeCard : file(relativePath : {eq: "videocharadeCard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `;

export default CharadeCard
