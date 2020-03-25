import React from "react"

import PropTypes from "prop-types"
import {Link, graphql} from "gatsby"
import Img from "gatsby-image"
import PDF from "../files/resume.pdf"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Card from "../components/card"
import image from "../images/logo.png"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title = "Charlye" image={image}/>
    <div className="contained" style={{ display: "flex", alignItems: "center", height : "100vh", justifyContent : "center",
 }}>
      <section id = "#hi" style = {{}} >
        <div style = {{position : "relative"}}  >
          <h5 className = "hiStyle" >Hi, I'm</h5>
          <h1 className = "titleStyle"> Charlye </h1>
        </div>
        <div >
          <h3 style={{ fontSize: "2rem", paddingBottom : ".5rem", paddingTop : "1rem" }}>I build meaningful projects</h3>
          <p style = {{paddingBottom : "1rem", paddingTop : "1rem", }}>Seattle Based Software Engineer, Experienced in web and mobile development</p>
          <div style = {{paddingBottom : "2rem", paddingTop : "2rem"}} >
          <Link to="/#contact"> <button > Let's Talk</button> </Link>
          </div>
        </div>
      </section>
    </div>
    <section  id="about" className="contained ">
      <h2 className = "sectionTitle content-spacing" >Get to know</h2>
      <div className="row rowTest">
        <div className="col-md-6 col-sm-12 col content-spacing">
          <h3 className = "">My Story</h3>
          
          <p className = "content-spacing" style={{ lineHeight: "2.0" }}>I’m Charlye Castro, I recently graduated from the <a id="pTest" href="#"> University of Washington</a>, where I majored in Informatics, focused on Software Engineering. I am currently in Seattle, but I grew up in <a id="pTest" href="#"> Manson, Washington</a>, a small town located on the shores of Lake Chelan. As a way to keep in touch, I am freelancing for local companies in my hometown. However, this past summer I interned at Limeade as a mobile developer. Im most experienced in full stack and mobile development, but aside from tech, I have many other passions that I invest my time into. If you’re interested, go ahead and check out my<a id="pTest" href={PDF} target="_blank"> Resume!</a>  </p>
        </div>
        <div className="col-md-6 col-sm-12 col-12 content-spacing ">
          <Img className = "picture content-spacing"  fluid={data.profilePic.childImageSharp.fluid } alt = "image name" />
        </div>
      </div>
      <div >
        <h3 >My Passions</h3>
        <p className = "content-spacing" style={{ lineHeight: "2.0", paddingBottom : "20px" }}>One of my biggest passions is soccer, whether it’s watching, playing, or simply talking about the sport. Film is another interest of mine as I have watched countless movies and gained inspiration for my own projects and designs. Movie soundtracks have introduced me to some of my favorite music genres and artists. Below is a playlist featuring some of my most listened to songs that continue to motivate me to create projects I am passionate about. 
      </p>
      </div>
      <div>
        <iframe title="My Spotify Music Playlist" style={{ borderRadius: "5px" }} src="https://open.spotify.com/embed/playlist/32eyl2E4LuXrEWSWy6yXiL" width="100%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </section>
    <section id="work" className="workSection">
      <div className="contained section-spacing" >
        <h2 className = "content-spacing sectionTitle">Work</h2>
        <div className="row" style={{ justifyContent: "center" }}>

        <Card link="/limeade" name="Limeade" position="Intern" date="Summer 2019" img={data.limeadeCard.childImageSharp.fluid} colorOne="#29A63C" colorTwo="#53D26F" />

        <Card link="/beacon" name="Beacon" position="Mobiile Developer" date="Spring 2019" img={data.beaconCard.childImageSharp.fluid} colorOne="#4A90E2" colorTwo="#81C3F3" />

        <Card link="/earlybird" name="earlybird" position="Mobile Developer" date="Spring 2019" img={data.earlybirdCard.childImageSharp.fluid} colorOne="#FFE48B" colorTwo="#FFF3BF" />

        <Card link="/charade" name="Charade" position="Full Stack Developer" date="Fall 2018" img={data.videocharadeCard.childImageSharp.fluid} colorOne="#53A59C" colorTwo="#8BD1CB" />

        <Card link="/iemotion" name="iEmotion" position="Mobile Developer" date="Spring 2018" img={data.iEmotionCard.childImageSharp.fluid} colorOne="#583BA8" colorTwo="#916DD3" />

        <Card link="/wordz" name="Wordz" position="Web Developer" date="Fall 2017" img={data.wordzCard.childImageSharp.fluid} colorOne="#486FAA" colorTwo="#7EA8D5" />
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


