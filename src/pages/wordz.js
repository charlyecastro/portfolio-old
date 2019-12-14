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
    <SEO title="Wordz with Friendz" />
    <Img className="bannerImg" fluid={data.wordzBanner.childImageSharp.fluid} alt="desciption" />
    <Description title="Wordz with Friendz" date="Fall 2017" position="Web Developer" />
    <Intro paragraph="My first development course in the informatics program was front end development. I learned how to build websites from scratch using industry standard tools. For my group project, my team built an imitation web app of the popular game, words with friends." />
    <Tools test={["Bootstrap", "React", "Firebase", "Git", "Rest API"]} />
    <Overview 
    paragraph="For this class project we decided to build a multiplayer web app game based on Words with Friends. Our web app is called Wordz with Friendz (really unique, i know). For those who don't know the game words with friends. You are essentially assigned random letters and you need to spell out words with them. Each letter has a certain amount of points and the objective is to spell words that tally up more points than your opponent. The challenge of building this game was the word verification, we had to figure out how to check words horizontally and vertically."
     par2= "To handle this, the data structure we used was a 2d array, this helps imitate X and Y coordinates. This makes it possible to associate letters with letters that are left and right of each other or above and below. In order to confirm that the word being submitted we used the Oxford Dictionary API for verification. My job was to work on the random letter tile generator, which assigned letters and their points to users when they first start the game or need a new set of letters. To build this application we used React.js and Firebase for user authentication. There was a lot of communication in the team and we tackled issues together. It was a little intimidating in the beginning, however working through our problems with a committed team, the project ended up being a fun learning experience."
     img={data.wordzMockup.childImageSharp.fluid} alt="Mockup Image of Wordz with Friendz App" />

    <div className="contained section-spacing">
      <h2 style={{ fontWeight: "300" }}>Take Aways</h2>
      <div className="row content-spacing">
        <Takeaway title = "Challenge Yourself" paragraph = "There's honestly no fun or improvement without a challenge. For my first dev related project, i was hoping to go a little easy. However, we all agree to do something challenging and it certainly paid off. It's going to suck for a little bit in the beginning, but it always ends with a learning experience. It's not always rewarding taking on a challenge, but that's the risk you got to be willing to take."/>
      </div>
    </div>

    <section id="work" className="workSection">
      <div className="contained section-spacing" >
        <h4 className="content-spacing">Similarr Work</h4>
        <div className="row" style={{ justifyContent: "center" }}>
          <Card link="/charade" name="Charade" position="Full Stack Developer" date="Fall 2018" img={data.videocharadeCard.childImageSharp.fluid} colorOne="#53A59C" colorTwo="#8BD1CB" />
          <Card link="/limeade" name="Limeade" position="Intern" date="Summer 2019" img={data.limeadeCard.childImageSharp.fluid} colorOne="#29A63C" colorTwo="#53D26F" />
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
  videocharadeCard : file(relativePath : {eq: "videocharadeCard.png"}) {
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

}
`;

export default Limeade
