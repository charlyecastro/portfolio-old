import React from "react"
import Card from "../card"
import { useStaticQuery, graphql } from "gatsby"

const LimeadeCard = () => {
  const data = useStaticQuery(graphql`
  query {
    limeadeCard: file(relativePath: 
    { eq: "limeadeCard.png" }) {
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
      <Card link="/limeade" name="Limeade" position="Intern" date="Summer 2019" img={data.limeadeCard.childImageSharp.fluid} colorOne="#29A63C" colorTwo="#53D26F" />
    </>
  )
}

  export default LimeadeCard
