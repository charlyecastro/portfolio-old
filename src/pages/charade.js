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
    <SEO title="Charade" />
    <Img className="bannerImg" fluid={data.charadeBanner.childImageSharp.fluid} alt="desciption" />
    <Description title="Videocharade" date="Fall 2018" position="Full Stack Developer" />
    <Intro paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" />
    <Tools test={["React", "Node", "Golang", "Docker", "AWS", "Postman", "MongoDB", "Redis", "RabbitMQ", "MySQL", "WebRTC"]} />
    <Overview paragraph="I’m Charlye, I recently graduated from the university of washington, majored Informatics focusing in Software Engineering. This sumer I am interning at Limeade as a mobile development intern. Im experienced in full stack and mobile development. If you would like more detail on my experience, check out my resume!" img={data.charadeMockup.childImageSharp.fluid} alt="image name" />

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
          <Card link="/wordz" name="Wordz" position="Web Developer" date="Fall 2017" img={data.wordzCard.childImageSharp.fluid} colorOne="#486FAA" colorTwo="#7EA8D5" />
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
  charadeBanner : file(relativePath : {eq: "charadeBanner.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  charadeMockup : file(relativePath : {eq: "charadeMockup.jpg"}) {
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
  wordzCard : file(relativePath : {eq: "wordzCard.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default Limeade
