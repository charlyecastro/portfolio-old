/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Card from "../card"
import PropTypes from "prop-types"


const EarlybirdCard = ({data}) => {

    return (
        <>
            <Card link="/earlybird" name="earlybird" position="Mobile Developer" date="Spring 2019" img={data.earlybirdCard.childImageSharp.fluid} colorOne="#FFE48B" colorTwo="#FFF3BF" />
        </>
    )
}

EarlybirdCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    earlybirdCard : file(relativePath : {eq: "earlybirdCard.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
  `;

export default EarlybirdCard
