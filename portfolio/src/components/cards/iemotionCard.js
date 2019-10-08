/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Card from "../card"
import PropTypes from "prop-types"


const IemotionCard = ({data}) => {

    return (
        <>
            <Card link="/iemotion" name="iEmotion" position="Mobile Developer" date="Spring 2018" img={data.iEmotionCard.childImageSharp.fluid} colorOne="#583BA8" colorTwo="#916DD3" />
        </>
    )
}

IemotionCard.propTypes = {
    data : PropTypes.object.isRequired,
  };
  
  export const query = graphql`
  {
    iEmotionCard : file(relativePath : {eq: "iEmotionCard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `;

export default IemotionCard
