import React from "react"
import {Link } from "gatsby"

const NotFoundPage = () => (
  <div id="errorPage">
    <div className="contained" style = {{alignSelf : "center"}}>
      <h1 id = "errorTitle" style={{}}>404</h1>
      <h2 style = {{color : "#FFFFFF", fontWeight : 500}}>Looks like you're lost</h2>
      <h4 style = {{color : "#FFFFFF", fontWeight : 200}}>the page you are looking for can’t be found</h4>
      <Link to= "/">
      <button id = "errorBtn"  > go back</button> </Link>
    </div>
  </div>
)

export default NotFoundPage
