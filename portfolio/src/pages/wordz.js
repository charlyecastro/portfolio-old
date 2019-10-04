import React from "react"

import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Card from "../components/card"
import Description from "../components/description"
import Intro from "../components/intro"
import Tools from "../components/tools"
import Overview from "../components/overview"

const Limeade = ({ data }) => (

    <Layout>
        <SEO title="Charlye" />
        <Img className="bannerImg" fluid={data.wordzBanner.childImageSharp.fluid} alt="desciption" />
        <Description title="Wordz with Friendz" date="Fall 2017" position="Web Developer" />
        <Intro paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" />
        <Tools />
        <Overview paragraph="I’m Charlye, I recently graduated from the university of washington, majored Informatics focusing in Software Engineering. This sumer I am interning at Limeade as a mobile development intern. Im experienced in full stack and mobile development. If you would like more detail on my experience, check out my resume!" img={data.wordzMockup.childImageSharp.fluid} alt="image name" />

        <section id="work" className="workSection">
            <div className="contained section-spacing" >
                <h4 className="content-spacing">Other Work</h4>
                <div className="row" style={{ justifyContent: "center" }}>
                    <Card name="Wordz" position="Web Developer" date="Fall 2017" img={data.beaconCard.childImageSharp.fluid} colorOne="#486FAA" colorTwo="#7EA8D5" />
                    <Card name="iEmotion" position="Mobile Developer" date="Spring 2018" img={data.beaconCard.childImageSharp.fluid} colorOne="#583BA8" colorTwo="#916DD3" />
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
  wordzBanner : file(relativePath : {eq: "wordzBanner.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  wordzMockup : file(relativePath : {eq: "wordzMockup.jpg"}) {
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
