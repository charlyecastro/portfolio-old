
import React from "react"
import Card from "../card"
import { useStaticQuery, graphql } from "gatsby"


const EarlybirdCard = () => {
  const data = useStaticQuery(graphql`
    query {
     earlybirdCard: file(relativePath: 
      { eq: "earlybirdCard.png" }) {
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
        <Card link="/earlybird" name="earlybird" position="Mobile Developer" date="Spring 2019" img={data.earlybirdCard.childImageSharp.fluid} colorOne="#FFE48B" colorTwo="#FFF3BF" />
    </>
  )
}

export default EarlybirdCard
