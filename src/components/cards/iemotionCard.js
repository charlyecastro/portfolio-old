import React from "react"
import Card from "../card"
import { useStaticQuery, graphql } from "gatsby"

const IemotionCard = () => {
  const data = useStaticQuery(graphql`
  query {
    iEmotionCard: file(relativePath: 
    { eq: "iEmotionCard.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

    return (
        <>
            <Card link="/iemotion" name="iEmotion" position="Mobile Developer" date="Spring 2018" img={data.iEmotionCard.childImageSharp.fluid} colorOne="#583BA8" colorTwo="#916DD3" />
        </>
    )
}

export default IemotionCard
