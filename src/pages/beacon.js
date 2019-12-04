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
import Takeaway from "../components/takeaway"


const Limeade = ({ data }) => (

  <Layout>
    <SEO title="Beacon" />
    <Img className="bannerImg" fluid={data.beaconBanner.childImageSharp.fluid} alt="desciption" />
    <Description title="Beacon" date="Fall 2017" position="Web Developer" />
    <Intro paragraph="I enrolled in a 10 week course where the class discussed and practiced being collaborative software engineers. We then had the opportunity to apply our new skills to build our project. Through the course, my team worked on the design and implementation of a location sharing mobile application, Beacon. 
" />
    <Tools test={["Flutter", "Firebase", "Flutter map", "Git", "Figma", "Markdown", "iOS", "Android"]} />
    <Overview paragraph="I’m Charlye, I recently graduated from the university of washington, majored Informatics focusing in Software Engineering. This sumer I am interning at Limeade as a mobile development intern. Im experienced in full stack and mobile development. If you would like more detail on my experience, check out my resume!" img={data.beaconMockup.childImageSharp.fluid} alt="image name" />

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
          <Card link="/limeade" name="Limeade" position="Intern" date="Summer 2019" img={data.limeadeCard.childImageSharp.fluid} colorOne="#29A63C" colorTwo="#53D26F" />
          <Card link="/earlybird" name="earlybird" position="Mobile Developer" date="Spring 2019" img={data.earlybirdCard.childImageSharp.fluid} colorOne="#FFE48B" colorTwo="#FFF3BF" />
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
  beaconBanner : file(relativePath : {eq: "beaconBanner.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  beaconMockup : file(relativePath : {eq: "beaconMockup.jpg"}) {
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

export default Limeade
