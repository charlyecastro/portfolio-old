import React from "react"

import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Description from "../components/description"
import Intro from "../components/intro"
import Tools from "../components/tools"
import Overview from "../components/overview"
import Takeaway from "../components/takeaway"


const Limeade = ({ data }) => (

  <Layout>
    <SEO title="earlybird" />
    <Img className="bannerImg" fluid={data.earlybirdBanner.childImageSharp.fluid} alt="desciption" />
    <Description title="earlybird" date="Spring 2019" position="Mobile Developer" />
    <Intro paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" />
    <Tools test={["React Native", "Redux", "Expo", "NPM", "iOS", "Android"]} />
    <Overview paragraph="I’m Charlye, I recently graduated from the university of washington, majored Informatics focusing in Software Engineering. This sumer I am interning at Limeade as a mobile development intern. Im experienced in full stack and mobile development. If you would like more detail on my experience, check out my resume!" img={data.earlybirdStats.childImageSharp.fluid} alt="image name" />

    <div className="contained section-spacing">
      <h2 style={{ fontWeight: "300" }}>Take Aways</h2>
      <div className="row content-spacing">
        <Takeaway title = "Just Ask" paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
        <Takeaway title = "Find it yourself" paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
      </div>
    </div>

    <section id="work" className="workSection">
      <div className="contained section-spacing" >
        <h4 className="content-spacing">Similar Work</h4>
        <div className="row" style={{ justifyContent: "center" }}>
          <Card link="/beacon" name="Beacon" position="Mobiile Developer" date="Spriing 2019" img={data.beaconCard.childImageSharp.fluid} colorOne="#4A90E2" colorTwo="#81C3F3" />
          <Card link="/iemotion" name="iEmotion" position="Mobile Developer" date="Spring 2018" img={data.iEmotionCard.childImageSharp.fluid} colorOne="#583BA8" colorTwo="#916DD3" />
        </div>
      </div>
    </section>
  </Layout>
)

Limeade.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
{
  earlybirdBanner : file(relativePath : {eq: "earlybirdBanner.png"}) {
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
  earlybirdStats : file(relativePath : {eq: "earlybirdStats.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
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
}
`;

export default Limeade
