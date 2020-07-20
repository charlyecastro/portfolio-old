import React from "react"

import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Description from "../components/description"
import Intro from "../components/intro"
import Tools from "../components/tools"
import Overview from "../components/overview"
import Takeaway from "../components/takeaway"
import BeaconCard from "../components/cards/beaconCard"
import IemotionCard from "../components/cards/iemotionCard"



const Limeade = ({ data }) => (

  <Layout>
    <SEO title="earlybird" />
    <Img className="bannerImg" fluid={data.earlybirdBanner.childImageSharp.fluid} alt="earlybird Image Banner" />
    <Description title="earlybird" date="Spring 2019" position="Mobile Developer" />
    <Intro paragraph= {["My capstone project for the ", <a href = "https://ischool.uw.edu/programs/informatics">UW informatics</a> , " program focused on tackling the common issue of procrastination. For six months my team researched, ideated, designed and implemented the mobile app that provided an incentive for users to finish their personal projects, called ", <a href = "https://ischool.uw.edu/capstone/projects/2019/earlybird">earlybird</a>, "." ]}/>
    <Tools test={["React Native", "Redux", "Expo", "NPM", "iOS", "Android"]} />
    <Overview paragraph = {["Research was lead by our UX designer meanwhile team members helped by reading articles, conducting interviews and surveys. Based on our findings, we decided to go for a ", <a href = "https://en.wikipedia.org/wiki/Gamification">gamified</a>, " approach in order to lessen the stress associated with projects. We decided to build a cross platform mobile app, that encouraged users to dedicate some time to their project in a gamified experience. Simply, A user would create a project, provide the project title, a pet name and assign days to work on. The user is given an egg that they’re responsible for. They nurture the egg by investing at least 5 minutes on their project on the selected days. The app provides statistics such as the project health, project completions, streaks and calendar info."]}
     
    par2= {["When it was time to build our application we used ", <a href = "https://facebook.github.io/react-native/">React Native</a>, " allowing us to build the application in javascript for both iOS and Android platforms. Following ", <a href = "https://facebook.github.io/react-native/docs/getting-started">React Native Docs</a>, " we stored data on the phone removing the need for a user to create an account. We also used ",<a href = "https://redux.js.org/">Redux</a> , " to handle the project state, for example when a project is created, updated or deleted we notified other components of the app to react properly. For rapid testing and debugging we used ", <a href = "https://expo.io/">Expo</a>,  ", which enabled us to conveniently test our application on real smartphones, instead of emulators. This helped imitate what a real user would experience with the application. My job on this project was to recreate the UI design the UX designer provided, meanwhile other teammates worked on persisting data and state management." ]} img={data.earlybirdStats.childImageSharp.fluid} alt="Mockup Image of earlybird App" />

    <div className="contained section-spacing">
      <h2 style={{ fontWeight: "300" }}>Take Aways</h2>
      <div className="row content-spacing">
        <Takeaway title = "Work Hard Play Hard" paragraph = "Working on this project involved a lot of meetings, deliverables and making many decisions. It was a busy project, that came with a lot of hard work and well deserved breaks. We had team dinners during meetings or after, and it helped bring the team closer. Having these dinners motivated us to work together and keep working hard on our projects"/>
      </div>
    </div>

    <section id="work" className="workSection">
      <div className="contained section-spacing" >
        <h4 className="content-spacing">Similar Work</h4>
        <div className="card-grid">
        <BeaconCard/>
        <IemotionCard/>

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
  earlybirdStats : file(relativePath : {eq: "earlybirdStats.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default Limeade
