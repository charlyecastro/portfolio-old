/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Card from "../card"

const iEmotionCard = (data) => {
    return (
        <>
            <Card link="/iemotion" name="iEmotion" position="Mobile Developer" date="Spring 2018" img={data.iEmotionCard.childImageSharp.fluid} colorOne="#583BA8" colorTwo="#916DD3" />
        </>
    )
}

const WordzCard = (data) => {
    return (
        <>
            <Card link="/wordz" name="Wordz" position="Web Developer" date="Fall 2017" img={data.wordzCard.childImageSharp.fluid} colorOne="#486FAA" colorTwo="#7EA8D5" />
        </>
    )
}

const EarlybirdCard = (data) => {

    return (
        <>
            <Card link="/earlybird" name="earlybird" position="Mobile Developer" date="Spring 2019" img={data.earlybirdCard.childImageSharp.fluid} colorOne="#FFE48B" colorTwo="#FFF3BF" />
        </>
    )
}

const LimeadeCard = (data) => {

  return (
      <>
          <Card link="/limeade" name="Limeade" position="Intern" date="Summer 2019" img={data.limeadeCard.childImageSharp.fluid} colorOne="#29A63C" colorTwo="#53D26F" />
      </>
  )
}

const CharadeCard = (data) => {

  return (
      <>
          <Card link="/charade" name="Charade" position="Full Stack Developer" date="Fall 2018" img={data.videocharadeCard.childImageSharp.fluid} colorOne="#53A59C" colorTwo="#8BD1CB" />
      </>
  )
}

const BeaconCard = (data) => {

  return (
      <>
          <Card link="/beacon" name="Beacon" position="Mobiile Developer" date="Spriing 2019" img={data.beaconCard.childImageSharp.fluid} colorOne="#4A90E2" colorTwo="#81C3F3" />
      </>
  )
}

iEmotionCard.propTypes = {
    data: PropTypes.object.isRequired,
};
WordzCard.propTypes = {
  data: PropTypes.object.isRequired,
};
BeaconCard.propTypes = {
  data: PropTypes.object.isRequired,
};
limeadeCard.propTypes = {
  data: PropTypes.object.isRequired,
};
CharadeCard.propTypes = {
  data: PropTypes.object.isRequired,
};
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    profilePic : file(relativePath : {eq: "profilePic.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beaconCard : file(relativePath : {eq: "beaconCard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iEmotionCard : file(relativePath : {eq: "iEmotionCard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wordzCard : file(relativePath : {eq: "wordzCard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    videocharadeCard : file(relativePath : {eq: "videocharadeCard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    limeadeCard : file(relativePath : {eq: "limeadeCard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    earlybirdCard : file(relativePath : {eq: "earlybirdCard.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `;

  export {
    BeaconCard,
    CharadeCard,
    WordzCard,
    LimeadeCard,
    EarlybirdCard,
    iEmotionCard
  }
