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
    <SEO title="Limeade" />
    <Img className="bannerImg" fluid={data.limeadeBanner.childImageSharp.fluid} alt="desciption" />
    <Description title="Limeade" date="Summer 2019" position="Mobile Developer Intern" />
    <Intro paragraph="This past summer I took on the position of being a Mobile Developer for Limeade, in Bellevue Washington. For 3 months, I got to experience work in a real Software Engineering company and gained some insight for future work." />
    <Tools test={["Xcode", "Android Studio", "Azure", "Git", "Postman", "Sourcetree", "Android", "iOS"]} />
    <Overview paragraph="During my time at limeade, I was apart of a team that was focused on a critical piece of the application. I got exposure to an industry agile environment. I worked on tasks that my team assigned to me and I'd report back on the progress. This internship allowed me to work on real solutions the company was building and i got to help build them. I didnt know swift before the internship, and I got to learn on the job (same for many other things). I was involved in a lot steps of the development as well. Aside from coding, i was also a part of testing and reviewing others employees code" img={data.limeadeInterns.childImageSharp.fluid} alt="Group Picture of Limeade Interns" />

    <div className="contained section-spacing">
      <h2 style={{ fontWeight: "300" }}>Take Aways</h2>
      <div className="row content-spacing">
        <Takeaway title = "Just Ask" paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
        <Takeaway title = "Find it yourself" paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
      </div>
    </div>

    <section id="work" className="workSection ">
      <div className="contained section-spacing" >
        <h4 className="content-spacing">Other Work</h4>
        <div className="row" style={{ justifyContent: "center" }}>
          <Card link="/charade" name="Charade" position="Full Stack Developer" date="Fall 2018" img={data.videocharadeCard.childImageSharp.fluid} colorOne="#53A59C" colorTwo="#8BD1CB" />
          <Card link="/beacon" name="Beacon" position="Mobiile Developer" date="Spriing 2019" img={data.beaconCard.childImageSharp.fluid} colorOne="#4A90E2" colorTwo="#81C3F3" />
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
  beaconCard : file(relativePath : {eq: "beaconCard.png"}) {
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
  limeadeInterns : file(relativePath : {eq: "interns.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  limeadeBanner : file(relativePath : {eq: "limeadeBanner.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default Limeade
