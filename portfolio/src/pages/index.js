import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Portrait from "../images/Photos/charlyeElbow.jpg"
import Blue from "../images/Photos/blue.jpeg"
import Beach from "../images/Photos/BeachShoreline.jpg"
import Hang from "../images/Photos/hangingFeet.jpg"
import Card from "../components/card"


const IndexPage = () => (

  <Layout>
    {/* <Navbar /> */}
    <SEO title = "Charlye"/>
    <div className="contained" style={{ display: "flex", alignItems: "center", height : "100vh", justifyContent : "center", width:"100%"
 }}>
      <section id = "#hi" style = {{}} >
        <div data-aos="fade-up"  >
          <h5 style={{ fontSize: "1.5rem", fontWeight : "400" }}>Hi I'm</h5>
          <h1 style={{ fontSize: "13rem", marginBottom : "0px"}}> Charlye </h1>
        </div>
        <div data-aos="fade-up" >
          <h3 style={{ fontSize: "2rem", paddingBottom : ".5rem", paddingTop : "1rem" }}>I build meaningful projects</h3>
          <p style = {{paddingBottom : "1rem", paddingTop : "1rem", }}>Seattle Based Software Engineer, Experienced in web and mobile development</p>
          <div style = {{paddingBottom : "2rem", paddingTop : "2rem"}} >
          <button style = {{}}> Let's Talk</button>
          </div>
        </div>
      </section>
    </div>
    <section  id="about" className="contained ">
      <h2  >Get to know</h2>
      <div className="row">
        <div data-aos="fade-up" id="test" className="col-md-6 col-sm-12 col content-spacing">
          <h3 className = "content-spacing">My Story</h3>
          <p style={{ lineHeight: "2.0" }}>I’m Charlye, I recently graduated from the  <a id="pTest" href="#"> university of washington</a>, majored Informatics focusing in Software Engineering. This sumer I am interning at Limeade as a mobile development intern. Im experienced in full stack and mobile development. If you would like more detail on my experience, check out my resume!</p>

        </div>
        <div data-aos="fade-up" className="col-md-6 col-sm-12 col-12 text-center">
          <img src={Portrait} />
        </div>
      </div>
      <div className='pt-5 content-spacing' >
        <h3 className = "content-spacing" >My Passions</h3>
        <p style={{ lineHeight: "2.0" }}>Im a fanatic about soccer, I love to watch it, play and talk about it. I also love movies, If you share a passion in any of these areas, feel free to get in touch! Oh and sense you’re here feel free to check out my playlist!
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
          <Card img={Portrait} />
          <Card img={Blue} />
          <Card img={Beach} />
          <Card img={Hang} />
          <Card img={Beach} />
          <Card img={Hang} />
        </div>
      </div>
    </section>
    < Contact />
  </Layout>
)

export default IndexPage
