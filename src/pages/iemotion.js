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
    <SEO title="iEmotion" />
    <Img className="bannerImg" fluid={data.iemotionBanner.childImageSharp.fluid} alt="iEmotion Image Banner" />
    <Description title="iEmotion" date="Spring 2018" position="Mobile Developer" />
    <Intro paragraph={["In the last quarter of my Junior year, I signed up for a Mobile Development course, that taught me the fundamentals of Android development. By the end of the quarter, my team of 5 built and demoed ", <a href = "https://github.com/minsugim/watsonchat">iEmotion</a> ,", a smart chat application."]} />
    <Tools test={["Android Studio", "Firebase", "Watson API", "Google Charts", "Git", "Android"]} />
    <Overview paragraph={["Our app was powered by the ", <a href = "https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/wdp-apis.html">IBM Watson API</a> ,", which performed text analysis and provide a personality report for the user. A user would simply tap on a received message and the application would display the tone of the text message such as “Excited”, “Upset”, “Angry” and so on. This would help a user understand the message better, helping them decide on a better response. The app also analyzed the user as well. Based on their sent messages the user can receive a personality report. Using the personality analysis provided by IBM, we present that data through a graph using ", <a href = "https://developers.google.com/chart">Google charts</a> ,". This visualization helps the user understand themselves better and get an idea of what people see them as."]} 
    par2 = {["My job for this project was primarily involved in the messaging component. I built and designed the user interface for the messages list screen. Fetching the data from ", <a href = "https://firebase.google.com/">Firebase</a> ," then displayed all of the user’s conversations, starting with the most recent. In this same screen a user can return to a conversation or initiate a new one. I also connected IBM Watson to the message experience, making it possible for users to tap on message and receive a text analysis. This project was fun because I got to relearn some technology through a new environment. Our experience with firebase and rest API’s, was through web development, never with mobile. We read and shared documentation on how to implement the technologies in our application which was a lot, but worth it."]}
    img={data.iEmotionMockup.childImageSharp.fluid} alt="Mockup Image of iEmotion App" />

    <div className="contained section-spacing">
      <h2 style={{ fontWeight: "300" }}>Take Aways</h2>
      <div className="row content-spacing">
        <Takeaway title = "Clarity is Key" paragraph = "For this project, there was a lot of dependency on our firebase database. So before we coded anything, we worked on diagraming our database. We dedicated a few days on this, which helped us understand how data was being stored and how to access it. Thanks for this discussion we developed a stronger plan on how to code our seperate components. Its better to have a clear plan before building anything."/>
      </div>
    </div>

    <section id="work" className="workSection">
      <div className="contained section-spacing" >
        <h4 className="content-spacing">Similar Work</h4>
        <div className="row" style={{ justifyContent: "center" }}>
          <Card link="/earlybird" name="earlybird" position="Mobile Developer" date="Spring 2019" img={data.earlybirdCard.childImageSharp.fluid} colorOne="#FFE48B" colorTwo="#FFF3BF" />
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
  iemotionBanner : file(relativePath : {eq: "iemotionBanner.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  iEmotionMockup: file(relativePath : {eq: "iEmotionThread.jpg"}) {
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
