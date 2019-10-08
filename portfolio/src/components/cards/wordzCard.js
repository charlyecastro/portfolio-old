

import React from "react"
import Card from "../card"
import { graphql } from "gatsby"
import PropTypes from "prop-types"


const WordzCard = (data) => (
    <>
        <Card link="/wordz" name="Wordz" position="Web Developer" date="Fall 2017" img={data.test.childImageSharp.fluid} colorOne="#486FAA" colorTwo="#7EA8D5" />
    </>
  )


  WordzCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    test : file(relativePath : {eq: "wordzCard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `;

export default WordzCard
