import React from "react"
import Card from "../card"
import { useStaticQuery, graphql } from "gatsby"

const WordzCard = () => {
  const data = useStaticQuery(graphql`
  query {
    wordzCard: file(relativePath: 
    { eq: "wordzCard.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
   return( <>
        <Card link="/wordz" name="Wordz" position="Web Developer" date="Fall 2017" img={data.wordzCard.childImageSharp.fluid} colorOne="#486FAA" colorTwo="#7EA8D5" />
    </>
  )
}

export default WordzCard
