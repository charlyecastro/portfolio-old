/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

import PDF from "../files/resume.pdf"

// const Navbar = () => {
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleClick = () => {
        this.setState({
            isOpen : !this.state.isOpen
        })
        console.log(this.state.isOpen)
      }

    render() {
        return (
            <>
                <div className="contained">
                    <div style={{
                        display: "flex",
                        width: "100%",
                        position: "relative",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                        marginBottom: "1rem"
                    }}>
                        <Link id="logo" className="logoStyle" to="/"> CC </Link>

                        <div style={{ alignSelf: "center", justifyContent: "flex-end" }}>
                            <a id="burger" onClick={this.handleClick}>
                                <span ></span>
                                <span ></span>
                            </a>
                        </div>
                        <div className = {this.state.isOpen ? "menu open" : "menu"} >
                            <Link className="linkStyle" to="/#about">about </Link>
                            <Link className="linkStyle" to="/#work">work </Link>
                            <Link className="linkStyle" to="/#contact">contact </Link>
                            <a className="linkStyle" href={PDF} target="_blank">resume </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar
