import React from "react"
import Card from "../card"
import { useStaticQuery, graphql } from "gatsby"


const BeaconCard = () => {
  const data = useStaticQuery(graphql`
  query {
   beaconCard: file(relativePath: 
    { eq: "beaconCard.png" }) {
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
            <Card link="/beacon" name="Beacon" position="Mobiile Developer" date="Spriing 2019" img={data.beaconCard.childImageSharp.fluid} colorOne="#4A90E2" colorTwo="#81C3F3" />
        </>
    )
}

export default BeaconCard
