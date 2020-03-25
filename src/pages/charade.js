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
    <SEO title="Charade" />
    <Img className="bannerImg" fluid={data.charadeBanner.childImageSharp.fluid} alt="VideoCharade Image Banner" />
    <Description title="Videocharade" date="Fall 2018" position="Full Stack Developer" />
    <Intro paragraph= {["For my Full Stack Development course, we learned how to build complex restful API’s from scratch. For the remaining 2 weeks, the class formed groups and built our own full stack application. My 3-person team built a peer to peer video streaming charade game called ", <a href = "https://github.com/charlyecastro/videocharade">videocharade</a>,"."]} />
    <Tools test={["React", "Node", "Golang", "Docker", "AWS", "Postman", "Redis", "RabbitMQ", "MySQL", "WebRTC"]} />
    <Overview paragraph="This was the first project that I took leadership on. To decide on what we were going to build I found the consensus of the team’s level of effort and availability. Based on the consensus, we agreed to build an online charades game. The way the game worked was, a user would make an account, search for a user and invite them to a game of charades. When the game began, one user receives a word to act out, meanwhile the other user submitted their guesses. Statistics of the game are published on a leaderboard, to display who were the best charade partners.When the time to delegate tasks of the application came, I based the assignments on our previous discussion on commitment levels of each team member. " 
    par2 = {["Ultimately, I assigned myself peer to peer communication aspect of the project since I was determined to take on the challenge. The front end was built in ", <a href = "https://reactjs.org/">React</a>,", using ", <a href = "https://webrtc.org/">webRTC</a>  ," and communicated with a ", <a href = "https://nodejs.org/en/">Node</a> ," microservice that connects users to begin their video communication. I then assigned the game logic assignment to the team member who presented the next best commitment level and therefore gave the leaderboard task to the least available team member. We drew an ", <a href = "https://github.com/charlyecastro/videocharade">architecture diagram</a> ," of our app, showing the complexity and integration of our work. Once we built the application, we deployed our ",<a href = "https://docs.docker.com/">Dockerized</a> ," servers and site on ", <a href = "https://aws.amazon.com/">AWS</a> ," instances and register domain names for them. We met our expected deadline and had a successful demo. This is one of the projects I’m most proud of because it was my first leadership role and I met all my goals for the project."]}
    img={data.charadeMockup.childImageSharp.fluid} alt="Mockup Image of VideoCharade App" />

    <div className="contained section-spacing">
      <h2 style={{ fontWeight: "300" }}>Take Aways</h2>
      <div className="row content-spacing">
        <Takeaway title = "Voice Concerns" paragraph = "We as a team agreed to be realistic and talk about our availability. My goal was to build something new, cool and most importantly realistic. Being transparent about our commitment, helped us agree on a doable project and properly assign work to members. I've been on teams where the leader is too optimistic, and things don't end well. I got a solid idea of my team members situation and this helped me guide the project."/>
  
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
