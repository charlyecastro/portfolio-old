import React from "react"
import Card from "../card"
import { useStaticQuery, graphql } from "gatsby"

const CharadeCard = () => {
  const data = useStaticQuery(graphql`
  query {
    videocharadeCard: file(relativePath: 
    { eq: "videocharadeCard.png" }) {
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
            <Card link="/charade" name="Charade" position="Full Stack Developer" date="Fall 2018" img={data.videocharadeCard.childImageSharp.fluid} colorOne="#53A59C" colorTwo="#8BD1CB" />
        </>
    )
}

export default CharadeCard
