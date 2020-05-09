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
import EarlybirdCard from "../components/cards/earlybirdCard"
import LimeadeCard from "../components/cards/limeadeCard"



const Limeade = ({ data }) => (

  <Layout>
    <SEO title="Beacon" />
    <Img className="bannerImg" fluid={data.beaconBanner.childImageSharp.fluid} alt="Beacon Image Banner" />
    <Description title="Beacon" date="Fall 2017" position="Mobile Developer" />
    <Intro paragraph={["During my last Spring quarter at the UW, I enrolled in a class which discussed and practiced being collaborative software engineers. We also had the opportunity to apply our new skills to build our project. Throughout the course, my team worked on the design and implementation of a location sharing mobile application, ",<a href = "https://github.com/null-uw/Beacon">Beacon</a>,"." ]}/>
    <Tools test={["Flutter", "Firebase", "Flutter Map", "Git", "Figma", "Markdown", "iOS", "Android"]} />
    <Overview 
    paragraph={["Using ",<a href = "https://flutter.dev/">Flutter</a>,", we essentially built a cross platform version of Apple’s ",<a href = "https://apps.apple.com/us/app/find-my-friends/id466122094">find my friends</a>," app. Allowing Android users and iPhone users to find each other. A user would simply send a friend request to a user and once the request was accepted, both users could view each other's location. We dedicated the first 7 weeks to ",<a href = "https://github.com/null-uw/Beacon">documenting</a>," everything about the application, such as requirements, priorities, problem statement, roles, architecture, and responsibilities. At the time it was extensive, however it made the 3-week development process run smoothly. Everyone was aware of their roles, responsibility and what had to be done. Having everything written down cleared a lot of ambiguity within the team."]}
    par2 = {["There was a lot of overlap in teammates duties (for example our ",<a href = "https://firebase.google.com/">Firebase</a>," architecture touched on authentication, geolocation storage, friend requests), which affected the work of multiple teammates. My job was to handle friend request screen, which involved displaying a list of friend request, the action of sending a request, and the action of accepting or rejecting a request. I had to properly update the user interface and the database. Our documentation was a guide on who needed to talk to who and what they needed to accomplish. Whenever someone had a question about the application, we’d refer to the documentation. Most of the communication centered around how teammates would integrate their work together and conducting code reviews. We delivered that application on our agreed deadline and received only 2 ",<a href = "https://github.com/null-uw/Beacon/issues">GitHub issues</a>,", which we closed. This app was one of the most successful and efficient school projects I have ever worked on and the closest to real work experience."]}
    img={data.beaconMockup.childImageSharp.fluid} alt="Mockup Image of Beacon App" />

    <div className="contained section-spacing">
      <h2 style={{ fontWeight: "300" }}>Take Aways</h2>
      <div className="row content-spacing">
        <Takeaway title = "Assign Ownership" paragraph = "To get the best commitment out of a teammate is not to assign responsibility, but ownership. Saying that a piece of a project belongs to specific team members adds a weight of importance and accountability. Our team assigned ownership and brought the best out of us, because we all felt that we were working on a greater purpose."/>
        <Takeaway title = "Write It Down" paragraph = "It’s a little crazy to think about it but writing something down does truly make it official. I've had projects where work is assigned vocally and sometimes it's not enough. Saying a deliverable is due a certain day or assign a task to a partner doesn't feel permanent. However, writing this information on paper, makes it become a contract that can’t be disobeyed."/>
      </div>
    </div>

    <section id="work" className="workSection">
      <div className="contained section-spacing" >
        <h4 className="content-spacing">Similar Work</h4>
        <div className="row" style={{ justifyContent: "center" }}>
          <LimeadeCard/>
          <EarlybirdCard/>
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
  beaconBanner : file(relativePath : {eq: "beaconBanner.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  beaconMockup : file(relativePath : {eq: "beaconMockup.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default Limeade
