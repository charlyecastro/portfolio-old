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


const BeaconCard = ({data}) => {

    return (
        <>
            <Card link="/beacon" name="Beacon" position="Mobiile Developer" date="Spriing 2019" img={data.beaconCard.childImageSharp.fluid} colorOne="#4A90E2" colorTwo="#81C3F3" />
        </>
    )
}

BeaconCard.propTypes = {
    data : PropTypes.object.isRequired,
  };
  
  export const query = graphql`
  {
    beaconCard : file(relativePath : {eq: "beaconCard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `;

export default BeaconCard
