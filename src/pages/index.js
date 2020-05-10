import React from "react"

import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import PDF from "../files/resume.pdf"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import image from "../images/logo.png"
import waveWebm from "../images/waves.webm"
import waveMp4 from "../images/waves.mp4"
import EarlybirdCard from "../components/cards/earlybirdCard"
import BeaconCard from "../components/cards/beaconCard"
import CharadeCard from "../components/cards/charadeCard"
import IemotionCard from "../components/cards/iemotionCard"
import LimeadeCard from "../components/cards/limeadeCard"
import WordzCard from "../components/cards/wordzCard"



const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Charlye" image={image} />
      <div className="contained" style={{
        display: "flex", alignItems: "center", height: "100vh", justifyContent: "center",
      }}>
        <section id="hi"  >
          <div style={{ position: "relative" }} >
            <div className="hi-container">
              <h5 className="hiStyle" >Hi, I'm</h5>
            </div>
            <video muted autoPlay loop>
              <source src={waveWebm} type="video/webm" />
              <source src={waveMp4} type="video/mp4" />
            </video>
            <div className="title-container">
              <h1 className="titleStyle">  Charlye  </h1>
            </div>
            <div className="hero-group-text">
              <h3 className="hero-subhead">I like to build cool stuff</h3>
              <p className="hero-description">Seattle based Software Engineer, experienced in web and mobile development. Currently seeking dev opporunities, so feel free to get in touch! </p>
              <div classname="hero-btn" style={{ paddingBottom: "2rem", paddingTop: "2rem" }} >
                <Link to="/#contact"> <button > Let's Talk</button> </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="about" className="contained ">
        <h2 className="sectionTitle content-spacing" >Get to know</h2>
        <div className="row rowTest">
          <div className="col-md-6 col-sm-12 col content-spacing">
            <h3 className="">My Story</h3>
            <p className="content-spacing" style={{ lineHeight: "2.0" }}>I’m Charlye Castro, I recently graduated from the <a id="pTest" href="https://www.washington.edu/"> University of Washington</a>, where I majored in <a id="pTest" href="https://ischool.uw.edu/programs/informatics" >Informatics </a>, focused on Software Engineering. I am currently in Seattle, but I grew up in <a id="pTest" href="https://moretomanson.com/"> Manson, Washington</a>, a small town located on the shores of Lake Chelan. As a way to keep in touch, I am freelancing for local companies in my hometown. However, this past summer I interned at Limeade as a mobile developer. Im most experienced in full stack and mobile development, but aside from tech, I have many other passions that I invest my time into. If you’re interested, go ahead and check out my<a id="pTest" href={PDF} target="_blank"> Resume!</a>  </p>
          </div>
          <div className="col-md-6 col-sm-12 col-12 content-spacing ">
            <Img className="picture content-spacing" fluid={data.profilePic.childImageSharp.fluid} alt="image name" />
          </div>
        </div>
        <div >
          <h3 >My Passions</h3>
          <p className="content-spacing" style={{ lineHeight: "2.0", paddingBottom: "20px" }}>One of my biggest passions is soccer, whether it’s watching, playing, or simply talking about the sport. Film is another interest of mine as I have watched countless movies and gained inspiration for my own projects and designs. Movie soundtracks have introduced me to some of my favorite music genres and artists. Below is a playlist featuring some of my most listened to songs that continue to motivate me to create projects I am passionate about.
      </p>
        </div>
        <div>
          <iframe title="My Spotify Music Playlist" style={{ borderRadius: "5px" }} src="https://open.spotify.com/embed/playlist/32eyl2E4LuXrEWSWy6yXiL" width="100%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </section>
      <section id="work" className="workSection">
        <div className="contained section-spacing" >
          <h2 className="content-spacing sectionTitle">My Work</h2>
          <div className="row" style={{ justifyContent: "center" }}>
            <LimeadeCard />
            <BeaconCard />
            <EarlybirdCard />
            <CharadeCard />
            <IemotionCard />
            <WordzCard />
          </div>
        </div>
      </section>
      < Contact />
    </Layout>
  )
}
IndexPage.propTypes = {
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
}
 `;

export default IndexPage


