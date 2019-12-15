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
    <Img className="bannerImg" fluid={data.limeadeBanner.childImageSharp.fluid} alt="Limeade Image Banner" />
    <Description title="Limeade" date="Summer 2019" position="Mobile Developer Intern" />
    <Intro paragraph="I recently took on an internship position as a Mobile Developer for Limeade, a software engineering company based in Bellevue, WA. Within my three months, I was able to experience working in the mobile development industry and gained insight for future work." />
    <Tools test={["Xcode", "Android Studio", "Azure", "Git", "Postman", "Sourcetree", "Android", "iOS"]} />
    <Overview 
    paragraph= {["During my time at Limeade, I was a part of the ", <i>"listening tools"</i>, " team which focused on the limeade survey experience. My task was to improve survey experiences for both native IOS and Android mobile users. Within this taskforce, I was exposed to not only the industry's agile environment, but also to crucial research & developmental practices and their overall software architecture. Although I was an intern, I took on several projects alongside full-time employees. I was frequently involved in sprint meetings where I reported back on the progress of work. I also had the opportunity to demo my implementations which were real solutions for the product."]} 
    par2 = {["This internship required me to learn various things on the job and also provided me a platform to apply the skills I already had. Before working at Limeade, my most relevant experience with mobile development were Android, ", <a href = "https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">MVC </a>,  " architecture, and some hybrid platforms. However, I was able to learn iOS and ", <a href = "https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel">MVVM</a>, " on the job which I adapted and implemented in my work. Aside from coding projects, I also took part in other aspects of the developmental process. I was able to help test and review the code for other developers in order to verify whether it was suitable to be merged into production or not. This internship exposed me to several new key practices that I have adapted into my skill set and it ultimately taught me a great amount that I will be able to apply to future works and I also made some cool friends along the way. Thank you Limeade!"]} 
    //   
    img={data.limeadeInterns.childImageSharp.fluid} alt="Group Picture of Limeade Interns" />

    <div className="contained section-spacing">
      <h2 style={{ fontWeight: "300" }}>Take Aways</h2>
      <div className="row content-spacing">
        <Takeaway title = "Just Ask" paragraph = ""/>
        <Takeaway title = "Jump on Oppurtunities" paragraph = ""/>
        <Takeaway title = "Don't be afraid" paragraph = ""/>
      </div>
    </div>

    <section id="work" className="workSection ">
      <div className="contained section-spacing" >
        <h4 className="content-spacing">Similar Work</h4>
        <div className="row" style={{ justifyContent: "center" }}>
          <Card link="/charade" name="Charade" position="Full Stack Developer" date="Fall 2018" img={data.videocharadeCard.childImageSharp.fluid} colorOne="#53A59C" colorTwo="#8BD1CB" />
          <Card link="/beacon" name="Beacon" position="Mobiile Developer" date="Spring 2019" img={data.beaconCard.childImageSharp.fluid} colorOne="#4A90E2" colorTwo="#81C3F3" />
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
