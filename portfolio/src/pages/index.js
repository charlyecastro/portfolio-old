import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import LayoutStyle from "../components/layout.css"
import Portrait from "../images/Photos/charlyeElbow.jpg"
import Card from "../components/card"


const IndexPage = () => (

  <Layout>
    <Navbar />
    <SEO title="Home" />
    <div style={{ display: "flex", alignItems: "center", }}>
      <section >
        <div style={{ marginTop: "50px" }}>
          <h5 style = {{fontSize : "1.5rem"}}>Hi I'm</h5>
          <h1 style={{ fontSize: "13rem" }}> Charlye </h1>
        </div>
        <h3 style = {{fontSize : "2rem"}}>I build meaningful projects</h3>
        <p>Seattle Based Software Engineer, Experienced in web and mobile development</p>
      </section>
    </div>
    <section>
      <h2 id = "about">Get to know</h2>
      <div className="row">
        <div className="col-md-6 col-sm-12 col">
          <h3>My Story</h3>
          <p style={{ lineHeight: "2.0" }}>I’m Charlye, I recently graduated from the University of Washington, majored Informatics focusing in Software Engineering. This sumer I am interning at Limeade as a mobile development intern. Im experienced in full stack and mobile development. If you would like more detail on my experience, check out my resume!</p>
        </div>
        <div className="col-md-6 col-sm-12 col-12 text-center">
          <img src={Portrait} />
        </div>
      </div>
      <div className = "pt-5">
        <h3>My Passions</h3>
        <p style={{ lineHeight: "2.0" }}>Im a fanatic about soccer, I love to watch it, play and talk about it. I also love movies, If you share a passion in any of these areas, feel free to get in touch! Oh and sense you’re here feel free to check out my playlist!
      </p>
      </div>
      <iframe style={{ borderRadius: ".5%" }} src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </section>
  </Layout>
)

export default IndexPage
