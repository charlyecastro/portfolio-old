import React from "react"

import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Card from "../components/card"



const Limeade = ({ data }) => (

    <Layout>
        <SEO title="Charlye" />
        <div style={{ height: "400px", width: "100%", backgroundColor: "#000000" }}></div>
        <div className = "contained section-spacing">
            <h2> Beacon </h2>
            <h3 style={{ fontWeight: "300", paddingTop : "2rem" }}>Spring 2019</h3>
            <h3 style={{ fontWeight: "400", paddingTop : "1rem" }}>Mobile Developer</h3>
        </div>
        <div className = "contained section-spacing">
        <h2 style={{ fontWeight: "300" }}>Intro</h2>
        <p className = "content-spacing" style={{ lineHeight: "2.0" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>

        <div className = "contained ">
            <h2 style={{ fontWeight: "300" }}> Tools </h2>
            <ul className = "content-spacing" style={{ columns: "2" }}>
                <li>React</li>
                <li>Github</li>
                <li>NPM</li>
                <li>Gatsby</li>
                <li>Java</li>
                <li>Javascript</li>
            </ul>
        </div>
        <div className = "contained section-spacing"> 
            <h2 style={{ fontWeight: "300" }}>Overview</h2>
            <div className="row">
                <div id="test" className="col-md-6 col-sm-12 col content-spacing">
                    <p style={{ lineHeight: "2.0" }}>I’m Charlye, I recently graduated from the  <a id="pTest" href="#"> university of washington</a>, majored Informatics focusing in Software Engineering. This sumer I am interning at Limeade as a mobile development intern. Im experienced in full stack and mobile development. If you would like more detail on my experience, check out my resume!</p>

                </div>
                <div className="col-md-6 col-sm-12 col-12 ">
                    <Img className="picture" fluid={data.profilePic.childImageSharp.fluid} alt="image name" />
                </div>
            </div>
        </div>
        <section id="work" className="workSection">
      <div className="contained section-spacing" >
        <h4 className = "content-spacing">Other Work</h4>
        <div className="row" style={{ justifyContent: "center" }}>
          <Card name = "Wordz" position = "Web Developer" date = "Fall 2017" img={data.beaconCard.childImageSharp.fluid } colorOne = "#486FAA" colorTwo = "#7EA8D5" />
          <Card name = "iEmotion" position = "Mobile Developer" date = "Spring 2018" img={data.beaconCard.childImageSharp.fluid } colorOne = "#583BA8" colorTwo = "#916DD3" />
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
}
`;

export default Limeade
