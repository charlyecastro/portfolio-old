import React from "react"

import PropTypes from "prop-types"
import {Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Card from "../components/card"



const IndexPage = ({data}) => (

  <Layout>
    <SEO title = "Charlye"/>
    <div className="contained" style={{ display: "flex", alignItems: "center", height : "100vh", justifyContent : "center",
 }}>
      <section id = "#hi" style = {{}} >
        <div style = {{position : "relative"}}  >
          <h5 className = "hiStyle" >Hi, I'm</h5>
          <h1 style={{ fontSize: "13rem", marginBottom : "0px"}}> Charlye </h1>
        </div>
        <div >
          <h3 style={{ fontSize: "2rem", paddingBottom : ".5rem", paddingTop : "1rem" }}>I build meaningful projects</h3>
          <p style = {{paddingBottom : "1rem", paddingTop : "1rem", }}>Seattle Based Software Engineer, Experienced in web and mobile development</p>
          <div style = {{paddingBottom : "2rem", paddingTop : "2rem"}} >
          <button > Let's Talk</button> 
          </div>
        </div>
      </section>
    </div>
    <section  id="about" className="contained ">
      <h2  >Get to know</h2>
      <div className="row rowTest">
        <div className="col-md-6 col-sm-12 col content-spacing">
        {/* <Img className = "picture  mobileImg"  style = {{marginBottom: "2rem", marginTop : "2rem"}} fluid={data.profilePic.childImageSharp.fluid } alt = "image name" /> */}
          <h3 className = "content-spacing">My Story</h3>
          
          <p style={{ lineHeight: "2.0" }}>I’m Charlye, I recently graduated from the  <a id="pTest" href="#"> university of washington</a>, majored Informatics focusing in Software Engineering. This sumer I am interning at Limeade as a mobile development intern. Im experienced in full stack and mobile development. If you would like more detail on my experience, check out my resume!</p>

        </div>
        {/* desktopImgWrap */}
        {/* desktopImg */}
        <div className="col-md-6 col-sm-12 col-12 content-spacing ">
          <Img className = "picture content-spacing"  fluid={data.profilePic.childImageSharp.fluid } alt = "image name" />
        </div>
      </div>
      <div >
        <h3 className = "content-spacing">My Passions</h3>
        <p style={{ lineHeight: "2.0", paddingBottom : "20px" }}>Im a fanatic about soccer, I love to watch it, play and talk about it. I also love movies, If you share a passion in any of these areas, feel free to get in touch! Oh and sense you’re here feel free to check out my playlist!
      </p>
      </div>
      <div>
        <iframe style={{ borderRadius: "5px" }} src="https://open.spotify.com/embed/playlist/32eyl2E4LuXrEWSWy6yXiL" width="100%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </section>
    <section id="work" className="workSection">
      <div className="contained section-spacing" >
        <h4 className = "content-spacing">Work</h4>
        <div className="row" style={{ justifyContent: "center" }}>
          <Card link = "/wordz" name = "Wordz" position = "Web Developer" date = "Fall 2017" img={data.wordzCard.childImageSharp.fluid } colorOne = "#486FAA" colorTwo = "#7EA8D5" />
          <Card link = "/iemotion" name = "iEmotion" position = "Mobile Developer" date = "Spring 2018" img={data.iEmotionCard.childImageSharp.fluid } colorOne = "#583BA8" colorTwo = "#916DD3" />
          <Card link = "/charade" name = "Charade" position = "Full Stack Developer" date = "Fall 2018" img={data.videocharadeCard.childImageSharp.fluid } colorOne = "#53A59C" colorTwo = "#8BD1CB" />
          <Card link = "/limeade" name = "Limeade" position = "Intern" date = "Summer 2019" img={data.limeadeCard.childImageSharp.fluid } colorOne = "#29A63C" colorTwo = "#53D26F" />
          <Card link = "/beacon" name = "Beacon" position = "Mobiile Developer" date = "Spriing 2019" img={data.beaconCard.childImageSharp.fluid } colorOne = "#4A90E2" colorTwo = "#81C3F3" />
          <Card link = "/earlybird" name = "earlybird" position = "Mobile Developer" date = "Spring 2019" img={data.earlybirdCard.childImageSharp.fluid } colorOne = "#FFE48B" colorTwo = "#FFF3BF" />
        </div>
      </div>
    </section>
    < Contact />
  </Layout>
)

IndexPage.propTypes = {
  data : PropTypes.object.isRequired,
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
  iEmotionCard : file(relativePath : {eq: "iEmotionCard.png"}) {
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
  earlybirdCard : file(relativePath : {eq: "earlybirdCard.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default IndexPage
