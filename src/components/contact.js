/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Contact = () => {
    return (
        <>
            <section  id ="contact" className = "contact " style = {{ height : "100%", justifyContent : "center", }}>
                <div style = {{height : "100%"}} >
                <div className = "contained section-spacing" style ={{maxWidth: "800px", borderRadius : "5px", justifyContent : "center", alignSelf : "center"}}>
                <div  className = "contactForm">
                <h2 className = "sectionTitle contactTitle">Let's Talk</h2>
                <form style = {{display : "flex", flexDirection : "column"}} action="//formspree.io/charlyecastro@gmail.com" method="POST">
                    <label htmlFor = "name">Full Name</label>
                    <input id ="name" type = "text" name = "name" placeholder = "Peter Parker"></input>
                    <label htmlFor = "email">Email</label>
                    <input id = "email" type = "text" name="_replyto" placeholder = "spidey@avengers.com"></input>
                    <label htmlFor= "message">Message</label>
                    <textarea id = "message" name="message" placeholder="Welcome to the Avengers, Charlye!" rows = {4}></textarea>
                    <input type="submit" value="Send"></input>
                </form>
                </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Contact