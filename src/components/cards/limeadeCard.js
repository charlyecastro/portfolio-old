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


const LimeadeCard = ({data}) =>  (
        <>
            <Card link="/limeade" name="Limeade" position="Intern" date="Summer 2019" img={data.beaconBanner.childImageSharp.fluid} colorOne="#29A63C" colorTwo="#53D26F" />
        </>
    )

LimeadeCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    beaconBanner : file(relativePath : {eq: "beaconBanner.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `;

export default LimeadeCard
